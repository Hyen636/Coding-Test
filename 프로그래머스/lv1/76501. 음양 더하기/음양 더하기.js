function solution(absolutes, signs) {
    var answer = 123456789;
    for(let i=0; i<absolutes.length; i++){
        if(signs[i] == false){
            absolutes[i] = -1*absolutes[i]
        }
    }
    return answer = absolutes.reduce((a,b) => a+b);
}