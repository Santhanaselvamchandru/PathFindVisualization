class UI{
    static board = document.getElementById('board');
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
    //wall creation
    static wallCreation(row , col){
        let cells = board.querySelectorAll('td');
        this.startNode(row,col);
        this.targetNode(row,col);
         
    }
    //start and target elements create
    static nodeCreate(name){
        var div = document.createElement('div');
        div.setAttribute('id',name);
        div.setAttribute('draggable','true');
        div.setAttribute('ondragstart','UI.dragStart(event)');
        return div;
    }
    //start node default place
    static startNode(row,col){
        let get_row = row / 2;
        let get_col = Math.round(col / 3);
        let startPoint = document.getElementById(`${get_row}-${get_col}`); 
        startPoint.appendChild(UI.nodeCreate('start')); 
    }
    // activate draggable events
    static dragStart(e){
        e.dataTransfer.setData('text',e.target.id);
    }
    static onDrop(e){
        e.preventDefault();
        var data = e.dataTransfer.getData('text');
        if(data === 'start' || data === 'target'){
            e.target.appendChild(document.getElementById(data));
        }
    }
    static onDragover(e){
        if(e.target.id !== 'start' && e.target.id !== 'target' && e.target.className !== 'walls'){
            e.preventDefault();
        }
    }
    //target node default place
    static targetNode(row,col){
        let get_row = row / 2;
        let get_col = Math.round(col / 3); 
        let targetPoint = document.getElementById(`${get_row}-${get_col + 15}`);
        targetPoint.appendChild(UI.nodeCreate('target'));
    }
    //header list display events
    static displayUl(){
        let algo = document.getElementById('algo');
        let algoUl = document.getElementById('algo-ul');
        let maze = document.getElementById('maze');
        let mazeUl = document.getElementById('maze-ul');
        algo.addEventListener('click',()=>{
            if(algoUl.style.display === 'none'){
                if(mazeUl.style.display === 'block'){
                    mazeUl.style.display = 'none';
                    algoUl.style.display = 'block';
                }
                else{
                    algoUl.style.display = 'block';
                }                
            }   
            else{
                algoUl.style.display = 'none';
            }
        })
        maze.addEventListener('click',()=>{
            if(mazeUl.style.display === 'none'){
                if(algoUl.style.display === 'block'){
                    algoUl.style.display = 'none';
                    mazeUl.style.display = 'block';
                }
                else{
                    mazeUl.style.display = 'block';
                }
            }   
            else{
                mazeUl.style.display = 'none';
            }
        })
    }

}
//Function calls
function FunctionCalls(){
    let board = document.getElementById('board');
    let row = Math.floor(board.clientHeight /8);
    let col = Math.floor(board.clientWidth / 32) + 1;
    UI.displayUl();
    UI.NodesCreate(row , col);
    UI.wallCreation(row , col);
}
FunctionCalls();
