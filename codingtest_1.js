process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    let answer =[];
    let star = "*".repeat(a); // a에 별을 몇번넣어줄지
    
    for (let i = 0 ; i<b; i++){ // for문으로 b몇줄 반복할지
        console.log(star);
    }
});