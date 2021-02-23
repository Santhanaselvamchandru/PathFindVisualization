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
        let cells = board.querySelectorAll('td');
        cells.forEach((cell)=>{
            let isPressed = false;
            cell.addEventListener('click',()=>isPressed = false);
            cell.addEventListener('mousedown',()=>isPressed = true);
            cell.addEventListener('mouseup',()=>isPressed = false);
            cell.addEventListener('mousemove',()=>{
                if(isPressed){
                    movesId(isPressed);
                } 
            });
        });
    }
}
function movesId(id){
    let cells = board.querySelectorAll('td');
    cells.forEach((cell) =>{
        cell.addEventListener('mousemove',(e)=>{
            
            if(id){
                cell.setAttribute('class','walls');
                if(e.mouseleave){
                    e.stopPropagation();
                }
            }
        });
    });
}
function clickId(id){
    console.log("click",id);
}
//Function calls 1280 521
function FunctionCalls(){
    UI.NodesCreate(20,40);
    UI.wallCreation();
    
}
FunctionCalls();
