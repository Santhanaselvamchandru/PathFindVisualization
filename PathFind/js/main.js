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
    static wallCreation(){
        let width = document.getElementById("board").clientWidth;
        let height = document.getElementById("board").clientHeight;
        let cells = board.querySelectorAll('td');
        for(let i=0 ;i<cells.length ;i++){
            cells[i].addEventListener('click',(e)=>{
                let x = e.clientX;
                let y = e.clientY;
                console.log("pos + ",Math.round((width + 40/ width - x)/40 )-40,Math.round(y - 20 / height));
            });
        }
    }
}

//Function calls 1280 521
function FunctionCalls(){
    UI.NodesCreate(20,40);
    UI.wallCreation();
    
}
FunctionCalls();