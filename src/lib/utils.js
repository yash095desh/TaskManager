import mongoose from "mongoose"

export const ConnectToDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGOURL)
       console.log('Connected Successfully')
    } catch (error) {
        console.log(error)
    }
}
