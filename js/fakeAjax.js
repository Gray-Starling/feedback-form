import { statusMsg } from './elements.js'

export const fakeAjax = form => {
	const formData = new FormData(form)
	const xhr = new XMLHttpRequest()
	xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')
	xhr.responseType = 'json'
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	xhr.onload = () => {
		if (xhr.status === 201) {
			statusMsg.textContent = 'Данные успешно отправлены'
		} else {
			statusMsg.classList.add('feedback__statusMessage_error')
			statusMsg.textContent = 'Что-то пошло не так, попробуйте еще раз'
		}
	}

	xhr.onerror = function () {
		statusMsg.classList.add('feedback__statusMessage_error')
		statusMsg.textContent = 'Произошла ошибка при отправке запроса'
	}

	xhr.send(formData)

	console.table({
		name: formData.get('name'),
		phone: formData.get('phone'),
		email: formData.get('email'),
		message: formData.get('message'),
	})
}
