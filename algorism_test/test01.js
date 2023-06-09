// 동전은 500,100,50,10원이 있다
// 거스름돈 개수가 가장 적게 잔돈을 줄수있는 경우의 중, 준 동전의 갯수를 구해라
// 물건 가격은 10 < 1000
// 가지고 있는 돈은 1000원
// num : 물건가격
// coin : 거슬러 줄수있는 잔돈 배열
// count : 거슬러준 횟수

function solution(num){
	let answer= 0;
    let coin = [500,100,50,10];             // 반복문을 돌려서 가장 잔돈을 적게 줄수있는 경우를 구하기위해 
                                            // 큰수부터 내림차순으로 동전을 저장하는 배열을 만듬
    let count = 0;                          // 동전을 몇번 거스러줬는지 저장해주는 변수 생성

    for(let i = 0; i < coin.length; i++){   // 동전의 개수만큼 반복문을 돌리기
        count = Math.floor(num/coin[i]);    // num(물건가격)을 coin[i]방의 동전으로 나누고 Math.floor로 소수점을 날림 => 거슬러준 횟수가 된다
                                            // 만약 160원짜리 물건을 사면 i가 0일때는 160/500 = 0.32, 소수점 날리면 0 이므로 패스
                                            // i가 1일때는 160/100 = 1.6 소수점 날리면 1 즉, 한번 반복문을 돌릴때마다 가장 큰 동전으로 한번 거슬러준다.
        answer += count;                    // answer에 일단 거슬러준 횟수 저장
        num -= (count * coin[i]);           // num(물건가격) - count(거슬러준 횟수) * coin[i](이번 반복문에서 거슬러준 잔돈액수) = 반복문을 한번 돌렸을때 가장 큰 동전으로 최대한 줬으므로
                                            // (count * coin[i])은 한번 반복문을 돌릴때 거슬러준 동전의 총 액수가 된다.
                                            // 다시 남은 물건 가격에서 반복문을 돌려 나머지 잔돈을 준다.
    }
	return answer;
}
let num1 = 160;
console.log(solution(num1)); //결과 : 3나와야함