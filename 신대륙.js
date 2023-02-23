function solution(month, day){

    let date = new Date(2023, month - 1, day + 98); //month는 0부터 시작 그래서 원래 달보다 -1, 98일 뒤 = +98 
    let new_month = date.getMonth() + 1 //month는 0부터 시작, +1로 변수 선언
    let new_date = date.getDate() //일을 변수 선언
  
    let result= `${new_month}월 ${new_date}일` //백틱을 사용해서 변수 선언
}     return result; //반환