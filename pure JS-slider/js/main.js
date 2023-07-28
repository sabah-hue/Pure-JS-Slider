var displayImg =document.querySelectorAll('.items .item img');
var boxslide = document.getElementById("box-layer");
var closer = document.getElementById('close');
var layerContent = document.querySelector('.layer-content');
var items = document.querySelector('.items');

var prev = document.getElementById('prev');
var next = document.getElementById('next');
var imgArray = [];
var currentIndex = 0;


for(var i=0 ; i<displayImg.length ; i++){
    imgArray.push(displayImg[i]);
    
    displayImg[i].addEventListener('click',function(e){
        sliderShow(e);
    })
}

function sliderShow(e){
        currentIndex = imgArray.indexOf(e.target);
        layerContent.style.backgroundImage = `url(${e.target.src})`
        boxslide.style.display = 'flex';
}

closer.addEventListener('click',function(){
    closeSlider()
})

function closeSlider(){
    boxslide.style.display = 'none';
}

next.addEventListener('click', function(){
    nextSlide();
})

function nextSlide(){
    currentIndex++;
    if(currentIndex == imgArray.length){
        currentIndex = 0 ;
    }
    var currentSrc = imgArray[currentIndex];
    layerContent.style.backgroundImage = `url(${currentSrc.src})`;
}

prev.addEventListener('click', function(){
    prevSlider();
})

function prevSlider(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = imgArray.length -1 ;
    }
    var currentSrc = imgArray[currentIndex];
    layerContent.style.backgroundImage = `url(${currentSrc.src})`;
}

// slide using keyboard
document.addEventListener('keydown' , function(e){
        if(e.key == 'ArrowRight'){
            prevSlider();  
        }
        else if(e.key == 'ArrowLeft'){
            nextSlide();
        }
        else if(e.key == 'Escape'){
            closeSlider()
        }
})