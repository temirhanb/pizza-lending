const applicantForm = document.getElementById('form')

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
  if(response.status === 200) window.open('Заказ принят!')
  console.log(response)
}

applicantForm.addEventListener('submit', handleFormSubmit)
