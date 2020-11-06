$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("activ");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer","Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 1500,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

//main-loading animation
let loading = document.querySelector('.main-loading');
  
  window.addEventListener('load', function () {
  loading.parentElement.removeChild(loading);
  });
  
// massage sending
        $("#masssending").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbwvJUtQrSX77M7GqxwonNYzRieXgG8UHveccuTVbg/exec",
               data:$("#masssending").serialize(),
                method:"post",
                success:function (response){
                   
                   swal({
                   title: "Thank You 😎 !",
                   text: "Massage Successfully Sent!",
                   icon: "success",
                   button: "OK",
                   })
                    .then((value) => {
                     window.location.reload()
                    });
                    
                },
                error:function (err){
                    swal({
                    title: "Sorry To Say 🥺 !",
                    text: "Massage Not Sent!",
                    icon: "error",
                    button: "OK",
                    })
                    .then((value) => {
                    window.location.reload()
                    });
                }
            })
        })
     
const form = document.getElementById('masssending')
const name = document.getElementById('name')
const email = document.getElementById('email')
const massage = document.getElementById('massage')
const button = document.getElementById('button')



form.addEventListener('submit', (e) => {

   if( name.value !== '' || email.value !== '' || massage.value !== '' ){
   
   button.onclick = sending();
   }
   
})

      function sending()
     {
      $('.sending').toggleClass("send");
      }
     
