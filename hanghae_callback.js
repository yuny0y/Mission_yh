loadScript('1.js', step1);
function step1(error, script) {
    if (error) {
      handleError(error);
    } else {
      loadScript('2.js',step2);
    }
}
      
function step2(error, script) {
    if (error) {
        handleError(error);
    } else {
        loadScript('3.js', step3);
    }
}
          
function step3(error, script) {
    if (error) {
        handleError(error);
    } else {
        // 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
    }
};
  
