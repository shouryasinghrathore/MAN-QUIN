// Javascript
jQuery(".images").hover(
  function () {
    jQuery(this).addClass("hover");
  },
  function () {
    jQuery(this).removeClass("hover");
  }
);

// Toggle
var expand =0;
$("#toggleBtn").click(()=>{
  if(expand===0){
    jQuery("#icon").addClass("bi-dash");
    jQuery("#icon").removeClass("bi-list")
    expand=1;
  }
  else{
    jQuery("#icon").removeClass("bi-dash");
    jQuery("#icon").addClass("bi-list")
    expand=0;
  }
  }
)

// Counter
function isIntoView(elem)
{
var documentViewTop = $(window).scrollTop();
var documentViewBottom = documentViewTop + $(window).height();

var elementTop = $(elem).offset().top;
var elementBottom = elementTop + $(elem).height();
return ((elementBottom <= documentViewBottom) && (elementTop >= documentViewTop));
}

$(window).scroll(function(){
  if (isIntoView($('.counter'))){
      count();
   }
});
const count =()=>{ $('.count').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-target');  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 1000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
    }
  }); 
});
}
