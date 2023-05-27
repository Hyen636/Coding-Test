function solution(arr) {
    var answer = [];
    var m = arr.reduce((a,b)=> Math.min(a,b))
    console.log(m)
    for(let i=0; i<arr.length; i++){
        if(arr[i]==m) {
            arr.splice(i,1)
    }
    }
    return anwer = arr.length==0? [-1]:arr;
}