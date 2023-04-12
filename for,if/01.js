// 문제 설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.

const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.on('line', (input) => {
const [n, m] = input.split(' ').map(Number);
for (let i = 0; i < m; i++) {
console.log('*'.repeat(n));
}
rl.close();
});

// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

function solution(num) {
    if(num % 2 === 0 || num === 0){ //num이 짝수이거나 0일때
        return "Even";
    }else{
        return "Odd";
    }
    
    return answer;
}

// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
    var answer = '';
    
    if(s.length % 2 == 0){
        answer = s[s.length/2 - 1] + s[s.length/2]; //짝수일 경우 가운데 두 글자를 리턴하기 위해 조건 두개를 설정
    }else{
        answer = s[Math.floor(s.length/2)]; //위에 조건에 맞지않는다면 홀수 이므로 2로 나눠서 반올림을 하면 가운데 글자의 배열위치값을 구할 수 있다
    }
    return answer;
}

// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
// 입출력 예
// 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

function solution(s) {
    return Number(s);   //간단히 문자열을 숫자로 변환시키는 매서드 사용 ( Number )
}  

// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

function solution(numbers) {
    var answer = 0;
    for(let i = 0; i < 10; i++){
        if(numbers.indexOf(i) == -1){   //string.indexOf(i) : 
                                        //string = 찾을 문자열, i = 찾을 특정 문자열 -- 검색된 문자열이 '첫번째'로 위치 index를 리턴 / 찾는 문자열이 없으면 "-1 "를 리턴 
            answer += i;                // 대소문자를 구분한다.
        }
    }
    
    return answer;
}

// 음양 더하기
// 문제 설명
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

function solution(absolutes, signs) {
    let result = 0;
      for(let i = 0; i < signs.length; i++){
        if(signs[i] === false){                 // sign[i]번째 배열의 값이 음수면 ~ (음수는 false, 양수면 true)
          absolutes[i] = absolutes[i] * -1      // 조건식에 걸린 음수를 양수를 바꾸는 작업
        }
        result += absolutes[i]
      }
    return result;
  }

https://school.programmers.co.kr/learn/courses/30/lessons/12944
// 평균 구하기
// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

function solution(arr) {
    return arr.reduce((a,b)=>a+b,0)/arr.length; //reduce함수를 이용 arr배열값들의 합 구하기
}

https://school.programmers.co.kr/learn/courses/30/lessons/12954
// x만큼 간격이 있는 n개의 숫자
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

function solution(x, n) {
    var answer = [];
    let arr = x;                    //정수x값을 저장할 변수 arr생성
    for(let i = 0; i < n; i++){     //입력받은 자연수n만큼 반복
        answer.push(arr);           //n번 반복만큼 answer에 arr(x값)값을 넣기전에 초기x의 값도 넣어야함 
        arr += x;                   //n번 반복해서 x의값을 x씩 증가해서 넣기
    }
    return answer;
}

https://school.programmers.co.kr/learn/courses/30/lessons/82612
// 부족한 금액 계산하기
// 문제 설명
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// 제한사항
// 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
// 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
// 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수

function solution(price, money, count) {
    let totalPrice = 0; /           //가지고있는 돈을 일단 0으로 설정
    
    for(let i=1;i<=count;i++){      //놀이기구는 1번타는 것 부터 시작으므로
        totalPrice += price * i;
                                    //총액 = 총액 + (가격 * 놀이기구탄 횟수) = 총 놀이기구를 탈때 쓴 금액
    }
    
    return money > totalPrice ? 0 : totalPrice - money
                                    //자신이 가진 금액이 놀이기구탑승총액보다 크면 0을 리턴
                                    //적으면 총액 - 자신이 가진 돈
}

https://school.programmers.co.kr/learn/courses/30/lessons/12901

// 2016년
// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

function solution(a, b) {
    // 윤년은 2월이 29일까지 1년이 366일이다.

    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const dayofMonths = [31,29,31,30,31,30,31,31,30,31,30,31]; //1월은31일까지, 2월은 29일까지 .... 12월은 31일까지 있다

    let day = b+4; // 1월 1일이 금요일 이므로 b가 1일 때 기본인덱스day는 5이다.
                   // 1월은 이전 월의 일수를 더하지 않음으로 a-1 조건으로 해야한다.(배열은0부터 시작이기때문)

    for(let i = 0; i < a-1; ++i){
        day += dayofMonths[i];
    }
    return week[day%7];
}

https://school.programmers.co.kr/learn/courses/30/lessons/12910

// 나누어 떨어지는 숫자 배열
// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.


function solution(arr, divisor) {
    var answer = [];
    for(i=0; i<arr.length; i++) {
      if(arr[i] % divisor == 0) {       // = divisor로 나눴을때 나누어 떨어지는 값
        answer.push(arr[i]);            // 조건에 맞는 값을 arr에 push(집어넣기)
      }
    }
    if(answer.length == 0) {            // = 하나도 나누어떨아지지않는 값이 있으면 "-1"를 리턴
      answer.push(-1);
    }
    answer.sort((a,b) => a - b);        //오름차순정렬
    return answer;
}

https://school.programmers.co.kr/learn/courses/30/lessons/70128

// 내적
// 문제 설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 제한사항
// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

function solution(a, b) {
    var answer = 0;
    for(let i = 0; i < a.length; i++){
        answer += a[i]*b[i]  //a[i]*b[i] + a[i]*b[i]
    }
    return answer;
}

