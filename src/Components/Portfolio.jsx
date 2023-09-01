/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Optimized-Illustration-from-Adobe-Stock-for-ITC-Post-on-AI-in-Game-Development-scaled.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "MERN Full Stack Application: Property Management App",
    description:
      "•	Developed a comprehensive property management web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented a user-friendly interface for property managers and tenants to handle property-related tasks efficiently. Leveraged MongoDB for data storage and retrieval, Express.js for building a robust backend API, and React.js for building responsive and interactive front-end components. Utilized Node.js to manage server-side operations and handle authentication. Incorporated features like property listing, tenant management, rent payments, maintenance requests, and real-time communication using WebSocket. Implemented role-based access control to ensure data privacy and security. This project allowed me to showcase my full stack development skills while addressing real-world property management challenges effectively.",
    url: "",
  },
  {
    title: "MLH Mad Hacks Project: Round-Up Savings Mobile App",
    description:
      "•	During a hackathon, I took charge of developing a full stack mobile app utilizing my skills in React Native for front-end development, Node.js for backend implementation, and PostgreSQL for database management. The app aimed to revolutionize personal finance by automating savings and investments. My role involved designing a user-friendly interface for seamless experiences on both iOS and Android platforms, while leveraging Node.js to handle transaction processing, investment calculations, and real-time investment tracking. Additionally, I utilized PostgreSQL to efficiently store and retrieve user financial data, ensuring data security and privacy. The successful implementation of round-up functionality allowed users to automate savings and direct spare change into diversified investment portfolios, leading our team to secure an honorable mention in the hackathon.",
    url: "",
  },
  {
    title: "AI Project: Emotion Recognition from Facial Expressions",
    description:
      "•	Developed a deep learning model using Python, TensorFlow, and OpenCV to recognize emotions from facial expressions in images and video frames. Curated a diverse dataset, implemented a Convolutional Neural Network (CNN) with transfer learning, and achieved high accuracy. Conducted error analysis, fine-tuned the model, and created a user-friendly GUI for accessing the emotion recognition system. This project enhanced my AI and computer vision skills while contributing to applications in human-computer interactions and virtual reality experiences.",
    url: "",
  },
  {
    title: "Software Engineering Intern: Vamaze Tech",
    description:
      "•	Collaborated on machine learning projects utilizing Python, TensorFlow, and scikit-learn for data preprocessing and model development. Employed AWS cloud services such as EC2 and S3 to store and process large datasets, enhancing scalability and flexibility. Contributed to refining machine learning algorithms, resulting in improved model accuracy and documented project progress for effective team collaboration. Implemented version control using Git to track changes in the codebase and facilitate seamless collaboration among team members. Utilized advanced techniques such as hyperparameter tuning and cross-validation to optimize model performance, leading to enhanced predictive capabilities.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
