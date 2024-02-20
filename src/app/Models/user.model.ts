import { item } from "./item.model"

export class user{
    UserId:number=null
    name:string=null
    email:string=null
    password:string=null
    phone_no:string=null
    address:string=null
    city:string=null
    State:string=null
    pincode:number=null
    cart:item[]=[]
}