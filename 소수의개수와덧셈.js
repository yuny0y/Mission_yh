function solution(s){
	let answer="";
    let arr =s.split(" ");
    let abc = (value) => {
        for(let i = 2; i<=Math.sqrt(Number(value)); i++) {
            if(Number(value) % i ==0) {
                return false;
            }
        } return true;
    };
    let max = 0;
    let min = 1000;

    for(let i =0; i<arr.length; i++){
        if(abc(arr[i])){
            if(arr[i] > max){
                max=arr[i]
            }
        }else {
            if(arr[i] < min) {
                min =arr[i]
            }
        }
    } 
    answer = min +" "+max;
  return answer;
}
let s="97 75 88 99 95 92 73";

console.log(solution(s))