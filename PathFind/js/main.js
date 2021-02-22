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
        for(let i=0 ;i<cells.length ;i++){
            // let drag = false;
            // let sel = [];
            // cells[i].addEventListener('click', () => {
            //     if(cells[i].getAttribute('class') === 'walls'){
            //         cells[i].removeAttribute('class');
            //     }
            //     else{
            //         cells[i].setAttribute('class','walls');
            //     }
            // });
            //cells[i].addEventListener("mousedown", start);
            cells[i].addEventListener("focus", start);
            //cells[i].addEventListener("click", click);
            //cells[i].addEventListener("mouseout", cancel);
            cells[i].addEventListener("touchend", end);//cancel);
            cells[i].addEventListener("touchleave", cancel);
            //cells[i].addEventListener("touchcancel", cancel);
            
            function start(){
                console.log("start");
            }
            function end(){
                console.log("end");
            }
            function cancel(){
                console.log("cancel");
            }
        }
    }
    static found(arr,ele){
        let temp = false;
        for(let i = 0 ; i<arr.length;i++){
            if(arr[i] === ele){
                temp = true;
                break;
            }            
        }
        if(temp){
            console.log('found');
            return 1;
        }
        else{
            console.log('found');
            return 0;
        }
    }
}

//Function calls 1280 521
function FunctionCalls(){
    UI.NodesCreate(20,40);
    UI.wallCreation();
    
}
FunctionCalls();
