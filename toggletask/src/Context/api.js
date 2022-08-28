import axios from "axios"

// SIGN UP API
export const signUp=(user)=>{
    // console.log(user)
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
  // console.log(client,"hello")
  return axios(`https://polar-bayou-05294.herokuapp.com/clients`,{
    method:"POST",
    data:{title:client}
  })
}
export const postUser=(userDetails)=>{
  return axios(`https://polar-bayou-05294.herokuapp.com/users`,{
    method:"POST",
    data:{
    name_of_user: userDetails.name_of_user,
    project_name: userDetails.project_name,
    client_name: userDetails.client_name,
    start_duration: userDetails.start_duration,
    start_time: userDetails.start_time,
    end_time: userDetails.end_time,
    end_duration:userDetails.end_duration,
    }
  })
}
export const getUser=(project)=>{
  // console.log(project)
  return axios(`https://polar-bayou-05294.herokuapp.com/users?q=${project}`)
}
export const updateUser=(userDetails)=>{
  // console.log(userDetails,"hey")
  return axios.patch(`https://polar-bayou-05294.herokuapp.com/users/${userDetails.id}`,{
    end_duration:userDetails.end_duration,
    end_time:userDetails.end_time
  })
}
export const deleteUser=(id)=>{
  return axios.delete(`https://polar-bayou-05294.herokuapp.com/users/${id}`)
}
