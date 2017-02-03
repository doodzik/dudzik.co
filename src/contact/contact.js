/* eslint no-unused-vars: 0 */
function validateForm() {

	var form = document.forms['contact']

	var email   = form['email']
	var content = form['content']

	var returnValue = true

	function validateEmail(email) {
		var re = /\S+@\S+\.\S+/
		return re.test(email)
	}

	function validate(element, condition) {
		if (typeof element === 'string') {
			element = document.getElementById(element)
		}
		if (condition) {
			element.style.display = 'block'
			returnValue = false
		}
		else {
			element.style.display = 'none'
		}
	}

	validate('emailError', (email.value == null || 
                          email.value.trim() === '')  || 
                          !validateEmail(email.value))
	validate('contentError', (content.value == null || content.value.trim() === ''))

	return returnValue
}

