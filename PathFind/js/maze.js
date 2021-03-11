let board = document.getElementById('board');
let rows = Math.floor(board.offsetHeight / 27.2 );
let cols = Math.floor(board.offsetWidth / 30.5);
//20 40
recursiveDivision();
function recursiveDivision(){
    for(let i = 0 ; i < rows ; i++){
        for(let j = 0 ; j < cols ; j++){
            if(i === 0 || j === 0 || i === rows-1 || j === cols-1){
                fillWall(i,j);
            }
        }
    }
    let count = 0;
    recmaze(1,1,rows-1,cols-1,count);
}
function recmaze(start_row,start_col,end_row,end_col,count){
    count = count + 1;
    if(start_row > end_row || start_col > end_col || count > 3){
        return;
    }
    let center_col = Math.floor((start_col+end_col)/2);
    let center_row = Math.floor((start_row + end_row)/2);
    //console.log(center_row,center_col)
    for(let i = start_row;i<end_row;i=i+1){
        fillWall(i,center_col);
    }
    for(let j = start_col ; j<end_col ; j = j+1){
        fillWall(center_row,j);
    }
    //left room
    recmaze(start_row ,start_col,center_row,center_col,count);
    let left_ran = Math.floor((Math.random() * center_col) + center_row);
    console.log();
    //right room
    recmaze(start_row ,center_col,center_row,end_col,count);
    let right_ran = Math.floor((Math.random() * center_col) + center_row);
    console.log();
    //left-bottom room
    recmaze(center_row,start_col,end_row,center_col,count);
    let left_bottom_ran = Math.floor((Math.random() * center_col) + center_row);
    console.log();
    //right-bottom room
    recmaze(center_row,center_col,end_row,end_col,count);
    let right_bottom_ran = Math.floor((Math.random() * center_col) + center_row);
    console.log();
    //space columns filled
    let available_col = Math.floor((start_col + center_col)/2);
    if(available_col >= 2){
        for(let i = start_row;i<=center_row;i=i+1){
            fillWall(i,available_col);
        }
    }
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