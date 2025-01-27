import React from "react";
import Navbar from "@/components/Navbar";
import Course from "@/components/Course";

const Courses: React.FC = () => {
  return (
    <div className="coursepage flex w-full h-full">
        <Navbar home={false} />
        
      <h3>Courses We Offer</h3>
      {/* <p>Lorem ipsum dolor sit amet consectetur</p> */}
      <div className="courses flex w-full"> 
      <Course
          title=" Cabin Crew Training"
          image="https://images.pexels.com/photos/3119983/pexels-photo-3119983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          discription="our cabin crew training program is designed to equip students with the skills needed to provide exceptional inflight services. the course covers grooming, communication, soft skills and personality development"
        />
        <Course
          title="Ground Staff Training"
          image="https://images.pexels.com/photos/7820308/pexels-photo-7820308.jpeg?auto=compress&cs=tinysrgb&w=600"
          // image="https://images.pexels.com/photos/3069147/pexels-photo-3069147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          discription="our ground staff training program prepare students for a variety of roles in airport operations the curriculum includes training in passenger handling, baggage management ticketing and customer service"
        />
        <Course
          title="Customer Support Training"
          image="https://images.pexels.com/photos/8867249/pexels-photo-8867249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          discription="Our customer support training equips individuals with the skills to communicate effectively, resolve issues efficiently, and deliver exceptional service to ensure customer satisfaction and loyalty."
        />
      </div>
    </div>
  );
};

export default Courses;
