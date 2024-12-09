// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });



function init(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles thing3s completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

init();

var crsr = document.querySelector("#cursor")
var main = document.querySelector("#main")

main.addEventListener("mousemove",function(dets){
  // console.log(dets);

  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + 20 + "px";
})


// var img = document.querySelector("#page1Img");

// img.addEventListener("mouseenter",function(){
//   crsr.style.width = "80px";
//   // crsr.style.height = "20px";
//   crsr.style.borderRadius = "20px";
// })
// img.addEventListener("mouseleave",function(){
//   crsr.style.width = "20px";
// })

let mm = gsap.matchMedia();

let tl = gsap.timeline({
  scrollTrigger : {
    trigger : "#page1 h1",
    scroller : "#main",
    start : "top 27%",
    end : "top 0",
    scrub : 3
  }
})

mm.add("(min-width:800px)",()=>{

  tl.to("#page1 h1",{
    x : "-100",
    // duration : 0.7,
  },"anime")
  
  tl.to("#page1 h2",{
    x : "100",
    // duration : 0.7
  },"anime")
  
  
  tl.to("#page1 img",{
    width : "95%",
    // duration : 0.7
  },"anime")

})

// tl.to("#page1 h1",{
//   x : "-100",
//   // duration : 0.7,
// },"anime")

// tl.to("#page1 h2",{
//   x : "100",
//   // duration : 0.7
// },"anime")


// tl.to("#page1 img",{
//   width : "95%",
//   // duration : 0.7
// },"anime")



let tl2 = gsap.timeline({
  scrollTrigger : {
    trigger : "#page1 h1",
    scroller : "#main",
    start : "top -110%",
    end : "top -130",
    scrub : 3
  }
})
mm.add("(min-width:800px)",()=>{

  tl2.to("#main",{
    backgroundColor : "#fff"
  })

})

// tl2.to("#main",{
//   backgroundColor : "#fff"
// })



let tl3 = gsap.timeline({
  scrollTrigger : {
    trigger : "#page1 h1",
    scroller : "#main",
    start : "top -410%",
    end : "top -300",
    scrub : 3
  }
})


mm.add("(min-width:800px)",()=>{
  
  tl3.to("#main",{
    backgroundColor : "#0F0D0D  "
  })
})

// tl3.to("#main",{
//   backgroundColor : "#0F0D0D  "
// })


let boxes = document.querySelectorAll(".box");

boxes.forEach((elem) =>{

  elem.addEventListener("mouseenter",()=>{
    
    let attr = elem.getAttribute("data-img");


    crsr.style.height = "500px";
    crsr.style.width = "500px";
    crsr.style.mixBlendMode = "normal";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${attr})`;
  })


  elem.addEventListener("mouseleave",()=>{
    
    crsr.style.height = "20px";
    crsr.style.width = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.mixBlendMode = "difference";
    crsr.style.backgroundImage = "none";
  })
})