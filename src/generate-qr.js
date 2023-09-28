const containerQR = document.getElementById('containerQR')
const formQR = document.getElementById('formQR')
formQR.inputLink.value = ""

const QR = new QRCode(containerQR, {
  text: 'https://github.com/daldev14',
  width: 170,
  height: 170,
  colorDark: "#ffffff",
  colorLight: "#ffffff00",
  correctLevel: QRCode.CorrectLevel.H
})

formQR.addEventListener('submit', (evt) => {
  evt.preventDefault()
  QR.makeCode(formQR.inputLink.value)
  formQR.inputLink.value = ""
})
