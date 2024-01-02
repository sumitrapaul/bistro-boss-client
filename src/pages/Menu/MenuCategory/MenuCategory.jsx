/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import Cover from "../../Shared/Cover/Cover";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="mb-16 pt-8">
            {title && <Cover img={img} title={title}></Cover>}
             <div className="grid md:grid-cols-2 gap-8 mt-16">
               {
            items.map(item => <PopularMenu key={item._id} item={item}></PopularMenu>)
               }
              
            </div> 
            <Link to={`/order/${title}`}>
               <button className="btn btn-outline border-0 border-b-4 mt-4 text-center">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;