var photos = ["image/pic1.jpg","image/pic2.jpg","image/pic3.jpg","image/pic4.jpg"];


var img = document.querySelector(".center img");

var i = 0;

function next(){
if(i<photos.length-1){

    i++;




img.src=photos[i];

}else{


    i=0;
    
    img.src=photos[i];
     


}



}



function prev(){
    if(i>0){
    
        i--;
    
    
    
    
    img.src=photos[i];
    
    }else{
    
    
        i=photos.length-1;
        
        img.src=photos[i];
         
    
    
    }
    
    
    
    }

