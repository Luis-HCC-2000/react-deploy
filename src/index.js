
import React from "react";
import ReactDom from "react-dom";

let webPageText={
  descriptions:{
    //["Description: 0", "imgSource: 1" "imgAlt:2"]
    learningPath: ["I have been studying about web development and coding for about 5 years, I have learnt about HTML, CSS, Sass, React, Redux, Bootstrap, Machine Learning, Python, the courses and certifications that I have done are:", "https://images.unsplash.com/photo-1579711089580-3988c4c1fff6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9hZCUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", "Photo of a road"],
    aboutMe: ["Hello, my name is Luis, I am a person who is passionate about challenges, I love the pleasure of being successful in the challenges that come my way for the same reason I am competitive, I like to socialize and get to know new people, I consider myself a very empathetic person, I enjoy learning about any subject. All my life I have loved every topic that is related to software development, I discovered it since I was 7 years old when I saw my father creating a web page, and I have been learning about it since that moment, I have taken many courses of computer science, with courses that teach about machine learning, python programming, algorithms, technical support, web development, among others. I would love to get this job because I think I would learn a lot, I could contribute a lot and I would give my best effort because I am ready for being a great Application Developer", "https://scontent.fmex10-1.fna.fbcdn.net/v/t1.6435-9/49710284_2578081252232332_1024147737848840192_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeERnM-X5vjfo6IQEuzPeeGVSzXcHSTlbzdLNdwdJOVvN9S6MouaHI8oNAwI-DKSBjjNlxS-ta27vbGkD7oucqtP&_nc_ohc=YGHKVaNgTv8AX8npuV4&_nc_ht=scontent.fmex10-1.fna&oh=a299502affbaaddd3c6776f841ef0158&oe=60E32BCC" ,"Photo of me"],
    myProjects:["I have done many different projects on different topics of computer science, but my favorite ones are:", "https://collaborate-project.eu/wp-content/themes/collaborate/images/sliders/slide2.png?189db0&189db0", "Project Image"],
    myCV: ["Here is my CV"]
  },
  courses:{
    //CourseName: ["Description:0" "Link:1" "Institution:2" "Institution Image:3", "title:4"]
    introCSS3: ["In this course you will learn how to style your pages by taking advantage of the power of CSS3. We will focus on both proper syntax (how to write your styling rules) and the importance of accessibility design (making sure that your style enhances your site, not make it harder to navigate). It is so important that you jump in ready to make mistakes and typos in this course. The only way you will really understand the material is to practice typing it in on your own as often as possible.", "https://coursera.org/share/131fe47b943fba291e412e37ff4e2c19", "University of Michigan", "https://thumbor.forbes.com/thumbor/fit-in/200x200/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5776cd83a7ea436bd18c1500%2F0x0.jpg%3Ffit%3Dscale%26background%3D000000", "Intro to CSS 3"],
    pythonDataStructures: ["This course will introduce the core data structures of the Python programming language. We will move past the basics of procedural programming and explore how we can use the Python built-in data structures such as lists, dictionaries, and tuples to perform increasingly complex data analysis. This course will cover Chapters 6-10 of the textbook “Python for Everybody”. This course covers Python 3.", "https://coursera.org/share/b98d235a99d3d9db16791c0d2768f744", "University of Michigan", "https://thumbor.forbes.com/thumbor/fit-in/200x200/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5776cd83a7ea436bd18c1500%2F0x0.jpg%3Ffit%3Dscale%26background%3D000000", "Python Data Structures"],
    bitsAndBytesOfComputerNetworking: ["This course is designed to provide a full overview of computer networking. We’ll cover everything from the fundamentals of modern networking technologies and protocols to an overview of the cloud to practical applications and network troubleshooting. \n By the end of this course, you’ll be able to: \n describe computer networks in terms of a five-layer model \n understand all of the standard protocols involved with TCP/IP communications \n grasp powerful network troubleshooting tools and techniques \n learn network services like DNS and DHCP that help make computer networks run \n understand cloud computing, everything as a service, and cloud storage", "https://coursera.org/share/5bbba7474de51a1ff217d8f71442f8ff", "Google", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABR1BMVEX////oQjQzqFJChPP5uwigvfo4f/I2fvOwx/k/gvNVkfj5uQD5uADoQDL/vAAeo0XnMiDnOSnoLxwqpkz3x8X98O+FqvbW69pDgvnH4sz73dvnNiXwg3z+/fn7vxsmpUnx+PIyqkJ7wor3vbn1q6bnNzb6wAD97MqStPcZp1X1+f6938P50s/74+HsUUX1qKPzn5rrWy30mBj70XD9+Ov74Kn98dr5xkz6037o7/386cH70XGVsDeqxPiu2LaVzaBMsWQ7lbLZ5PzwdGzvYVf0lo/3wL3ucmnzgHjtTUDwZ13sWU/0m1f2oxHveCT3rA/qTzDtainyiR/vXEP82IsiePb7xTrC1ftmm/nkuApps1nAtCZnrEXYtxqssy5un/d8rj5tvX7CwFscnWQ+h+E9kcM6mKE3oXc+jdE3nYpdt3Fyv4IvpF5EX9uUAAAJQklEQVR4nO2ca3fbxhFASYgmTVEgXlIYkbQBk6qUmKTExnbipDXJmqJtSU2fdm03aRP1kTZU///nAnxAAAgQu7MvQGfvp8QnB8LNzM7szkIuFCQSiUQikUgkEolEIpFIJBKJJHMMmv39Ff3+4ED061BksH/Unp4apmnqPu6/mMXzN7NuP+emze7sUjX1lmGoajGKqhpGyxWdDvcHol8UxOBoaph6nFpE1GjpZrH9KmfB7M+KZstIkwtq6ubVWW5C2Z8ZJoadb9kyT89yEMnBEKTnS553RRtsp/8arreS1I1hdgPZPTUNIr2lo2G+yeSKfHB2oZOF7xbDnPZF+2xwpLZo+a0csxXHLr34+Y56OzvrsXlJ3a/orUfjSLTZkoO2ycBv4ahfNUXbuXRVCvUz2XEm2u9gyiqAK8XWqdgwMg3gylEfChRktgLDipeiiurgtMXez8MwxPT/LuEOFAPVFNE3Zjwy9FaxzV1wqvPz82i9fsDV7+CK0xK8xbjiWW8GReZNIkbR4KfY5FdjbuFZbZpUz0kZFOyzOEikwlFwwLNLCBEUkaI8BQ+Kd13w4o4LFi4F9EGugm3uOxnOgmfmHRfsEwqq3o2hh/sPyMuZpyBBGVXVlm7qxsXlm7bH66uiYXq3b6kP5HswhFYZtWUar4evmuF986DfnZ17N6jZERyCDoTefdkwcVp2sD+72HJZxVewD9isqYZ5dZR25GnO1ISNLufZxSm2oNoy2mizzu5l3K0cZ8EZbidUWyrGTWdzc7DMWbCJm6OGMcSbq/TPw7nKe7x2jieomoCbsdD8nLfgEV4dBV4ZBS6xeAseYM1lVBN80fDKMIQIFmY4vd4oElwWLaeU3AUHOIMZfUo282vrAmb4U/QQEmTomqHJXbCPXmZUk8IXTWdn5M/A47fIIVT1fd4vR4OT429RBQVd85HypHa898tfIEUwn4Jf1kql0vHv0hVVM5cpWig89wxLx1+kfupLo8iI4MFC0FX8/R+2h1HoFxMkPNsrrfnjNkVjKvpNoTys+YbHf0pWVE/53kHT4+Q2hK7it0mLUdWz8P0ZiCe1UlAxqW3o3Lch1CiFDJPahnol+j3BfLNXinD8xaZijnM0kqRJbaMl/AtJOJuCMW1DLea1jkYqaSCM4bahZ+RbZQjP42MYbhs5LjOhdh9RDLQNPaf7UY+n8Um6dFy3DfVC9GsS8GyLod82WjlehYVfJSXpUnHRNlSOn9PRJ3EZrnHbhsH/y1Z6PE0T9NqGmc/JxZKTVEO3bfxZ9FuSsLXQrHmL/dgX92jzGdQwZlO6Qe0E+7G7lTJl3n0NNPxLumGthL8l3a3uUKbyHmiIEsIn+I+lb1i+BxPctqPxDZ9lwvATmGHCwSLE3pdZMKx+gBkilVLAyZC+4c4OzPBtumHtK8BzGRi+gxkmHQ6Dhs+zYViBtQuEdrgHKDRMDF+CDL9CMPwmI4awhph6soCV0gwZpvq5hk8zYvgCZIjS8CFjRAaGwE0No3bIxBB2ukBohw+lIS9D2MY0R4bVO2/ILIbZqTTMDDPTLWCGCCHMSscHGiKMabKyawN2ixztvIGGOTo9AXdteToBw3beOZpiVO6DDFEmUZB2kZ3zYX6midApRn4mwtBJVH6m+jvvHsMMc3MzU63CBFOu8VeKgNu1zEz1kYrpHv4N6W4FizKCIfBmBuWWu/7xr9iPvY/HvXRF6O0awpcK9e8UrQF8OirvK6mG4BvStJlwrf7rzxWrQ1MnBoQYAtthIa3U1B9+/7miKLZDUSeGD+mFqQJsFimlpv43xRNUtBFNnw0elxFKL/jp23Y19b8v/DyYfj+LsAyrP8Afn7gQa7UffUGtR89nk08YllKXtwmG9Y+KL6hYE2o6MaSnKEGhSTxe1L+79WO8EhGSlKDQFOI334smEYbdSvwhvc5Ud0l+QMyspl76Pipoj2kJRfkaIYTAMdSKzd8ocZvEJsw2Ngh1hmgZFjZ/KyjQJAKwKjYoIdypkP2McJrW6j/GCTIrNighJOmGHqFqGmoSHPL0JVIIYXO2WwJN3z1JJGJNGNRThC0pfEbj4+9NY5pEqJ5eU5EK8gIlhODzvc/6N51XJ4lkNNot42UFJYRl2Lg7yHK4vz5JbFOkvD9Fm+cQJ+nqbxyIbxJRxUMKXj4odZRGkha8hlErJTQJhor3UBYhyQAjwEn9Y8oS9LGo9Yz7aILgSWmYf1hofhSjeB+pypAdDQM0NGRDSpsbVEEadWbBDXoQqTSNF6iC4FFwFJwgKtq1Q/jjPkNbgzvEx4oAYxtD0VKI6s3jD8iCVFrFEgcjTQkz9T3K9HAdQhqtYsUIJ09dxQkwjE7nn//6VEAIXeZ4UbS0jgP4KSPbsux/oyrSW4UeWMVm4WiPcc9Tvcnihzz6qYqUqKRH3yhYxWaBrYwdfD9P8T87KGd7Wr3QZ4KXpwtHq4O4Hp3xJJAktvLf9EwlG7HFgZ2nHpY2GTmpeqO5FsmQR79JVySZA8czhii6AdHm40biknQOx3NN20yPRz/vbF+MNDuFzzV+ni6wbM26HvcaTtitcTjquHZ2/FPt7W2jTLnMrN4JJri2dF0m85uOx/V8svyDLf/PtreNKu0ys+QQlqfB116D8h8/+unTpEwlHiEmgbm1ISWxbbDJ0QUdvoqWFds2qgzqqA/m7o2YuLZRpbtdi+AovBV/3tjDMVuEghTt/0XaRoXWwT5REXuDSkikbZSpnpliAW3fiAi2jeouwyojUNFvG1VGrT6qyDtR3bW/ahtlLoKuIu9ys24bZZZ9IgT3irpsG0wbYVRxwj1T3bbBUdDlhne9IZzDAgCeiKHYE4ezYKHQQzsE0UG7EfGXpHJcjNS/EkCF02nKsqleoGPR49E2tLkjTNDNVOY11RKWoWt6CtPVaENveSjidGIGnpQQH8AljTmjVNWuxQdwRW/CwFGbiCuhMYxoL0dbYfu7Kvg8GNGMo6aMsvg3vbu5SqXmeFdWol2SOLyJXpThY2vXmVp/UZyxQiJpaXhXx2JoQCVtVy8z7SGFhSTWmrS0HOktcUY3VuIFaFjOdu06PUf0G0No9MZzK/kq1PLctMnN6NAR/aZEOIej8c3EFY1gTa47G5ffucZpNA5XNBoNJ4sNXSKRSCQSiUQikUgkEolEIpFI7i7/BxhoVwYhp7ttAAAAAElFTkSuQmCC","The bits and Bytes of Computer Networking"],
    technicalSupportFundamentals: ["This course is the first of a series that aims to prepare you for a role as an entry-level IT Support Specialist. In this course, you’ll be introduced to the world of Information Technology, or IT. You’ll learn about the different facets of Information Technology, like computer hardware, the Internet, computer software, troubleshooting, and customer service. This course covers a wide variety of topics in IT that are designed to give you an overview of what’s to come in this certificate program. \n By the end of this course, you’ll be able to: \n understand how the binary system works \n assemble a computer from scratch \n choose and install an operating system on a computer \n understand what the Internet is, how it works, and the impact it has in the modern world \n learn how applications are created and how they work under the hood of a computer \n utilize common problem-solving methodologies and soft skills in an Information Technology setting", "https://coursera.org/share/2600e8c6b7921576e341c37858ff49f8", "Google", "data:image/png;base64,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", "Technical Support Fundamentals"],
    whatIsDataScience: ["The art of uncovering the insights and trends in data has been around since ancient times. The ancient Egyptians used census data to increase efficiency in tax collection and they accurately predicted the flooding of the Nile river every year. Since then, people working in data science have carved out a unique and distinct field for the work they do. This field is data science. In this course, we will meet some data science practitioners and we will get an overview of what data science is today.", "https://coursera.org/share/7735004cb5a6dd81922e48e9e7304bed", "IBM", "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c101a4fa7ea4370591a0243%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D416%26cropY1%3D0%26cropY2%3D416","What is Data Science"],
    programmingForEveryBody: ["This course aims to teach everyone the basics of programming computers using Python. We cover the basics of how one constructs a program from a series of simple instructions in Python.  The course has no pre-requisites and avoids all but the simplest mathematics. Anyone with moderate computer experience should be able to master the materials in this course. This course will cover Chapters 1-5 of the textbook “Python for Everybody”.  Once a student completes this course, they will be ready to take more advanced programming courses. This course covers Python 3.", "https://coursera.org/share/f96da7f5bad4375f66428646152593dd", "University of Michigan", "https://thumbor.forbes.com/thumbor/fit-in/200x200/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5776cd83a7ea436bd18c1500%2F0x0.jpg%3Ffit%3Dscale%26background%3D000000","Programming for Everybody"],
    machineLearning: ["This course provides a broad introduction to machine learning, datamining, and statistical pattern recognition. Topics include: (i) Supervised learning (parametric/non-parametric algorithms, support vector machines, kernels, neural networks). (ii) Unsupervised learning (clustering, dimensionality reduction, recommender systems, deep learning). (iii) Best practices in machine learning (bias/variance theory; innovation process in machine learning and AI). The course will also draw from numerous case studies and applications, so that you'll also learn how to apply learning algorithms to building smart robots (perception, control), text understanding (web search, anti-spam), computer vision, medical informatics, audio, database mining, and other areas.", "https://coursera.org/share/c6d81dacc6c58732fcb42ee5d4d6097c", "Stanford University", "https://i.pinimg.com/originals/73/99/49/7399495cacf42f0b49f55a73e0761815.jpg","Machine Learning"],
    introductionToHTML5:["This course will appeal to a wide variety of people, but specifically those who would like a step-by-step description of the basics. There are no prerequisites for this course and it is assumed that students have no prior programming skills or IT experience. The course will culminate in a small final project that will require the completion of a very simple page with links and images. The focus of this course is on the basics, not appearance. You can see a sample final page at http://intro-webdesign.com/html5-plain.html.", "https://coursera.org/share/f7ba36d8e7a907a4c8588dffbf502530", "University of Michigan", "https://thumbor.forbes.com/thumbor/fit-in/200x200/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5776cd83a7ea436bd18c1500%2F0x0.jpg%3Ffit%3Dscale%26background%3D000000","Introduction to HTML 5"],
    responsiveWebDesign: ["In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design. \nFirst, you'll build a cat photo app to learn the basics of HTML and CSS. Later, you'll learn modern techniques like CSS variables by building a penguin, and best practices for accessibility by building a web form.\nFinally, you'll learn how to make webpages that respond to different screen sizes by building a Twitter card with Flexbox, and a complex blog layout with CSS Grid.", "https://www.freecodecamp.org/certification/luis_caraveo/responsive-web-design", "Free Code Camp", "https://s3.amazonaws.com/freecodecamp/curriculum-diagram-full.jpg","Responsive Web Design"],
    javaScriptAlgorithmsAndDataStructures: ["While HTML and CSS control the content and styling of a page, JavaScript is used to make it interactive. In the JavaScript Algorithm and Data Structures Certification, you'll learn the fundamentals of JavaScript including variables, arrays, objects, loops, and functions.\nOnce you have the fundamentals down, you'll apply that knowledge by creating algorithms to manipulate strings, factorialize numbers, and even calculate the orbit of the International Space Station.\nAlong the way, you'll also learn two important programing styles or paradigms: Object Oriented Programing (OOP), and Functional Programing (FP).", "https://www.freecodecamp.org/certification/luis_caraveo/javascript-algorithms-and-data-structures", "Free Code Camp", "https://s3.amazonaws.com/freecodecamp/curriculum-diagram-full.jpg","JavaScript algorithms and Data Structures"]
  },
  headerLinks:{
    //["ID: 0" "Title: 1"]
    myLearningPath:["myLearningPath", "Learning Path"],
    myCV: ["myCV", "My CV"],
    myProjects: ["myProjects", "My Projects"],
    aboutMe: ["aboutMe", "About Me"]
  },
  projects:{
    tributePage:["Tribute Web Page", "Web page made in tribute to Kobe Bryant"],
    productLanding:["Product Landing Web Page", "Web Page for selling a product"],
    webSurveyForm:["Web Survey Form", "Web page where a survey is Made"],
    technicalDocumentation:["Technical Documentation Page", "Web page explaining something technical"],
    javaScriptProjects:["Javascript Coding Challenges Page", "Web page where I show my 5 coding challenges needed to pass the course of JavaScript Algorithms and Data Structures through FreeCodeCamp"],
    HundredCodingChallenges:["Hundred coding challenges", "100 coding challenges solved with Python, C++ or C"],
    recognizeHandWrittenDigits:["Recognize Handwritten digits", "Neural networks and logistic regression to recognize handwritten digis"],
    LogisticRegressionPrediction:["Logistic Regression Prediction", "Logistic regression model to predict whether a student gets admitted into a university based on results of two exams"],
    linearRegresionPrediction:["Linear Regression Prediction", "Predicting the price of a house using linear regression, depending on the number of bedrooms and house size"]
  }
}

let Header = (props) => {
  return(
    <header>
      <div>
        <a href="https://www.facebook.com/luishumberto.caraveocabrera"> <i className="fab fa-facebook "></i> </a>
        <a href="https://www.linkedin.com/in/luis-humberto-caraveo-cabrera-6075b9194/"><i className="fab fa-linkedin "></i></a>
        <a href="https://github.com/Luis-HCC-2000"><i class="fab fa-github "></i></a>
      </div>
      <h1>Luis Caraveo</h1>
      <ul>{props.linksArr.map((navLink,index)=>{ return <li key={index}><a href={"#" + navLink[0]}>{navLink[1]}</a></li>})}</ul>
    </header>
  )
}
Header.defaultProps={
  linksArr: Object.values(webPageText.headerLinks)
}



class MyLearningPath extends React.Component{
  constructor(props){
    super(props);
    this.state={
      seeMoreInfo:false
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(){
    this.setState(state=>({seeMoreInfo: !state.seeMoreInfo}))
  }
  render(){
    return(
      <div className="myLearningPath" id="myLearningPath">
        <Section classes="descriptionMyLearningPath" title="My learning path" description={webPageText.descriptions.learningPath[0]} imgSource={webPageText.descriptions.learningPath[1]} imgAlt={webPageText.descriptions.learningPath}/>
        {this.state.seeMoreInfo &&  <Courses/>}
        <button type="button" onClick={this.handleChange}>{this.state.seeMoreInfo? "Hide Info" : "Show Info" }</button>
      </div>
    )
  }
}

MyLearningPath.defaultProps={
  descriptions: webPageText.descriptions.learningPath
}

let Courses = (props) =>{
  let addCourses=(coursesArr)=>{
    return coursesArr.map((course, idx)=> createCourse(course, idx) )    
  }
  let createCourse=(course, key)=>{
     //CourseName: ["Description:0" "Link:1" "Institution:2" "Institution Image:3", "title:4"]
    return(
      <div key={key}>
        <a href={course[1]}> <h2>{course[4]}</h2> </a>
        <img src={course[3]} alt={course[2]} />
        <p>{course[0]}</p>
      </div>
    )
  }
  return(
    <div className="courses">
      {addCourses(props.coursesArr)}
    </div>
  )
}

Courses.defaultProps={
  coursesArr: Object.values(webPageText.courses)
}

let Section=(props)=>{
  return(
    <div className={props.classes}>
      <h2>{props.title}</h2>
      <img src={props.imgSource} alt={props.imgAlt} />
      <p>{props.description}</p>
    </div>
  )
}

let AboutMe=(props)=>{
  return(
    <div className={props.classes} id="aboutMe">
      <h2>Luis Caraveo </h2>
      <hr className="center-ball"/>
      <p>An experienced developer, hungry for knowledge and passionate for challenges student, with hours of courses focused on different computing systems topics </p>
      <Section classes="aboutMeCard "title="ENGINEER STUDENT. DESIGNER. DEVELOPER" imgSource={webPageText.descriptions.aboutMe[1]} imgAlt={webPageText.descriptions.aboutMe[2]} description={webPageText.descriptions.aboutMe[0]}/>
    </div>
  )
}


class MyProjects extends React.Component{
  constructor(props){
    super(props);
    this.state={
      seeMoreInfo:false
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(){
    this.setState(state=>({seeMoreInfo: !state.seeMoreInfo}))
  }
  render(){
    return(
      <div className="myProjects" id="myProjects">
        <Section title="My Projects" classes="myProjectsDescription" imgSource={webPageText.descriptions.myProjects[1]} imgAlt={webPageText.descriptions.myProjects[2]} description={webPageText.descriptions.myProjects[0]}/>
        {this.state.seeMoreInfo &&  <Projects/>}
        <button type="button" onClick={this.handleChange}>{this.state.seeMoreInfo? "Hide Info" : "Show Info" }</button>
      </div>
    )
  }
}


let Projects = (props) =>{
  let project=(arr)=>{
    return (
      <div>
        <h2>{arr[0]}</h2>
        <p>{arr[1]}</p>
      </div>
    )
  }
  let allInfo=Object.values(webPageText.projects).map((elem, idx)=> project(elem))
  return(
    <div className="courses">
      {allInfo}
    </div>
  )
}

Courses.defaultProps={
  coursesArr: Object.values(webPageText.courses)
}



let Division=()=>{
  return(
   <div className="box">
    <div className="box-sm red"></div>
    <div className="box-sm orange"></div>
    <div className="box-sm yellow "></div>
    <div className="box-sm green "></div>
    <div className="box-sm blue "></div>
    <div className="box-sm purple"></div>
  </div>
  )
}
let App=()=>{
  return(
    <div>
      <Header/>
      <main>
        <AboutMe classes="aboutMe"/>
        <Division/>
        <MyLearningPath/>
        <Division/>
        <MyProjects/>
        <Division/>
        <Section title="My CV"  description={webPageText.descriptions.myCV[0]}/>
        
      </main>
    </div>
  )
}

   
ReactDom.render(<App/>, document.getElementById("root"));