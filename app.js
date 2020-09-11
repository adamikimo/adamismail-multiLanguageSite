//vars
//title
var title = document.querySelector('.title');
//home
var Home = document.querySelector('.Home');
//about
var About = document.querySelector('.About');
//food menu
var FoodMenu = document.querySelector('.Food-Menu');
//title-para
var titlepara = document.querySelector('.title-para');
//para-content
var paracontent = document.querySelector('.para-content');
//sign-up-btn
var signupbtn = document.querySelector('.sign-up-btn');
//sign-in-btn
var signinbtn = document.querySelector('.sign-in-btn');
//btn-ar
var Ar = document.querySelector('#Ar');
//btn-en
var En = document.querySelector('#En');

//coding
Ar.addEventListener('click' , ()=>{
chlang("Ar");
});
En.addEventListener('click' , ()=>{
chlang("En");
});
function chlang(getlang){
   if(getlang === "Ar"){
      title.innerHTML = "<h1>طعام سريع</h1>";
      Home.innerHTML = "الصفحة الرئيسية";
      About.innerHTML = "عنا";
      FoodMenu.innerHTML = "قائمة الطعام"
      titlepara.innerHTML = "<h1>طعام سريع</h1>";
      paracontent.innerHTML = "<h3>طعام معد و مقدم في وقت قصير</h3>";
      signupbtn.innerHTML = "إنشاء حساب";
      signinbtn.innerHTML = "تسجيل دخول";
   }else if(getlang === "En"){
      title.innerHTML = "<h1>Fast food</h1>";
      Home.innerHTML = "Home";
      About.innerHTML = "About";
      FoodMenu.innerHTML = "Food Menu";
      titlepara.innerHTML = "<h1>Fast food</h1>";
      paracontent.innerHTML = "<h3>Food prepared and <br>served in a <br>small amount of time.</h3>";
      signupbtn.innerHTML = "SIGN UP";
      signinbtn.innerHTML = "SIGN IN";
   }
}