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
    else{
        ele.removeAttribute('class');
    }
    if(node.isWall){
        ele.setAttribute('class','wall');
    }
}
let speed = undefined;
function headerSetup(){
    let algo = document.getElementById('algo');
    let algo_list = document.getElementsByClassName('algo-list')[0];
    let maze = document.getElementById('maze');
    let maze_list = document.getElementsByClassName('maze-list')[0];
    let speed = document.getElementById('speed');
    let speed_list = document.getElementsByClassName('speed-list')[0];
    
    algo.addEventListener('click',()=>{
        if(algo_list.style.display == 'none'){
            algo_list.style.display = 'block';
        }
        else{
            algo_list.style.display = 'none';
        }
    })

    maze.addEventListener('click',()=>{
        if(maze_list.style.display == 'none'){
            maze_list.style.display = 'block';
        }
        else{
            maze_list.style.display = 'none';
        }
    })

    speed.addEventListener('click',()=>{
        if(speed_list.style.display == 'none'){
            speed_list.style.display = 'block';
        }
        else{
            speed_list.style.display = 'none';
        }
    })

    // drop-down menu is still visible to not active then invisible function
    window.onclick = function(event){
        if(!event.target.matches('#algo')){
            let algo_list1 = document.getElementsByClassName('algo-list');
            for(let i = 0; i < algo_list1.length; i++ ){
                var open = algo_list1[i];
                open.style.display = 'none';
            }
        }

        if(!event.target.matches('#maze')){
            let maze_list1 = document.getElementsByClassName('maze-list');
            for(let i = 0; i < maze_list1.length;i++ ){
                var open = maze_list1[i];
                open.style.display = 'none';
            }
        }

        if(!event.target.matches('#speed')){
            let speed_list1 = document.getElementsByClassName('speed-list');
            for(let i = 0; i < speed_list1.length;i++ ){
                var open = speed_list1[i];
                open.style.display = 'none';
            }
        }
    }
    // select algorith section
    let bfs = document.getElementById('bfs');
    let dfs = document.getElementById('dfs');
    let recursive_division = document.getElementById('recdiv');
    let basic_random = document.getElementById('basran');
    let visualize = document.getElementById('visualize');
    let current = undefined;

    bfs.addEventListener('click', ()=>{
        current = 'bfs';
    });
    dfs.addEventListener('click', ()=>{
        current = 'dfs';
    });
    recursive_division.addEventListener('click', ()=>{
        console.log('recursive');
    });
    basic_random.addEventListener('click', ()=>{
        console.log('basic');
    });

    visualize.addEventListener('click',()=>{

        if(current == 'bfs'){
            BFS(grid[0][0],grid[5][9],speed);
        }
        else if(current = 'dfs'){
            DFS(grid[0][0],grid[10][9],speed);
        }
        else{
            console.log('Select Algorithm');
        }
    });

    let speed_track = document.getElementById('speed-track');
    let speed_fast = document.getElementById('speed-fast');
    let speed_medium = document.getElementById('speed-medium');
    let speed_slow = document.getElementById('speed-slow');

    speed_fast.addEventListener('click', ()=>{
        speed = 50;
        speed_track.innerText = 'Fast';
    });
    speed_medium.addEventListener('click', ()=>{
        speed = 75;
        speed_track.innerText = 'Medium';
    });
    speed_slow.addEventListener('click', ()=>{
        speed = 100;
        speed_track.innerText = 'Slow';
    });

    let clear_board = document.getElementById('clear-board');

    clear_board.addEventListener('click',()=>{
        for(let i = 0; i < grid.length ; i++){
            for(let j = 0; j < grid[0].length ; j++){
                let node = grid[i][j];
                node.isVisited = false;
                node.isWall = false;
                node.prev = null;
            }
        }
        for(let i = 0; i < grid.length ; i++){
            for(let j = 0; j < grid[0].length ; j++){
                let visited_cell = document.getElementById(`${i}-${j}`);
                if(visited_cell.className == 'visited' || visited_cell.className == 'wall' || visited_cell.className == 'shortPath'){
                    visited_cell.removeAttribute('class');
                }
            }
        }
    })
}
headerSetup();
setup();
