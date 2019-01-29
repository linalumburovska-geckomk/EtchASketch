var create=document.getElementById("create");
var reset=document.getElementById("reset");
var container=document.getElementById("container");
var rainbow=document.getElementById("rainbow");
var size=16;
var cellColor="black";

create.addEventListener('click', createGrid);
reset.addEventListener('click',resetGrid);
rainbow.addEventListener('click',changeColor);

function createGrid(){

    size=window.prompt("Enter size for grid(default is 16)", "16");
    create.style.display="none";
    container.style.display="block";
    rainbow.style.display="inline-block"
    
    for(var i = 0 ; i < size*size; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        var h=700/size;
        var w=960/size;

        cell.style.height=h+'px';
        cell.style.width=w+'px';
        
               
        cell.addEventListener('mouseover',function(){
                cell.style.backgroundColor = cellColor;
        })
        container.appendChild(cell); 
    }

}

function resetGrid(){
    create.style.display="";
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.style.display="none";
    rainbow.style.display="none";
    cellColor="black";
}

function changeColor(){
    // var red=Math.floor((Math.random() * 256));
    // var green=Math.floor((Math.random() * 256)); 
    // var blue=Math.floor((Math.random() * 256));

    cellColor="yellow";
}