function solution(n)
{
    var answer = 0;
    var str = String(n);
    for(let i=0; i<str.length; i++){
        answer += parseInt(str.charAt(i));
    }
    return answer;
}