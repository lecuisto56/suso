 
// var fs = require("fs");
 //var grid = fs.readFileSync(process.argv[2],"utf8").split("");
 //grid1 = [grid];
 //console.log(grid1);
 let grid = [
    [1,9,5,7,8,4,2,0,0],
    [3,0,6,5,2,9,1,4,7],
    [4,7,2,1,0,3,9,8,5],
    [6,3,7,8,5,2,4,1,9],
    [8,5,9,6,0,1,7,3,2],
    [2,1,4,3,9,7,6,5,8],
    [9,2,0,4,1,8,5,7,6],
    [5,0,8,9,7,6,3,2,1],
    [7,6,1,2,3,5,8,0,4],
 ]
 
 function affiche(grid){
    if(!Array.isArray(grid)){
      if(!Array.isArray(grid[0])){
        console.log("Ceci n'est pas une matrice")
        return false
      }
      console.log("Ceci n'est même pas un tableau")
      return false
    }
    grid.forEach( (y, i) => {
      if(i % 3 == 0) console.log("---+---+---")
        line = []
        y.forEach( (v, index) => {
          if(index % 3 == 0 ) line.push("|")
          line.push(v)
        })
      console.log(line.join(""))
      })
      return true
  }
  
  function possible(grid, y, x, n){
    for(let i = 0 ; i < 9 ; i++){
      if(grid[y][i] == n){
        return false
      }
    }
    for(let i = 0 ; i < 9 ; i++){
      if(grid[i][x] == n){
        return false
      }
    }
    x0 = Math.floor(x/3) * 3
    y0 = Math.floor(y/3) * 3
    for(let i = 0 ; i < 3 ; i++){
      for(let j = 0 ; j < 3 ; j++){
        if(grid[y0 + i][x0 + j] == n){
          return false
        }
      }
    }
  
    return true
  }
  
  function solve(grid){
    for(let y = 0 ; y < 9 ; y++){
      for(let x = 0 ; x < 9 ; x++){
        if(grid[y][x] == 0){
          for(let n = 1 ; n < 10 ; n++){
            if(possible(grid, y, x, n)){
              grid[y][x] = n 
              solve(grid) 
              grid[y][x] = 0 
            }
          }
          return
        }
      }
    }
    
   
affiche(grid)
    
    
  }
          
  
  solve(grid)