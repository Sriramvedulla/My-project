import React, { useState, useEffect } from "react";
import { Card, CardImg, CardBody, Button } from "reactstrap";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Book My Show",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHiR_bKbFopbjc5YkdwLr96p2pkMqZSp2-GMAXt78RTWkqIj8YjDHokKSqwKDCdDFH2s&usqp=CAU",
    description:
      "It's a ticket booking app where I use React, Reactstrap for frontend purpose",
    link: "https://streampage.vercel.app/",
  },
  {
    id: 2,
    title: "Weather App",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0e7lfteLEoU1h_lADXscsntGD7NxoUxEUEg&usqp=CAU",
    description:
      "In this project, I use mainly ReactJS for frontend, for styling I use Bootstrap and Reactstrap",
    link: "https://imaginative-profiterole-ad771c.netlify.app",
  },
  {
    id: 3,
    title: "To-do List",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gcunaL_rDzn5uIEv9dRTbPGJW1P-tpD8ow&usqp=CAU",
    description:
      "In this project, I use mainly ReactJS for frontend, for styling I use Bootstrap and Reactstrap",
    link: "https://imaginative-profiterole-ad771c.netlify.app",
  },
  {
    id: 4,
    title: "ChatBot",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIS8OPH27uuOkNpRavgwl78AetPb0I3ovOg&usqp=CAU",
    description:
      "It's an AI application where you can get the image from the text, in this project I use ReactJS for frontend and Node and Express for backend, and for database purpose, I used MongoDB Atlas",
    link: "https://imagegenerator-openai.netlify.app",
  },
  {
    id: 5,
    title: "Text to Speech Converter",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqlcLOR2ByBjD2hQxroEJtLPk9UMV-X8-98myd-mqRuUKF71LD8i4ufPDwWr2U69Jgekg&usqp=CAU",
    description:
      "It's an AI application where you can get the image from the text, in this project I use ReactJS for frontend and Node and Express for backend, and for database purpose, I used MongoDB Atlas",
    link: "https://imagegenerator-openai.netlify.app",
  },
];

function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentProject = projects[projectIndex];

  return (
    <>
      <div className="nocontent">
        <div className="cards">
          <Card style={{ width: "320px", backgroundColor: "#EE7113" }}>
            <div className="project-title">
              <h5>{currentProject.title}</h5>
            </div>
            <CardImg
              top
              width="100%"
              height="250px"
              src={currentProject.image}
              alt={currentProject.title}
              style={{ padding: "10px", borderRadius: "10px" }}
            />
            <CardBody>
              <a href={currentProject.link}>
                <Button
                  color="primary"
                  style={{
                    marginLeft: "auto",
                    alignSelf: "center",
                    fontWeight: 600,
                  }}
                >
                  Live Preview
                </Button>
              </a>
            </CardBody>
          </Card>
        </div>
        <div className="aboutproject">
          <div className="title">{currentProject.title}</div>
          <div className="description">{currentProject.description}</div>
        </div>
      </div>
    </>
  );
}

export default Projects;
