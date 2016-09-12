var bio = {
    "name": "Kenneth Abad",
    "role": "Front End Developer",
    "welcomeMessage": "Hi! I am a graduate of Montclair State University with a Bachelor of Science Degree in Computer Science specializing in Front End Web Development." +
        " I am seeking a position where I can continue to grow and fortify my skills as a Front End Developer, applying my skill sets to create well structured, complex, and responsive web applications.",
    "contacts": {
        "email": "kennethabad2@gmail.com",
        "github": "KennethAbad",
        "twitter": "@Kenneth_Abad",
        "location": "Passaic, NJ"
    },
    "skills": [
        "Javascript", "Jquery", "AJAX", "JSON", "HTML", "CSS", 
    ],
    "biopic": ""

};

var work = {
    "jobs": [{
        "employer": "Block Federbush & Associates",
        "title": "Medical Billing/Coding",
        "location": "Paramus, NJ",
        "dates": "June 2016 - Present",
        "description": "Analyze medical procedures as documented by doctors." +
            " Translate medical procedures into codes that can be translated by payers, other medical coders, and other medical facilities." + " Transmit coded patient treatment information to payers and other recipients."
    }, {
        "employer": "Gamestop",
        "title": "Seasonal Game Advisor",
        "location": "Clifton, NJ",
        "dates": "October 2015 - December 2015",
        "description": "Assisted store in meeting sales, profit and shrink goals, while adhering to company policies and procedures." +
            " Complied with all sell, exchange and refund policies, including credit card acceptance procedures."
    }, {
        "employer": "Pathmark",
        "title": "Produce Clerk",
        "location": "Clifton, NJ",
        "dates": "June 2013 - September 2015",
        "description": "Fulfilled operational tasks given by management."
    }]
};

var projects = {
    "projects": [{
            "title": "Portfolio",
            "dates": "2015",
            "description": "This was my first project in the Front-End Web Developer Nanodegree." +
                " I was provided with a design mockup as a PDF-file and replicated the design in HTML and CSS." +
                " This responsive website provides images, descriptions, and links to each of the projects I have completed.",
            "images": ["images/Project1Img1.png", "images/Project1Img2.png", "images/Project1Img3.png"]
        },{
            "title": "Classic Arcade Game Clone",
            "dates": "2016",
            "description": "This was my second project in the Front-End Web Developer Nanodegree." +
                " I was provided with visual assets and a game loop engine." +
                " Using the tools, I added a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
            "images": ["images/Project2Img1.png", "images/Project2Img2.png", "images/Project2Img3.png"]
        },{
            "title": "Website Optimization",
            "dates": "2016",
            "description": "This was my third project in the Front-End Web Developer Nanodegree." +
                " In this project I optimized a provided website with a number of optimization- and performance-related issues so that it achieved a target PageSpeed score and runs at 60 frames per second." ,
            "images": ["images/Project3Img1.png", "images/Project3Img2.png", "images/Project3Img3.png"]
        }
        /*,
            {
                "title": "project2",
                "dates": "2015",
                "description": "lorem ipsum",
                "images": [""]
            },
            {
                "title": "project3",
                "dates": "2015",
                "description": "lorem ipsum",
                "images": [""]
            }*/
    ]
};

var education = {
    "schools": [{
            "name": "Montclair State University",
            "location": "Montclair, NJ",
            "degree": "Bachelor of Science",
            "majors": ["Computer Science"],
            "minors": ["Art Design Studio"],
            "dates": "September 2010 - May 2015",
            "url": ""
        }

    ],

    "onlineCourses": [{
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "date": "2016",
        "url": ""
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "date": "2016",
        "url": ""
    }, {
        "title": "Javascript Syntax",
        "school": "Udacity",
        "date": "2016",
        "url": ""
    }, {
        "title": "Git and GitHub",
        "school": "Udacity",
        "date": "2016",
        "url": ""
    }, {
        "title": "JQuery Syntax",
        "school": "Udacity",
        "date": "2016",
        "url": ""
    }, {
        "title": "Object Oriented Javascript",
        "school": "Udacity",
        "date": "2016",
        "url": ""
    }, {
        "title": "HTML 5 Canvas",
        "school": "Udacity",
        "date": "2016",
        "url": ""
    }, {
        "title": "AJAX Syntax",
        "school": "Udacity",
        "date": "2016",
        "url": ""
    }, {
        "title": "Javascript Design Patterns",
        "school": "Udacity",
        "date": "2016",
        "url": ""
    }, {
        "title": "Google Maps APIs",
        "school": "Udacity",
        "date": "2016",
        "url": ""
    }]
};




bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);


    var formattedBioPic = HTMLbioPic.replace("%data%", "images/bioPicEdit.jpg");
    $("#header").append(formattedBioPic);
    var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);
    }

    $("#mapDiv").append(googleMap);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);
};
bio.display();

work.display = function() {
    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription =
            HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

education.display = function() {
    for (school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDegree = formattedSchool + formattedDegree;

        $(".education-entry:last").append(formattedSchoolDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedMajor =
            HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        var formattedMinor =
            HTMLschoolMinor.replace("%data%", education.schools[school].minors);

        $(".education-entry:last").append(formattedMajor);
        $(".education-entry:last").append(formattedMinor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);
    for (OnlineCourse in education.onlineCourses) {



        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[OnlineCourse].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[OnlineCourse].school);
        var formattedOnlineCourse = formattedOnlineTitle + formattedOnlineSchool;

        $(".education-entry:last").append(formattedOnlineCourse);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[OnlineCourse].date);
        $(".education-entry:last").append(formattedOnlineDates);

    }
};

education.display();

/*
function inName(name) {
    name = bio.name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);
*/

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

