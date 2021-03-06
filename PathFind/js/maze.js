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
    maze_gen(1,1,rows,cols);
}
function maze_gen(startRow,startCol,endRow,endCol){
    if(endRow < startRow || endCol < startCol || endRow > rows || endCol > cols || startRow < 1 || startCol < 1){
        return ;
    }
    let centerRow = Math.floor(endRow /2) ;
    let centerCol = Math.floor(endCol / 2);
    if(centerRow === endRow || centerCol === endCol){
        return;
    }

    for(let j = startCol ; j < endCol ; j++){
        fillWall(centerRow,j);
    }
    for(let i = startRow ; i < endRow ; i++){
        fillWall(i,centerCol);
    }
    //left room
    maze_gen(startRow ,startCol,centerRow,centerCol);
    //right room
    maze_gen(centerRow ,centerCol,endRow,endCol);
}
function fillWall(row,col){
    console.log(row,col)
    let start = document.getElementById('start').parentNode.id;
    let target = document.getElementById('target').parentNode.id;
    let wall = document.getElementById(`${row}-${col}`);
    if(wall.id !== start && wall.id !== target ){
        wall.setAttribute('class','walls');
    }
}
function hole_generate(r,c){
    document.getElementById(`${r}-${c}`).removeAttribute('class');
}