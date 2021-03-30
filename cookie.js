let cookies = 0;
$("#click").click(function() {
    cookies += 1;
});

var timer;	
timer = window.setInterval (general, 100);

function general (){
    document.getElementById("cookie").innerHTML = cookies;
};