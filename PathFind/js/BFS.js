let unvisited_queue = [];
let find_node_bfs = false;
//sleep method
const sleep = (ms) =>{
    return new Promise(resolve => setTimeout(resolve,ms));
}
// Breadth First Search
function BFS(start_node,target_node,speed, wait_or_not){
    const dosearch = async()=>{
        //start_node push in to unvisited Queue
        //start_node.isVisited = true; 
        unvisited_queue.push(start_node);
        while(unvisited_queue.length > 0 ){
            // get Front node on queue
            let current_node = unvisited_queue.shift();
            // check current node visited or not
            if(!current_node.isVisited && !current_node.isWall){
                //visualize current node
                let c = document.getElementById(`${current_node.i}-${current_node.j}`);
                c.setAttribute('class', 'current'); 
                // search speed will be slow function
                if(wait_or_not)
                    await sleep(speed);
                //check current node is target node is true break the searching
                if(current_node === target_node){
                    find_node_bfs = true;
                    break;
                }
                current_node.isVisited = true;
                update_node(current_node);
            }
            findNeighbours_bfs(current_node);
        }
        shortestPath(start_node,target_node, find_node_bfs, wait_or_not);
    }
    dosearch();
}
// Find neighbours on current node
function findNeighbours_bfs(node){
    let row = node.i;
    let col = node.j;
    //Top neighbour
    if(row-1 >= 0 && col < grid[0].length){
        let top = grid[row-1][col];
        let temp = unvisited_queue.indexOf(top);
        if(temp == -1 && !top.isVisited && !top.isWall){
            top.prev = node;
            unvisited_queue.push(top);
        }
    }
    //Right Neighbour
    if(row >= 0 && col+1 < grid[0].length){
        let right = grid[row][col+1];
        let temp = unvisited_queue.indexOf(right)
        if(temp == -1 && !right.isVisited && !right.isWall){
            right.prev = node;
            unvisited_queue.push(right);
        }
    }
    //Left neighbour
    if(row >= 0 && col-1 >= 0){
        let left = grid[row][col-1];
        let temp = unvisited_queue.indexOf(left)
        if(temp == -1 && !left.isVisited && !left.isWall){
            left.prev = node;
            unvisited_queue.push(left);
        }
    }
     //Bottom neighbour
     if(row+1 < grid.length && col >= 0){
        let bottom = grid[row+1][col]
        let temp = unvisited_queue.indexOf(bottom);
        if(temp == -1 && !bottom.isVisited && !bottom.isWall){
            bottom.prev = node;
            unvisited_queue.push(bottom);
        }
    }
    
}
//shortest path BFS and DFS
function shortestPath(start_node,finish_node, finish, wait_or_not){
    if(finish === true){
        let cur = finish_node;
        let Path = [];
        while(cur !== start_node){
            Path.push(cur);
            cur = cur.prev;
        }
        const VisPath = async()=>{
            let start = document.getElementById('start_node').parentNode.id;
            document.getElementById(start).className = 'shortPath';
            for(let p = Path.length-1;p >= 0; p--){
                if(wait_or_not)
                    await sleep(50);
                let sp = document.getElementById(`${Path[p].i}-${Path[p].j}`);
                sp.className = 'shortPath';
            }
            finish_node_bfs = false;
            finish_node_dfs = false;
        }
        VisPath();
    }
    else{
        let no_algo_alert = document.getElementsByClassName('no-algo-alert')[0];
        no_algo_alert.style.display = 'block';
        document.getElementById('msg1').innerText = 'Sorry didn\'t find. try again.'
    }
    block_var = false;
    shortest_path_var = true;
    find_node_bfs = false;
    find_node_dfs = false;
}


