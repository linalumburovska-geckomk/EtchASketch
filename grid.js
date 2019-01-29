var create=document.getElementById("create");
var reset=document.getElementById("reset");
var container=document.getElementById("container");
var size=16;

create.addEventListener('click', createGrid);

function createGrid(){
    

    for(i = 0 ; i < size*size; i++)
    {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        var hW=700/size;
       
        cell.style.height=hW+'px';
        cell.style.width=hW+'px';
        
               
        cell.addEventListener('mouseover',function(){
                cell.style.backgroundColor = "black"; 
        })
        container.appendChild(cell); 
    }

}