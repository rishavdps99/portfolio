window.addEventListener('scroll',function(){
    var head=document.querySelector('header');
   head.classList.toggle('sticky',window.scrollY > 0);
});

function toggleMenu(){
   var menuToggle=document.querySelector(".toggle");
   var menu=document.querySelector(".menu");
   menuToggle.classList.toggle('active');
   menu.classList.toggle('active');
}