import Image from 'next/image';
import React from 'react'
// import "../styles/homepage.scss";

interface props {
    title: string;
    image:string;
    discription:string;
}


const Course: React.FC<props> = ({title,image,discription}) => {
  return (
    <div className="course" aria-label="Course 1">
      <Image src={image} alt="" width={500} height={500} />
{/* <img src={image} alt="" /> */}
<h5>{title}</h5>
<span>{discription}</span>
    </div>
  )
}

export default Course
