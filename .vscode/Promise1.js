function getData(){
    fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    display_image(data.message);
})
  .catch("Failed");
}
function display_image(imgUrl)
{
    document.getElementById('dogImage').src=imgUrl;
}


