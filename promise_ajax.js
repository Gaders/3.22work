
function ajax(obj){
    return  new Promise(function(resolve,reject){
        var xhr = null;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }
        else{
            xhr=new ActiveXObject();
        }  
        xhr.open(obj.way,obj.url,obj.async)
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4&& xhr.status ==200){
            resolve(xhr.responseText)
            }
            else{
                var inFo = {
                    status: this.status,
                    readyState :this.readyState,
                    response: this.response
                }
                reject(inFo, this)
            }
        }
        
    })
}
ajax({
    way:"get",
    url:"https://api.tumiv.com/v2/cqupt/student?year=2015&page=1",
    async:"true"
}).then(function(resolve){
    alert(resolve)
})
//还在解决为什么readyState 的值一直等于2的问题。。。。