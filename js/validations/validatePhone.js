import { phoneError } from '../elements.js'

export const validatePhone = value => {
	let digitsOnly = value.replace(/\D/g, '')

	if (value.length === 0) {
		phoneError.innerText = 'Поле обязательно для заполнения'
		return false
	}

	if (/[a-zA-Zа-яА-Я]/.test(value)) {
		phoneError.innerText = 'Номер телефона содержит недопустимые символы'
		return false
	}

	if (digitsOnly.length !== 11) {
		phoneError.innerText = 'Не верный формат'
		return false
	}

	if (digitsOnly.charAt(0) === '8') {
		digitsOnly = `7${digitsOnly.slice(1)}`
	}

	const countryCode = digitsOnly.slice(0, 1)
	const areaCode = digitsOnly.slice(1, 4)
	const firstPart = digitsOnly.slice(4, 7)
	const secondPart = digitsOnly.slice(7, 9)
	const thirdPart = digitsOnly.slice(9, 11)

	phoneError.innerText = ''
	return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}-${thirdPart}`
}
