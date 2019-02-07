(function(){
    "use strict";

    var create=document.getElementById("create");
    var reset=document.getElementById("reset");
    var container=document.getElementById("container");
    var rainbow=document.getElementById("rainbow");
    var black=document.getElementById("black");
    var size=16;
    var cellColor="black";
    var random=false;

    create.addEventListener('click', createGrid);
    reset.addEventListener('click',resetGrid);

    //Function that creates a grid with a given size and colors each cell on event mouseover with a chosen color
    function createGrid() {

        size=window.prompt("Enter size for grid(default is 16)", "16");
        create.style.display="none";
        container.style.display="block";
        rainbow.style.display="inline-block";
        black.style.display="inline-block";
        
        for(var i = 0 ; i < size*size; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            var height=700/size;
            var width=960/size;

            cell.style.height=height+'px';
            cell.style.width=width+'px';
                        
            cell.addEventListener('mouseover',function(){
                if(random===false) {
                    cell.style.backgroundColor = cellColor;
                } else {
                    var red=Math.floor(Math.random() * 256);
                    var green=Math.floor(Math.random() * 256);
                    var blue=Math.floor(Math.random() * 256);
                    cell.style.background='rgb('+red+','+green+','+blue+')';
                }
            })
            container.appendChild(cell); 
        }

    }

    //Function that clears each cell and reset the grid to the beginning
    function resetGrid() {
        create.style.display="";
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        container.style.display="none";
        rainbow.style.display="none";
        cellColor="black";
        random=false;
    }

    //Function that accepts sign for changing black color to rainbow
    function changeColor(color) {
        random = color;
    }

    //Function that accepts sign for changing rainbow color to black
    function backToBlack(color) {
        random = color;
    }

})();

