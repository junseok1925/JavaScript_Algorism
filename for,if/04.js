// 약수의 개수와 덧셈
// (https://school.programmers.co.kr/learn/courses/30/lessons/77884)

// 1. 문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 2. 제한사항
// 1 ≤ left ≤ right ≤ 1,000


//약수란 어떤수(a)를 나누어 떨어지게 하는 수(b)들 = b는 a의 약수다
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
       // i 대신 바로 left를 넣었으나 안됨 - 반복문이 left값만 처리하고 끝나버리기 때문
   if (Math.sqrt(i) === Math.floor(Math.sqrt(i))){
       // i가 약수의 갯수가 짝수면 else로 넘어감
       // 만약 i = 2 2의 제곱근은 1.4142... 이므로 false
       // 만약 i = 4 4의 제곱근은 2 이므로 true
       // 결론 : 정해진숫자의 제곱근이 정수면 약수의 갯수가 홀수이다.
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}


// 약수의 합
// (https://school.programmers.co.kr/learn/courses/30/lessons/12928)

// 1. 약수의 합
// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 1. 제한 사항
// n은 0 이상 3000이하인 정수입니다.


function solution(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {
        if( n % i === 0){
            // 정해진 수(n)을 나눠떨어지게하는 숫자가 n의 약수 이기때문에
            // 반복문으로 n을 나눠떨어지게하는 숫자를 모두 구해서
            // 해당 조건식에 ture면 answer에 i(n의 약수)를 모두 더한다
            answer += i;
        }
    }
    return answer
}


// 나머지가 1이 되는 수 찾기

// (https://school.programmers.co.kr/learn/courses/30/lessons/87389)

// 1. 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

// 2. 제한사항
// 3 ≤ n ≤ 1,000,000


// 문제설명
// n을 x로 나눴을때 나머지가 1이 될때 x의 가작 작은 자연수 (n % x = 1)   
function solution(n) {
    var answer = 0;
    let num = 0;
    for(let i = 1; i <= n; i++){
        if( n % i == 1){    // i가 x의 역할을 대신해서 계산한다 나머지가 1이 나오는 i의 값을 구한다
            x = i;
            return x; 
        }
    }
    return answer;
}


// 예산

// (https://school.programmers.co.kr/learn/courses/30/lessons/12982)

// 1. 문제 설명
//   S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

//   물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

//   부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

// 2. 제한사항
// d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
// d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
// budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.


// 문제 핵심만 요약해보기
// 물품을 구매해 줄 때는 신청한 금액만큼을 모두 지원해 줘야핟다
// 1000원을 신청하면 1000원보다 적게 지원해 줄 수는 없다.
// 신청한 금액 = d[], 예산 = 변수 budget
// 만약 1번부서 5원 2번부서 3원 3번부서 3원 총 11원일때
// 예산(budget)이 10원이면 1,2번 부서만 지원이 가능하므로  result는 2가 나온다
function solution(d, budget) {
    var answer = 0
    let money = 0;    //부서별 금액을 총 더한 값을 저장할 변수생성
    d.sort((a,b) => a - b); // 배열d 오름차순정렬(이거안해서오류)
    
        for(let i = 0; i < d.length; i++){
            money += d[i];  //d의 i번째 값( i번 부서의 신청금액)
            answer++;
            
        if(money > budget)
            answer --;
            // break;를 하면안댐, 가능한 모든 부서를 탐색해야하기때문에
            // 예산이 3이고 3번째 부서까지 지원한금액이 3원이여도 흐름상 다음 부서도 확인해야하기때문에
            // 다음 부서도 for문을 거치면서 answer++; 가 적용 그래서 다시 answer--;를 적용
            // break를 사용하면 4번째 부서까지 지원이 된다 결과가 나옴
      }
        return answer;
    }
    



// 최대공약수와 최소공배수

// (https://school.programmers.co.kr/learn/courses/30/lessons/12940)

// 1. 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 2. 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.


function solution(n, m) {
    var answer = [];
    
    let max = 0;
    let min = 0;
    let cal = n > m ? n : m // n과 m중 큰수를 cal에 넣는 삼항연산식
    
    for( let i = 0; i <= cal; i++){
        if( n % i == 0 && m % i ==0){
            // i가 n과 m으로 모두 나누어 떨어지는가
            // 만약 ture면 최대공약수이다
            // 왜냐면 최대공약수는 약수 중에서 가장 큰 수이다
            // n과 m이 동시에 나누어 떨어져야하는 수 이고,
            // 그 중 가장 큰 수 이므로 해당식을 쓴다.
            max = i;
        }
    }
    min = n * m / max;
    // 최소공배수란? 두 개의 숫자의 공통된 배수 중 가장 작은 값
    // 두 수의 공통 최소공배수 구하는 법 :
    // 두수를 곱하고 최대공약수로 나누면 된다.
    
    answer = [max,min]; //max와 min값을 미리 answer에 담기
    return answer;
    
    // return [max,min]; -> 이렇게 해두되나 문법 이해상 하지말라더라... 
}


// K번째수


// (https://school.programmers.co.kr/learn/courses/30/lessons/42748)

// 1. 문제 설명
//   배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

//   예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

//   array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
//   1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
//   2에서 나온 배열의 3번째 숫자는 5입니다.
//   배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 2. 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.


// 문제 요약
// 1. arr의 i번 ~ j번까지 자르고 정렬했을때 그 사이에 k번째에 있는 수를 구한다
// 2. [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3 일때
// 3. 리턴 값은 [5, 2, 6 ,3] -> index순이 아니다(i-1번째이상부터 (i-1)배열부터 j-1번 이하 까지의 배열생성)
// 4. 새로 생성된 배열을 오름차순으로 정렬 후 그 중 k번째 값을 구해서 return(index로 계산하면 k-1번의 값을 리턴해야함)

function solution(array, commands) {
    var answer = [];
    
    for(let a = 0; a < commands.length; a++){
        let i = commands[a][0];     // 이중배열에 0번째 배열안에 0번방 값(i -> 자르기 시작한 부분)
        let j = commands[a][1];     //                     1번방 값(j -> 자르기 끝나는 부분)
        let k = commands[a][2];     //                     2번방 값(k -> 잘라진 배열에서 값을 뻬올 배열방 번호)
        
        let cutArray = array.slice(i-1,j);
        cutArray.sort((a,b) => a - b);
        answer.push(cutArray[k-1]);
    }
    
    return answer;
}








