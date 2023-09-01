import axios from "axios"


const url:string ="http://localhost:2232/api/v1"

export const registerUser = async (data: any) => {
    try {
        return await axios.post(`${url}/create-user`, data,).then((res: any) => {

          return res.data.data
           
        })
    } catch (error) {
        console.log(error)
    }
}

export const signinUser = async (data: any,) => {
    try {
        return await axios.post(`${url}/sign-in`, data).then((res: any) => {
            console.log(res)
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}