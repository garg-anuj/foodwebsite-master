//in popularity file 
const getCartList = ()=>{
    let list = localStorage.getItem('cartList')
    if(list){
      return JSON.parse(list);
    }else{
      return []}
  }