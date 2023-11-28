import { validateName } from './js/validations/validateName.js'
import { validatePhone } from './js/validations/validatePhone.js'
import { validateEmail } from './js/validations/validateEmail.js'
import { validateMessage } from './js/validations/validateMessage.js'
import { fakeAjax } from './js/fakeAjax.js'
import { fakeFetch } from './js/fakeFetch.js'
import { form, name, phone, email, message, statusMsg } from './js/elements.js'

!!name &&
	name.addEventListener('blur', ev => {
		validateName(ev.target.value)
	})

!!phone &&
	phone.addEventListener('blur', ev => {
		if (!!validatePhone(ev.target.value)) {
			ev.target.value = validatePhone(ev.target.value)
		}
	})

!!email &&
	email.addEventListener('blur', ev => {
		validateEmail(ev.target.value)
	})

!!message &&
	message.addEventListener('blur', ev => {
		validateMessage(ev.target.value)
	})

!!form &&
	form.addEventListener('submit', ev => {
		ev.preventDefault()
		statusMsg.textContent = ''
		statusMsg.classList.remove('feedback__statusMessage_error')
		let isName = validateName(name.value)
		let isPhone = validatePhone(phone.value)

		if (!isName || !isPhone) {
			return
		}

		// fakeAjax(form)
		fakeFetch(form)

		name.value = ''
		phone.value = ''
		email.value = ''
		message.value = ''
	})
