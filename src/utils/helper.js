//! ---Popular.js----------------------------------------------------
//in popularity file 
export const getCartList = ()=>{
    let list = localStorage.getItem('cartList')
    if(list){
      return JSON.parse(list);
    }else{
      return []}
  }


//! ---Popular.js-----------------------------------------------------------------------------------
    // get id of the card component by clicking order_Btn
export function order(order_data,orderId,setOrderId,setCardQuantity,totalQuantity){
      // const order=(btn_id)=>{
      // console.log('getting id= ', btn_id)
  
      // const getingdata= data.find((ele)=>{
      //     return btn_id === ele.id
      //   })
      // console.log(getingdata)
      // setOrderId((old)=>{
      //   return [...old, getingdata ]
      // })
      // setOrderId([...orderId,{...getingdata,quantity:1}])
  
      setOrderId([...orderId,{...order_data,quantity:1}])
      setCardQuantity({count:totalQuantity(orderId)})
     
      console.log(orderId.quantity,orderId)
  }

  // !-----Total quantity---------------------------------------------------------

  export function totalQuantity(bookedOrdersList){
    // bookedOrdersList.reduce((ele=>{}));
    const sumOfQuantities = bookedOrdersList.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);

    return sumOfQuantities;
  }