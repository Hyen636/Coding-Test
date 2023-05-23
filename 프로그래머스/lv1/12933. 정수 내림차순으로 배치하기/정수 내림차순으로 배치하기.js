function solution(n) {
    var answer = 0;
    var a = (n + '').split('');
    a.sort((a, b) => b - a);
    answer = Number(a.join(''));
    return answer;
}