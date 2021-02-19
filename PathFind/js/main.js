function NodeEvents(){
    var rows = document.getElementById('board').rows;
    var cells = document.querySelectorAll('td');
    for(let i = 0 ; i< cells.length ; i++){
        cells[i].addEventListener('mousedown',()=>{
            cells[i].style.backgroundColor = "#000";
        });
    }
    
    
}
function NodesCreate(){
    const board = document.getElementById("board");
    for(let i =0 ; i<20 ; i++){
        var tr = document.createElement('tr');
        tr.setAttribute('class','unvisited');
        tr.setAttribute('id',`${i+1}`);
        for(let j = 0 ; j<40;j++){
            var td = document.createElement('td');
            td.setAttribute('id',`${i+1}-${j+1}`);
            tr.appendChild(td);
        }
        board.appendChild(tr);
    }
}
NodesCreate();
NodeEvents();