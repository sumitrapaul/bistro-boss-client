/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import { AuthContext } from "../../Provider/AuthProvider";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodOrder = ({item}) => {

    const { name, price, image, recipe, _id } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const handleAddToCart = () => {
      if(user && user.email){

         const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
      }
         axiosSecure.post('/carts', cartItem)
         .then(res => {
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added a cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
         })
      }
      else{
        Swal.fire({
          title: "You are not login?",
          text: "Please login to the add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
            
             navigate('/login', {state : {from: location}})
           
          }
        });
      }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="absolute text-white bg-slate-900 right-0 mr-4 mt-4 px-4 rounded-md">${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4 mt-4 text-center bg-slate-100 border-orange-400">Add To Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodOrder;