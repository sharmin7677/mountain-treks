import gimg1 from "../../assets/gallery/img1.jpg"
import gimg2 from "../../assets/gallery/img2.jpg"
import gimg3 from "../../assets/gallery/img3.jpg"
import gimg4 from "../../assets/gallery/img4.jpg"
import gimg5 from "../../assets/gallery/img5.jpg"
import gimg6 from "../../assets/gallery/img6.jpg"

const Gallery = () => {
  return (
    <div className="card grid md:grid-cols-3 gap-6">
      <figure>
        <img className="h-[400px]"
          src={gimg1}
          alt="Shoes"
        />
      </figure>
      <figure>
        <img className="h-[400px]"
          src={gimg2}
          alt="Shoes"
        />
      </figure>
      <figure>
        <img className="h-[400px]"
          src={gimg3}
          alt="Shoes"
        />
      </figure>
      <figure>
        <img className="h-[400px]"
          src={gimg4}
          alt="Shoes"
        />
      </figure>
      <figure>
        <img className="h-[400px]"
          src={gimg5}
          alt="Shoes"
        />
      </figure>
      <figure>
        <img className="h-[400px]"
          src={gimg6}
          alt="Shoes"
        />
      </figure>
     
    </div>
  );
};

export default Gallery;
