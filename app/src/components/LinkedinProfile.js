import React, { createContext, useContext, useState, useRef } from "react";
import bgImage from "../assets/images/bgImage.jpg";
import actorImage from "../assets/images/actor.jpg";
import "./style/LinkedinProfile.css";
import linkedinLogo from "./../assets/images/linkedin.png";
import gitLogo from "./../assets/images/github.png";

// bootstrap style
import { Button, Container, Row, Col } from "react-bootstrap";

// import Actions from "./LinkedinProfileAction";
// const funMenuClick = new Actions().menuSelected;

const ProfileApp = () => {
  return (
    <Container /* for bootStrap */>
      <div className="border-wrapper leftAlign">
        <Photo />
        <PersonalInfo />
        <Menu />

        {/* {aboutRef && <About />} */}
        {/* {visibleSection.about && <About />} */}
        <About />
        <Experience />
        <Education />
        <Skills />
        <Recommendations />
      </div>
    </Container>
  );
};

export default ProfileApp;

const Menu = () => {
  const Btn = ({ heading }) => {
    return (
      <button
        onClick={funMenuClick}
        sectionRef={`${heading.replace(/\s+/g, "").toLowerCase()}Section`}
        id={heading.replace(/\s+/g, "").toLowerCase()} // removing spaces and changing to lowerCase
      >
        <span>{heading}</span>
      </button>
    );
  };

  return (
    <div className="menu_material">
      {/* <p>// options</p> */}
      <button onClick={funMenuClick} sectionRef="aboutSection" id="info">
        {/* <img src={infoIcon} alt="" /> */}
        <span>About</span>
      </button>
      <button onClick={funMenuClick} sectionRef="careerSection" id="experience">
        <span>Experience</span>
      </button>
      <button onClick={funMenuClick} sectionRef="eduSection">
        <span> Education</span>
      </button>
      <button onClick={funMenuClick} sectionRef="skillSection">
        <span> Skills</span>
      </button>
      <button onClick={funMenuClick}>
        <span> ongoing</span>
      </button>
      <Btn heading="About" />
    </div>
  );

  function funMenuClick(e) {
    // STEP diss-asign class from all
    // const menuBtns = document.querySelectorAll(`.menu button`);
    const menuBtns = document.querySelectorAll(`.menu_material button`);

    // Loop through the NodeList and remove the class from each element
    menuBtns.forEach((element) => {
      element.classList.remove("selected");
    });

    // STEP assign class.
    if (e != null && e.target != null && e.target.classList != null) {
      e.target.classList.add("selected");
    }

    // STEP Show respective section
    if (
      e != null &&
      e.target != null &&
      e.target.attributes.sectionref != null &&
      e.target.attributes.sectionref.value != null
    ) {
      var clickedSection = e.target.attributes.sectionref.value;
      if (document.getElementById(clickedSection) != null) {
        // hide all sections
        const allSection = document.querySelectorAll(`.section`);
        allSection.forEach((element) => {
          element.style.height = "0";
          // element.style.display = "none";
          element.style.transform = "scaleY(0)";
        });
        // show selected section
        // document.getElementById(clickedSection).style.display = "";
        document.getElementById(clickedSection).style.height = "fit-content";
        document.getElementById(clickedSection).style.transform = "scaleY(1)";

        // scroll down
        e.target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
function Photo() {
  return (
    <div id="photoSection">
      {/* <img src={bgImage} alt="Background Image" className="bgImage" /> */}
      <Row>
        <Col>
          <div className="bgImage">
            <div className="actorImageContainer">
              <img src={actorImage} alt="Actor Image" className="actorImage rounded-circle img-fluid" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

function PersonalInfo() {
  return (
    <div>
      <Row>
        <h1>Dalveer Singh.</h1>
      </Row>
      Full Stack Backend Developer | Java Software Developer | Software Engineer.
      <br />
      📍Ontario, Canada
      <br />
      <hr />
    </div>
  );
}

function About() {
  return (
    <div id="aboutSection" className="section">
      <h1>About</h1>
      <p>
        ☑️Master Degree in Computer Applications <br />
        ✅Proactive problem-solver <br />
        ☑️Worked with Cloud-based systems, and developed new applications <br />
        ✅Great interpersonal skills <br />
      </p>
      <br />
      <h2>Contact</h2>
      <div className="contactGrid">
        <a href="https://github.com/Dalveer-Singh" target="_blank">
          <img src={gitLogo} alt="Git Hub" />
        </a>
        <a href="https://www.linkedin.com/in/singhdalveer" target="_blank">
          <img src={linkedinLogo} alt="Linked In" />
        </a>
      </div>

      <hr />
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      companyLogo: "ITC Infotech logo",
      jobTitle: "Associate IT Consultant",
      companyName: "ITC Infotech",
      employmentType: "Full-time",
      duration: "Jul 2022 to Jan 2024" + " · 1 yr 7 mos",
      description: `I served as an Associate IT Consultant, contributing significantly to various projects. One of the key highlights of my role involved working in a media transcoding project for Adobe, catering to a vast user base of over 43 million worldwide. Within this project, I focused on implementing new features, addressing bugs, and ensuring seamless compatibility with existing systems. Utilizing a diverse tech stack including Java, Python, RESTful APIs, and the Spring framework, I engineered new features and provided round-the-clock pager duty support to address high-priority issues promptly. My responsibilities also included creating functional and non-functional tests using the Spring framework to ensure the robustness and quality of our solutions. Furthermore, I implemented storage optimization measures, resulting in a significant reduction in storage utilization. Overall, my experience at ITC Infotech was marked by proactive problem-solving, effective collaboration, and a commitment to delivering high-quality results.`,
    },
    {
      companyLogo: "Tata Consultancy Services logo",
      jobTitle: "IT Analyst",
      companyName: "Tata Consultancy Services",
      employmentType: "Full-time",
      duration: "Jul 2017 to Jul 2022" + " · 5 yrs 1 mo",
      description: `I played a pivotal role in software development, focusing on both frontend and backend technologies. I contributed significantly to the development and testing of web applications and websites across various projects, ensuring high-quality standards and functionality through the execution of integration and unit test cases. Additionally, I led proof-of-concept initiatives, resulting in successful implementations and adoption of innovative solutions. Through the implementation of automated testing strategies, I effectively reduced testing time and post-release defects, enhancing overall project efficiency. My contributions also extended to the development of a search engine, which garnered positive feedback and adoption from numerous clients. Collaborating closely with cross-functional teams, I ensured the timely delivery of complex projects within specified timelines and budget constraints. Notably, I achieved significant improvements in search accuracy and user satisfaction through strategic enhancements, alongside resolving technical issues promptly, maintaining a remarkable record of over 200 bugs resolved without workflow disruption. Throughout my tenure, I also mentored and supervised junior developers, fostering a culture of excellence and adherence to client requirements and standards.`,
    },
  ];

  return (
    <div className="experience-container section" id="careerSection">
      {experiences.map((exp, index) => (
        <div key={index}>
          <td>
            <img className="company-logo" src={exp.companyLogo}></img>
          </td>
          <td>
            <h2 className="job-title">{exp.jobTitle}</h2>
            <p className="company-name">
              {exp.companyName} · {exp.employmentType}
            </p>
            <p className="duration">{exp.duration}</p>
          </td>
          <p className="description">{exp.description}</p>
        </div>
      ))}
      <hr />
    </div>
  );
}

function Education() {
  const education = [
    {
      university: "Shanmugha Arts, Science, Technology & Reserch Academy (SASTRA) University",
      course: "Master of Computer Applications - MCA",
      duration: "2017 - 2020",
      logo: "logo",
    },
    {
      university: "Chitkara University",
      course: "Bachelor of Computer Applications - BCA",
      duration: "2014 - 2027",
      logo: "logo",
    },
  ];

  return (
    <div className="section" id="eduSection">
      <h1>Education</h1>
      {education.map((edu, index) => (
        <div key={index}>
          <td>
            <img src={edu.logo} alt="" className="company-logo" />
          </td>
          <td>
            <h1>{edu.course}</h1>
            <p>{edu.university}</p>
            <p>{edu.duration}</p>
          </td>
        </div>
      ))}
      <hr />
    </div>
  );
}

function Skills() {
  return (
    <div className="section" id="skillSection">
      <li>Skills [Still Pending]</li>
      <li>Skills [Still Pending]</li>
      <li>Skills [Still Pending]</li>
      <li>Skills [Still Pending]</li>
      <li>Skills [Still Pending]</li>
      <li>Skills [Still Pending]</li>
      <li>Skills [Still Pending]</li>
      <li>Skills [Still Pending]</li>
      <li>Skills [Still Pending]</li>
      <li>Skills [Still Pending]</li>
      <li>Skills [Still Pending]</li>
      <li>Skills [Still Pending]</li>
      <li>Skills [Still Pending]</li>
    </div>
  );
}

function Recommendations() {
  const recommendations = [
    {
      profilePicture: "Bhupesh Pant profile picture",
      name: "Bhupesh Pant",
      connectionDegree: "1st",
      position: "Software Developer at Adobe, Poet, Writer",
      date: "May 12, 2024",
      relationship: "Bhupesh was senior to Dalveer but didn't manage Dalveer directly",
      text: `Dalveer worked in my team at Adobe for almost 1 year. He is a solution oriented person I met in my career. His technical understanding and dedication to grab in depth understanding of problem set make him one of the key person for any tech team. I am sure where ever he will work , his skillset surely help the organisation to grow.`,
    },
    {
      profilePicture: "Rohit Chaturvedi profile picture",
      name: "Rohit Chaturvedi",
      position: "Senior Software Engineer at Citi | Java | Spring | Database",
      relationship: "Rohit was senior to Dalveer but didn't manage Dalveer directly",
      text: `Dalveer is an excellent developer. I worked with him as a technical lead and he was the much needed addition to the team even though it was the start of his IT stint. He's a dedicated worker and never shy of responsibilities. Plus, he's a great team player and always pays attention to details.`,
    },
    {
      profilePicture: "Mehjabin Pathan profile picture",
      name: "Mehjabin Pathan",
      position:
        "Java Back End Developer | Spring Boot | Rest API | Spring MVC | JavaScript | JSON | PLSQL | MySQL | Looking for an opportunity in Java",
      relationship: "Mehjabin worked with Dalveer on the same team",
      text: `I wholeheartedly recommend Dalveer Singh for any web/software development role. Not only is he a quick learner, mastering new concepts with ease, but he also embodies a helpful nature, always ready to assist team members. Dalveer Singh consistently follows clean code practices, ensuring high standards of quality and readability. It's been a pleasure working alongside him, and I have no doubt that he will continue to excel in his future endeavors.`,
    },
  ];

  return (
    <div className="section" id="recommendationSection">
      <h1>Recommendations</h1>
      {recommendations.map((rec, index) => (
        <div key={index} className="recommendation-card">
          <td>
            <img className="profile-picture company-logo" src={rec.profilePicture}></img>
          </td>
          <td>
            <h2 className="name">{rec.name}</h2>
            {rec.position} <br />
            <span className="light"> {rec.relationship}</span>
          </td>
          <p className="text">{rec.text}</p>
        </div>
      ))}
      <hr />
    </div>
  );
}
