import UserModels from "../models/User.js"


// adduser api

const Createuser = async(req,res) =>{
    try {
        const {name,surname,email,phone} = req.body

    const NewUser = new UserModels({
        name,surname,email,phone
    })
    await NewUser.save()
    res.status(200).json({success:true,Message:'User Created Successfully',NewUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,Message:'internal server error!!',NewUser})
    }
}

// read api

const GetUser = async(req,res) =>{
        try {
            const user = await UserModels.find()
            if(!user){
                return res.status(404).json({success:false,message:'User Not Found!!'})
            }
            res.status(200).json({success:true,user})
        } catch (error) {
            console.log(error)
            return res.status(500).json({success:false,message:'internal server error'})
        }
}


// update User

const UpdateUser = async(req,res)=>{
try {
   const  UserId = req.params.id
    const updatedUser = await UserModels.findByIdAndUpdate(UserId,req.body,{new:true})
    if(!updatedUser){
        return res.status(404).json({success:false,message:'User not found!!'})
    }
    res.status(200).json({success:true,message:'User Updated Successfully!!',updatedUser})
} catch (error) {
    console.log(error)
    return res.status(500).json({success:false,message:'internal server error'})
}
}


// delete user

const DeleteUser = async (req,res) =>{
try {
    const UserId = req.params.id
    const deletedUser = await UserModels.findByIdAndDelete(UserId)
    if(!deletedUser){
        return res.status(404).json({success:false,message:'User not found!!'})
    }
    res.status(200).json({success:true,message:'User Deleted Successfully!!'})
} catch (error) {
    console.log(error)
    return res.status(500).json({success:false,message:'internal server error'})
}
}


export{Createuser,GetUser,UpdateUser,DeleteUser}