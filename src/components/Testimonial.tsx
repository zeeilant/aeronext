import Image from "next/image";
import React from "react";

interface props {
  name: string;
  img: string;
}

const Testimonial: React.FC<props> = ({ name, img }) => {
  return (
    <div className="testimonial" aria-label="testimonial 1">
      <div>
        <Image src={img} alt="" width={500} height={500} />
        {/* <img src={img} alt="" /> */}
        <h3>{name}</h3>
        <p>
          &quot;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
          ad. Nam saepe esse provident pariatur&quot;
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
