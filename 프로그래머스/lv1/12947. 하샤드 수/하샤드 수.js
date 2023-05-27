function solution(x) {
    var arr = (x + '').split('');
    var sum = 0;
    for(let i=0; i<arr.length; i++){
         sum += Number(arr[i]);
    }
    console.log(sum)
    return x%sum==0? true:false
}