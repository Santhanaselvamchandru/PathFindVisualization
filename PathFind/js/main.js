//Table cell events
function NodeEvents(event){     
}
function clickFun(){
    console.log("click");
}
function mouseFun(){
    console.log("move");
}
// Table Columns and rows create 
function NodesCreate(rows,column){
    const board = document.getElementById("board");
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
//Function calls
function allFun(){
    NodesCreate(20,40)
    NodeEvents() ;
}
allFun();