import React, { useContext, useEffect, useState } from "react";
import { getCartList,order,totalQuantity } from "./utils/helper.js";
import useCartCountContext from "./utils/useCartCountContext.js"

const Popularity = (props) => {
// !------Helper.js-------------------------------------------
  // const getCartList = ()=>{
  //   let list = localStorage.getItem('cartList')
  //   if(list){
  //     return JSON.parse(list);
  //   }else{
  //     return []}
  // }
  // !------End------------------------------------------

  // console.log('popularity= ', props.sources)
  const data= props.sources;

  const [orderId, setOrderId] = useState(getCartList);
  const {cartCount} = useContext(useCartCountContext);
  console.log(cartCount);

  // !------Helper.js-------------------------------------------
// const order = order()

  // get id of the card component by clicking order_Btn
  // const order=(order_data)=>{
  //   // const order=(btn_id)=>{
  //   // console.log('getting id= ', btn_id)

  //   // const getingdata= data.find((ele)=>{
  //   //     return btn_id === ele.id
  //   //   })
  //   // console.log(getingdata)
  //   // setOrderId((old)=>{
  //   //   return [...old, getingdata ]
  //   // })
  //   // setOrderId([...orderId,{...getingdata,quantity:1}])

  //   setOrderId([...orderId,{...order_data,quantity:1}])
   
  //   console.log(orderId.quantity,orderId)

  // }

  // !------End------------------------------------------


// now we will set these value in to the local storage 
  useEffect(()=>{
    localStorage.setItem('cartList',JSON.stringify(orderId))
  },[orderId])
   
  return <>
    <section className="popular" id="popular">

      <h1 className="heading"> most <span>popular</span> foods </h1>
      <div className="box-container">

        
        {data.map((item,index)=>{
          return (
          <div className="box" key={`popularity${index}`}>
            <span className="price"> ₹ {item.price} </span>
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
            
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>

            {/* <a href="#" className="btn">order now</a> */}
            <div className="btn" onClick={()=>order(item,orderId,setOrderId,cartCount.setCardQuantity,totalQuantity)}>order now</div>
          </div>
          )
        })}


      </div>
    </section>
  </>
}

export default Popularity;
