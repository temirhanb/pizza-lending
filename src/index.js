const applicantForm = document.getElementById('form')
const popup = document.getElementById('popup');
const popupBg = document.querySelector('.popup__bg');
const imageFullScreen = document.getElementById('container__fullScreen_image');
const containerFullScreen = document.getElementById('container__fullScreen');

const sendData = async (data) => {
  return await fetch('https://fakestoreapi.com/carts', {
    method: 'POST',
    headers: {'Content-Type': 'multipart/form-data'},
    body: data,
  })
}

const serializeForm = (formNode) => {
  const {elements} = formNode

  return Array.from(elements)
    .map((element) => {
      const {name, value} = element
      return {[name]: value}
    })
}

async function handleFormSubmit(event) {
  event.preventDefault()
  const data = serializeForm(applicantForm)
  const response = await sendData(data)

  if (response.status === 200) {
    popup.classList.add('active');
    popupBg.classList.add('active');
  }
}

document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    popup.classList.remove('active');
    popupBg.classList.remove('active');
  }
  if (e.target === containerFullScreen) {
    containerFullScreen.classList.remove('active');
    imageFullScreen.src = ''
  }
});

applicantForm.addEventListener('submit', handleFormSubmit)
$(".image__pizza").on("click", function(event) {
  imageFullScreen.src = event.currentTarget.currentSrc;
  containerFullScreen.classList.add('active')
  console.log(event)
});
