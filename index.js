var list_genre = document.querySelector("#list_genre");
var genre = document.querySelectorAll("#genre");
var getSideBar = document.querySelector(".sideBar");

var setToggle = false;

list_genre.addEventListener('click', function(){
    if(setToggle === false){
        getSideBar.style.width = "100%";
        setToggle = true;
    }else{
        getSideBar.style.width = "0";
        setToggle = false;
    }
    
})