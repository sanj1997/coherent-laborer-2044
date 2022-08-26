import axios from "axios"

// SIGN UP API
export const signUp=(user)=>{
    console.log(user)
    return axios(`https://reqres.in/api/login`,{
      method:"POST",  
      data:{
        email:user.email,
        password:user.password
      }
    })
}
