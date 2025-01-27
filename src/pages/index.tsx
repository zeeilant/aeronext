import Navbar from "@/components/Navbar";
// import "../styles/homepage.scss";
import Course from "@/components/Course";
import Link from "next/link";
import Image from "next/image";
import AirplayIcon from "@mui/icons-material/Airplay";
// import Testimonial from "../comps/Testimonial";
import TungstenIcon from "@mui/icons-material/Tungsten";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
const Homepage: React.FC = () => {
  const [phonee, setPhone] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const setphonenumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) || e.target.value === "") {
      setPhone(e.target.value);
    }
  };

  const checkEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) || e.target.value === "") {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const enquirehandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let emailorphone = formData.get("emailorphone") as string;
    setLoading(true);
    setShowPopup(true);
    fetch("/api/enquire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emailorphone }),
    })
      .then((data) => {
        if (data.status === 200) showSuccessPopup();
      })
      .catch((error) => console.error("Error:", error));
  };

  const showSuccessPopup = () => {
    setLoading(false);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const Popup = () => {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          zIndex: 1000,
          display: showPopup ? "block" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {loading ? (
            <p style={{ margin: 0, color: "#333" }}>Please Wait..</p>
          ) : (
            <>
              {" "}
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "#4CAF50",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "white" }}>✓</span>
              </div>
              <p style={{ margin: 0, color: "#333" }}>
                Form submitted successfully!
              </p>
            </>
          )}
        </div>
        <button
          onClick={() => setShowPopup(false)}
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ×
        </button>
      </div>
    );
  };

  const contactushandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let fullname = formData.get("fullname") as string;
    let email = formData.get("email") as string;
    let phone = phonee;
    let message = formData.get("message") as string;
    console.log(fullname, email, phone, message);
    setLoading(true);
    setShowPopup(true);
    fetch("/api/contactus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, email, phone, message }),
    })
      .then((data) => {
        if (data.status === 200) showSuccessPopup();
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="homepage w-full h-full">
      <Navbar home={true} />
      <Popup />
      <section className="hero w-full h-full">
        <h2>
          Welcome to <br /> AeroMingle Acadmy{" "}
        </h2>
        <div className="cont">
          Allow your passion to become your purpose and it will one day become
          your profession
          <form className="form flex" onSubmit={enquirehandler}>
            <span>
              <p>For further information or assistance</p>
              <input
                type={isEmail ? "email" : "text"}
                maxLength={isEmail ? 30 : 10}
                onChange={checkEmail}
                minLength={10}
                name="emailorphone"
                required
                placeholder="Email or Phone"
              />
            </span>
            <button>Let&apos;s Connect</button>
          </form>
        </div>
      </section>
      <section id="about" className="aboutus flex w-full h-full">
        <article className="section1">
          <h2>About Us</h2>
          <p>
            At Aero Mingle Academy, we are committed to providing top-quality
            training for aspiring aviation professionals. Our programs focus on
            equipping students with the practical skills and knowledge necessary
            to excel in ground staff and cabin crew roles, ensuring their
            success in the dynamic aviation industry.
          </p>
          <p>
            Join us at Aero Mingle Academy and start your journey towards a
            fulfilling career in aviation. With our commitment to excellence,
            you&apos;ll be well-prepared to thrive in this exciting industry.
          </p>
        </article>
        <figure className="section2">
          <Image
            src="https://images.pexels.com/photos/3760564/pexels-photo-3760564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Collaborative learning environment"
            width={500}
            height={500}
          />
        </figure>
        <figure className="section3">
          <p>
            Our academy&apos;s training course spans over 4 months, providing a
            comprehensive curriculum designed to cover a wide range of topics.
            Throughout this period, students gain in-depth knowledge and
            practical skills essential for their roles in aviation. Our program
            ensures a well-rounded foundation to help students succeed in the
            industry.
          </p>
          <Image
            // src="https://images.pexels.com/photos/163792/model-planes-airplanes-miniatur-wunderland-hamburg-163792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src="https://images.pexels.com/photos/70955/pexels-photo-70955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Presentation"
            width={500}
            height={500}
          />
        </figure>
      </section>
      <section id="features" className="featuredcourses w-full h-full flex">
        <div className="bgcontainer w-full h-full">
          <div>
            <h3>Featured Courses</h3>
            <p>
              Explore our expertly designed featured courses to accelerate your
              career.
            </p>
          </div>
        </div>
        <Course
          title=" Cabin Crew Training"
          image="https://images.pexels.com/photos/3119983/pexels-photo-3119983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          discription="our cabin crew training program is designed to equip students with the skills needed to provide exceptional inflight services. the course covers grooming, communication, soft skills and personality'development"
        />
        <Course
          title="Ground Staff Training"
          image="https://images.pexels.com/photos/7820308/pexels-photo-7820308.jpeg?auto=compress&cs=tinysrgb&w=600"
          // image="https://images.pexels.com/photos/3069147/pexels-photo-3069147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          discription="our ground staff training program prepare students for a variety of roles in airport operations the curriculum includes training in passenger handling, baggage management ticketing and customer'service"
        />
        <Course
          title="Customer Support Training"
          image="https://images.pexels.com/photos/8867249/pexels-photo-8867249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          discription="Our customer support training equips individuals with the skills to communicate effectively, resolve issues efficiently, and deliver exceptional service to ensure customer satisfaction and loyalty."
        />
      </section>

      <section className="whychooseus flex w-full h-full">
        <div className="bgcontainer w-full h-full">
          <div></div>
        </div>
        <Image
          src="https://images.pexels.com/photos/380287/pexels-photo-380287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Interactive platform"
          width={500}
          height={300}
        />
        <article className="container h-full">
          <h2>Why Choose Us</h2>
          <p>
            Experience top-notch training at Aero Mingle, where expert
            instructors guide you through comprehensive programs. Our courses
            are designed to equip you with the skills needed to excel in the
            aviation industry. Join us to unlock your potential and embark on a
            rewarding career. Together, we&apos;ll help you soar to new heights.
          </p>
          <p>
            At Aero Mingle, we are committed to shaping the future of aviation
            professionals. Join us and take the first step towards a successful
            career in the industry.
          </p>
          <div className="bottom-container">
            <span>
              {" "}
              Tip <TungstenIcon />{" "}
            </span>
            Successful people focus on their own journey, never comparing
            themselves to others. Believe in yourself, and you&apos;ll achieve
            greatness.
          </div>
        </article>
      </section>

      {/* <section className="virualexperience flex w-full h-full">
        <figure className="img-container h-full">
          <Image
            src="https://images.pexels.com/photos/1181474/pexels-photo-1181474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Virtual experience"
            width={500}
            height={500}
          />
          <figcaption className="text-container h-full w-full flex">
            <h2>Virtual Learning Experience</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              deserunt quaerat, similique praesentium eos, dignissimos dolores
              tempora iusto placeat, unde distinctio repellat natus odio
              doloremque.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              deserunt quaerat, similique praesentium eos, dignissimos dolores
              tempora iusto placeat, unde distinctio repellat natus odio
              doloremque.
            </p>
          </figcaption>
        </figure>
        <div className="container h-full flex">
          <div>
            <AirplayIcon />
            <span>
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur vero, distinctio fugit ipsa nostrum ducimus
                quibusdam assumenda alias incidunt a.
              </p>
            </span>
          </div>
          <div>
            <AirplayIcon />
            <span>
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur vero, distinctio fugit ipsa nostrum ducimus
                quibusdam assumenda alias incidunt a.
              </p>
            </span>
          </div>
          <div>
            <AirplayIcon />
            <span>
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur vero, distinctio fugit ipsa nostrum ducimus
                quibusdam assumenda alias incidunt a.
              </p>
            </span>
          </div>
        </div>
      </section> */}

      {/* <section className="testimonials w-full h-full flex">
        <div className="testimonial-container flex">
          <div className="corosel flex  w-full" style={{}}>
            {testarry.map((item) => (
              <Testimonial key={item.img} name={item.name} img={item.img} />
            ))}
           
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="text-container flex">
          <h4>Our Students</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic
            ea dolor doloribus eos quae natus consequatur velit temporibus.
            Numquam veritatis magnam quos dolorum sit.
          </p>
        </div>
      </section> */}

      {/* <section className="faqs w-full h-full flex">
        <div className="text-container h-full flex">
          <h4>FAQs</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic
            ea dolor doloribus eos quae natus consequatur velit temporibus.
            Numquam veritatis magnam quos dolorum sit.
          </p>
        </div>
        <div className="qna h-full flex">
          <div className="container w-full flex">
            <div>
              <TungstenIcon />
              <span>
                <h4>Title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur vero, distinctio fugit ipsa nostrum ducimus
                  quibusdam assumenda alias incidunt a.
                </p>
              </span>
            </div>
            <div>
              <TungstenIcon />
              <span>
                <h4>Title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur vero, distinctio fugit ipsa nostrum ducimus
                  quibusdam assumenda alias incidunt a.
                </p>
              </span>
            </div>
            <div>
              <TungstenIcon />
              <span>
                <h4>Title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur vero, distinctio fugit ipsa nostrum ducimus
                  quibusdam assumenda alias incidunt a.
                </p>
              </span>
            </div>
          </div>
        </div>
      </section> */}
      <section className="contactus w-full flex">
        <div>
          <h4>Lets</h4>
          <h4>Connect</h4>
          <p>
            Let&apos;s connect and discuss how we can help you achieve your
            goals. If you have any queries or want to learn more, reach out to
            us today
          </p>
        </div>
        <form onSubmit={contactushandler}>
          <input
            type="text"
            placeholder="Fullname"
            name="fullname"
            maxLength={30}
            required
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            maxLength={30}
          />
          <input
            required
            type="phone"
            name="phone"
            placeholder="Phone"
            maxLength={10}
            minLength={10}
            onChange={setphonenumber}
            value={phonee}
          />
          <textarea
            required
            name="message"
            id=""
            placeholder="Message"
            maxLength={400}
          ></textarea>
          <button>
            {" "}
            <ArrowForwardIcon />{" "}
          </button>
        </form>
      </section>
      <footer className="flex w-full">
        <div className="container">
          <h6>Contact Info</h6>
          <ul>
            <li>Email : Aeromingles@gmail.com</li>
            <li>Phone : 8309521241</li>
            <li>
              Address : Plot No-23 Kusumpur Colony <br /> Patna, Bihar - 804453
            </li>
          </ul>
        </div>
        <div className="container">
          <h6>Navigation</h6>
          <ul>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              {" "}
              <Link href="/courses">Courses</Link>
            </li>
            {/* <li>
            {" "}
            <Link to="/virtual-learning-experience">Virtual Learning Experience</Link>
          </li> */}
            <li>
              {" "}
              <Link href="/carrer-support">Career Support</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h6>Follow Us</h6>
          <ul>
            <li>
              <Link target="_blank" href="https://www.facebook.com/profile.php?id=61572404365706&mibextid=LQQJ4d">
                Facebook
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://www.instagram.com/aeromingleaviation?igsh=MmZmY3psbGhiZDR5&utm_source=qr">
                instagram
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://www.linkedin.com/company/aeromingle-aviation-academy">
                Linkdin
              </Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h6>Legal</h6>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of service</li>
          </ul>
        </div>

        <div className="container">
          Join Aero Mingle Academy to kickstart your aviation career. Our expert
          training equips you with essential skills for cabin crew, ground
          staff, and customer support roles. Enroll now and soar to new heights!
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, at?</p>
      </footer>
    </div>
  );
};

export default Homepage;
