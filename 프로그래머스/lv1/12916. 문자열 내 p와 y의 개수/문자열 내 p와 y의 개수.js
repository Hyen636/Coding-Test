function solution(s){
    let change = s.toLowerCase();
    let check_p = change.split("p");
    let check_y = change.split("y");
    console.log(check_p,check_y)
    return check_p.length == check_y.length ? true : false;
}