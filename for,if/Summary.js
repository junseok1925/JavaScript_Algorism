//  1~4일차 알고리즘 정리

//  직사각형 별찍기

// [문제링크](https://school.programmers.co.kr/learn/courses/30/lessons/12969)


// 1. 문제 설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 2. 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.


process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" "); // 문자열을 공백을 기준으로 나누고 배열로 저장
  const a = Number(n[0]),    // n[0]을 정수로 형변환 (5)
    b = Number(n[1]);        // n[1]을 정수로 형변환 (3)

  // b(3) 만큼 반복
  for (let i = 0; i < b; i++) {
    // stars 변수를 초기화 해준다.
    let stars = "";

    // 위 for문이 한번 돌아갈 때 마다 입력 값 a(5) 만큼 반복
    for (let j = 0; j < a; j++) {
      // stars = stars + "*"
      stars += "*";
    }

    // 콘솔에 현재 까지 저장된 stars 값을 찍는다. (*****)
    console.log(stars);

    // i가 b(3) 보다 작을 경우 맨 위로가 다시 for문을 시행한다.
  }
});



//  없는 숫자 더하기

// [문제링크](https://school.programmers.co.kr/learn/courses/30/lessons/86051)

// 1. 문제 설명
//   0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 	수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 2. 제한사항
//   1 ≤ numbers의 길이 ≤ 9
//   0 ≤ numbers의 모든 원소 ≤ 9
//   numbers의 모든 원소는 서로 다릅니다.
  

function solution(numbers) {
    var answer = 0;
    for(let i = 0; i < 10; i++){
        if(numbers.indexOf(i) == -1){
                // indexOf() : 특정요소의 인덱스를 구한다 만약 찾고자하는 인덱스가 없으면 -1를 리턴 
            answer += i;
        }
    }
    
    return answer;
}

//  indexOf()
// : 배열에서 지정한 요소를 찾아 그 index를 반환 찾고자하는 요소가 없으면 '-1'를 리턴

// ex) 

const fruits = ['apple', 'banana', 'orange', 'apple', 'pineapple'];

fruits.indexOf('apple');  // 배열안에 apple이 존재하기 때문에 apple의 index값 '0'을 리턴
fruits.indexOf('grape');  // 배열안에 'grape'가 존재하지 않기 때문에 '-1'를 리턴



//  문자열을 정수로 바꾸기

// [문제링크](https://school.programmers.co.kr/learn/courses/30/lessons/12925)

// 1. 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 2. 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
// 3. 입출력 예
// 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

// **완전 간단하게 풀기**


function solution(s) {
    return Number(s);   // 문자열을 정수로 형변환
}

//  Number(s)
// : 인수를 숫자로 변환한다 's'값이 '123'이면 숫자로 변환이 가능하지만,
// 	'abc'처럼 문자열은 **'NaN(Not a Number)'**이 된다.**
//     숫자가 아닌 문자열를 변환하려고 할 때는 'parseInt()'나 'parseFloat()'함수를 사용하는게 더 적합하다.
    


//  x만큼 간격이 있는 n개의 숫자

// [문제링크](https://school.programmers.co.kr/learn/courses/30/lessons/12954)

// 1. 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 2. 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.



function solution(x, n) {
    var answer = [];
    let arr = x;
    for(let i = 0; i < n; i++){
        answer.push(arr);
        arr += x;
    }
    return answer;
}

//  answer.push(arr)
// 'answer'배열 마지막에 'arr'배열 전체를 추가하는 함수 즉, 'answer'배열에는 'arr'배열 자체가 이중배열형식으로 저장된다.
//     무슨뜻이냐, 만약 arr=[456], answer=[123] 일때.
//     answer.push(arr) 실행 결과는 answer = [ 123, [456] ]이 된다
// * 주의할점
// 1. push하면 answer배열안 마지막에 arr배열 자체를 추가하는 것이다
// 2. 이중배열형식이 된다



//  행렬의 덧셈

// [문제링크](https://school.programmers.co.kr/learn/courses/30/lessons/12950)

// 1. 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 2. 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.


