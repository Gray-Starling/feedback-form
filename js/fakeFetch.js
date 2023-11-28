import { statusMsg } from './elements.js'

export const fakeFetch = form => {
	const formData = new FormData(form)

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: formData,
	})
		.then(response => {
			if (response.status === 201) {
				statusMsg.textContent = 'Данные успешно отправлены'
			} else {
				statusMsg.classList.add('feedback__statusMessage_error')
				statusMsg.textContent = 'Что-то пошло не так, попробуйте еще раз'
			}
		})
		.catch(error => {
			statusMsg.classList.add('feedback__statusMessage_error')
			statusMsg.textContent = 'Произошла ошибка при отправке запроса.'
			console.error(error)
		})
}
