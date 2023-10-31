
window.addEventListener('scroll',() => {
    var navbar = document.querySelector('nav');
    navbar.classList.toggle("sticky",window.scrollY > 300);
});

const circle = document.querySelectorAll('.circle');
const num = document.querySelectorAll('.num');


num.forEach(e => {
    var per = e.getAttribute('data-percent');
    var count = Math.floor(per*38/100);
    var timer;
    (function(){
        var n = 0;
        timer = setInterval(()=>{
            if(n <= per)
            {
                e.innerHTML = n+'%';
                n++;
            }
            else{
                clearInterval(timer);
            }
        },count)
    })()
})

circle.forEach(e => {
    var dots = e.getAttribute('data-dots');
    var marked = e.getAttribute('data-percent');
    var percent = Math.floor(dots*marked/100); 
    var rotate = 360/dots;
    var points = "";
    for(let i=0;i<dots;i++)
    {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg;"></div>`;

    }
   
    e.innerHTML = points;

    const pointsmarked = e.querySelectorAll('.points');
    for(let i=0;i<percent;i++)
    {
        pointsmarked[i].classList.add('marked');
    }
})

let skilltype = document.querySelector('.skills-type').querySelectorAll('li');

skilltype.forEach(ele => {
    ele.addEventListener('click',() => {
        skilltype.forEach(rem => rem.classList.remove("active"));
        ele.classList.add("active");
    });
})

console.log(skilltype);

let techskills = document.querySelector('.techskills');
let profskills = document.querySelector('.profskills');

let techbox = document.getElementById('box1');
let profbox = document.getElementById('box2');

let skillbox = document.querySelectorAll('.box');


techskills.addEventListener('click',() => {
    box1.style.display='flex';
    box2.style.display='none';
});

profskills.addEventListener('click',() => {
    box1.style.display='none';
    box2.style.display='flex';
});

var type = new Typed(".multitext",{
    strings : ["web Designer" , "Web Developer","Front-Ender","Coder"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    startDelay : 1000,
    backDelay : 1500,
});



VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max:25
});


// ---------------------------------------------------------------
let bar = document.querySelector('.navbar-toggle');
let navbar_collapse = document.querySelector('.navbar-collapse');
let count = 0;


bar.addEventListener('click',() => {
    bar.style.background = 'grey';
    count++;
    if(count % 2 != 0)
    {
        bar.style.background = 'grey';
        navbar_collapse.style.background = 'gainsboro';
    }
    else{
        bar.style.background = 'none';
        navbar_collapse.style.background = 'none';
    }
    
});