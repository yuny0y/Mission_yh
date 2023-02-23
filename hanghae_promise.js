// let promise = new Promise((resolve, reject) => {
//     //setTimeout(() => resolve('성공'), 1000);
//     setTimeout(() => reject(new Error('실패'), 1000));
// });

//promise.then(
//    result => alert(result),
//    error => alert(error)
//);

//promise.catch(alert);

// promise
// .finally(()=> alert('프라미스가 준비되었습니다.'))
// .then(result => alert(result));

// promise
// .finally(()=> alert('프라미스가 준비되었습니다.'))
// .catch(error => alert(error));

//----------- 체이닝
// class Thenable {
//     constructor(num) {
//         this.num = num;
//         console.log(this);
//     }
//     then(resolve, reject) {
//         alert(resolve);
//         setTimeout(()=> resolve(this.num*2),1000);
//     }
// }

// new Promise(resolve => resolve(1))
// .then(result => {
//     return new Thenable(result)})
// .then(alert);

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
//   ]).then(alert);


let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/Violet-Bora-Lee',
    'https://no-such-url'
  ];
  
  Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { // (*)
      results.forEach((result, num) => {
        if (result.status == "fulfilled") {
          alert(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
          alert(`${urls[num]}: ${result.reason}`);
          console.log(results);
        }
      });
    });

    Promise.race([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("에러 발생!")), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
      ]).then(alert); // 1