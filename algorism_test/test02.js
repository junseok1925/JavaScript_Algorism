// 'O'는 정답 'X'는 오답
// 정답을 연속으로 맞추면 1+count(정답맞춘횟수)
// 총 점수를 구해라

function solution(str){
	let answer = 0;     // 총 점수 저장변수
    let count = 0;      // 맞춘횟수 저장변수
// }  <- 중괄호 실수함 ;;;
    for (let i = 0; i < str.length; i++){   // 오류해결 : i <= str.length; 문자열의 index는 0부터 시작하므로 '=' 등호 빼기
        if(str[i] === 'O'){
            count++;         // 맞춘횟수 누적
            answer += count; // 맞춘횟수를 누적을 총 점수 저장변수(answer)에 저장
                             // 맞추면 줄 점수도 지정해줘야하나 했지만 생각해보니 어차피 맞추면 맞춘 횟수를 누적해서 저장해주는게 그게그거라 해결함
        }else{
            count = 0;       // 조건식에 맞지않으면('O'가 아니면) 점수없음.
        }
    }
            return answer;
    //}  <- for문 중괄호 실수함 ;;;;
    
}
let str="OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str)); // 27 나와야함
