container = document.getElementById('container');
let row = 10;
let col = 20;
let cells = [];
//cell initialization
class cell{
    constructor(i,j){
        this.row = i;
        this.col = j;
        this.isVisited = false;
        this.isWall = false;
    }
}
function setup(){
    /*for(let i = 0;i < row;i++){
        let tr = document.createElement('tr');
        tr.className = `row-${i}`;
        for(let j = 0;j<col;j++){
            let td = document.createElement('td');
            td.className = `${i}-${j}`
            tr.appendChild(td);
        }
        container.appendChild(tr);
    }*/
    for(let i = 0;i<row;i++){
        let rows = [];
        for(let j = 0;j<col;j++){
            let cell_s = new cell(i,j);
            rows.push(cell_s);
        }
        cells.push(rows);
    }
    console.log(cells)
    cells.forEach(r =>{
        let tr = document.createElement('tr');
        r.forEach( c =>{
            let td = document.createElement('td');
            td.className = `${r}-${c}`
            tr.appendChild(td);
        })
        container.appendChild(tr);
    })
    
}
setup();

function DFS(start_row,start_col){
    let unvisited = new queue();
    let i = start_row;
    let j = start_col;
    //let target = '10-20';
    let visit = document.getElementsByClassName(`${i}-${j}`)[0];
    visit.className += ' visited';
    let left = document.getElementsByClassName(`${i}-${j-1}`)[0];
    let right = document.getElementsByClassName(`${i}-${j+1}`)[0];
    let top = document.getElementsByClassName(`${i-1}-${j}`)[0];
    let bottom = document.getElementsByClassName(`${i+1}-${j}`)[0];
    if(left){
        if(left.className !== 'visited'){
            unvisited.push(i+'left '+j-1)                   
        }
    }
    if(right){
        if(right.className !== 'visited'){
            unvisited.push((i+' '+j+1))                  
        }
    }
    if(top){
        if(top.className !== 'visited'){
            unvisited.push(i-1+' '+j)              
        }
    }
    if(bottom){
        if(bottom.className !== 'visited'){
            unvisited.push(i+1+' '+j)                   
        }
    }
    console.log(unvisited)
}

class queue{
    constructor(){
        this.arr = [];
        this.front = -1;
        this.rear = -1;
    }
    push(item){
        if(this.front == -1){
            this.front = 0;
            this.rear = 0;
            this.arr[this.front] = item;
            return;
        }
        this.rear +=1;
        this.arr[this.rear] = item;
    }
    pop(){
        if(this.rear == -1){
            return
        }
        let temp = this.arr[this.front];
        this.front += 1;
        if(this.front > this.rear){
            this.front = -1;
            this.rear = -1;
        }
        return temp;
    }
}

//DFS(1,1)








