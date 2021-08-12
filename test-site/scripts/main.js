let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/eurowagon-2.jpeg') {
      myImage.setAttribute('src','images/img-0417.jpeg');
    } else {
      myImage.setAttribute('src','images/brian-1.jpeg');
    }
}
