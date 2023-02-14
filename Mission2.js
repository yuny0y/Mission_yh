function solution(sizes) {
    var width = 0;
    var height = 0;
    
    for(let i = 0; i<sizes.length; i ++) {
        if (sizes[i][0]>sizes[i][1]) {
    
          if(sizes[i][0] > width){
                width = sizes[i][0]
        } if (sizes[i][1] > height){
            height=sizes[i][1]  
        }
    } else {
        if(sizes[i][1] > width){
            width = sizes[i][1]
        }if(sizes[i][0] > height){
            height = sizes[i][0]
        }
    }  
    } return width * height;
}