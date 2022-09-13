//   counter section
document.addEventListener("DOMContentLoaded", ()=> {
    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,

        step = Math.abs(Math.floor(duration / range)),
        
        timer =setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);

            }
        },step);
    }
    counter("count1",0,1285,1000);
    counter("count2",0,2355,1000);
    counter("count3",0,900,2000);
    counter("count4",0,3773,1000);
});



// activee navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");

    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})