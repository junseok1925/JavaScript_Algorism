function solution(N, arr1){
  let x = [1, -1, 0, 0, 1, 1, -1, -1];
  let y = [0, 0, 1, -1, 1, -1, 1, -1];
  let answer = [];
  for(let i = 0; i < N; i++){
    let line = [];
    for(let j = 0; j < N; j++){
      if(arr1[i][j] === '*') line.push('*');
      else{
        let count = 0;
        for(let k = 0; k < 8; k++){
          let nx = i + x[k];
          let ny = j + y[k];
          if(nx >= 0 && nx < N && ny >= 0 && ny < N && arr1[nx][ny] === '*') count++;
        }
        line.push(count);
      }
    }
    answer.push(line);
  }
  return answer;
}
let N = 5;
let arr1 = [['1', '.', '.', '.', '.'],
['.', '.', '3', '.', '.'],
['.', '.', '.', '.', '.'],
['.', '4', '.', '.', '.'],
['.', '.', '.', '9', '.']];
console.log(solution(N, arr1));