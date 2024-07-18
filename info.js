let info = {
  name: "Mikiyas Daniel",
  logo_name: "Mikiyas Daniel",
  flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "A second year Computer Science graduate student at Indiana University Bloomington with an interest in Software Development, UX Design and Artificial Intelligence - and seeking exciting opportunities related to the same.<br><br>I am a detail oriented person and I keep my goals and tasks organized to maintain productivity. I would bring to table a wide range of software skills, ranging from design and development to writing scripts for intelligent agents. I believe that the skills that I have attained from the dynamic environment and competitive university life define me, and I am looking forward to implementing and polishing them in any opportunity that I receive. ",
  links: {
    linkedin: "https://www.linkedin.com/in/hrishikeshpaul/",
    github: "https://github.com/hrishikeshpaul",
    angellist: "https://angel.co/u/hrishikesh-paul",
    resume:
      "https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf"
  },
  education: [
    {
      name: "Addis Ababa Science and Technology University",
      place: "Addis Ababa, Ethiopia",
      date: "Sep, 2017 - june, 2021",
      degree: "Bachelor of Science in Software Engineering",
      gpa: "3.4/4.0",
      description:
        "",
      skills: [
        "Software Design and Archtecture",
        "Data Structures",
        "Algorithms",
        "Programing Principles",
        "Descrete Mathiematics",
        ,
        "OS"
      ]
    },

  ],
  experience: [

    {
      name: "Inspur Communication",
      place: "Jinan Shandong, China",
      date: "Augest, 2023 - present",
      position: "Full Stack Developer",
      description:
        "worked as fullstack developer for maintainance projects and Ecommerce,survaillance systems,Hospital HIS systems.",
      skills: ["Springboot", "Vuejs", "NGINX", "Microservice"]
    },
    {
      name: "Zema Multiemdia Ltd",
      place: "Addis Ababa, Ethiopia",
      date: "Augest, 2022 - july, 2023",
      position: "Backend Developer with Devops",
      description:
        "Maintain and Manage Cloud Infrastructures of azure with Azure kubernetes and azure devops ",
      skills: ["Nodejs", "Docker", "Azure", "Azure Devops", "Kubernetes"]
    },
    {
      name: "2F Capital Ltd",
      place: "Addis Ababa, Ethiopia",
      date: "Augest, 2021 - july, 2023",
      position: "Backend Developer with Devops",
      description:
        "Develop Robust and efficent Merchant portal integrated with local banks and Wallet for music  streaming application. ",
      skills: ["Golang", "Nodejs", "Docker", "ExpressJS"]
    },
    {
      name: "Kuraz Technologies",
      place: "Addis Ababa, Ethiopia",
      date: "june, 2020 - july, 2021",
      position: "Full Stack Developer",
      description:
        "Develop robust learning management system using Laravel and React.js",
      skills: ["Laravel", "React", "Visual Studio"]
    }
  ],
  skills: [
    {
      title: "Languages",
      info: [
        "Java",
        "Javascript",
        "TypeScript",
        "Golang",
        "SQL",
        "NoSQL",
        "Mongodb",
        "php"
      ],
      icon: "fa fa-code"
    },
    {
      title: "Devops",
      info: [
        "Azure",
        "Kubernetes",
        "Docker",
        "Nginx",
        "Azure Devops",
        "gitlab ci/cd",

      ],
      icon: "fa fa-cubes"
    },
    {
      title: "Web technologies",
      info: ["Vue", "Springboot", "Golang gin", "Node", "Express", "Laravel"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Databases",
      info: ["MongoDB", "MySQL", "Postgresql", "h2DB"],
      icon: "fa fa-database"
    },
    {
      title: "Operating systems & tools",
      info: [
        "Ubuntu",
        "Moboxterm",
        "DBeaver",
        "Agile",
        "Scrum",
        "JIRA",
        "Firebase",
        "Azure Authorization"
      ],
      icon: "fas fa-tools"
    },
    // {
    //   title: "design",
    //   info: ["Illustrator", "XD", "Photoshop", "Final Cut Pro"],
    //   icon: "fa fa-pencil-square-o"
    // }
  ],
  portfolio: [
    {
      name: "Ecommerce",
      pictures: [
        {
          img: require("./src/assets/ecommerce/Home1.png"),
          title: "Home Page"
        },
        {
          img: require("./src/assets/ecommerce/Home2.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/ecommerce/Home3.png"),
          title: "Mockups 2"
        },
      ],
      technologies: ["springboot", "vue.js", "vuetify", "tailwind.js", "mysql"],
      category: "Ecommerce",
      date: "Sep, 2023 - Jan, 2024",
      visit: "https://www.megenagna.com.et",
      description:
        "Ecommerce connecting buyers and sellers by posting their product on platform and chatting to negotiate,also customers can browse based on their location and other preferences. "
    },
    {
      name: "Sewasew Music Streaming App Payment Portal",
      pictures: [
        {
          img: require("./src/assets/ecommerce/Sew1.png")
        },

      ],
      technologies: ["Node", "Golang", "Express", "Cockroach", "React"],
      category: "Payment Portal",
      date: "Sep, 2022 - june  , 2023",
      visit: "https://subscription.sewasewmusic.com",
      description:
        "Portal enable mobile application of sewasew users to handle subscription payment with different local wallet and banks."
    },
    {
      name: "Silkroad Hospital Landing page and Apointment Portal",
      pictures: [
        {
          img: require("./src/assets/ecommerce/Hospital1.png")
        },
        {
          img: require("./src/assets/ecommerce/Hospital2.png")
        },
        {
          img: require("./src/assets/ecommerce/Hospital3.png")
        }
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "Mysql",
        "NodePg",
        "Vuejs",
        "Vuetify"
      ],
      category: "Hospital",
      date: "Sep, 2023 - Nov, 2023",
      visit: "https://www.silkroadhospitaladdis.com",
      description:
        "it is a Portfolio and Appointment portal to faccilitate communication for their patents and Doctors."
    },
    {
      name: "Parking Controller App",
      pictures: [
        {
          img: require("./src/assets/ecommerce/Parking1.jpg")
        },
        {
          img: require("./src/assets/ecommerce/Parking2.jpg")
        },
        {
          img: require("./src/assets/ecommerce/Parking3.jpg")
        },
        {
          img: require("./src/assets/ecommerce/Parking4.jpg")
        },
        {
          img: require("./src/assets/ecommerce/Parking5.jpg")
        },
      ],
      technologies: ["Springboot", "Vue.js", "tailwind css", "Leaflet", "postgresql"],
      category: "Parking",
      date: "Oct, 2023 - Feb, 2024",

      description:
        "A parking controller app deployed for Jinan , the capital of Shandong province in Eastern China. To manage car parking."
    },
    {
      name: "Restaurant Finder and Menu order APP",
      pictures: [
        {
          img: require("./src/assets/ecommerce/Restaurant1.png")
        },
        {
          img: require("./src/assets/ecommerce/Restaurant2.png")
        },
        {
          img: require("./src/assets/ecommerce/Restaurant3.png")
        },
        {
          img: require("./src/assets/ecommerce/Restaurant4.png")
        },
      ],
      technologies: ["springboot", "vuejs", "tailwind.css", "Queasar", "leaflet"],
      category: "Restaurant",
      date: "Feb, 2024 - June  , 2024",
      description:
        "Dynamic app to find restaurnat near by you by tracking location and also scanning qr for restaurant menus to order foods and drinks."
    },

  ],
  portfolio_design: [
    {
      name: "Ecommerce",
      title: "Megenagna E-Commerce",
      pictures: [
        {
          img: require("./src/assets/ecommerce/Home1.png"),
          title: "Home Page"
        },
        {
          img: require("./src/assets/ecommerce/Home2.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/ecommerce/Home3.png"),
          title: "Mockups 2"
        },

      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore."
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/MoodBoard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pantree/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pantree/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    }
  ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai"
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai"
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore"
    }
  ]
};

export default info;
