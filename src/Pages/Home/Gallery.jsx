import gimg1 from "../../assets/gallery/img1.jpg";
import gimg2 from "../../assets/gallery/img2.jpg";
import gimg3 from "../../assets/gallery/img3.jpg";
import gimg4 from "../../assets/gallery/img4.jpg";
import gimg5 from "../../assets/gallery/img5.jpg";
import gimg6 from "../../assets/gallery/img6.jpg";
import SectionTitle from "../../Components/SectionTitle";

const Gallery = () => {
  return (
    <section>
      <SectionTitle 
        heading={"Gallery Of Our Tours"} className={"animate__animated animate__bounce"}
        subHeading={
          "Explore stunning moments from our tours captured in beautiful images, showcasing unforgettable experiences and destinations"
        }
      />

      <div className="card grid md:grid-cols-3 gap-6">
        <figure>
          <img className="h-[400px]" src={gimg1} alt="Shoes" />
        </figure>
        <figure>
          <img className="h-[400px]" src={gimg2} alt="Shoes" />
        </figure>
        <figure>
          <img className="h-[400px]" src={gimg3} alt="Shoes" />
        </figure>
        <figure>
          <img className="h-[400px]" src={gimg4} alt="Shoes" />
        </figure>
        <figure>
          <img className="h-[400px]" src={gimg5} alt="Shoes" />
        </figure>
        <figure>
          <img className="h-[400px]" src={gimg6} alt="Shoes" />
        </figure>
      </div>
    </section>
  );
};

export default Gallery;
