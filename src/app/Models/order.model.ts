import { item } from "./item.model";

export class finalOrder{
    orderToShip:order
    shippingDetail:shippingDetail
    payment:payment   
}
export class order{
    productlist:item[]=[]
    totalAmount:number=null
    extraCharges:number=null
    discount:number=null
    finalAmount:number=null
}
export class shippingDetail{
    shippingAddress:number=null
    city:string=null
    status:string=null
    country:string=null
}
export class payment{
     paymentMethod=['Cash on delivery','Net banking','BHIM/UPI']
     paymentType:string=null
     AccountDetail:AccountDetail
}
export class AccountDetail{
    account_no?:number=null
    IFSC_code?:number=null
    UPI_ID?:string=null
    
}