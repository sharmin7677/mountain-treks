import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import AdventureCard from "./AdventureCard";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";


const Home = () => {
    const adventures = useLoaderData();
    const {adventuresData, testimonialsData} = adventures
    return (
        <div >
           <Banner/>
           {/* adventure experience section */}
           <div className="grid md:grid-cols-4 gap-6 mb-4">
            {
                adventuresData.map(adventure=><AdventureCard key={adventuresData.id} adventure={adventure}/>)
            }
           </div>
           
           <div className="mb-6">
           <Testimonials testimonialsData={testimonialsData}/>
           </div>
           <div className="mb-8 ">
           <Gallery/>
           </div>
        </div>
    );
};

export default Home;