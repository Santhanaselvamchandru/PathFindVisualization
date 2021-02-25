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
                td.setAttribute('ondrop','UI.onDrop(event)');
                td.setAttribute('ondragover','UI.onDragover(event)');
                tr.appendChild(td);
            }
            board.appendChild(tr);
        }
    }
    static wallCreation(row , col){
        let cells = board.querySelectorAll('td');
        this.startNode(row,col);
        this.targetNode(row,col);
        cells.forEach((cell)=>{ 

                   
        });
    }
    static nodeCreate(name){
        var div = document.createElement('div');
        div.setAttribute('id',name);
        div.setAttribute('draggable','true');
        div.setAttribute('ondragstart','UI.dragStart(event)')
        return div;
    }
    static startNode(row,col){
        let get_row = row / 2;
        let get_col = Math.round(col / 3);
        let startPoint = document.getElementById(`${get_row}-${get_col}`); 
        startPoint.appendChild(UI.nodeCreate('start'));
        
    }
    static dragStart(e){
        e.dataTransfer.setData('text/plain',e.target.id);
    }
    static onDrop(e){
        e.preventDefault();
        var data = e.dataTransfer.getData('text');
        console.log(document.getElementById(data));
        if(data != document.getElementById('start').parentElement.id){
            e.target.appendChild(document.getElementById(data));
        }
        
    }
    //drag over event
    static onDragover(e){
        e.preventDefault();
    }
    static targetNode(row,col){
        let get_row = row / 2;
        let get_col = Math.round(col / 3); 
        let targetPoint = document.getElementById(`${get_row}-${get_col + 15}`);
        targetPoint.appendChild(UI.nodeCreate('target'));
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
