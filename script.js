let page1 =document.querySelector('.page1')
let page2 =document.querySelector('.page2')
let grid2 =document.querySelector('.page2_grid')
let grid1=document.querySelector('.grid_container')



page2.addEventListener('click',()=>{
  grid1.style.display='none'
  grid2.style.display='grid'
})
page1.addEventListener('click',()=>{
    grid1.style.display='grid'
    grid2.style.display='none'
  })

  let grid_img1=document.querySelector('.grid_img1')
  let blackbag=document.querySelector('.black-bag')
  
blackbag.addEventListener('click',()=>{
  grid_img1.style.backgroundImage = "url('https://akira-elementor.axonvip.com/25-home_default/morbi-vitae-mi.jpg')";

    document.querySelector(".grid_img1").addEventListener("mouseenter", mouseEnter);
    document.querySelector(".grid_img1").addEventListener("mouseleave", mouseLeave);
  
    function mouseEnter() {
      document.querySelector(".grid_img1").style.backgroundImage = "url('https://akira-elementor.axonvip.com/24-home_default/morbi-vitae-mi.jpg')"
    }
    
    function mouseLeave() {
      document.querySelector(".grid_img1").style.backgroundImage = "url('https://akira-elementor.axonvip.com/25-home_default/morbi-vitae-mi.jpg')"
    } 
})


let greenbag=document.querySelector('.green-bag')
greenbag.addEventListener('click',()=>{
  grid_img1.style.backgroundImage = "url('https://akira-elementor.axonvip.com/31-home_default/morbi-vitae-mi.jpg')";


    
    document.querySelector(".grid_img1").addEventListener("mouseenter", mouseEnter);
    document.querySelector(".grid_img1").addEventListener("mouseleave", mouseLeave);
  
    function mouseEnter() {
      document.querySelector(".grid_img1").style.backgroundImage = "url('https://akira-elementor.axonvip.com/30-home_default/morbi-vitae-mi.jpg')"
    }
    
    function mouseLeave() {
      document.querySelector(".grid_img1").style.backgroundImage = "url('https://akira-elementor.axonvip.com/31-home_default/morbi-vitae-mi.jpg')"
    } 


})

let yellowbag=document.querySelector('.yellow-bag')
yellowbag.addEventListener('click',()=>{
  grid_img1.style.backgroundImage = "url('https://akira-elementor.axonvip.com/28-home_default/morbi-vitae-mi.jpg')";


  document.querySelector(".grid_img1").addEventListener("mouseenter", mouseEnter);
  document.querySelector(".grid_img1").addEventListener("mouseleave", mouseLeave);

  function mouseEnter() {
    document.querySelector(".grid_img1").style.backgroundImage = "url('https://akira-elementor.axonvip.com/29-home_default/morbi-vitae-mi.jpg')"
  }
  
  function mouseLeave() {
    document.querySelector(".grid_img1").style.backgroundImage = "url('https://akira-elementor.axonvip.com/28-home_default/morbi-vitae-mi.jpg')"
  } 
})


let orangebag=document.querySelector('.orange-bag')
orangebag.addEventListener('click',()=>{
  grid_img1.style.backgroundImage = "url('https://akira-elementor.axonvip.com/26-home_default/morbi-vitae-mi.jpg')";

  document.querySelector(".grid_img1").addEventListener("mouseenter", mouseEnter);
  document.querySelector(".grid_img1").addEventListener("mouseleave", mouseLeave);

  function mouseEnter() {
    document.querySelector(".grid_img1").style.backgroundImage = "url('https://akira-elementor.axonvip.com/27-home_default/morbi-vitae-mi.jpg')"
  }
  
  function mouseLeave() {
    document.querySelector(".grid_img1").style.backgroundImage = "url('https://akira-elementor.axonvip.com/26-home_default/morbi-vitae-mi.jpg')"
  } 

  
})





// if (grid_img1.style.backgroundImage = "url('https://akira-elementor.axonvip.com/25-home_default/morbi-vitae-mi.jpg')") {
//   grid_img1.addEventListener('mousemove',()=>{
//     grid_img1.style.backgroundImage = "url('https://akira-elementor.axonvip.com/24-home_default/morbi-vitae-mi.jpg')"
//   })
// }else {
//   grid_img1.addEventListener('mouseleave',()=>{
//     grid_img1.style.backgroundImage = "url('https://akira-elementor.axonvip.com/25-home_default/morbi-vitae-mi.jpg')"
//   })
// }


// }
  // var e = document.getElementById("ddlViewBy");
  // function onChange() {
  //   var value = e.value;
  //   var text = e.options[e.selectedIndex].text;
  //   console.log(value, text);
  // }
  // e.onchange = onChange;
  // onChange();
// let grid6=document.querySelector('.grid6')
// let grid7=document.querySelector('.grid7')
// let grid8=document.querySelector('.grid8')
// let grid9=document.querySelector('.grid9')
// let grid10=document.querySelector('.grid10')
// let grid11=document.querySelector('.grid11')
// let grid12=document.querySelector('.grid12')
// let grid13=document.querySelector('.grid13')
// let grid14=document.querySelector('.grid14')
// let grid15=document.querySelector('.grid15')
//   // function getValue() {
  //       var select = document.getElementById("select_");
  //       var value = select.value;
  //       console.log(value);

  //       // if (value=='one') {
  //       //   grid6.style.display='none'
  //       //   grid7.style.display='none'
  //       //   grid8.style.display='none'
  //       //   grid9.style.display='none'
  //       //   grid10.style.display='none'
  //       //   grid11.style.display='none'
  //       //   grid12.style.display='none'
  //       //   grid13.style.display='none'
  //       //   grid14.style.display='none'
  //       //   grid15.style.display='none'
  //       // } else if (value=='two') {
  //       //   grid6.style.display='flex'
  //       //   grid7.style.display='flex'
  //       //   grid8.style.display='flex'
  //       //   grid9.style.display='flex'
  //       //   grid10.style.display='none'
  //       //   grid11.style.display='none'
  //       //   grid12.style.display='none'
  //       //   grid13.style.display='none'
  //       //   grid14.style.display='none'
  //       //   grid15.style.display='none'
  //       // } else {
          
  //       // }
  // }
  // getValue();

//   function getOption() {
//     selectElement = document.querySelector('#select1');
//     output = selectElement.value;
//     document.querySelector('.output').textContent = output;
// }