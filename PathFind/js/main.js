function NodeEvents(){
    var cells = document.querySelectorAll('td');
     for(let i = 0 ; i< cells.length ; i++){
        let drag = false;
        cells[i].addEventListener('click', ()=> {
            drag = false;
        });
        cells[i].addEventListener('mousemove',() => {
            drag = true
        });
        cells[i].addEventListener('mouseup',() => {
            if(drag){
                Click(cells[i]);
                move();     
            }
            else{
                Click(cells[i]);
            }
        });
        function Click(pos){
            pos.setAttribute('class','walls');
        }
        function move(){
            for(let j = 0 ; j< cells.length ; j++){
                cells[j].addEventListener('mouseup',() => {
                    cells[j].setAttribute('class','walls');
                    move();
                });
                cells[j].addEventListener('mousedown',() => {
                    cells[j].setAttribute('class','walls');
                    move();
                });
            }
        }
     }    
}
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
NodeEvents()
NodesCreate(20,40)