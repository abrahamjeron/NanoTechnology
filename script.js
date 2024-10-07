var num=document.getElementById("num1");
var counter = 0;
setInterval(()=>{
    if(counter==90){
        clearInterval
    } else{
        counter+=1
        num.innerText=`${counter}%`
    }
},25)

var num2=document.getElementById("num2");
var counter2 = 0;
setInterval(()=>{
    if(counter2==90){
        clearInterval
    } else{
        counter2+=1
        num2.innerText=`${counter2}%`
    }
},25)

var num3=document.getElementById("num3");
var counter3 = 0;
setInterval(()=>{
    if(counter3==80){
        clearInterval
    } else{
        counter3+=1
        num3.innerText=`${counter3}%`
    }
},25)

var num4=document.getElementById("num4");
var counter4 = 0;
setInterval(()=>{
    if(counter4==60){
        clearInterval
    } else{
        counter4+=1
        num4.innerText=`${counter4}%`
    }
},55)

var num5=document.getElementById("num5");
var counter5 = 0;
setInterval(()=>{
    if(counter5==75){
        clearInterval
    } else{
        counter5+=1
        num5.innerText=`${counter5}%`
    }
},55)


var num6=document.getElementById("num6");
var counter6 = 0;
setInterval(()=>{
    if(counter6==60){
        clearInterval
    } else{
        counter6+=1
        num6.innerText=`${counter6}%`
    }
},55)

var opt1 = document.querySelector(".close");
const cosmochronicle = document.querySelector(".cosmochronicle");

cosmochronicle.addEventListener('click', function () {
    location.href='https://www.tandfonline.com/doi/abs/10.1080/03772063.2006.11416476'
});

var opt2 = document.querySelector(".close2");
const shurl = document.querySelector(".shurl");

shurl.addEventListener('click', function () {
    location.href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5707590/'
});

var opt3 = document.querySelector(".close3");
const ugr = document.querySelector(".ugr");

ugr.addEventListener('click', function () {
    location.href='https://nanografi.com/blog/graphene-nanoplatelets-electrical-properties-applications-nanografi/#:~:text=Graphene%20Nanoplatelets%20Electrical%20Conductivity&text=The%20high%20electrical%20conductivity%20of,enabling%20facile%20movement%20of%20electrons.'
});


const f1 = document.getElementById("nth")
f1.addEventListener('click',function(){
    location.href='https://www.sciencedaily.com/news/matter_energy/nanotechnology/'
})
const f2=document.getElementById('cc')
f2.addEventListener('click',function(){
    location.href='https://phys.org/nanotech-news/'
})
const f3 = document.getElementById('unr')
f3.addEventListener('click',function(){
    location.href='https://nano-magazine.com/'
})