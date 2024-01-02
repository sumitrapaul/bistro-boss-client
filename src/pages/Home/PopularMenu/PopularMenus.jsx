/* eslint-disable no-unused-vars */
import { useEffect, useImperativeHandle, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenu from "./PopularMenu";
import useMenu from "../../../hooks/useMenu";



const PopularMenus = () => {
    const [menu] = useMenu()

    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setmenu] = useState([])

    // useEffect(() => {
    //     fetch('/menu.json')  
    //     .then(res => res.json()) 
    //     .then(data => {
    //         const popularMenu = data.filter(item => item.category === 'popular')
    //         setmenu(popularMenu)
    //     })
    // }, []) 
    return (
        <section className="mb-12">
            <SectionTitle subHeading= {"check it out"} heading={"From Our Menu"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
               {
            popular.map(item => <PopularMenu key={item._id} item={item}></PopularMenu>)
               }
              
            </div>
            <div className="flex items-center justify-center mt-8">
            <button className="btn btn-outline font-bold border-0 border-b-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenus;