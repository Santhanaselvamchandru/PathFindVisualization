let board = document.getElementById('board');
let row = 15;
let col = 30;
let grid = [];
let unvisited = [];

// each column objects
function Cell(i,j){
    this.i = i;
    this.j = j;
    this.isVisited = false;
    this.isWall = false;
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
        ele.setAttribute('class','visited');
    }
    if(node.isWall){
        ele.setAttribute('class','wall');
    }
}

//sleep method
const sleep = (ms) =>{
    return new Promise(resolve => setTimeout(resolve,ms));
}

// Breadth First Search
function BFS(start_node,target_node){
    const dosearch = async()=>{
        let s = document.getElementById(`${start_node.i}-${start_node.j}`);
        let t = document.getElementById(`${target_node.i}-${target_node.j}`);
        s.style.backgroundColor = 'green';
        t.style.backgroundColor = 'red';
        unvisited.push(start_node);

        while(unvisited.length != 0 ){
            await sleep(100);
            console.log(unvisited.length);
            let current_node = unvisited.shift();
            if(current_node){
                let c = document.getElementById(`${current_node.i}-${current_node.j}`);
                if(current_node == target_node){
                    break;
                }
                if(current_node.isVisited == false){
                    current_node.isVisited = true;
                    update_node(current_node);
                    findNeighbours(current_node);    
                }
            }
        }
    }

    dosearch();
    
}
// Find neighbors on current node
function findNeighbours(node){
    if(node.i < grid.length && node.j-1 >= 0){
        let left = grid[node.i][node.j-1];
        let temp = unvisited.indexOf(left)
        if(temp == -1)
            unvisited.push(left);
    }
    if(node.i < grid.length && node.j+1 <= grid.length){
        let right = grid[node.i][node.j+1];
        let temp = unvisited.indexOf(right)
        if(temp == -1)
            unvisited.push(right);
    }
    if(node.i-1 >= 0 && node.j < grid.length){
        let top = grid[node.i-1][node.j];
        let temp = unvisited.indexOf(top);
        if(temp == -1)
            unvisited.push(top);
    }
    if(node.i+1 < grid.length && node.j >= 0){
        let bottom = grid[node.i+1][node.j]
        let temp = unvisited.indexOf(bottom);
        if(temp == -1)
            unvisited.push(bottom);
    }
}
setup();

BFS(grid[0][0],grid[10][9])