function solution(arr1, arr2) {
    let answer = [];		// 빈 배열을 만들어서 두 개의 2차원배열을 더한 결과를 담기위해
    for(let i = 0; i < arr1.length; i++){
            answer[i] = [];	// arr1과 arr2배열이 이중배열이므로, answer배열도 이중배열로 만들어야함
      						// answer배열의 각 index에 빈 배열을 할당하여 이중 배열로 만들어준다
            for(let j = 0; j < arr1[i].length; j++){
                    answer[i].push(arr1[i][j] + arr2[i][j]);
            		// i=1, j=1...i=5, j=1~4까지 반복되므로 arr1[5][1~4] + arr2[5][1~4]의 값들을 더하게된다
              		// answer배열의 i번째 index에 할당된 빈 배열을 참조
              		// push()메소드를 사용하여 arr1[i][j] + arr2[i][j]의 값을 해당 배열에 추가하면
              		// answer배열의 각 index에는 arr과 arr2의 해당 index에 있는 값을 더한 결과가 담긴 이중 배열이 만들어진다.
                }
        }
    return answer;
}




//  로또의 최고순위와 최저 순위

// [문제링크](https://school.programmers.co.kr/learn/courses/30/lessons/77484)

// 1. 문제설명
// 로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다. 당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
// 알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다. 당첨 번호 6개가 31, 10, 45, 1, 6, 19라면, 당첨 가능한 최고 순위와 최저 순위의 한 예는 아래와 같습니다.


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



//  숫자 문자열과 영단어

// [문제링크](https://school.programmers.co.kr/learn/courses/30/lessons/81301)

// 1. 문제설명
//   네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

//   다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

//   1478 → "one4seveneight"
//   234567 → "23four5six7"
//   10203 → "1zerotwozero3"
//   이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 2. 제한사항
// 1 ≤ s의 길이 ≤ 50
// s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
// return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다


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
  	// 만약 i가 3이라면 stringNums[3]은 "three"이기때문에, "three"를 기준으로 문자열이 쪼개진다
	// answer이 ['12three45']이라면 ['2','45']가 된다
    // 다시 join[i]으로 합치면 없어진 three부분에 3이 들어간다 왜냐면 three가 기준으로 쪼개길때 i의 값은 3이기 때문
  }
  return Number(answer);
}




//  소수 만들기

// [문제링크](https://school.programmers.co.kr/learn/courses/30/lessons/12977)

// 1. 문제 설명
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// 2. 제한사항
// nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.



function solution(nums) {
    let result = 0;

    //numsSum이 소수인지 아닌지 ture, false로 판별
    function isPrime(numsSum) {
        for (let i = 2; i < numsSum; i++) {
            //2로 나눠서 나누어 떨어지면 소수가아님, 나누어떨어지지않으면 소수이므로 i를 2로 선언
            if (numsSum % i === 0) {
                return false;
            }
        }
        if (numsSum > 1) { //소수는 1과 자기자신으로 밖에 나눠떨어지지 않으므로 1보다 커야한다
            return true;
        }

    }

    //nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return시키기
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let numsSum = nums[i] + nums[j] + nums[k];
                //num[i] + num[i+1] + num[i+1+1] 즉 i가 1일때 num의 각배열방마다의 값을 더한다

                if (isPrime(numsSum)) { // isPrime : 소수인지 판별하는 함수(true , false)
                    result++;         // numsSum이 소수일때마다 answer에 1씩 증가 리턴
                }
            }
        }
    }
    return result;
}




//  소수 찾기

// [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12921?language=javascript)

// 1. 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 2. 제한 조건
// n은 2이상 1000000이하의 자연수입니다.


function solution(n) {
  // 소수의 개수를 저장할 변수
  let primeCount = 0;
  
  // 2부터 n까지의 반복문으로 돌며 소수인지 검사하기
  for(let i = 2; i <= n; i++){
    let isPrime = true;
    
    // 2부터 i-1까지의 모든 수로 나눠서 소수인지 검사하기
    for(let j = 2; j < i; j++){
      if(i % j === 0){ // 나누어 떨어지는 경우 소수가 아니다
        isPrime = false;
        break; // 반복문을 빠져나옴
      }
    }
    
    if(isPrime){ // 소수인 경우 count를 증가시킨다
      primeCount++;
    }
  }
  
  return primeCount;
}



