import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const About = () => {
  const personalDetails = [
    {
      label: "Name",
      value: "John Doe",
    },
    {
      label: "Age",
      value: "23",
    },
    {
      label: "Address",
      value: "Mirpur, Dhaka-1216",
    },
    {
      label: "Email",
      value: "johndoe23@gmail.com",
    },
    {
      label: "Contact",
      value: "+1 23666648985",
    },
  ];

  const jobSummary =
    "As a full stack developer, I thrive on crafting robust digital solutions from backend to frontend. With a strong foundation in languages like JavaScript, Python, and SQL, I engineer efficient and scalable systems. My experience extends to frameworks such as React, Node.js, and Django, enabling me to deliver dynamic user experiences and seamless interactions. Leveraging my expertise in cloud platforms like AWS and Azure, I optimize performance and ensure reliable deployment. Passionate about staying at the forefront of technology, I am committed to continuous learning and innovation in the ever-evolving landscape of web development.";

  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalInformationText">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
