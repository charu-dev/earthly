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

//Up Down arrows for quantity field
var qtyMin,
qtyMax,
qtyField,
qtyVal;
$('.icon-minus-squared').on('click', function() {
qtyField = $(this).next('input[type=number]');
qtyMin = parseInt($(qtyField).attr('min'));
qtyVal = parseInt($(qtyField).val());
if (qtyVal > qtyMin) {
    qtyVal--;
    $(qtyField).val(qtyVal);
    $(this).siblings('.icon-plus-squared').removeClass('off');
    if (qtyVal === qtyMin) {
        $(this).addClass('off');
    }
}

});
$('.icon-plus-squared').on('click', function() {
qtyField = $(this).prev('input[type=number]');
qtyMax = parseInt($(qtyField).attr('max'));
qtyVal = parseInt($(qtyField).val());
if (qtyVal < qtyMax) {
    qtyVal++;
    $(qtyField).val(qtyVal);
    $(this).siblings('.icon-minus-squared').removeClass('off');
    if (qtyVal === qtyMax) {
        $(this).addClass('off');
    }
}

});

//Validate numeric range of number fields (for quantity input
   $('input[type=number]').on('blur', function () {
       var $this = $(this);
       if ($this.attr('min').length > 0 && $this.attr('max').length > 0) {
           vQty = parseInt($this.val()),
           vMin = $this.attr('min'),
           vMax = $this.attr('max');
           if (!$.isNumeric(vQty)) {
               $this.val(vMin);
             $('.icon-plus-squared').removeClass('off')
             $('.icon-minus-squared').addClass('off')
           }
           else if (vQty < vMin) {
               $this.val(vMin);
             $('.icon-plus-squared').removeClass('off')
             $('.icon-minus-squared').addClass('off')
           }
           else if (vQty > vMax) {
               $this.val(vMax);
             $('.icon-minus-squared').removeClass('off')
             $('.icon-plus-squared').addClass('off')
           }
           else { return; }
       }
   });
