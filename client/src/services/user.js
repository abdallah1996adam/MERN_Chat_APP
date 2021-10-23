import api from "./api";

const userService = {
    signup : async (password, fullName, phoneNumber, userName,profilepicURL )=>{
        const user = {password, fullName, phoneNumber, userName,profilepicURL}
        return await api.post('/signup')
    }
}


export default userService;