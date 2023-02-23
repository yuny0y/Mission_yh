function solution(arr1, arr2){
	let answer=0;

  for (let i = 0; i < arr1.length; i++){
    if (29 <= arr2[i]){ //29보다 크거나 같은, 즉 5시 이상 체크아웃이면
      arr2[i] = 21 //21로 선언
    }
    let time = arr2[i] - arr1[i] //하루 공부한 시간 = 체크아웃 - 체크인
    answer += time //answer에 더해 주기
  }
}	return answer; //반환