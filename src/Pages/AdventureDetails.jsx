import { useLoaderData } from "react-router-dom";
import AllCard from "./Home/AllCard";
import Modal from "./Home/Modal";
import moment from "moment";

const AdventureDetails = () => {
  const adventures = useLoaderData();
  
    // Function to handle button click
    const handleTalkWithExpert = () => {
      const currentTime = moment();
      const startTime = moment("10:00 AM", "hh:mm A");
      const endTime = moment("8:00 PM", "hh:mm A");
  
      if (currentTime.isBetween(startTime, endTime)) {
        window.open("https://meet.google.com/", "_blank");
      } else {
        document.getElementById("my_modal_3").showModal();
      }
    };

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-6 mb-4">
      {adventures.map((adventure) => (
        <AllCard key={adventure.id} adventure={adventure} />
      ))}

      <Modal />
    </div>
    <div className="text-center">
    <button onClick={handleTalkWithExpert} className="btn bg-orange-600 text-white">
      Talk with Expert
    </button>
  </div>
    </div>
  );
};

export default AdventureDetails;
