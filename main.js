// reference all the item we need to change
const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

// add functionality of the search icon
searchIcon.addEventListener('click', function(){
    // show search box
    if(searchBox.style.top == '72px'){
        searchBox.style.top = '24px';
        searchBox.style.pointerEvents = 'none';
    }else{
        searchBox.style.top = '72px';
        searchBox.style.pointerEvents = 'auto';
    }
});

// add functionality for the mobile view (hamburger menu icon)
menuIcon.addEventListener('click', function(){
    // if hamburger menu is visible
    //toggles the menu links on and off
    if(slideoutMenu.style.opacity == '1'){
        slideoutMenu.style.opacity = '0';
        slideoutMenu.style.pointerEvents = 'none';
    } else{
        slideoutMenu.style.opacity = '1';
        slideoutMenu.style.pointerEvents = 'auto';
    }
})



