import Navbar from "@/components/Navbar";
import Image from "next/image";
const CarrerSupport = () => {
  return (
    <div className="carrersupport flex w-full h-full">
      <Navbar home={false} />
      <div className="container ">
        <h3>Career Support</h3>
        <p className="headline">
          We Provide a Range of Career Assistance Services for Better Career
          Opportunities. <br />
          Some of them are :
        </p>

        <h5>Recommend job search strategies.</h5>
        <p>
          We assist you in navigating online job boards and company websites.
          Our guidance helps you find the best opportunities available. We
          ensure a smooth and efficient job search experience.
        </p>
        <h5>Provide mock interviews.</h5>
        <p>
          We provide mock interviews to help you prepare effectively. Our
          interview tips ensure you make a strong impression. We guide you on
          answering common interview questions confidently.
        </p>
        <h5>Career Counseling</h5>
        <p>
          We evaluate your interests, skills, and values to identify the best
          career options. Our support ensures you make informed decisions and
          navigate your career path with confidence. We empower you to choose a
          direction that aligns with your passions and strengths.
        </p>
        <h5>Skill Development:</h5>
        <p>
          We offer a variety of training programs, workshops, and courses to
          enhance your skills. Our focus is on helping you acquire new abilities
          and improve existing ones for career advancement. Gain the knowledge
          and expertise needed to excel in your field with our tailored
          programs.
        </p>
      </div>
      <Image
        src="https://images.pexels.com/photos/4100669/pexels-photo-4100669.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        width={500}
        height={500}
      />
     
    </div>
  );
};

export default CarrerSupport;
