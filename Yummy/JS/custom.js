


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  loop: true,
  slidesPerView: 3,
  slidesToShow: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
},
});

//----------- header toggle-------------//
$(".header-toggle").click(function(){
        $('.navbar').slideToggle("slow");
}) 


// -----------Go to top-------------//
$(window).scroll(function(){
        if($(this).scrollTop() > 1){
            $('.top-btn').show();
        }else{
            $('.top-btn').hide();
        }
    })
    function getontop(){
        document.documentElement.scrollTop = 0;
    }


//-----------Page Loader-------------//

    $(".loader").delay(4000).fadeOut("fast");
    
// -------------Testomonials Slider-----------//


      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });

$(document).ready(function(){
    $(".center").slick({
            dots: true,
            infinite: true,
            centerMode: true,
            freeMode: true,
            spaceBetween: 0,
            slidesToShow: 5,
            slidesToScroll: 1,
          });  
});



//-----------Events swiper-------------//

var swiperOptions = {
loop: true,
freeMode: true,
spaceBetween: 0,
grabCursor: false,
slidesPerView: 3,
slidesToScroll: 3,
autoplay: {
    delay: 4000,
    disableOnInteraction: true,
},
freeMode: false,
speed: 300,
freeModeMomentum: true,
pagination: {
        el: ".swiper-pagination",
        clickable: true,
},
};

var swiper = new Swiper(".swiper-container", swiperOptions);



window.onload = ()=>{
    // $(selector).countMe(delay,speed)
    $("#num1").countMe(40,15);
    $("#num2").countMe(20, 10);
    $("#num3").countMe(0, 0);
    $("#num4").countMe(10,100);
 }




//  var _gaq = _gaq || [];
//   _gaq.push(['_setAccount', 'UA-36251023-1']);
//   _gaq.push(['_setDomainName', 'jqueryscript.net']);
//   _gaq.push(['_trackPageview']);

//   (function() {
//     var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//     ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//     var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
//   })();





const root = document.querySelector('body')

// Real cursor element
const cursor = document.createElement('div')
cursor.classList.add('cursor','none')
root.appendChild(cursor)

// Following extra cursor element
const follower = document.createElement('div')
follower.classList.add('cursor', 'cursor__follower')
root.appendChild(follower)


root.addEventListener('mousemove', (e) => {
  setPosition(follower, e)
  setPosition(cursor, e)
})

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}










