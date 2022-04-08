
document.addEventListener('scroll', function (e) {
    const headerHeight = document.getElementById("home").offsetHeight;
    // console.log(headerHeight, window.scrollY)
    document.getElementById("my_sidenav").style.width = "0";
    const backgroundcolor = window.scrollY < 200 ?
        "transparent" : "#141857";
    document.getElementById('navbar').style.backgroundColor = backgroundcolor;

});
var date = new Date(Date.now()).getFullYear()
document.getElementById('date').innerHTML = "&copy;Dverybest. All Rights Reserved. "+date
function openNav() {
    document.getElementById("my_sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("my_sidenav").style.width = "0";
}
