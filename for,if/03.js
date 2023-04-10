https://school.programmers.co.kr/learn/courses/30/lessons/68935

// 3진법 뒤집기
// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.

function solution(n) {
    var answer = 0;
    let tmp = n.toString(3);     // 10진법을 3진법으로
    tmp = tmp.split("");         // 배열로 만들기
    tmp = tmp.reverse();         // 반대로 정렬
    tmp = tmp.join("");          // 문자열로 합치기
    answer = parseInt(tmp,3);    // 다시 10진수로 만들기 (변수, 현재진법)
    return answer;
}

// function solution(n){
//     const ans = [];
//     while(n !== 0){
//         ans.unshift( n % 3);
//         n = Math.floor(n/3);
//     }
//     return ans.reduce((a,b,i) => a+b*(Math.pow(3,i),0))
// }

https://school.programmers.co.kr/learn/courses/30/lessons/86491

// 최소직사각형
// 문제 설명
// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

// 아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

// 명함 번호	가로 길이	세로 길이
// 1	        60	     50
// 2	        30	     70
// 3	        60	     30
// 4	        80	     40
// 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.

// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

function solution(sizes) {
    let a = sizes.map((e,i) => sizes[i].sort((a,b)=> b-a))
    let b = a.map((b,j) => sizes[j][0])
    let c = a.map((c,j) => sizes[j][1])
    return Math.max(...b)*Math.max(...c)
}

// function solution(sizes) {
//     let a = [];
//     let b = [];
//     sizes.map((k) => {
//         a.push(k[0]>k[1] ? k[0]:k[1]);
//         b.push(k[0]<k[1] ? k[0]:k[1]);} );
//     return Math.max(...a) * Math.max(...b)
// }

// function solution(sizes) {
//     let maxW = 0;
//     let maxH = 0;
//     for (let i = 0; i < sizes.length; i++) {
//         const [w, h] = sizes[i];
//         maxW = Math.max(maxW, Math.max(w, h));
//         maxH = Math.max(maxH, Math.min(w, h));
//     }
//     return maxW * maxH;
// }

https://school.programmers.co.kr/learn/courses/30/lessons/12906

// 같은 숫자는 싫어
// 문제 설명
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

function solution(arr){
    var answer = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i + 1]){
           answer.push(arr[i]);
        }        
    }
    return answer;
}

https://school.programmers.co.kr/learn/courses/30/lessons/68644

// 두 개 뽑아서 더하기
// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    var answer = [];
    
    for(let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            let sum = numbers[i]+numbers[j];
            if(!answer.includes(sum)) answer.push(sum); //중복된값을 제외하고 answer에 배열로 집어넣기
        }
         
    }
    return answer.sort((a, b) => a-b); //오름차순정렬
}

https://school.programmers.co.kr/learn/courses/30/lessons/77484

// 로또의 최고 순위와 최저 순위
// 문제 설명
// 로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다. 아래는 로또의 순위를 정하는 방식입니다. 1

// 순위	당첨 내용
// 1	6개 번호가 모두 일치
// 2	5개 번호가 일치
// 3	4개 번호가 일치
// 4	3개 번호가 일치
// 5	2개 번호가 일치
// 6(낙첨)	그 외
// 로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다. 당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
// 알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다. 당첨 번호 6개가 31, 10, 45, 1, 6, 19라면, 당첨 가능한 최고 순위와 최저 순위의 한 예는 아래와 같습니다.

function solution(lottos, win_nums) {
    var answer = [];
    
    const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
    
    const zeros = lottos.filter(lotto => lotto === 0).length;
    console.log(correct, zeros);
    
    let min = 7-correct >= 6 ? 6 : 7-correct;
    let max = min-zeros < 1 ? 1 : min-zeros;
    
    answer = [max, min]
    return answer;
}

https://school.programmers.co.kr/learn/courses/30/lessons/42840

