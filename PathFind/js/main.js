let board = document.getElementById('board');
let row = 20;
let col = 40;
var grid = [];
// block function variable when start action this will be use
let block_var = false;
// this variable when drag function ended ispress is become true so drag when will finished ispress is false
let ispress = false;
var timeout;
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
        td.id = `${c.i}-${c.j}`;
        // drop event
        td.addEventListener('drop',(event)=>{
            if(!block_var){
                event.preventDefault();
                let data = event.dataTransfer.getData('text');
                if(data === 'start_node' || data === 'target_node'){
                    if (document.getElementById(data).parentNode.className === 'wall'){
                        document.getElementById(data).parentNode.className === '';
                    }
                    event.target.appendChild(document.getElementById(data));  
                    ispress = false;
                } 
            }
        })
        // drag over event
        td.addEventListener('dragover',(event)=>{
            if(!block_var){
                if(event.target.id !== 'start_node' && event.target.id !== 'target_node' && event.target.className !== 'wall'){
                    event.preventDefault();
                }
            }
        })
        // walls click event
        td.addEventListener('click',(event)=>{
            if(!block_var){
                if(event.target.id !== 'start_node' && event.target.id !== 'target_node'){
                    let tags = document.getElementById(event.target.id);
                    if(event.target.className){
                        tags.removeAttribute('class');
                        let r = event.target.id.split('-')[0];
                        let c = event.target.id.split('-')[1];
                        grid[r][c].isWall = false;
                    }
                    else{
                        tags.setAttribute('class','wall');
                        let r = event.target.id.split('-')[0];
                        let c = event.target.id.split('-')[1];
                        grid[r][c].isWall = true;
                    }
                }
            }
        })
        
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
    //
    let start = document.createElement('div');
    start.setAttribute('class','start');
    start.setAttribute('id','start_node');
    let start_pos_row = Math.floor(row/2);
    let start_pos_col = Math.floor(col/row);
    document.getElementById(`${start_pos_row}-${start_pos_col}`).appendChild(start);
    // drag events
    start.draggable = true;
    start.addEventListener('dragstart',(event)=>{
        if(!block_var){
            event.dataTransfer.setData('text', event.target.id);
        }
    })

    let target = document.createElement('div');
    target.setAttribute('class','target');
    target.setAttribute('id','target_node');
    let target_pos_row = Math.floor(row/2);
    let target_pos_col = Math.floor(col-5);
    document.getElementById(`${target_pos_row}-${target_pos_col}`).appendChild(target);
    // drag events
    target.draggable = true;
    target.addEventListener('dragstart',(event)=>{
        if(!block_var){
            event.dataTransfer.setData('text', event.target.id);
        }
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
let default_speed = 10;
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
    // select algorithm section
    let current_algo = undefined;
    let action_algo = false;
    let bfs = document.getElementById('bfs');
    let dfs = document.getElementById('dfs');
    let recursive_division = document.getElementById('recdiv');
    let basic_random = document.getElementById('basran');
    let visualize = document.getElementById('visualize');
    let no_algo_alert = document.getElementsByClassName('no-algo-alert')[0];

    bfs.addEventListener('click', ()=>{
        current_algo = 'bfs';
    });
    dfs.addEventListener('click', ()=>{
        current_algo = 'dfs';
    });
    recursive_division.addEventListener('click', ()=>{
        console.log('recursive');
    });
    basic_random.addEventListener('click', ()=>{
        console.log('basic');
    });
    let speed_track = document.getElementById('speed');
    let speed_fast = document.getElementById('speed-fast');
    let speed_medium = document.getElementById('speed-medium');
    let speed_slow = document.getElementById('speed-slow');

    speed_fast.addEventListener('click', ()=>{
        default_speed = 10;
        speed_track.innerHTML = 'Speed : Fast <i class="fas fa-caret-down"></i>';
    });
    speed_medium.addEventListener('click', ()=>{
        default_speed = 50;
        speed_track.innerHTML = 'Speed : Medium <i class="fas fa-caret-down"></i>';
    });
    speed_slow.addEventListener('click', ()=>{
        default_speed = 100;
        speed_track.innerHTML = 'Speed : Slow <i class="fas fa-caret-down"></i>';
    });
    // may not select algorithm alert window close event
    let close_no_algo = document.getElementById('close_btn');
    close_no_algo.addEventListener('click',()=>{
        no_algo_alert.style.display = 'none';
    })
    // clear walls and weights
    document.getElementById('clear-walls-weight').addEventListener('click',()=>{
        if(!block_var){
            for(let i = 0; i < grid.length ; i++){
                for(let j = 0; j < grid[0].length ; j++){
                    let node = grid[i][j];
                    node.isWall = false;
                    let wall = document.getElementById(`${i}-${j}`);
                    if(wall.className == 'wall'){
                        wall.classList = '';
                    }
                }
            }
        }
    })
    // visualize algorithm event
    visualize.addEventListener('click',()=>{
        if(!block_var){
            let s = document.getElementsByClassName('start')[0].parentNode.id;
            let t = document.getElementsByClassName('target')[0].parentNode.id;
            let start_row = s.split('-')[0];
            let start_col = s.split('-')[1];
            let target_row = t.split('-')[0];
            let target_col = t.split('-')[1];
            if(!action_algo){
                if(current_algo === 'bfs'){
                    block_var = true;
                    unvisited_queue = []
                    BFS(grid[start_row][start_col],grid[target_row][target_col],default_speed);
                    action_algo = true;
                }
                else if(current_algo === 'dfs'){
                    block_var = true;
                    unvisited_stack = []
                    DFS(grid[start_row][start_col],grid[target_row][target_col],default_speed);
                    action_algo = true;
                }
                else{
                    no_algo_alert.style.display = 'block';
                    document.getElementById('msg1').innerText = 'Select Algorithm'
                    action_algo = false;
                }
            }
            else{
                no_algo_alert.style.display = 'block';
                document.getElementById('msg1').innerText = 'Please Clear Board.'
                action_algo = false;
            }
        }
    });
    // clear board
    let clear_board = document.getElementById('clear-board');
    clear_board.addEventListener('click',()=>{
        if(!block_var){
            clearBoard();
            action_algo = false;
            current_algo = undefined;
        }
    })
}
function clearBoard(){
    for(let i = 0; i < grid.length ; i++){
        for(let j = 0; j < grid[0].length ; j++){
            let node = grid[i][j];
            node.isVisited = false;
            node.prev = null;
            let visited_cell = document.getElementById(`${i}-${j}`);
            if(visited_cell.className == 'visited' || visited_cell.className == 'shortPath'){
                visited_cell.classList = '';
            }
        }
    }
}
headerSetup();
setup();

// wall creation
board.addEventListener('mousedown',()=>{
    clearTimeout(timeout);
    timeout = setTimeout(ispress = false, 5000);
    ispress = true;
})
board.addEventListener('mouseup',()=>{
    ispress = false;
})
board.addEventListener('mousemove',(event)=>{
    if(!block_var){
        mouse_move(ispress,event);
    }
})

function mouse_move(ispress, event){
    if(ispress === true){
        if(event.target.id !== 'start_node' && event.target.id !== 'target_node'){
            let tags = document.getElementById(event.target.id);
            if(event.target.className){
                tags.removeAttribute('class');
                let r = event.target.id.split('-')[0];
                let c = event.target.id.split('-')[1];
                grid[r][c].isWall = false;
            }
            else{
                tags.setAttribute('class','wall');
                let r = event.target.id.split('-')[0];
                let c = event.target.id.split('-')[1];
                grid[r][c].isWall = true;
            }
        }
        else{
            return 0;
        }
    }
}