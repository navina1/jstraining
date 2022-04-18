function add(arr,item){
    arr.push(item);
    return arr;
}

let arr=[1,2,3,4,5];
let item=6;
let newarr=add(arr,item);
console.log(newarr);
console.log(JSON.stringify(newarr));