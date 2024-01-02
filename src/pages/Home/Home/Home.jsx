import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenus from "../PopularMenu/PopularMenus";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';



const Home = () => {
    return (
        <div>
            <Helmet><title>Bistro boss | Home</title></Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenus></PopularMenus>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;