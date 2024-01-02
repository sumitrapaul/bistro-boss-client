/* eslint-disable react/prop-types */


const PopularMenu = ({item}) => {

    const { name, price, image, recipe } = item
    console.log(name)
    return (
        <div className="flex space-y-3">
           <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[120px] mr-4" src={image} alt="" /> 
           <div>
            <h3 className="text-3xl font-bold uppercase">{name}-------</h3>
            <p>{recipe}</p>
           </div>
           <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default PopularMenu;