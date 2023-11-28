import { regexEmail } from '../regex.js'
import { emailError } from '../elements.js'

export const validateEmail = value => {
	if (!!value && !regexEmail.test(value)) {
		emailError.innerText = 'Не верный формат Email'
		return false
	}
	emailError.innerText = ''
	return true
}
