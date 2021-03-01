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
    let callTime = 0;
    maze(1,1,row-1,col-1,callTime);
}

function maze(startRow,startCol , endRow,endCol,callTime){

    if( endRow < startRow || endCol < startCol || callTime > 3){
        return;
    }
    let centerRow = Math.floor((startRow + endRow) / 2 );
    let centerCol = Math.floor((startCol + endCol) / 2 );
    if(centerRow > endRow || centerCol > endCol){
        return;
    }
    callTime += 1;
    //row maze generation
    /*for(let i = startRow; i <= endCol ; i++ ){
        wallgenerate(centerRow,i);
    }
    //column maze generation
    for(let j = startCol ; j <= endRow ; j++){
        wallgenerate(j,centerCol);
    }*/
    for(let i = startRow ; i <= endRow ; i++){
        for(let j = startCol ; j <= endCol; j++){
            if(j == centerCol){
                wallgenerate(i,j);
            }
            else if(i == centerRow){
                wallgenerate(i,j);
            }
        }
    }    
      /*       Random Holes           */
    //left hole 
    let left_hole = Math.floor(Math.random() * (centerCol - startCol) + startCol);
    holegen(centerRow,left_hole);
    let left_hole1 = Math.floor(Math.random() * (centerCol - startCol) + startCol);
    holegen(centerRow,left_hole1);
    //right hole 
    let right_hole= Math.floor(Math.random() * (endCol - centerCol)+centerCol);
    holegen(centerRow,right_hole);
    let right_hole1 = Math.floor(Math.random() * (endCol - centerCol)+centerCol);
    holegen(centerRow,right_hole1);
    //top vertical hole 
    let top_to_center = Math.floor(Math.random() * (centerRow - startRow ) + startRow);
    holegen(centerCol,top_to_center);
    let top_to_center1 = Math.floor(Math.random() * (centerRow - startRow ) + startRow);
    holegen(centerCol,top_to_center1);
    //bottom vertical hole 
    let center_to_bottom = Math.floor(Math.random() * (endRow - centerRow) + centerRow);
    holegen(centerCol,center_to_bottom);
    let center_to_bottom1 = Math.floor(Math.random() * (endRow - centerRow) + centerRow);
    holegen(centerCol,center_to_bottom1);
    /*      Recursively  maze generate             */
    //left-top maze 
    maze(startRow,startCol,centerRow,centerCol,callTime);
    //left-bottom maze
    maze(centerRow+1,startCol,endRow,centerCol,callTime);
    //right-top maze
    maze(startRow,centerCol+1,centerRow,endCol,callTime);
    //right-bottom maze
    maze(centerRow+1,centerCol+1,endRow,endCol,callTime);
}
function holegen(i,j){
    if(i === 1 || i === 20 || j === 1 || j === 40){
        return;
    }
    if(i > 20 || j > 40){
        return;
    }
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
    if( `${i}-${j}` !== start && `${i}-${j}` !== target){
        document.getElementById(`${i}-${j}`).setAttribute('class','walls');
    }
}
