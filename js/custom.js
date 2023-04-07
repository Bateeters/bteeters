/* Side Nav JS */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}

function hideSidebar() {
    document.getElementById('openSideMenu').checked = false;
}
  
var sideIconToggle = document.getElementById('sidebarContainer');
  
document.addEventListener('click', function(event) {
    if (!sidebarContainer.contains(event.target))
        hideSidebar();
});