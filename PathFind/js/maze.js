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

    //horizontal wall
    let rand_hor = hole_gen(start_col,end_col);
    for(let j = start_col ; j<end_col ; j = j+1){
        fillWall(center_row,j,center_row,rand_hor[0],center_row,rand_hor[1]);
    }

    //vertical wall
    let rand_ver = hole_gen(start_row,end_row);
    for(let i = start_row;i<end_row;i=i+1){
        fillWall(i,center_col,rand_ver[0],center_col,rand_ver[1],center_col);
    }
    
    //left room
    recmaze(start_row ,start_col,center_row,center_col,count);
    //right room
    //recmaze(start_row ,center_col,center_row,end_col,count);
    //left-bottom room
    //recmaze(center_row,start_col,end_row,center_col,count);
    //right-bottom room
    //recmaze(center_row,center_col,end_row,end_col,count);
    //space columns filled
    let available_col = Math.floor((start_col + center_col)/2);
    if(available_col >= 2){
        for(let i = start_row;i<=center_row;i=i+1){
            fillWall(i,available_col);
        }
    }
    
}
function fillWall(row,col,first_row,first_col,second_row,second_col){
    let start = document.getElementById('start').parentNode.id;
    let target = document.getElementById('target').parentNode.id;
    let wall = document.getElementById(`${row}-${col}`);
    if(!wall){
        return;
    }
    if(first_row && first_col && second_row && second_col){
        let ran_1 = document.getElementById(`${first_row}-${first_col}`);
        let ran_2 = document.getElementById(`${second_row}-${second_col}`);
        if(wall.id !== start && wall.id !== target && wall.id !== ran_1.id && wall.id !== ran_2.id){
            wall.setAttribute('class','walls');
        }
        return;
    }
    if(wall.id !== start && wall.id !== target){
        wall.setAttribute('class','walls');
    }
}
function hole_gen(start,end){
    let first_ran = ran_num(start,(end/2));
    let second_ran = ran_num((end/2),end);
    return [first_ran,second_ran];
}
function ran_num(min,max){
    return Math.floor(Math.random() * (max-min) + min);
}