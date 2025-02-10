import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import AdventureCard from "./AdventureCard";


const Home = () => {
    const adventures = useLoaderData();
    console.log(adventures);
    return (
        <div>
           <Banner/>
           {/* adventure experience section */}
           <div className="grid md:grid-cols-4 gap-6 mb-4">
            {
                adventures.map(adventure=><AdventureCard key={adventure.id} adventure={adventure}/>)
            }
           </div>
        </div>
    );
};

export default Home;