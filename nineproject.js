var icon=document.getElementById("icon");
icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="moon2.jpeg";
    }
    else{
        icon.src="sun.png";
    }
}