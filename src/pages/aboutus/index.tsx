import React from "react";
// import "../../styles/aboutuspage.scss";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <div className="aboutuspage w-full h-full">
      <Navbar home={false} bg={true} />
      <section className="mission flex w-full h-full">
        <div className="bgcontainer w-full h-full">
          <div></div>
        </div>
        <Image
          src="https://images.pexels.com/photos/19945130/pexels-photo-19945130/free-photo-of-person-in-hoodie-playing-basketball.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Interactive platform"
          width={500}
          height={300}
        />
        <article className="container h-full">
          <h3>Mission & Vision</h3>
          <p>
            At Aero Mingle Aviation Academy, our mission is to empower aspiring
            aviation professionals by providing advanced, world-class education
            and training solutions. We are dedicated to fostering excellence,
            integrity, and a commitment to safety, ensuring our students are
            equipped with the skills and knowledge needed for success in ground
            staff and cabin crew roles.
          </p>
          <p>
            We aim to be the global leader in delivering exceptional training
            characterized by continuous inquiry, innovation, and a
            technology-driven approach. By remaining globally competent and
            cohesive in all our endeavors, we strive to set the benchmark for
            excellence in aviation and customer service education, inspiring
            future generations to achieve their career aspirations.
          </p>
          <p>
            We focus on delivering world-class aviation education with a strong
            emphasis on innovation, integrity, and excellence. We aim to empower
            aspiring professionals with the skills necessary to thrive in a
            global aviation landscape.
          </p>
        </article>
      </section>
      <section className="story flex w-full h-full">
        <div className="bgcontainer w-full h-full">
          <div></div>
        </div>

        <div className="container">
          <h3>Our Story</h3>
          <p>
            Aero Mingle Aviation Academy is a premier institution dedicated to
            shaping the future of aviation professionals. We specialize in
            offering comprehensive training programs that prepare students for
            dynamic careers in ground staff and cabin crew roles. Our curriculum
            combines rigorous training with industry insights, empowering
            students to meet the highest standards of professionalism and
            service excellence.
          </p>
          <p>
            We believe in a holistic approach to education, emphasizing
            integrity, commitment to safety, and continuous development. By
            integrating the latest industry practices and technologies,
          </p>
          <p>
            Aero Mingle Aviation Academy stands as a trusted name in aviation
            training, inspiring confidence in our students and setting them on
            the path to success in the aviation industry.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
