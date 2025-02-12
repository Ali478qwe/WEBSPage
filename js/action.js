document.getElementById("close").addEventListener("click", () => {
  document.getElementById("profile").style.visibility = "hidden";
});

let scrollPos = 0;
const itemwidth = 150;
const felxbar = document.querySelector('.flexbar');
const itemcount = document.querySelectorAll('.item').length;

function moveflexbar (){
  scrollPos += itemwidth;
  if(scrollPos >= itemwidth * itemcount){
    scrollPos = 0;
  }
  felxbar.style.transform=`translateX(-${scrollPos}px)`;

}
setInterval(moveflexbar,1000);

// npx @tailwindcss/cli -i ./page/css/fill.css -o ./page/css/_fill.css --watch



































let isDown = false;
let startx;
let scrollLeft;











// const scrollcontiner = document.querySelector('.continer > div').addEventListener("mousedown",(e)=>{
//   isDown = true;
//   scrollcontiner.style.cursor= "grabbing";
//   startx = e.pageX - scrollcontiner.offsetLeft;
//   scrollLeft = scrollcontiner.scrollLeft;
// });

// scrollcontiner.addEventListener("mouseleave",()=>{
//     isDown=false;
//     scrollcontiner.classList.remove("active");
// });

// scrollcontiner.addEventListener("mouseup",()=>{
//     isDown=false;
//     scrollcontiner.classList.remove("active");
// });

// scrollcontiner.addEventListener("mousemove",(e)=>{
//     if(!isDown)return;
//     e.preventDefult();
//     const x = e.pageX - scrollcontiner.offsetLeft;
//     const walk = (x - startx)* 2;
//     scrollcontiner.scrollLeft = scrollLeft -walk;
// });



