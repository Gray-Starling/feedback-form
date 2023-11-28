import { regexpEmail } from '../regexp.js'
import { emailError } from '../elements.js'

export const validateEmail = value => {
	if (!!value && !regexpEmail.test(value)) {
		emailError.innerText = 'Не верный формат Email'
		return false
	}
	emailError.innerText = ''
	return true
}
