import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import worldviewImg from "@/public/worldview.png";
import eatsplitImg from "@/public/eatsplit.png";
import reactPizzaImg from "@/public/react-pizza.png";
import reactQuizImg from "@/public/reactquiz.png";
import useMoviesImg from "@/public/usemovies.png";
import travelAwayImg from "@/public/travelaway.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science & Engineering Graduation",
    location: "VIT University, Chennai, India",
    description:
      "Graduated after 4 years of undegraduation program with 8.89 cgpa. Did 2 internships during the program as a fullstack engineer intern",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Asociate Full Stack Enginner",
    location: "Novartis, Hyderabad, India",
    description: [
      "Joined as an Intern and converted to Full Time enginner after 6 months",
      "Created custom hook for content selection on pdf document for table extraction in Reactjs",
      "Designed and developed reusable components like React excel sheet component, signature upload, content summarization forms, table selection etc. using ReactJS",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2021, January - 2022, January",
  },
  {
    title: "Member of Technical Staff - 1",
    location: "Exotel, Bengaluru, India",
    isCurrentlyWorking: true,
    description: [
      "Developed an end to end  full stack Admin dashboard for phone number masking application with live call status, virtual numbers, settings, etc using ReactJS, Tailwind CSS, python FastAPI.",
      "Designed and implemented global remote state management using React Query with caching and live call data / status update.",
      "Designed and implemented global UI state management using React ContextAPI and useReducer Hooks",
      "Implemented Compound React Components for reusable Modal, Table, Context Menu, etc.",
      "Performance optimization using memoization in React, Bundle size optimization using code splitting and lazy loading.",
    ],
    icon: React.createElement(FaReact),
    date: "2022, January - present",
  },
] as const;

export const projectsData = [
  {
    title: "LA React Pizza CO.",
    description:
      "Pizza ordering web application with end to end ordering with special features such as  priority order,search order, address using reverse geocoding, etc.",
    tags: ["React.Js", "Tailwind CSS", "Redux", "Redux Thunk"],
    imageUrl: reactPizzaImg,
    projectUrl: "https://react-pizza.yashsrivastava.link/",
  },
  {
    title: "WorldView",
    description:
      " Web App for keeping track of your adventures by selecting and saving the cities you visited on the MAP with custom notes about your experience.",
    tags: ["React", "React Router", "Context API", "CSS modules"],
    imageUrl: worldviewImg,
    projectUrl: "https://worldview.yashsrivastava.link/",
  },

  {
    title: "useMovies",
    description:
      "Web Application for searching movies and storing your personal rating for each movies.",
    tags: ["React.Js", "Javascript", "Custom Hooks", "IMDB APIs"],
    imageUrl: useMoviesImg,
    projectUrl: "https://usemovies.yashsrivastava.link/",
  },
  {
    title: "Eat-Split",
    description:
      "A bill splitting application for friends with visiblity of how much amount is due per friend.",
    tags: ["React.Js", "Javascript", "External CSS"],
    imageUrl: eatsplitImg,
    projectUrl: "https://eatsplit.yashsrivastava.link/",
  },
  {
    title: "React-Quiz",
    description:
      "A timer based quizz application with features such as highest score correct option visibility, etc.",
    tags: ["React.Js", "Javascript", "External CSS"],
    imageUrl: reactQuizImg,
    projectUrl: "https://reactquiz.yashsrivastava.link/",
  },
  {
    title: "TravelAway",
    description:
      "An interactive travel packing list app with special features such as sorting the list by different parameters, emailing the list, marking packed/unpacked, etc.",
    tags: ["React.Js", "Javascript", "EmailJS", "External CSS"],
    imageUrl: travelAwayImg,
    projectUrl: "https://travelaway.yashsrivastava.link/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Git",
  "Tailwind CSS",
  "Redux / RTK",
  "ContextAPI",
  "React Router",
  "React Query",
  "Styled Components",
  "Responsive design",
  "React form hook",
  "Data Structures",
  "Algorithms",
  "React Design Patterns",
  "Webpack",
  "GraphQL",
  "MySQL",
  "Python",
  "FastAPI",
  "AWS",
] as const;
