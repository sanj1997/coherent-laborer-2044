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
export const getClients=()=>{
  return axios(`https://polar-bayou-05294.herokuapp.com/clients`)
}
export const searchClient=(text)=>{
  return axios(`https://polar-bayou-05294.herokuapp.com/clients?q=${text}`)
}
export const getAddClient=(client)=>{
  console.log(client,"hello")
  return axios(`https://polar-bayou-05294.herokuapp.com/clients`,{
    method:"POST",
    data:{title:client}
  })
}
export const postUser=(userDetails)=>{
  return axios(`https://polar-bayou-05294.herokuapp.com/users`,{
    method:"POST",
    data:userDetails
  })
}
export const getUser=(project)=>{
  console.log(project)
  return axios(`https://polar-bayou-05294.herokuapp.com/users?q=${project}`)
}

