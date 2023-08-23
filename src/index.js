const applicantForm = document.getElementById('form')

function handleFormSubmit(event) {
  // Просим форму не отправлять данные самостоятельно
  event.preventDefault()
  console.log('Отправка!')
}

applicantForm.addEventListener('submit', handleFormSubmit)
