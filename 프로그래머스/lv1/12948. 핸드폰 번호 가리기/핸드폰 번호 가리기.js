function solution(phone_number) {
    var answer = '';
    var arr = (phone_number+'').split('')
    for(let i=0; i<arr.length-4; i++){
        arr[i] = '*'
    }
    return answer = String(arr.join(''));
   
}