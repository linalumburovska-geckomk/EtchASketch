var create=document.getElementById("create");
var reset=document.getElementById("reset");
var container=document.getElementById("container");
var rainbow=document.getElementById("rainbow");
var size=16;
var cellColor="black";
var random=false;

create.addEventListener('click', createGrid);
reset.addEventListener('click',resetGrid);


function createGrid(){

    size=window.prompt("Enter size for grid(default is 16)", "16");
    create.style.display="none";
    container.style.display="block";
    rainbow.style.display="inline-block"
    

    for(var i = 0 ; i < size*size; i++){
        console.log(random);    

        const cell = document.createElement('div');
        cell.classList.add('cell');
        var h=700/size;
        var w=960/size;

        cell.style.height=h+'px';
        cell.style.width=w+'px';
        
               
        cell.addEventListener('mouseover',function(){
            if(random==false) cell.style.backgroundColor = cellColor;
            else{
                var red=Math.floor(Math.random() * 256);
                var green=Math.floor(Math.random() * 256);
                var blue=Math.floor(Math.random() * 256);
                cell.style.background='rgb('+red+','+green+','+blue+')';
                }
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
    random=false;
}

function changeColor(r){
    random=r;
}