// 모의고사
// 문제 설명
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(answerSheet) {
    var answer = [];
    
    let pattern1 = [1,2,3,4,5];
    let pattern2 = [2,1,2,3,2,4,2,5];
    let pattern3 = [3,3,1,1,2,2,4,4,5,5];    //수포자들의 찍기 패턴
    
    let supoza1 = answerSheet.filter( (s, i) => s === pattern1[i%5] ).length;
    let supoza2 = answerSheet.filter( (s, i) => s === pattern2[i%8] ).length;
    let supoza3 = answerSheet.filter( (s, i) => s === pattern3[i%10] ).length;
    // filter함수를 이용해서 answerSheet를 순회하며 콜백함수에 따라 새로운배열을 만든다.
    // 인자 s와 i를 받으며 s는 answerSheet배열의 요소, i는 현재요소의 인덱스이다.
    // supoza1를 예로
    // i = 0 일 때: i % 5 = 0
    // i = 1 일 때: i % 5 = 1
    // i = 2 일 때: i % 5 = 2
    // i = 3 일 때: i % 5 = 3
    // i = 4 일 때: i % 5 = 4
    // i = 5 일 때: i % 5 = 0
    // i = 6 일 때: i % 5 = 1
    // i = 7 일 때: i % 5 = 2
    // i = 8 일 때: i % 5 = 3
    // i = 9 일 때: i % 5 = 4
    // i = 10 일 때: i % 5 = 0  -> 이런식으로 answerSheet의 i번의 값과 supoza1의 i번째 값을
    // 반복적으로 비교 answerSheet의 배열길이가 얼마나 길던 모두 비교가능(supoza1의 배열값들이 같은 패턴으로 반복되기 때문에 가능)
    //결론적으로 answerSheet와 supoza1의 값이 같으면 true를 반복하기때문에 값이 10개가 맞으면
    //answerSheet변수에 10저장
    
    let max = Math.max(supoza1, supoza2, supoza3);
    // filter로 만든 배열들의 각각의 최대값을 저장하는 새로운 max라는 변수생성
    // 만약 비교변수중 supoza1이 가장 값이 큰 10을 가지고 있으면
    // max에 10을 저장
    
    if(supoza1 === max) answer.push(1);
    if(supoza2 === max) answer.push(2);
    if(supoza3 === max) answer.push(3);
    //만약 max값이 10이고 supoza1의 값이 10이라면 
    //1등이라는 의미로 answer 배열에 1을 추가
    
    return answer;
}

https://school.programmers.co.kr/learn/courses/30/lessons/12915

// 문자열 내 마음대로 정렬하기
// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

function solution(s) {
    // return s.split('').sort().reverse().join('');
    return s = s.split('');
    return s = s.sort(); 
    return s = s.reverse();
    return s = s.join();
}

https://school.programmers.co.kr/learn/courses/30/lessons/12917

// 문자열 내림차순으로 배치하기
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
//   입출력            예
//    s	            return
// "Zbcdefg"       "gfedcbZ"

function solution(s) {
    return s.split('').sort().reverse().join('');
    // return s = s.split(''), 
    //        s = s.sort(),    
    //        s = s.reverse(), 
    //        s = s.join('');
    
//     split('') 메서드를 사용하여 문자열을 배열 요소로 쪼갠다. 즉, ['Z', 'b', 'c', 'd', e', 'f', 'g']가 만들어진다
// sort() 메서드를 사용하여 배열 요소를 오름차순으로 정렬. 이때, 문자열도 사전 순으로 정렬"Z"는 대문자라서 맨앞에 위치. 정렬된 배열은 ['Z', 'b', 'c', 'd', 'e', 'f', 'g']
// reverse() 메서드를 사용하여 배열 요소를 역순으로 뒤집는다 = ['g', 'f', 'e', 'd', 'c', 'b', 'Z']
// join('') 메서드를 사용하여 배열 요소를 하나의 문자열로 합치기. 따라서 리턴값은 'gfedcbZ'
}


https://school.programmers.co.kr/learn/courses/30/lessons/12977

// 소수 만들기
// 문제 설명
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

// function solution(nums) {
//     let result = 0;

//     //numsSum이 소수인지 아닌지 ture, false로 판별
//     function isPrime(numsSum) {
//         for (let i = 2; i < numsSum; i++) {
//             //2로 나눠서 나누어 떨어지면 소수가아님, 나누어떨어지지않으면 소수이므로 i를 2로 선언
//             if (numsSum % i === 0) {
//                 return false;
//             }
//         }
//         if (numsSum > 1) { //소수는 1과 자기자신으로 밖에 나눠떨어지지 않으므로 1보다 커야한다
//             return true;
//         }

//     }

//     //nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return시키기
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 let numsSum = nums[i] + nums[j] + nums[k];
//                 //num[i] + num[i+1] + num[i+1+1] 즉 i가 1일때 num의 각배열방마다의 값을 더한다

//                 if (isPrime(numsSum)) { // isPrime : 소수인지 판별하는 함수(true , false)
//                     result++;         // numsSum이 소수일때마다 answer에 1씩 증가 리턴
//                 }
//             }
//         }
//     }
//     return result;
// }

// ==================================하나의 함수만 사용해서==================================
function solution(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          let numsSum = nums[i] + nums[j] + nums[k];
          let isPrime = true;
          for (let i = 2; i <= Math.sqrt(numsSum); i++) {
            if (numsSum % i === 0) {
              isPrime = false;
              break;
            }
          }
          if (isPrime === true) {
            result++;
          }
        }
      }
    }
    return result;
  }
  
  https://school.programmers.co.kr/learn/courses/30/lessons/81301

//   숫자 문자열과 영단어
// 문제 설명
// img1.png

// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

function solution(s) {
    let answer = s; //문자열 s로 리턴받기 위해
    //answr의 영어단어로 되있는 부분과 비교하기위해 숫자를 문자열로 나타낸 값이 들어있는 변수 선언
    let stringNums = [  
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];
  for(let i = 0; i < stringNums.length; i++){ //반복해서 비교
    answer = answer.split(stringNums[i]).join(i); //split으로 쪼갠후 join으로 배열로 합쳐 저장
  }
  return Number(answer);
}