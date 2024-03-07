const navbar=document.querySelector(".navbar");
const headercontentSpan=document.querySelector(".header-content span");
const loading=document.querySelector(".loading");
const scrolltotop=document.querySelector(".scroll-to-top");
const about=document.querySelector(".about");
const navlink=document.querySelectorAll(".nav-link");
window.addEventListener('scroll', function()
{
    if(window.scrollY > headercontentSpan.offsetTop)
    {
        navbar.style.backgroundColor= "#fff";
    }
    else
    {
        navbar.style.backgroundColor="transparent";
    }

    if(window.scrollY > about.offsetTop)
    {
        scrolltotop.classList.remove("opacity-0", "invisible");
    }
    else
    {
        scrolltotop.classList.add("opacity-0", "invisible");
    }
})

window.addEventListener('load', function()
{
    this.setTimeout(function(){
        loading.classList.add("opacity-0", "invisible");
        document.body.style.overflow = "auto";
    },2000)
})

scrolltotop.addEventListener('click', function()
{
    window.scroll({
        top:0,
    })
})

for(let i=0; i<navlink.length; i++)
{
    navlink[i].addEventListener('click', function(){
        for(let j=0; j<navlink.length; j++)
        {
            navlink[j].classList.remove("active");
        }
        navlink[i].classList.add("active");
    })
}