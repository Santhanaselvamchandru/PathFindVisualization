container = document.getElementById('container');
let row = 10;
let col = 20;
let cells = [];
let unvisited = undefined;
//cell initialization
class cell{
    constructor(i,j,visit,wall){
        this.row = i;
        this.col = j;
        this.isVisited = visit;
        this.isWall = wall;
    }
}
function setup(){
    for(let i = 0;i<row;i++){
        let rows = [];
        for(let j = 0;j<col;j++){
            let cell_s = new cell(i,j,false,false);
            rows.push(cell_s);
        }
        cells.push(rows);
    }
    //console.log(cells)
    cells.forEach(r =>{
        let tr = document.createElement('tr');
        r.forEach( c =>{
            let td = document.createElement('td');
    
            td.setAttribute('id',`${c.row}-${c.col}`);
            tr.appendChild(td);

            if(c.isVisited){
                td.className += ' visited';
            }
            if(c.isWall){
                td.className += ' wall';
            }
        })
        container.appendChild(tr);
    })
}
function DFS(start_row,start_col,Queue){
    let i = start_row;
    let j = start_col;
    //let target = '10-20';
    let visit = document.getElementById(`${i}-${j}`);
    visit.setAttribute('class','visited');
    let left = document.getElementById(`${i}-${j-1}`);
    let right = document.getElementById(`${i}-${j+1}`);
    let top = document.getElementById(`${i-1}-${j}`);
    let bottom = document.getElementById(`${i+1}-${j}`);
    if(left){
        if(left.className !== 'visited'){
            Queue.push(left.id)              
        }
    }
    if(right){
        if(right.className !== 'visited'){
            Queue.push(right.id)                   
        }
    }
    if(top){
        if(top.className !== 'visited'){
            Queue.push(top.id)              
        }
    }
    if(bottom){
        if(bottom.className !== 'visited'){
            Queue.push(bottom.id)                    
        }
    }
    if(!Queue.isEmpty()){
        let front = Queue.front;
        let rear = Queue.rear;
        for(let i = front;i<rear;i++){
            let temp = Queue.pop();
            temp = temp.split('-');
            console.log(Queue.arr);
            DFS(temp[0],temp[1],Queue);

        }
    }
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
            return false;
        }
        let temp = this.arr[this.front];
        this.front += 1;
        if(this.front >= this.rear){
            this.front = -1;
            this.rear = -1;
        }
        return temp;
    }
    isEmpty(){
        return (this.arr.length == 0)
    }
}
setup();
DFS(1,1,unvisited = new queue());








