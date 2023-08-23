const applicantForm = document.getElementById('form')
const popup = document.getElementById('popup'); // Фон попап окна
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна

const sendData = async (data) => {
  return await fetch('https://fakestoreapi.com/carts', {
    method: 'POST',
    headers: {'Content-Type': 'multipart/form-data'},
    body: data,
  })
}

function serializeForm(formNode) {
  const {elements} = formNode

  return Array.from(elements)
    .map((element) => {
      const {name, value} = element
      return {name, value}
    })
}

async function handleFormSubmit(event) {
  event.preventDefault()
  const data = serializeForm(applicantForm)
  const response = await sendData(data)
  if(response.status === 200) {
    popup.classList.add('active');
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
  }
  console.log(response)
}
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popupBg) { // Если цель клика - фот, то:
    popup.classList.remove('active'); // И с окна
    popupBg.classList.remove('active'); // Убираем активный класс с фона
  }
});
applicantForm.addEventListener('submit', handleFormSubmit)
