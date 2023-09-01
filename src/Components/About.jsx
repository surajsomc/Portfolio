/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/Space-Background-Images.svg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Computer Science student studying at The University of Wisconsin Madison. \n I am a passionate problem solver with a strong interest in computer science. I have been fascinated by how computers can be used to solve real-world problems since I was a child. I am driven by the creativity and problem-solving challenges of the field, the ever-changing landscape of computer science, and the potential to make a real impact on the world.\nIn college, I have had the opportunity to learn about and apply computer science techniques to a variety of projects, ranging from developing innovative software applications to tackling complex algorithmic puzzles. Throughout my academic journey, I've embraced the chance to collaborate with like-minded peers, pushing the boundaries of what we can achieve together.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Java",
  "C++/C/C#",
  "Python",
  "REST APIs",
  "Machine Learning",
  "Artificial Intelligence",
  "MongoDB",
  "MongoDB Atlas",
  "Artificial Integellience",
  "SQL",
  "PostgreSQL",
  "Express.js",
  "Node.js",
  "React.js",
  "React Native",
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Visual Studio Code",
  "Android Studio",
  "Dockers",
  "AWS",
  "Azure",
  "Google Cloud",
  "Kubernetes",
  "Jenkins",
  "Cloud Computing",
  "Unity",
  "Unreal Engine",
  "Web Development",
  "Mobile Development",
  "bcrypt",
  "Blender",
  "Adobe Creative Cloud",
  "Linux/Unix",
  "Slack",
  "SDLC",
  "Serverless",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Ultimately, my goal is to leverage my skills and enthusiasm to tackle complex challenges, drive innovation, and make a positive impact. Whether it's refining existing systems for efficiency, developing new tools that simplify tasks, or delving into uncharted territories, I am ready to contribute my creativity, critical thinking, and passion for computer science to shape a better future for all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
