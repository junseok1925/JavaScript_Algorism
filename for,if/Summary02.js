// 3진법 뒤집기

// [문제링크](https://school.programmers.co.kr/learn/courses/30/lessons/68935)

// 1. 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 2. 제한사항
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
//     return ans.reduce((a,b,i) => a+b(Math.pow(3,i),0))
// }


// string.split(separator, limit)

// 1. split() : 문자열(string)을 'separator'로 잘라서 'limit'크기 이하의 배열에 잘라진 문자열을 저장하여 리턴

// 2. 'separator' : 생략가능, 문자열을 잘라줄 구분자, 값이 입력되ㅈ; 않으면 문자열 전체를 배열에 담아서 리턴한다.

// 3. 'limit' : 생략가능, 최대 분할 갯수( 3이면 3이하의 배열에 잘라진 문자열을 저장)


// arr.reverse()
//  reverse()는 이 함수를 호출한 배열을 거꾸로 뒤집고, 그 배열을 가리키는 참조값을 반환
// 따라서, 이 함수를 실행시키면 원본 배열이 변형된다.

// arr.join([separator])
//   'eparator'는 매개변수로, 배열의 각 요소를 구분할 문자열이다. 이 구분자는 필요한 경우 문자열로 반환되고, 생략하면 배열의 원소들이 쉼표로 구분된다.
//  ex)

const arr = ['a','b','c'];
console.log(arr.join()); // a,b,c
console.log(arr.join('')) // abc
console.log(arr.join(/)); // a/b/c


// parseInt(string, radix)
// 1. string : 숫자로 변환할 문자열
// 2. radix : string 문자열을 읽을 진법(3진법,10진법...36진법)

// ex)

// parsInt("7"); // 문자열 "7"을 숫자로 변환여 정수 7를 리턴
// parsInt("-7"); // ... 정수 음수 -7를 리턴
// parsInt(7);	// 파라미터로 문자열이 아닌 다른 타입의 값이 전달되면 문자열로 자동 변환하여 처리
// parsInt("7seven") // 문자열의 첫글자가 숫자이고 그 후  다른 문자열이 나올경우 숫자아닌 다른 문자열 이후의 값은 무시하고 그 이전의 숫자만 정수로 변환한다.
// parsINT("A7"),("") // 첫글자가 숫자가 아니거나 아예 공백이면 NaN(Nat a Number)를 반환

// radix(진법) 입력시


// parseInt("10",2) // "10"을 2진법으로 읽어서,10진법으로 변환한 값 "2"를 리턴
// parasInt("2",2) // 2진법에는 "2"라는 숫자가 없으므로, NaN 리턴




// 모의고사

// [문제링크](https://school.programmers.co.kr/learn/courses/30/lessons/42840)

// 1. 문제 설명
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 2. 제한 조건
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.


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


// filter

// const newArray = arr.filter(callbackFn(element, index, array), thisArg);


//  filter()함수의 매개변수는 callbackFn과 thisArg
// callbackFn에는 3개 매개변수를 사용할 수 있다.
// 1. element : 요소의 값
// 2. index : 요소의 인덱스
// 3. array :  사용되는 배열 객체
// 4. thisArg : filter에서 사용될 this값, 사용하지않아도 되지만 undefined가 전달됨


(function test(){
const testArray = [1,2,3,4,5];
const newArray = testArray.filter(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    });
})(); 

// ![](https://velog.velcdn.com/images/rkdwnstjr16/post/2be6351d-5861-4691-902e-d071f3a81d1f/image.png)

// element : 순회하는 배열의 인자값 // 1 -> 2 -> 3 -> 4 -> 5
// index : 순회하는 그 인자값의 인덱스 // 0 -> 1 -> 2 -> 3 -> 4
// array : 현재 배열

