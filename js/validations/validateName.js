import { regexFio } from '../regex.js'
import { nameError } from '../elements.js'

export const validateName = value => {
	if (value.trim().length === 0) {
		nameError.innerText = 'Поле обязательно для заполнения'
		return false
	}
	if (!regexFio.test(value.trim())) {
		nameError.innerText = 'Не допустимый формат'
		return false
	}

	nameError.innerText = ''
	return true
}
