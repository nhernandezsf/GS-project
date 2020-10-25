const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
let rcolor = document.querySelectorAll('span');
    for(let i=0; i <= colors.length; i++){
        rcolor[i].style.color = colors[i];
    }
   
