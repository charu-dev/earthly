const topto=document.querySelector('.back-to-top');
topto.onclick=function(){
    
        window.scrollTo(0, 0);
    
}
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const sliderImages = document.querySelectorAll('.slide-in');
function getOffsetTop(element) {
return element ? (element.offsetTop + getOffsetTop(element.offsetParent)) : 0;
}
function checkSlide() {
  sliderImages.forEach(sliderImage => {
  
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

    const imageBottom = getOffsetTop(sliderImage) + sliderImage.height;


    const isHalfShown = slideInAt > getOffsetTop(sliderImage);
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

function faqsorted(){
    
    const faqlist=  document.querySelectorAll('.card');
    for(let i=0;i<8; i++){
        childDiv = faqlist[i].getElementsByTagName('div')[0]
        requiredDiv = faqlist[i].getElementsByTagName('div')[1]
        console.log(childDiv,requiredDiv)
            childDiv.addEventListener('click',function(){
            requiredDiv.classList.toggle('show')
           
            console.log(requiredDiv)})
       
    }
   
}
faqsorted()

window.addEventListener('scroll', debounce(checkSlide));