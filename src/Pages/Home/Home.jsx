import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import AdventureCard from "./AdventureCard";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import SectionTitle from "../../Components/SectionTitle";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const adventures = useLoaderData();
    const {adventuresData, testimonialsData} = adventures
    return (
       <>
       <Helmet>
        <title>Home | Everhike</title>
       </Helmet>
         <div >
           <Banner/>

           {/* adventure experience section */}
          <section>
            <SectionTitle
                heading={"Adventure Experience"}
            />
          <div className="grid md:grid-cols-4 gap-6 mb-4">
            {
                adventuresData.slice(0,8).map(adventure=><AdventureCard key={adventuresData.id} adventure={adventure}/>)
            }
           </div>
           <div className="text-center">
           <NavLink to={"/adventure"} className="btn bg-red-500 text-white ">Explore Now</NavLink>
           </div>
          </section>
           
           <div className="mb-6">
           <Testimonials testimonialsData={testimonialsData}/>
           </div>
           <div className="mb-8 ">
           <Gallery/>
           </div>
        </div>
       </>
    );
};

export default Home;