import { messageError } from '../elements.js'

export const validateMessage = value => {
	if (value.length < 2) {
		messageError.innerText = 'Сообщение слишком короткое'
		return false
	}
	if (value.length > 200) {
		messageError.innerText = 'Сообщение слишком большое'
		return false
	}
	messageError.innerText = ''
	return true
}
