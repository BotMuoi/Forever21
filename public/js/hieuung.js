function choiceColor(opt,num){   
    // console.log(num);
    var ppElement = opt.parentElement.parentElement.parentElement;
    var img = ppElement.children[0].children[0].children[0];
    img.src = "/images/picture"+ num +".jpg";
    var color_option = opt.parentElement;
    var choice = color_option.getElementsByTagName("input");
    console.log(choice.length);
    for(var i = 0;i<choice.length;i++){
        console.log(i);
        if(choice[i].checked ``== true){ 
            // console.log(i);
            var label = color_option.getElementsByTagName("label");
            label[i].style.border = "1px solid black";
        }else{
            console.log(i);
            var label = color_option.getElementsByTagName("label");
            label[i].style.border = "none";
        } 
    }
}
// var slideindex=0;
//  function showslides(){
//      var i;
//      var slides= document.getElementsByClassName("slideshow");
//      var dots= document.getElementsByClassName("dot");
//      for(i=0;i<slides.length;i++){
//          slides[i].style.display="none";

//      }
//      for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideindex].style.display = "block";  
//     dots[slideindex].className += " active";
//     slideindex++;
//      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
//      if (slideindex > slides.length - 1) {
//         slideindex = 0
//       }    
     
//       //tự động chuyển đổi slide sau 3s
//       setTimeout(showslides, 5000);
//  }

//  //mặc định hiển thị slide đầu tiên 
//  showslides(slideindex = 0);    
//  function currentSlide(n) {
//     showslides(slideindex = n);
// }