import { User } from "@/lib/modals/User";
import { ConnectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const POST =async(req) =>{
    try {
        const {name,email,password} = await req.json();
        ConnectToDB()
        const user = await User.create({name,email,password})
        console.log(user)
        return NextResponse.json('ok');
    } catch (error) {
        console.log(error)
    }
}

// export const GET = async(req)=>{
//     try {
//        const connect = await ConnectToDB();
//        const data = await connect.json()
//         console.log(data)
//         return NextResponse.json('okk')
//     } catch (error) {
//         console.log(error)
//     }
// }