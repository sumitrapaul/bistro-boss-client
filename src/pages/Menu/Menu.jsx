/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
     
    const [ menu ] = useMenu()
    
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    
    return (
        <div>
           <Helmet><title>Bistro boss | Menu</title></Helmet> 
           <Cover img={menuImg} title="Our Menu"></Cover>
           <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
           <MenuCategory items={offered}></MenuCategory>
           <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
           <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
           <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
           <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
           <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
           <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
           <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
           <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
        </div>
    );
};

export default Menu;