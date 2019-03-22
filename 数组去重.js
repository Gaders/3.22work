var arr = [1,2,3,4,5,2,1,3,4,2,3,2,123,13,1,1,1,1,1,1,1,1]
//set方法去重
function foo1(){
    console.log(new Set(this))
}
//第二种方法去重
function sort_way_up (a,b){
  return a -b;
}
function foo2(){
    this.sort(sort_way_up)
    for (let i = 0 ;i <=this.length-1;i++){
        if(this[i] == this[i+1]){  
            this.splice(i+1,1)
            i--;
        }
    }
    console.log(this)
}
//第三种方法去重
function foo3(arr){
    var arr1=[]
    for (let i = 0 ;i <=arr.length-1;i++){
        if(arr1.indexOf(arr[i]) === -1){
            arr1.push(arr[i])
        }
    }
    console.log(arr1)
}