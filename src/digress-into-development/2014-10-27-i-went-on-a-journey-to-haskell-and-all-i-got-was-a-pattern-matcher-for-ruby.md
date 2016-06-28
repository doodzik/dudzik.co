---
layout: post.pug
headline: I went on a journey to Haskell and all I got was a pattern matcher for ruby
date: 2014-10-27 21:46:55 +0100
comments: true
sharing: true
description: The personal website of frederik dudzik
keywords: dudzik, frederik dudzik, ruby pattern matching, defp, ruby metaprogramming
redirect_from: blog/2014/10/27/i-went-on-a-journey-to-haskell-and-all-i-got-was-a-pattern-matcher-for-ruby/index.html
---

## tl;dr


Defp is a pattern matcher implementation written for & in ruby.
It is build on top of CallBaecker, which adds callbacks to methods.
A before hook assigns the arguments of the called method to an instance variable.
Defp tests the provided pattern against this instance variable.
If the pattern matches, defp will throw a specific signal to CallBaecker.
This signal causes CallBaecker to terminate the method and return the provided value from the throw.


## What we’ll learn from this
This article exposes the inner workings of Defp and its dependency CallBaecker.
You can expect a lot of metaprogramming.




## Why
I've spend a rather long time with Haskell over the past couple of weeks.
After I returned to Ruby I've noticed the absence of a few techniques.
One of them is pattern matching. In ruby it is possible to match against a pattern,
but for complex patterns it is a mess. So I wanted something resembling Haskell.


## Where
### Where I was
```ruby
  def example1(bar1, bar2)
    return 'foo1' if bar1 == 'hallo'
    if bar1 == 'world' && bar2 == 'hallo')
      return 'foo2'
    end
    ‘foo’
  end
```


### Where I wanted to be


```ruby
  def  example(bar1  , bar2)
  defp example('hallo' , _     ) = 'foo1'
  defp example('world', 'hallo')
    'foo2'
  end
    'foo3'
  end
```


### Where I ended up
```ruby
  def  example(bar1 ,  bar2)
  defp        ('hello',  _     ) == 'foo1'
  defp        ('world', 'hello') == -> do
    'foo2'
  end
    'foo3'
  end
```


## How
First I altered the code a bit:
* Indent the code normally.
* The underscore is a method that returns false. I will remove this syntactic sugar.
* ‘==’ is an instance method on the return value of defp. I will change it to call.


```ruby
  def  example(bar1 ,  bar2)
    defp('hallo', false).call('foo1')
    'foo2'
  end
```


By now the code has become much clearer.
How does defp access the arguments of the ‘example’ method?
CallBaecker modifies the ‘example’ method to store its arguments in an instance variable.
CallBaecker relies on method_added(name). This method is invoked for each method which is added to the receiver.
When method_added is called it will define a new method.
This method saves its arguments into the instance variable __last_args.
Afterward comes a catch and inside its block the original method is invoked.
Now throw can be used in defp to terminate the ’example’ method without a return statement. This is due to the fact tha catch doesn't care about its static scope.


```ruby
  def method_added(name)
      # ...
      without = :"#{name}_without_before_each_method"
      with = :"#{name}_with_before_each_method"
      # ...
      define_method with do |*args, &block|
        @__last_args = *args
        catch :CallBaeckerDone do
          send without, *args, &block
        end
      end
      # ...
   end
```


Now we need to make sure that when we call our method we execute the one with the callback.
The ‘example’ method with an callback is now defined as ‘example_with_before_each_method’.
To be able to invoke ‘example_with_before_each_method’ when ‘example’ is called. I leverage from the alias_method for this.
First I create an alias for the original method to the 'without' callback name.
And a second Alias for the 'with' method name with the initial method name.
Then I make sure that method_added won't be triggert for the callback methods with an guard.


```ruby
    def method_added(name)
      return if @__last_methods_added && @__last_methods_added.include?(name)
      # ...
      @__last_methods_added = [name, with, without]
      # ...
      alias_method without, name
      alias_method name, with
      @__last_methods_added = nil
    end
```


This works only for instance methods, but how does it for class methods?
Its similar. Three things need to be replaced:
* method_added with singleton_method_added
* define_method  with define_singleton_method
* alias_method(name, with) with singleton_class.send(:alias_method, :sym0, :sym1)


```ruby
    def singleton_method_added(name)
      # ...
      define_singleton_method with do |*args, &block|
      # ...
      end
      singleton_class.send(:alias_method, without, name.to_sym)
      singleton_class.send(:alias_method, name.to_sym, with)
      # ...
    end
```


Let’s take a look on how defp is implemented:


```ruby
    def defp(*args)
      matches_pattern?(*args) ? Between.new : NullBetween.new
    end
```


This is straight forward. If the pattern matches it instantiate a new Between object otherwise a NullBetween object.
NullBetween and Between implementation looks as follows:


```ruby
  class NullBetween
    def ==(_param) # call(_param)
      nil
    end
  end


  class Between
    def ==(param) # call(param)
      value = param.is_a?(Proc) ? param.call : param
      throw :CallBaeckerDone, value
    end
  end
```


If '==' is send to NullBetween nothing will happen. On the other hand `Between.new == arg` throws CallBaeckerDone with the provided argument.
This will terminate the method and return the provided value.


How does the matching work?

First the pattern arguments are zipped with the last method argumenst, which will result in this data structure:


```ruby
  [
    [pattern_args[i], last_args[i] ]
  ]
```

Then the patterns are selected that aren’t false.
Then the type of the argument is tested.
If the argument is a hash we reject every value that is false.
Then pattern_args[i], last_args[i] are tested against each other.
If all pattern matches it returns true.


```ruby
    def matches_pattern?(*args)
      # arg[1] == called_by_method_args
      # arg[0] == pattern_args
      args.zip(@__last_args)
      .select { |arg| arg[0] }
      .all? do |arg|
        # TODO cleanup
        if arg[0].is_a? Hash
          pattern_args = arg[0].reject {|k,v| !v}
          pattern_args.keys.all? { |key| arg[1][key] == arg[0][key] }
        else
          arg[0] == arg[1]
        end
      end
    end
```


Defp includes and extends itself to have a class and an instance method of defp and _ available.


```ruby
  def self.extended(base)
    base.send :include, DefpMethods
    base.extend DefpMethods
  end
```


The Defp module needs to be extended before the CallBaecker module is included.
So that the defp methods won’t be modified by it.


## Conclusion


Ruby is a flexible language. So flexible that we can add new behaviour with ease and it is short. I am happy with the result and I hope at least someone learned something new about ruby :)


check out the source for [Defp](https://github.com/doodzik/defp) & [CallBaecker](https://github.com/doodzik/CallBaecker)
