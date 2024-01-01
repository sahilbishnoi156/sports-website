gsap.to("#nav",{
    backgroundColor: "#000000f9",
    height:"6.5rem",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -6%",
        end:"top -3%",
        scrub: 1
    }
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        scrub:1,
        start:"top -30%",
        end:"top -70%"
    }
});
var cursor = document.querySelector("#cursor");
var cursor_b = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(coordinate){
    cursor.style.left = coordinate.x+"px";
    cursor.style.top = coordinate.y+"px"
    cursor_b.style.left = coordinate.x-160+"px";
    cursor_b.style.top = coordinate.y-160+"px"
});

var h4_all =  document.querySelectorAll("#nav h4");
h4_all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 3;
        cursor.style.border = "1px solid #95c11e";
        cursor.style.backgroundColor = "transparent";
        cursor.style.transition = "all .2s"
    });
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95c11e";
        cursor.style.backgroundColor = "#95c11e";
        cursor.style.transition = "all 0s"
    });
});

gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
});
gsap.from("#cards-container", {
    scale:0.8,
    opacity:0,
    stagger:.3,
    scrollTrigger: {
        trigger: "#cards-container",
        scroller: "body",
        start: "top 80%",
        end: "top 55%",
        scrub: 3
    }
});
gsap.from("#colon1", {
    y:-75,
    x:-75,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 2
    }
});
gsap.from("#colon2", {
    y:75,
    x:75,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        start: "top 100%",
        end: "top 100%",
        scrub: 2
    }
});