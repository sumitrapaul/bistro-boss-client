import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="mb-12 featured-item pt-10 text-white bg-fixed">
           <SectionTitle subHeading={"Check it out"} heading={"From Our Menu"}></SectionTitle>
           <div className="md:flex justify-center items-center gap-6 py-16 px-24 bg-slate-500 bg-opacity-60">
              <div>
                <img src={featuredImg} alt="" />
              </div>
              <div className="md:ml-10 space-y-4">
                <p>Aug 24, 2023</p>
                <h3 className="text-3xl uppercase">Where can I get some?</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, nemo perspiciatis ipsam repellat cumque ex, enim officiis voluptatum laborum porro, similique ullam nihil doloribus voluptates. Ab, quam explicabo deleniti harum consequatur, atque veritatis nisi adipisci praesentium modi cupiditate ratione tempora odio ipsam repudiandae quas quaerat quidem earum quasi. Debitis, quos.</p>
                <button className="btn btn-outline text-white font-bold border-0 border-b-4 ">Read More</button>
              </div>
            </div> 
        </div>
    );
};

export default Featured;