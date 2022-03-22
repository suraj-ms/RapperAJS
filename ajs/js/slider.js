

// *************** Appearing slide With Chage Start ******************

var slides = document.querySelector('.AppearingslideWithChage-items-list').children;
var nextSlide = document.querySelector('.right-slide');
var prevSlide = document.querySelector('.left-slide');
var totalSLides = slides.length;
var index=0;

nextSlide.onclick=function(){
    
    next("next");
    
}

prevSlide.onclick=function(){
    
    next("prev");
    
}

function next(direction){
    
    if(direction=="next"){
        index++;
        if(index==totalSLides){
            index=0;
        }
        
    }
    else{
        if(index==0){
            index=totalSLides-1;
        }
        else{
            index--;
        }
    }
    
    for(i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
        
    }
    slides[index].classList.add("active");
    
}


// *************** Appearing slide With Chage end ******************



// ******************appearing Img Slide start **********************
var i=0;
var appearingImgSlideImages = [];
var appearingImgSlideTime = 3000;


// image list


appearingImgSlideImages[0]='BANNER2.webp';
appearingImgSlideImages[1]='BANNER3.webp';
appearingImgSlideImages[2]='BANNER4.webp';

function changeAppearingImg(){
    var appearingImage = document.querySelector(".appearingImage");
    appearingImage.src = 'imgs/songs/' + appearingImgSlideImages[i];
    if(i<appearingImgSlideImages.length - 1){
        i++;
    }else{
        i=0;
    }
    
    setTimeout("changeAppearingImg()", appearingImgSlideTime);
    
}

window.onload=changeAppearingImg;


// ******************appearing Img Slide end **********************