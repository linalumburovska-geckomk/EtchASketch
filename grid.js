var create=document.getElementById("create");
var reset=document.getElementById("reset");
var container=document.getElementById("container");
var size=16;

create.addEventListener('click', createGrid);
reset.addEventListener('click',resetGrid);

function createGrid(){

    size=window.prompt("Enter size for grid(default is 16)", "16");
    create.style.display="none";
    container.style.display="block";
    
    for(var i = 0 ; i < size*size; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        var h=700/size;
        var w=960/size;

        cell.style.height=h+'px';
        cell.style.width=w+'px';
        
               
        cell.addEventListener('mouseover',function(){
                cell.style.backgroundColor = "black"; 
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
}