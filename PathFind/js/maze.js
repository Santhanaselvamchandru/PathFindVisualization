let board = document.getElementById('board');
let row = Math.floor(board.clientHeight / 27.2);
let col = Math.floor(board.clientWidth / 30.5);
//20 40
recursiveDivision(row,col);
function recursiveDivision(row,col){
    let start = document.getElementById('start').parentNode.id;
    let target = document.getElementById('target').parentNode.id;
    for(let i = 1 ; i <= row ; i++){
        for(let j = 1 ; j <= col; j++){
            //ALL last and first coloum, row fill
            if((i == 1 || i == row) || (j == 1 || j == col) && (`${i}-${j}` !== start && `${i}-${j}` !== target )){
               document.getElementById(`${i}-${j}`).setAttribute('class','walls');
            }
        }
    }
    maze(2,2,row-1,col-1);
}
function maze(startRow,startCol , endRow,endCol){
    console.log('start row ',startRow,'start col ',startCol,'end row ',endRow,'end col ',endCol)
    if( endRow <= startRow || endCol <= startCol){
        return;
    }
    let centerRow = Math.floor(endRow / 2 ) +1;
    let centerCol = Math.floor(endCol / 2 ) +1;
    //row maze generation
    for(let i = startRow; i <= endCol ; i++ ){
        wallgenerate(centerRow,i);
    }
    //column maze generation
    for(let j = startCol ; j <= endRow ; j++){
        wallgenerate(j,centerCol);
    }
    //left hole
    let left_to_center = Math.floor((Math.random() * (centerCol-startCol)) + startCol);
    holegen(centerRow,left_to_center);
    //right hole
    let center_to_right = Math.floor((Math.random() * (endCol-centerCol)) + centerCol);
    holegen(centerRow,center_to_right);
    //top hole
    let top_to_center = Math.floor((Math.random() * (centerRow-startRow)) + startRow);
    holegen(top_to_center,centerCol);
    //bottom hole
    let center_to_bottom = Math.floor((Math.random() * (endRow-centerRow)) + centerRow);
    holegen(center_to_bottom , centerCol);
    //startRow ,startCol , endRow,endCol
    //left-top room
    maze(startRow+1,startCol+1,centerRow-1,centerCol-1);
    //left-bottom room
    //maze(centerRow+1,centerRow+1,endRow-1,centerCol-1);
    //right-top room
    //maze(startRow+1,startCol+1,centerRow-1,endCol-1);
    //right-bottom room
    //maze(centerCol+1,centerCol+1,endRow-1,endCol-1);

}
function holegen(i,j){
    let start = document.getElementById('start').parentNode.id;
    let target = document.getElementById('target').parentNode.id;
    if( `${i}-${j}` !== start && `${i}-${j}` !== target ){
        document.getElementById(`${i}-${j}`).removeAttribute('class');
    }
}
function wallgenerate(i,j){
    //console.log("wall gen = ",i,j);
    let start = document.getElementById('start').parentNode.id;
    let target = document.getElementById('target').parentNode.id;
    if( `${i}-${j}` !== start && `${i}-${j}` !== target ){
        document.getElementById(`${i}-${j}`).setAttribute('class','walls');
    }
}
