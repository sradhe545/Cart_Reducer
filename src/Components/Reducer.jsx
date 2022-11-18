import axios from "axios";

export function handleDeleteById(id) {
  return axios({
    baseURL: "https://warm-sea-77698.herokuapp.com/mobile",
    url: `/${id}`,
    method: "DELETE"
  });
}
export function handleAddById(id,no,quantity,price,total_price){
   console.log(id,quantity,no,price,total_price)
  return axios({
    url: `https://warm-sea-77698.herokuapp.com/mobile/${id}`,
    method: "PATCH",
    data:{quantity:quantity+no, total_price:total_price +(price*no)}
  });
}
