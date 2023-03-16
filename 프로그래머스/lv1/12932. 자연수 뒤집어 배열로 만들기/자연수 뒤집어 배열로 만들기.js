function solution(n) {
    var answer = [];
    var a = (n+"").split("");
    for (var i = a.length-1; i>=0; i--){
        answer.push(parseInt(a[i]));
    }
    return answer;
}