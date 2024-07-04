//replace name
var replaceName = () => {

  var custName = prompt("Halo! Siapakah nama anda?", "");
  
  if (custName != null) {
  document.getElementById("nama").innerHTML = custName;
  }
  
  }

  replaceName();


  //autoslide
  let index = 0;

let images = ["./assets/1.png","./assets/2.png","./assets/3.png"];

let slide = document.getElementById("slide");

const goToSlide = (val) => {
slide.src = images[val];
index = val;
}

const autoSlide = () => {
const nextIndex = (index + 1) % images.length;
goToSlide(nextIndex);
}

setInterval(autoSlide, 2000);

//validate form
function validateForm() {
  document.getElementById("submit").addEventListener('click', function(e){
     e.preventDefault();

  let nama = document.getElementById("nama_input").value;
  let bod = document.getElementById("tgl").value;
  let gender = document.getElementById("jk").value;
  let pesan = document.getElementById("pesan").value;

  if (nama != "" || bod != "" || gender != "" || pesan !="") {
  document.getElementById('hasil').innerHTML = "<b> Name </b> :" + nama  + "<br>  <b> Date of Birth </b>:"
   + bod + "<br> <b> Gender</b> :" + gender + "<br> <b>Your Message </b>:" + pesan ;
  }
});
}