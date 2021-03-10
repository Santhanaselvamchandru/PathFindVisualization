let board = document.getElementById('board');
let rows = Math.floor(board.offsetHeight / 27.2 );
let cols = Math.floor(board.offsetWidth / 30.5);
//20 40
recursiveDivision();
function recursiveDivision(){
    for(let i = 0 ; i < rows ; i++){
        for(let j = 0 ; j < cols ; j++){
            if(i === 0 || j === 0 || i === rows-1 || j === cols-1){
                let wall = document.getElementById(`${i+1}-${j+1}`);
                wall.setAttribute('class','walls');
            }
        }
    }
    let count = 0;
    maze_gen(2,2,rows-1,cols-1,count);
}
function maze_gen(start_row,start_col,end_row,end_col,count){
    count++;
    let center_row = Math.round((start_row + end_row) / 2)-1;
    let center_col = Math.round((start_col + end_col) / 2)-1;

    if(start_row < 1 || end_row > rows || start_col <= 1 || end_col >= cols || count > 5){
        return;
    }
    //columns
    for(let j = start_row+1 ; j < end_row ; j++){
        fillWall(j,center_col);
    }
    //rows
    for(let i = start_col+1; i < end_col ; i++){
        fillWall(center_row , i);
    }
    
    // Left Room
    maze_gen(start_row+1,start_col ,center_row,center_col-1,count);
    //right room
    maze_gen(start_row ,center_col +1,center_row-1,end_col,count);
    //left-bottom room
   maze_gen(center_row+1,start_col,end_row,center_col-1,count);
   //right-bottom room
   maze_gen(center_row,center_col+1,end_row-1,end_col,count);
}
function fillWall(row,col){
    let start = document.getElementById('start').parentNode.id;
    let target = document.getElementById('target').parentNode.id;
    let wall = document.getElementById(`${row}-${col}`);
    if(!wall){
        return;
    }
    if(wall.id !== start && wall.id !== target){
        wall.setAttribute('class','walls');
    }
}
function hole_generate(r,c){
    document.getElementById(`${r}-${c}`).removeAttribute('class');
}