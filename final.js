  var i = 0;
  var images = [];

  var time = 3000;

//images

images[0]="finalpics/ugapic1.jpg";
images[1]="finalpics/ugapic2.jpg";
images[2]="finalpics/ugapic3.jpg";
images[3]="finalpics/ugapic4.jpg";
function changeImg(){
  document.slideshow.src= images[i];

  if(i < images.length -1){
    i++;
  }
    else{
      i = 0
    }
    setTimeout("changeImg()", time);
}


function addLoadEvent(changeImg) {
	  var images = window.onload;
	  if (typeof window.onload != 'function') {
	    window.onload = changeImg;
	  } else {
	    window.onload = function() {
	      if (images) {
	        images();
	      }
	      changeImg();
	    }
	  }
	}
	addLoadEvent(changeImg);
	addLoadEvent(function() {
	  /* more code to run on page load */
	});
