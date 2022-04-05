import axios from "axios";

axios('http://localhost:8080/testget')
.then(result =>{
    console.log(result.data)
})

axios.get('http://localhost:8080/testget',{
    params:{
        ID:123456
    }
})

axios('http://localhost:8080/testget',{
    method:'POST',
    data:{
        first_name:"test",
        last_name:"test"
    }
})
.then(result=>{
    console.log(result.data)
})