var cells = document.querySelector('td');
function recursiveDivision(row,col){
    for(let i = 1 ; i <= row ; i++){
        for(let j = 1 ; j <= col; j++){
            if(i == 1 || i == row){
                //cells[i][j].setAttribute('class','walls');
                document.getElementById(`${i}-${j}`).setAttribute('class','walls');
            }
            else if(j== 1 || j == col){
                //cells[i][j].setAttribute('class','walls');
                document.getElementById(`${i}-${j}`).setAttribute('class','walls');
            }
        }
    }
}
recursiveDivision(20,40);