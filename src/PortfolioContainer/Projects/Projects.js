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
      "It's a ticket booking app where I use ReactJs, Reactstrap and MUI for frontend purpose.",
    link: "https://my-bookmyshow.netlify.app/",
  },
  {
    id: 2,
    title: "Weather App",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0e7lfteLEoU1h_lADXscsntGD7NxoUxEUEg&usqp=CAU",
    description:
      "This Project is developed in ReactJs by using Axios.I also used OpenWeather API to gather the weather information of the cities on search",
    link: "https://sriram-weather-app.netlify.app",
  },
  {
    id: 3,
    title: "To-do List",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gcunaL_rDzn5uIEv9dRTbPGJW1P-tpD8ow&usqp=CAU",
    description:
      "It is developed in React.Js by using JavaScript, Html and CSS to Add, Edit and Delete the To-do Tasks.",
    link: "https://addingoftask.netlify.app/",
  },
  {
    id: 4,
    title: "ChatBot",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIS8OPH27uuOkNpRavgwl78AetPb0I3ovOg&usqp=CAU",
    description:
      "It's an AI application developed by using JavaScript with the use of an OpenAI API for the replica of ChatGpt which understands tasks such as generating content, answering questions, engaging in conversations and providing explanations.",
    link: "https://sriram-chatbotapp.netlify.app",
  },
  {
    id: 5,
    title: "Text to Speech Converter",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqlcLOR2ByBjD2hQxroEJtLPk9UMV-X8-98myd-mqRuUKF71LD8i4ufPDwWr2U69Jgekg&usqp=CAU",
    description:
      "It is Text to Speech Converter application where it converts the entered Text to speech when we Clicked on Play Button and we can also select the required languages that are available.",
    link: "https://speechtext-converter.netlify.app",
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
