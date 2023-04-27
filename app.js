let colors = ["blue", "yellow" , "green", 'red', "orange" ];
let button = document.getElementById('btn');
button.addEventListener('click', function(){
     var randomColor = colors[Math.floor(Math.random()*colors.length)]
    let body = document.querySelector('body');
    body.style.background = randomColor;
     document.getElementById('clrName').innerHTML = randomColor
    
})

