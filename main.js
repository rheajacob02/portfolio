let mainStaySpots1=document.querySelector('.main-stay-spots:nth-of-type(1)');
let mainStaySpotsPara1=document.querySelector('.main-stay-spot-p-1');
let mainStaySpots2=document.querySelector('.main-stay-spots:nth-of-type(2)');
let mainStaySpotsPara2=document.querySelector('.main-stay-spot-p-2');
let mainStaySpots3=document.querySelector('.main-stay-spots:nth-of-type(3)');
let mainStaySpotsPara3=document.querySelector('.main-stay-spot-p-3');

mainStaySpots1.addEventListener('mouseover',function(){
    mainStaySpotsPara1.style.visibility= 'visible';
})

mainStaySpots1.addEventListener('mouseout', function(){
    mainStaySpotsPara1.style.visibility= 'hidden';
})
mainStaySpots2.addEventListener('mouseover',function(){
    mainStaySpotsPara2.style.visibility= 'visible';
})

mainStaySpots2.addEventListener('mouseout', function(){
    mainStaySpotsPara2.style.visibility= 'hidden';
})
mainStaySpots3.addEventListener('mouseover',function(){
    mainStaySpotsPara3.style.visibility= 'visible';
})

mainStaySpots3.addEventListener('mouseout', function(){
    mainStaySpotsPara3.style.visibility= 'hidden';
})