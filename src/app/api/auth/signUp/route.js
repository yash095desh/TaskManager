import { User } from "@/lib/modals/User";
import { ConnectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export const POST =async(req) =>{
    try {
        const body = await req.json();
        await ConnectToDB()
        // checking user already exist
    
        let isuser = await User.findOne({email:body.email});
        console.log(isuser)
        if(isuser) return NextResponse.json('Alredy a User',{status:400})

        //hashing password
        let salt = bcrypt.genSaltSync(10);
        let hashedpass = bcrypt.hashSync(body.password,salt)

        const user = await User.create({...body,password:hashedpass})
        const {password:pass,...data} = user._doc;
        return NextResponse.json(data);

    } catch (error) {
        console.log(error)
        return NextResponse.json('Internal error occured in signing up',{status:400})
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