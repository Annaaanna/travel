const form=document.querySelector("form")
const fio=document.querySelector("#fio")
const myplace=document.querySelector("#myplace")
const dos=document.querySelector("#dos")
const persons=document.querySelector("#persons")
const nigts=document.querySelector("#nigts")
form.addEventListener ("submit", function(event){
    event.preventDefault()
   //alert("dom_kirilla")
   document.querySelector("#p1").innerHTML="<h3>ФИО: "+fio.value+"</h3>"
   document.querySelector("#p2").innerHTML="<h3>Куда едем: "+myplace.value+"</h3>"
   document.querySelector("#p3").innerHTML="<h3>Когда едем: "+dos.value+"</h3>"
   document.querySelector("#p4").innerHTML="<h3>Количество человек: "+persons.value+"</h3>"
   document.querySelector("#p5").innerHTML="<h3>Количество ночей: "+nigts.value+"</h3>"
})
const travel=document.querySelector("header h1")
window.addEventListener("scroll",function(event){
    console.log (scrollY)
    if(scrollY>100){
        travel.style.marginLeft=scrollY*-1+100+"px"
    }
    else{
        travel.style.marginLeft="50px"
    }
})

const aaaL=document.querySelector("#left")
const aaaR=document.querySelector("#right")
window.addEventListener("scroll",function(event){
    if(scrollY>600){
   //     aaaL.style.transform="translateX(-100px)"
     //   aaaR.style.transform="translateX(100px)"
}
if(scrollY>1000){
   // aaaL.style.transform="translateX(0)"
  //  aaaR.style.transform="translateX(0)"
}})

const chImg=document.querySelector("#ch img")
window.addEventListener("scroll",function(event){
    console.log (scrollY)
    if(scrollY>1950){
        chImg.style.transform="rotateY(360deg) translateX(100px)"
    }
    if(scrollY>2500){
        chImg.style.transform="rotateY(0) translateX(0)"
    }
})
const usa=document.querySelectorAll("#usa img")
const usat=document.querySelector("#usa div")
window.addEventListener("scroll",function(event){
    console.log (scrollY)
    if(scrollY>2650){
        usa[0].style.opacity="0"
        usa[1].style.opacity="0"
        usat.style.color="white"
    }
    if(scrollY>2800){
        usa[0].style.opacity="1"
        usa[1].style.opacity="1"
        usat.style.color="black"
    }
}
)//opacity color