https://school.programmers.co.kr/learn/courses/30/lessons/12916

// 문자열 내 p와 y의 개수
// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.

function solution(s){
    var answer = true;

    s = s.toUpperCase();
    var num = 0;
    for(var i = 0; i < s.length; i++){
        //if문으로 문자열 s에 i번 배열에 'P'가 있으면 num++
        if(s[i] === 'P'){ 
            num++;
        }
        //if문으로 문자열 s에 i번 배열에 'P'가 있으면 num--
        if(s[i] === 'Y'){
            num--;
        }
    }
    if( num === 0 ){
        //최종적으로 'P'와 'Y'갯수가 같으면 num의 값은 0이 된다
        answer = true;
    }else{
        answer = false;
    }

    return answer;
}

https://school.programmers.co.kr/learn/courses/30/lessons/12918

// 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다

function solution(s) {
    var answer;
    if(s.length === 4 || s.length === 6){
        if(isNaN(s)){ //s가 number이 아니면 false 리턴
            answer = false;
        } else {
            answer = true; // number이면 true 리턴
        }
    } else {
        answer = false;
    }
    
    return answer;
}

https://school.programmers.co.kr/learn/courses/30/lessons/12919

// 서울에서 김서방 찾기
// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.

function solution(seoul) {
    var answer = '';
        for( let i = 0; i < seoul.length; i++){
            if(seoul[i] === "Kim"){
                return answer = "김서방은 "+i+"에 있다" //`김서방은${i}에 있다`
            }
        }
    
    return answer;
}

https://school.programmers.co.kr/learn/courses/30/lessons/12922

// 수박수박수박수박수박수?
// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.

function solution(n) {
    var answer = '';
    for(let i = 0; i < n; i++){
        if(i%2==0){
            answer += '수';  
        }else{
            answer += '박';
        }
    }
    return answer;
}

//function solution(n){
//     return '수박'.repeat(n).substr(0,n)
// }

https://school.programmers.co.kr/learn/courses/30/lessons/42576

// 완주하지 못한 선수
// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

function solution(participant, completion) {
    let part = participant.sort(); //오름차순으로 정리해서 비교하기 쉽게하기 //선수들 이름의 배열
    let cplt = completion.sort();  //오름차순으로 정리해서 비교하기 쉽게하기 //완주한 선수들의 이름 배열
    var answer = '';
    
    for(let i = 0; i <= participant.length; i++){
        if(part[i] !== cplt[i]){
            return answer = part[i];
        }
    }
    return answer;
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

// 당첨 번호	31	10	45	1	6	19	결과
// 최고 순위 번호	31	0→10	44	1	0→6	25	4개 번호 일치, 3등
// 최저 순위 번호	31	0→11	44	1	0→7	25	2개 번호 일치, 5등
// 순서와 상관없이, 구매한 로또에 당첨 번호와 일치하는 번호가 있으면 맞힌 걸로 인정됩니다.
// 알아볼 수 없는 두 개의 번호를 각각 10, 6이라고 가정하면 3등에 당첨될 수 있습니다.
// 3등을 만드는 다른 방법들도 존재합니다. 하지만, 2등 이상으로 만드는 것은 불가능합니다.
// 알아볼 수 없는 두 개의 번호를 각각 11, 7이라고 가정하면 5등에 당첨될 수 있습니다.
// 5등을 만드는 다른 방법들도 존재합니다. 하지만, 6등(낙첨)으로 만드는 것은 불가능합니다.
// 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다. 이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// lottos는 길이 6인 정수 배열입니다.
// lottos의 모든 원소는 0 이상 45 이하인 정수입니다.
// 0은 알아볼 수 없는 숫자를 의미합니다.
// 0을 제외한 다른 숫자들은 lottos에 2개 이상 담겨있지 않습니다.
// lottos의 원소들은 정렬되어 있지 않을 수도 있습니다.
// win_nums은 길이 6인 정수 배열입니다.
// win_nums의 모든 원소는 1 이상 45 이하인 정수입니다.
// win_nums에는 같은 숫자가 2개 이상 담겨있지 않습니다.
// win_nums의 원소들은 정렬되어 있지 않을 수도 있습니다.

function solution(lottos, win_nums) {
    let zero = 0;     // 로또번호 배열에서 0의 갯수를 저장하는 변수
    let wincont = 0;  // 로또번호 배열과 당첨번호 배열에서 서로 일치하는 숫자의 개수를 저장할 변수
    for (let i = 0; i < lottos.length; i++) {
      if (lottos[i] === 0){   //로또번호배열에 0이 있으면 zero변수에 1씩증가
          zero++;
      }else if(win_nums.includes(lottos[i])){ // 로또번호배열에 win_nums(당첨번호 배열)과 일치하는 숫자가 있으면 
          wincont++;                          // wincont에 1씩 증가 
      }
    }
    let maxRank = Math.min(7 - (wincont + zero), 6); //(7 - wincont + zero)의 값과 6을 비교해 더 작은수를 최고 당첨순위로 정함
    let minRank = Math.min(7 - wincont, 6); //(7 - wincont)의 값과 6을 비교해 더 작은 값을 최저순위로 정한다(왜냐면 최저순위는 zero의 값 중 당첨번호와 일치하는 번호가 하나도 없다는 가정이 있어야 최저순위를 구할수있어서)
    return [maxRank, minRank];
  }
  
