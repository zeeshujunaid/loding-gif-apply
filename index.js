function saveprofile() {


   const name = document.getElementById("name").value;
   const city = document.getElementById("city").value;
   const age = document.getElementById("age").value;
   const email = document.getElementById("email").value;
   const number = document.getElementById("number").value;
   const image = document.getElementById("image").value;


   localStorage.setItem('profileName', name);
   localStorage.setItem('city', city);
   localStorage.setItem('age', age);
   localStorage.setItem('email', email);
   localStorage.setItem('number', number);
   localStorage.setItem('image', image);

   const loading = document.getElementById("loading");
   loading.style.display = "flex";
   setTimeout(() => {
      window.location.href = 'profile.html'; // Redirect after 10 seconds
  }, 2000);


   

};


function profile() {
   const name = localStorage.getItem('profileName');
   const city = localStorage.getItem('city');
   const age = localStorage.getItem('age');
   const email = localStorage.getItem('email');
   const number = localStorage.getItem('number');
   const image = localStorage.getItem('image');

   const profile = document.getElementById("container");
   profile.innerHTML += `<div><h4>NAME:${name}</h4></div>`
   profile.innerHTML += `<div><h4>CITY:${city}</h4></div>`
   profile.innerHTML += `<div><h4>AGE:${age}</h4></div>`
   profile.innerHTML += `<div><h4>phone number:${number}</h4></div>`
   profile.innerHTML += `<div><h4>email:${email}</h4></div>`
   profile.innerHTML += `<div><img src="${image}"><img></div>`
}





















// function profile() {
//    const more = document.getElementById("container");
//    const name = document.getElementById("name");
//    more.innerHTML +=
//    `<div><img src="data:image/jpeg;base64,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"></div>
//    <div><h4>NAME:${[name.value]}</h4></div>
//    <div><h4>AGE:20</h4></div>
//    <div><h4>CITY:KARACHI</h4></div>
//    <div><h4>MORE OPTION</h4></div>`
// }
// function  call() {
//     window.open("home.html" , "home" , "height='20vh'width'50vw'")
// }

// function check(){
//     const email = document.getElementsByTagName("input")[0]
//     console.log("email.value" ,email.value);
//     if (email.value !== "") {
//         alert("you login sucessfully")
//     }else{
//         alert("please enter value")
//     }
// }