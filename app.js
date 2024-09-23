var curser_main = document.querySelector(".curser_main")
var curser = document.querySelector(".curser")
var body = document.querySelector("body")
var img = document.querySelector("img")



body.addEventListener("mousemove", function(dets){
    gsap.to(curser,{
        y:dets.y - 3.5,
        x:dets.x - 3.5
    })
})
// body.addEventListener("mousemove", function(dets){
//     gsap.to(sec_curser,{
//         y:dets.y - 7.5,
//         x:dets.x - 7.5
//     })
// })

img.addEventListener("mouseenter", function() {
    curser_main.classList.add("active");
});

img.addEventListener("mouseleave", function() {
    curser_main.classList.remove("active");
});