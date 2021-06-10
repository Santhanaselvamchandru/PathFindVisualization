let unvisited_queue = [];
//sleep method
const sleep = (ms) =>{
    return new Promise(resolve => setTimeout(resolve,ms));
}
// Breadth First Search
function BFS(start_node,target_node,speed){
    const dosearch = async()=>{
        //start_node push in to unvisited Queue
        //start_node.isVisited = true; 
        unvisited_queue.push(start_node);
        while(unvisited_queue.length > 0 ){
            // get Front node on queue
            let current_node = unvisited_queue.shift();
            // check current node visited or not
            if(!current_node.isVisited){
                //visualize current node
                let c = document.getElementById(`${current_node.i}-${current_node.j}`);
                c.setAttribute('class', 'current'); 
                // search speed will be slow function
                await sleep(speed);
                //check current node is target node is true break the searching
                if(current_node == target_node){
                    shortestPath(start_node,target_node);
                    break;
                }
                current_node.isVisited = true;
                update_node(current_node);
            }
            findNeighbours_bfs(current_node);
        }
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
        if(temp == -1 && !top.isVisited){
            top.prev = node;
            unvisited_queue.push(top);
        }
    }
    //Right Neighbour
    if(row >= 0 && col+1 < grid[0].length){
        let right = grid[row][col+1];
        let temp = unvisited_queue.indexOf(right)
        if(temp == -1 && !right.isVisited){
            right.prev = node;
            unvisited_queue.push(right);
        }
    }
    //Left neighbour
    if(row >= 0 && col-1 >= 0){
        let left = grid[row][col-1];
        let temp = unvisited_queue.indexOf(left)
        if(temp == -1 && !left.isVisited){
            left.prev = node;
            unvisited_queue.push(left);
        }
    }
     //Bottom neighbour
     if(row+1 < grid.length && col >= 0){
        let bottom = grid[row+1][col]
        let temp = unvisited_queue.indexOf(bottom);
        if(temp == -1 && !bottom.isVisited){
            bottom.prev = node;
            unvisited_queue.push(bottom);
        }
    }
    
}
//shortest path BFS and DFS
function shortestPath(start_node,finish_node){
    let cur = finish_node;
    let Path = [];
    while(cur !== start_node){
        Path.push(cur);
        cur = cur.prev;
    }

    const VisPath = async()=>{
        for(let p = Path.length-1;p >= 0; p--){
            await sleep(50);
            let sp = document.getElementById(`${Path[p].i}-${Path[p].j}`);
            sp.className = 'shortPath';
        }
    }
    VisPath();
}


