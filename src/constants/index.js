import {
  ai,
  blockchain,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  jalaj,
  
  jam,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  auth,
  iris,
  weather,
  yatripath,
 
  threejs,
  live,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
   {
    id: "tech",
    title: "Technology",
  },
   {
    id: "project",
    title: "Projects",
  },
  {
    id: "achievments",
    title: "Achievments",
   
  },
  {
    id: "contact",
    title: "Contact",
  },
];

 const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title:"AI Enthusiast",
    icon: ai,
  },
  {
    title: "Blockchain Enthusiast",
    icon: blockchain,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "AI",
    icon: ai,
  },
 
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "The Jam Analytics",
    icon: jam,
    iconBg: "#383E56",
    date: "April 2025 - Present",
    points: [
      "Working on the frontend part of the company website using React and Tailwind CSS.",

"Developing and maintaining user interfaces with a focus on performance and responsiveness.",

"Building and integrating backend APIs using Node.js and Express to support frontend functionality.",

"Collaborating with the team to align designs with development goals and UI/backend integration standards.",

"Gaining hands-on experience in real-world development, API design, and full-stack workflows."
    ],
  },
 
];

const achievements = [
  {
    title:
      "Successfully advanced to the SSB (Services Selection Board) conference round under the B.Tech Navy Entry Scheme.",
  },
  {
    title:
      "Secured 2nd place in a competitive C programming quiz, showcasing problem-solving skills.",
  },
  {
    title:
      "Was in the waiting list of the Smart India Hackathon (SIH), reflecting consistent effort and competitive spirit.",
  
  },
  {
    title:
      "Participated in the Dark Patter Buster Hackathon 2024, contributing innovative ideas to tackle dark patterns.",
   
  },
  {
    title:
      "Secured 3rd Rank in a ideathon for giving a solution on a secure wireless controller for handheld remote cooperation of traffic signals during peak hours.",
    
  },
  {
    title:
      "Won the 'Most Scalable Solution' prize at a Hackathon organized by UCER College, Prayagraj.",
  },
];


const projects = [
  {
    name: "Jalaj",
    description:
      "Crowdsourced water problem reporting app that allows community members to report water-related issues for action by researchers and authorities.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: jalaj, // import your actual image
    source_code_link: "https://github.com/Yashgupta683/Jalaj.git",
    live_link: "https://github.com/Yashgupta683/Jalaj.git",
  },
  {
    name: "YatriPath",
    description:
      "AR-based railway indoor navigation app that guides users within railway stations using augmented reality.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "arkit/arcore", color: "green-text-gradient" },
      { name: "unity", color: "pink-text-gradient" },
    ],
    image: yatripath, // import your actual image
    source_code_link: "https://github.com/Yashgupta683/uhack.git",
    live_link: "https://github.com/Yashgupta683/uhack.git",
  },
  {
    name: "Advanced Auth System",
    description:
      "Secure authentication and authorization solution built with the MERN Stack, featuring role-based access, JWT tokens, and Motion Framework for sleek animations.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "motion", color: "pink-text-gradient" },
    ],
    image: auth, // import your actual image
    source_code_link: "https://github.com/duagautam28/mern_advance_auth.git",
    live_link: "https://mern-advance-auth-yjvk.onrender.com/login",
  },
  {
    name: "Iris Prediction",
    description:
      "Machine learning model for classifying iris species (setosa, versicolor, virginica), built using scikit-learn and Python.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "green-text-gradient" },
      { name: "ml-model", color: "pink-text-gradient" },
    ],
    image: iris, // import your actual image
    source_code_link: "https://github.com/duagautam28/iris_prediction.git",
    live_link: "https://irisprediction-gd.streamlit.app/",
  },
  {
    name: "Weather Prediction",
    description:
      "Time series forecasting model for predicting weather patterns using scikit-learn, statsmodels, and other data analytics tools.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "statsmodels", color: "green-text-gradient" },
      { name: "forecasting", color: "pink-text-gradient" },
    ],
    image: weather, // import your actual image
    source_code_link: "https://github.com/duagautam28/LogisticRgression.git",
    live_link: "https://logisticrgression-gd.streamlit.app/",
  },
];

export { services, technologies, experiences, achievements, projects };