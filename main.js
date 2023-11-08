
let check=new Promise((resolve,reject)=>{
    resolve()
})

check.then(()=>{
    document.write("first")
}).then(()=>{
          setTimeout(function(){
            document.write("second"+"</br></br>")
        },6000) 
}).then(()=>{
    setTimeout(function(){
        document.write("third"+"</br></br>");    
    },5000)
}).then(()=>{
    setTimeout(function(){
        document.write("fourth"+"</br></br>");    
    },4000)
}).then(()=>{
    setTimeout(function(){
        document.write("fifth"+"</br></br>");
    },3000)
}).then(()=>{
    setTimeout(function(){
        document.write("sixth"+"</br></br>");
    },2000)

}).then(()=>{
    setTimeout(function(){
        document.write("seventh"+"</br></br>");
    },1000)
})