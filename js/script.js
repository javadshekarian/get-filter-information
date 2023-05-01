var $=document
var blurFix=$.getElementById("blurFix")
var brightnessFix=$.getElementById("brightnessFix")
var contrastFix=$.getElementById("contrastFix")
var grayscaleFix=$.getElementById("grayscaleFix")
var hueRotateFix=$.getElementById("hue-rotateFix")
var invertFix=$.getElementById("invertFix")
var opacityFix=$.getElementById("opacityFix")
var sepiaFix=$.getElementById("sepiaFix")
var saturateFix=$.getElementById("saturateFix")
var picture=$.getElementById("picture")
var ml=$.getElementById("ml")
ml=ml.offsetLeft

var bl=0
var br=100
var co=100
var gr=0
var hu=0
var inv=0
var op=100
var se=0
var sa=100

blurFix.addEventListener("click",(e)=>{
    var wh=e.x-ml
    var pt=wh/blurFix.scrollWidth
    pt=pt*100
    var moveBar=blurFix.querySelector(".moveBar")
    moveBar.style.width=pt+"%"
    pt=pt/100
    pt=pt*4
    bl=pt
    var text=blurFix.parentNode.querySelector(".text")
    text.innerHTML=`blur ${Math.round(bl*10)/10}px`
    picture.style.filter=`blur(${bl}px) brightness(${br}%) contrast(${co}%) grayscale(${gr}%) 
    hue-rotate(${hu}deg) invert(${inv}%) opacity(${op}%) sepia(${se}%) saturate(${sa}%)`
})

brightnessFix.addEventListener("click",(e)=>{
    var wh=e.x-ml
    var pt=wh/brightnessFix.scrollWidth
    pt=pt*100
    var moveBar=brightnessFix.querySelector(".moveBar")
    moveBar.style.width=pt+"%"
    pt=pt*2
    br=pt
    var text=brightnessFix.parentNode.querySelector(".text")
    text.innerHTML=`brightness ${Math.round(br)}%`
    picture.style.filter=`blur(${bl}px) brightness(${br}%) contrast(${co}%) grayscale(${gr}%) 
    hue-rotate(${hu}deg) invert(${inv}%) opacity(${op}%) sepia(${se}%) saturate(${sa}%)`
})

contrastFix.addEventListener("click",(e)=>{
    var wh=e.x-ml
    var pt=wh/contrastFix.scrollWidth
    pt=pt*100
    var moveBar=contrastFix.querySelector(".moveBar")
    moveBar.style.width=pt+"%"
    pt=pt*3
    co=pt
    var text=contrastFix.parentNode.querySelector(".text")
    text.innerHTML=`contrast ${Math.round(co)}%`
    picture.style.filter=`blur(${bl}px) brightness(${br}%) contrast(${co}%) grayscale(${gr}%) 
    hue-rotate(${hu}deg) invert(${inv}%) opacity(${op}%) sepia(${se}%) saturate(${sa}%)`
})

grayscaleFix.addEventListener("click",(e)=>{
    var wh=e.x-ml
    var pt=wh/grayscaleFix.scrollWidth
    pt=pt*100
    var moveBar=grayscaleFix.querySelector(".moveBar")
    moveBar.style.width=pt+"%"
    gr=pt
    var text=grayscaleFix.parentNode.querySelector(".text")
    text.innerHTML=`grayscale ${Math.round(gr)}%`
    picture.style.filter=`blur(${bl}px) brightness(${br}%) contrast(${co}%) grayscale(${gr}%) 
    hue-rotate(${hu}deg) invert(${inv}%) opacity(${op}%) sepia(${se}%) saturate(${sa}%)`
})

hueRotateFix.addEventListener("click",(e)=>{
    var wh=e.x-ml
    var pt=wh/hueRotateFix.scrollWidth
    pt=pt*100
    var moveBar=hueRotateFix.querySelector(".moveBar")
    moveBar.style.width=pt+"%"
    pt=pt/100
    pt=pt*90
    hu=pt
    var text=hueRotateFix.parentNode.querySelector(".text")
    text.innerHTML=`hue-rotate ${Math.round(hu)}deg`
    picture.style.filter=`blur(${bl}px) brightness(${br}%) contrast(${co}%) grayscale(${gr}%) 
    hue-rotate(${hu}deg) invert(${inv}%) opacity(${op}%) sepia(${se}%) saturate(${sa}%)`
})

invertFix.addEventListener("click",(e)=>{
    var wh=e.x-ml
    var pt=wh/invertFix.scrollWidth
    pt=pt*100
    var moveBar=invertFix.querySelector(".moveBar")
    moveBar.style.width=pt+"%"
    inv=pt
    var text=invertFix.parentNode.querySelector(".text")
    text.innerHTML=`invert ${Math.round(inv)}%`
    picture.style.filter=`blur(${bl}px) brightness(${br}%) contrast(${co}%) grayscale(${gr}%) 
    hue-rotate(${hu}deg) invert(${inv}%) opacity(${op}%) sepia(${se}%) saturate(${sa}%)`
})

opacityFix.addEventListener("click",(e)=>{
    var wh=e.x-ml
    var pt=wh/opacityFix.scrollWidth
    pt=pt*100
    var moveBar=opacityFix.querySelector(".moveBar")
    moveBar.style.width=pt+"%"
    op=pt
    var text=opacityFix.parentNode.querySelector(".text")
    text.innerHTML=`opacity ${Math.round(op)}%`
    picture.style.filter=`blur(${bl}px) brightness(${br}%) contrast(${co}%) grayscale(${gr}%) 
    hue-rotate(${hu}deg) invert(${inv}%) opacity(${op}%) sepia(${se}%) saturate(${sa}%)`
})

sepiaFix.addEventListener("click",(e)=>{
    var wh=e.x-ml
    var pt=wh/sepiaFix.scrollWidth
    pt=pt*100
    var moveBar=sepiaFix.querySelector(".moveBar")
    moveBar.style.width=pt+"%"
    se=pt
    var text=sepiaFix.parentNode.querySelector(".text")
    text.innerHTML=`sepia ${Math.round(se)}%`
    picture.style.filter=`blur(${bl}px) brightness(${br}%) contrast(${co}%) grayscale(${gr}%) 
    hue-rotate(${hu}deg) invert(${inv}%) opacity(${op}%) sepia(${se}%) saturate(${sa}%)`
})

saturateFix.addEventListener("click",(e)=>{
    var wh=e.x-ml
    var pt=wh/saturateFix.scrollWidth
    pt=pt*100
    var moveBar=saturateFix.querySelector(".moveBar")
    moveBar.style.width=pt+"%"
    pt=pt*3
    sa=pt
    var text=saturateFix.parentNode.querySelector(".text")
    text.innerHTML=`saturate ${Math.round(sa)}%`
    picture.style.filter=`blur(${bl}px) brightness(${br}%) contrast(${co}%) grayscale(${gr}%) 
    hue-rotate(${hu}deg) invert(${inv}%) opacity(${op}%) sepia(${se}%) saturate(${sa}%)`
})