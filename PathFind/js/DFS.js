let unvisited_stack = [];
let find_node_dfs = false;
// Depth First Search
function DFS(start_node,target_node,speed){
    const dosearch = async()=>{

        //start_node push in to unvisited stack
        start_node.isVisited = true; 
        unvisited_stack.push(start_node);

        while(unvisited_stack.length > 0 ){
            // get node on stack
            let current_node = unvisited_stack.pop();
            // check current node visited or not
            if(!current_node.isVisited && !current_node.isWall){
                //visualize current node
                let c = document.getElementById(`${current_node.i}-${current_node.j}`);
                c.setAttribute('class', 'current'); 
                // search speed will be slow function
                await sleep(speed);
                //check current node is target node is true break the searching
                if(current_node == target_node){
                    find_node_dfs = true;
                    break;
                }
                current_node.isVisited = true;
                update_node(current_node);
            }
            findNeighbours_dfs(current_node);
        }
        shortestPath(start_node,target_node, find_node_dfs);
    }
    dosearch();
}
// Find neighbours on current node
function findNeighbours_dfs(node){
    let row = node.i;
    let col = node.j;
    //Left neighbour
    if(row >= 0 && col-1 >= 0){
        let left = grid[row][col-1];
        let temp = unvisited_stack.indexOf(left)
        if(temp == -1 && !left.isVisited && !left.isWall){
            left.prev = node;
            unvisited_stack.push(left);
        }
    }
     //Bottom neighbour
     if(row+1 < grid.length && col >= 0){
        let bottom = grid[row+1][col]
        let temp = unvisited_stack.indexOf(bottom);
        if(temp == -1 && !bottom.isVisited && !bottom.isWall){
            bottom.prev = node;
            unvisited_stack.push(bottom);
        }
    }
    //Right Neighbour
    if(row >= 0 && col+1 < grid[0].length){
        let right = grid[row][col+1];
        let temp = unvisited_stack.indexOf(right)
        if(temp == -1 && !right.isVisited && !right.isWall){
            right.prev = node;
            unvisited_stack.push(right);
        }
    }
    //Top neighbour
    if(row-1 >= 0 && col < grid[0].length){
        let top = grid[row-1][col];
        let temp = unvisited_stack.indexOf(top);
        if(temp == -1 && !top.isVisited && !top.isWall){
            top.prev = node;
            unvisited_stack.push(top);
        }
    }
    
}
