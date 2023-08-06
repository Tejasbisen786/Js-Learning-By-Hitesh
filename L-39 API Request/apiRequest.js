// Value -  State	 - Description
//  0	 -   UNSENT	 - Client has been created. open() not called yet.
//  1	 -   OPENED	 - open() has been called.
//  2	 -   HEADERS_-  RECEIVED	send() has been called, and headers and status are available.
//  3	 -   LOADING -	   Downloading; responseText holds partial data.
//  4	 -   DONE	 - The operation is complete.


const username = document.querySelector('#username')
const img= document.querySelector('#img')


const requestUrl = "https://api.github.com/users/Tejasbisen786";
let xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);

xhr.onreadystatechange = function () {
//   console.log(xhr.readyState);
  
  if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText)
      username.innerHTML= `<h2 class="user_name">
    ${data.login}
      </h2>` 

    //   for cheaking 
    //   data.avatar_url='https://filmfare.wwmindia.com/photogallery/2023/may/salmankhan11684830563.jpg'
      img.src=`${data.avatar_url}`



    console.log(data.login);
    console.log(data.avatar_url);

  }
};
xhr.send();

