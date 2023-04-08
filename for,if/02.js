https://school.programmers.co.kr/learn/courses/30/lessons/12930

// 이상한 문자 만들기
// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

function solution(s) {
    let answer = [];
    let result = s.split(" ")       // 문자열 s를 공백을 기준으로 쪼개서 배열으로 만든다

    for (let i = 0; i < result.length; i++) {           // i의 for문 : 쪼갠 문자열의 배열방에 대한 for문이다
        let sum = '';

        for (let j = 0; j < result[i].length; j++) {    // j의 for문 : 쪼갠 문자열의 배열방안에 단어하나하나에 대한 for문이다.
            if (j % 2 === 0) {
                sum += result[i][j].toUpperCase()       //i배열방에 j번째 글자를 대문자로
            } else {
                sum += result[i][j].toLowerCase()       //i배열방에 j번째 글자를 소문자로
            }
           
        }
        answer.push(sum) //sum를 answer에 push
    }
    //마지막으로 분리된 배열을 공백을 기준으로 하나의 문자열로 합쳐서 return
    return answer.join(' ')
}

https://school.programmers.co.kr/learn/courses/30/lessons/12931

// 자릿수 더하기
// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

function solution(n){
    var answer = 0;
    var num = String(n);    //자릿수 index를 for문으로 접근해서 각 자릿수를 더해줄라면 데이터타입을 숫자가 아닌 String형태로 형변환해줘야 한다.
    
    for ( let i = 0; i < num.length; i++) {
        answer += Number(num[i]);   //위에서 변경된 String형태를 다시 Number함수로 정수형으로 형변환해서 리턴
    }
    return answer;
}

https://school.programmers.co.kr/learn/courses/30/lessons/12932

// 자연수 뒤집어 배열로 만들기
// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

function solution(n) {
    var answer = [];
    n = n + ""; //암시적 형변환 : 숫자와 문자열을 더하면 자동으로 문자열로 형변환
    for (var i = n.length - 1; i >= 0; i--) { //역순으로 넣기 위해 i++이 아닌 i--
        //i를 n.length-1로 한이유 : n.length를 index값형식으로 표현하기 위해
        answer.push(Number(n[i])); //배열형식으로,정수형으로 변환해서 push
    }
    return answer;
}


https://school.programmers.co.kr/learn/courses/30/lessons/12933

// 정수 내림차순으로 배치하기
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.

function solution(n) {
    let num = n.toString();            // n을 문자열로 형변환 후 변수 num에 저장
    num = num.split('');               // split으로 각 단어들을 자른 후
    num = num.sort((a, b) => b - a);   // 내림차순 정렬
    num = num.join('');                // 다시 문자열로 합치기
    return Number(num);                // 다시 문자열로 변환해서 리턴
  }

  
  