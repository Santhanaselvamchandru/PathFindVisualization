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
        div.setAttribute('ondragstart','UI.dragStart(event)');
        return div;
    }
    static startNode(row,col){
        let get_row = row / 2;
        let get_col = Math.round(col / 3);
        let startPoint = document.getElementById(`${get_row}-${get_col}`); 
        startPoint.appendChild(UI.nodeCreate('start'));
        
    }
    static dragStart(e){
        e.dataTransfer.setData('text',e.target.id);
    }
    static onDrop(e){
        e.preventDefault();
        var data = e.dataTransfer.getData('text');
        e.target.appendChild(document.getElementById(data));
    }
    static onDragover(e){
        if(e.target.id !== 'start' && e.target.id !== 'target'){
            e.preventDefault();
        }
    }
    static targetNode(row,col){
        let get_row = row / 2;
        let get_col = Math.round(col / 3); 
        let targetPoint = document.getElementById(`${get_row}-${get_col + 15}`);
        targetPoint.appendChild(UI.nodeCreate('target'));
    }
    static displayUl(){
        let algo = document.getElementById('algo');
        let algoUl = document.getElementById('algo-ul');
        let maze = document.getElementById('maze');
        let mazeUl = document.getElementById('maze-ul');
        algo.addEventListener('click',()=>{
            if(algoUl.style.display === 'none' && (mazeUl.style.display === 'none' || mazeUl.style.display === 'block')){
                if(mazeUl.style.display === "block"){
                    mazeUl.style.display = 'none';
                }
                algoUl.style.display = 'block';
            }
            else{
                algoUl.style.display = 'none'
            }
        })
        maze.addEventListener('click',()=>{
            if(mazeUl.style.display === 'none' && (algoUl.style.display === 'block' || algoUl.style.display === 'none') ){
                mazeUl.style.display = 'block';  
                if(algoUl.style.display === "block"){
                    algoUl.style.display = 'none';
                }
                algoUl.style.display = 'block';              
            }
            else{
                mazeUl.style.display = 'none'
            }
        })
    }
}
//Function calls 1280 521
function FunctionCalls(){
    let row = 20;
    let col = 40;
    UI.displayUl();
    UI.NodesCreate(row , col);
    UI.wallCreation(row , col);
}
FunctionCalls();
