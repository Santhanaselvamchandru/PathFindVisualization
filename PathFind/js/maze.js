let board = document.getElementById('board');
let row = Math.floor(board.clientHeight / 27.2);
let col = Math.floor(board.clientWidth / 30.5);
recursiveDivision(row,col);
function recursiveDivision(row,col){
    let start = document.getElementById('start').parentNode.id;
    let target = document.getElementById('target').parentNode.id;
    /*for(let i = 1 ; i <= row ; i++){
        for(let j = 1 ; j <= col; j++){
            //ALL last and first coloum, row fill
            if((i == 1 || i == row) || (j == 1 || j == col) && (`${i}-${j}` !== start && `${i}-${j}` !== target )){
               document.getElementById(`${i}-${j}`).setAttribute('class','walls');
            }
            
            if( (i == row / 2 || j == col /2) && (`${i}-${j}` !== start && `${i}-${j}` !== target )){
                document.getElementById(`${i}-${j}`).setAttribute('class','walls');              
            }
            if( (i === row/4 && (j <= col /2)) && (`${i}-${j}` !== start && `${i}-${j}` !== target )){
                document.getElementById(`${i}-${j}`).setAttribute('class','walls');              
            }
            if( (i <= row+1/2 && (j === col /4)) && (`${i}-${j}` !== start && `${i}-${j}` !== target )){
                document.getElementById(`${i}-${j}`).setAttribute('class','walls');              
            }
        }
    }*/
}
