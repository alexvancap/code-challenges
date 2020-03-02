function mazeRunner(maze, directions) {
    let position = [0,0]
    maze.forEach(row => {
        position[1] ++
        for(let i=0; i < row.length; i++){
        position[0] = i+1
        if(row[i] == 2) return
        }
    })



    function findPosition(pos){
        let currentPos= [0,0]
        let found = 'Dead'
        maze.forEach(row => {
            currentPos[1]++
            for(let i=0; i < row.length; i++){
                currentPos[0] = i+1
                if(currentPos[0] == pos[0] && currentPos[1] == pos[1])
                    return found = maze[currentPos[1][currentPos[0]
            }
        })
    }
}


  var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

console.log(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]), "Finish", "Expected Finish");

