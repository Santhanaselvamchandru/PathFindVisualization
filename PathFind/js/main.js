let board = document.getElementById('board');
let row = 20;
let col = 40;
var grid = [];

// each column objects
function Cell(i,j){
    this.i = i;
    this.j = j;
    this.isVisited = false;
    this.isWall = false;
    this.prev = null;
}
// create cells in table
function draw(r){
    let tr = document.createElement('tr');
    r.forEach(c =>{
        let td = document.createElement('td');
        td.id = `${c.i}-${c.j}`
        if(c.isVisited){
            td.setAttribute('class','visited');
        }
        if(c.isWall){
            td.setAttribute('class','wall');
        }
        tr.appendChild(td);
    })

    board.appendChild(tr);
}
// push row and column objects in grid array
function setup(){
    for(let i = 0;i<row;i++){
        let r = [];
        for(let j = 0;j<col;j++){
            let cell = new Cell(i,j);
            r.push(cell);
        }
        grid.push(r)
    }
    grid.forEach( g_r =>{
        draw(g_r)
    })
}

// display visited nodes
function update_node(node){
    let ele = document.getElementById(`${node.i}-${node.j}`);
    if(node.isVisited){
        ele.className = 'visited';
    }
    if(node.isWall){
        ele.setAttribute('class','wall');
    }
}
setup();

BFS(grid[0][0],grid[14][19]);