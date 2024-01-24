
var header= document.getElementById("header");
            var ms= document.getElementById("FERRARI");
            var m3= document.getElementById("Fortuner");
            var mx= document.getElementById("Thar");
            var my= document.getElementById("PORSCHE");
            var model= document.getElementById("model");
            var mph= document.getElementById("mph");
            var speed= document.getElementById("speed");
            var range= document.getElementById("range");


            ms.onclick=function(){
                header.style.backgroundImage="url(https://wallpapers.com/images/featured/ferrari-cglqdk3qgwuhk35k.jpg)";
                model.innerHTML="FERRARI";
                mph.innerHTML="11s";
                speed.innerHTML="165 km/h";
                range.innerHTML="650 km";
            }

            
            m3.onclick=function(){
                header.style.backgroundImage="url(https://wallpapers.com/images/featured/toyota-fortuner-yvujuqnic9e56nsg.jpg)";
                model.innerHTML="FORTUNER";
                mph.innerHTML="11.2s";
                speed.innerHTML="190 km/h";
                range.innerHTML="600 km";
            }
            mx.onclick=function(){
                header.style.backgroundImage="url(https://images.pexels.com/photos/14550540/pexels-photo-14550540.jpeg?cs=srgb&dl=pexels-augustine-paulson-14550540.jpg&fm=jpg)";
                model.innerHTML="THAR"
                mph.innerHTML="2.5s";
                speed.innerHTML="155 km/h";
                range.innerHTML="550 km";
            }
            my.onclick=function(){
                header.style.backgroundImage="url(https://i.pinimg.com/originals/a8/0e/08/a80e081f85d0a3bb10a7d7466a4f55f2.jpg)";
                model.innerHTML="PORSCHE";
                mph.innerHTML="30.3s";
                speed.innerHTML="117 km/h";
                range.innerHTML="520 km";
            }
