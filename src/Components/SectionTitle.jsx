
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionTitle = ({ heading, subHeading }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 }); // Initializes AOS with a 1-second animation duration
  }, []);

  return (
    <div className="text-center mb-4">
      <p
        data-aos="fade-left"
        className="font-bold uppercase text-4xl mb-4"
      >
        {heading}
      </p>
      <p data-aos="fade-left" data-aos-delay="200" className="text-gray-400 mb-8">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionTitle;
