---
layout: post.pug
headline: Say hello to Rubysierung
date: 2014-11-16 21:59:35 +0100
description: The personal website of frederik dudzik
keywords: dudzik, frederik dudzik, rubysierung, soft-typing, ruby soft-typing, ruby conversion methods, conversion methods
redirect_from: blog/2014/11/16/say-hello-to-rubysierung/index.html
---

After reading [Avdi Grimm's](http://devblog.avdi.org/) book "[Confident Ruby](http://www.confidentruby.com/)” and my work on [CallBaecker](https://github.com/doodzik/CallBaecker) and [defp](https://github.com/doodzik/defp) I had an Idea for an implementation of soft typing in Ruby.
My goal was to build a shorthand for ruby’s conversion methods syntactic similar to other languages.
By relying on ruby’s conversion methods I preserved the initial flexibility of ruby. Furthermore I’ve added extended Error messages to ease debuging code. And you can add custom types.

So I’m happy to publish my take on soft typing in ruby.

## what it looks like
```ruby
class ExampleClass
  extend Rubysierung
  include CallBaecker

  def buz(foo: String, bar: Strict::String)
    [foo, bar]
  end
end
```
## what it translates to
```ruby
class ExampleClass
  extend Rubysierung
  include CallBaecker

    def buz(foo: , bar: )
    foo = foo.to_s
    bar = bar.to_str
    [foo, bar]
  end
end
```
## what types are supported
```ruby
  [
  # Type ,     explicid, implicid
    [String,   :to_s,    :to_str],
    [Integer,  :to_i,    :to_int],
    [Array,    :to_a,    :to_ary],
    [Complex,  :to_c,    :to_c],
    [Float,    :to_f,    :to_f],
    [Hash,     :to_h,    :to_hash],
    [Rational, :to_r,    :to_r],
    [IO,       :to_io,   :to_io],
    [Proc,     :to_proc, :to_proc],
    [Symbol,   :to_sym,  :to_sym],
    [Thread,   :join,    :join]
  ]
```


In the future I want to add the possibility to use default values with a specified type.
If you have any additional types, ideas or enhancements, feel free to open a pull request, issue or leave a comment :)

Head over to the [repository](https://github.com/doodzik/rubysierung).

------

25-11-2014: [adit](http://adit.io/) -> change 'static typing' to 'soft typing'
