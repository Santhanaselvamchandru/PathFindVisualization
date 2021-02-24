class UI{
    static board = document.getElementById("board");
    // Table Columns and rows create 
    static NodesCreate(rows,column){
        
        for(let i =0 ; i<rows ; i++){
            var tr = document.createElement('tr');
            tr.setAttribute('class','unvisited');
            tr.setAttribute('id',`${i+1}`);
            for(let j = 0 ; j<column;j++){
                var td = document.createElement('td');
                td.setAttribute('id',`${i+1}-${j+1}`);
                tr.appendChild(td);
            }
            board.appendChild(tr);
        }
    }
    static wallCreation(row , col){
        let cells = board.querySelectorAll('td');
        let get_row = row / 2;
        let get_col = Math.round(col / 3);
        let startPoint = document.getElementById(`${get_row}-${get_col}`); 
        let targetPoint = document.getElementById(`${get_row}-${get_col + 15}`);
        startPoint.setAttribute('class','start');
        targetPoint.setAttribute('class','target');
        startPoint.style.backgroundImage = 'url(./images-icons/start-node.svg)';
        targetPoint.style.backgroundImage = 'url(./images-icons/circle.svg)';
        cells.forEach((cell)=>{ 

                   
        });
    }
}
//Function calls 1280 521
function FunctionCalls(){
    let row = 20;
    let col = 40;
    UI.NodesCreate(row , col);
    UI.wallCreation(row , col);
    
}
FunctionCalls();
