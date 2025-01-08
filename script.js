function showResource(resource) {
    const modal = document.getElementById("resource-modal");
    const title = document.getElementById("modal-title");
    const body = document.getElementById("modal-body");

    const resources = {
        "resume-writing": {
            title: "Resume Writing Tips",
            articles: [
                { title: "How to Write a Resume", url: "https://www.resume.com" },
                { title: "Top Resume Mistakes to Avoid", url: "https://resumeworded.com/" }
            ],
            videos: [
                { title: "Resume Writing Tutorial", url: "https://youtu.be/XJ7bYdjKDcA?si=B8VSwi-IUC1E3eZ-" },
                { title: "Resume Formatting Guide", url: "https://youtu.be/y8YH0Qbu5h4?si=R6XoidawOgYNV-Sm" }
            ]
        },
        "interview-preparation": {
            title: "Interview Preparation Tips",
            articles: [
                { title: "Common Interview Questions", url: "https://www.themuse.com/advice/9-articles-thatll-make-you-feel-extra-prepared-for-your-interview" }
            ],
            videos: [
                { title: "Interview Preparation Techniques", url: "https://youtu.be/Ji46s5BHdr0?si=Q5N5jPVtR50afzW-" },
                { title: "How to Ace Behavioral Interviews", url: "https://youtu.be/Ji46s5BHdr0?si=Q5N5jPVtR50afzW-" }
            ]
        },
        "communication-skills": {
            title: "Improving Communication Skills",
            articles: [
                { title: "Effective Communication in the Workplace", url: "https://www.helpguide.org/relationships/communication/effective-communication" },
                { title: "Building Strong Communication Skills", url: "https://www.linkedin.com/pulse/article-effective-communication-skills-sanjeev-s-snsacd/" }
            ],
            videos: [
                { title: "Communication Skills Workshop", url: "https://youtu.be/7hr60EumwQ4?si=vk-4rKwKuE5PW191" },
                { title: "Public Speaking Tips", url: "https://youtu.be/HAnw168huqA?si=qXEgs4dGdAfE5tif" }
            ]
        },
        "library": {
            title: "Library Resources",
            articles: [
                { title: "Using Library Databases for Research", url: "https://www.openlibhums.org/" },
                { title: "Borrowing and Returning Books", url: "https://openlibrary.org/" }
            ],
        },
        "technical-skills": {
            title: "Technical Skills Development",
            articles: [
                { title: "Learning Programming Languages", url: "https://www.accredible.com/blog/why-technical-skills-are-essential-for-job-seekers-and-employees" },
                { title: "Building Technical Portfolios", url: "https://www.simplilearn.com/technical-skills-to-master-article" }
            ],
            videos: [
                { title: "Technical Interview Preparation", url: "https://youtube.com/shorts/u49MZH-FFa4?si=3qmWosOQmJZ3N7Tw" },
                { title: "Software Development Best Practices", url: "https://youtu.be/nnsrwPu-MWo?si=T6Vg9PLsEJKqmiu-" }
            ]
        },
        "linkedin-enhancement": {
            title: "LinkedIn Profile Enhancement",
            articles: [
                { title: "Optimizing Your LinkedIn Summary", url: "https://www.linkedin.com/business/sales/blog/profile-best-practices/17-steps-to-a-better-linkedin-profile-in-2017" },
                { title: "Best Practices for LinkedIn Recommendations", url: "https://www.forbes.com/sites/josephliu/2023/05/22/the-ultimate-guide-to-crafting-a-linkedin-profile-that-recruiters-love-advice-from-100-hiring-professionals/" }
            ],
            videos: [
                { title: "LinkedIn Profile Setup for Beginners", url: "https://youtu.be/SsS0xydtgwY?si=lDZaQV7MhCGRz9Ke" },
                { title: "Advanced LinkedIn Tips for Job Seekers", url: "https://youtu.be/jE1k7EdJhok?si=qwags4exDFdqEfG5" }
            ]
        },
        "abroad-education": {
            title: "Abroad Education",
            articles: [
                { title: "Choosing the Right University", url: "https://www.goabroad.com/articles/study-abroad" },
                { title: "Funding Your Education Abroad", url: "https://www.internationalstudent.com/study-abroad/guide/ten-benefits-to-studying-abroad/" }
            ],
            videos: [
                { title: "Study Abroad Experience", url: "https://youtu.be/0PwNW7PAUzQ" },
                { title: "Living Abroad Tips", url: "https://youtu.be/5n1_Hw1B6nk" }
            ]
        },
        "passport-process": {
            title: "Passport Process",
            articles: [
                { title: "Applying for a Passport", url:"https://passportindia.gov.in/AppOnlineProject/online/gepOnlineApp" },
                { title: "Passport Renewal Steps", url: "https://general.futuregenerali.in/blog/travel-insurance/passport-renewal-process-step-by-step-guide" }
            ],
            videos: [
                { title: "Passport Application Guide", url: "https://youtu.be/i8UsSYP6tyY" },
                { title: "Passport Tracking Tutorial", url: "https://youtu.be/wtYVW-QxFNs" }
            ]
        },
        "research-papers": {
            title: "Research Papers",
            articles: [
                { title: "Finding Research Papers", url: "https://www.sciencedirect.com/topics/computer-science/research-paper" },
                { title: "Publishing Research Work", url: "https://authorservices.taylorandfrancis.com/publishing-your-research/writing-your-paper/different-types-of-research-articles/" }
            ],
            videos: [
                { title: "Research Paper Presentation", url: "https://youtu.be/B5wMrAi79_k" },
                { title: "Understanding Research Methods", url: "https://youtu.be/jJhMAqQBwXg" }
            ]
        },
        "upsc-preparation": {
            title: "UPSC Preparation",
            articles: [
                { title: "UPSC Exam Strategy", url: "https://byjus.com/free-ias-prep/strategy-articles/" },
                { title: "Study Resources for UPSC", url: "https://byjus.com/free-ias-prep/list-of-ias-preparation-articles/" }
            ],
            videos: [
                { title: "UPSC Preparation Tips", url: "https://youtu.be/hMnOqB818uo" },
                { title: "Current Affairs for UPSC", url: "https://youtu.be/A6JLs_Skaec" }
            ]
        },
        "gate-preparation": {
            title: "GATE Preparation",
            articles: [
                { title: "GATE Exam Insights", url: "https://gate.iitb.ac.in/" },
                { title: "Best GATE Coaching Institutes", url: "https://testbook.com/gate/preparation-tips" }
            ],
            videos: [
                { title: "GATE Exam Preparation Strategies", url: "https://youtu.be/awetGUnsSvI" },
                { title: "Subject-Wise GATE Tips", url: "https://youtu.be/mEz0G_YoYeM" }
            ]
        },
        "soft-skills": {
            title: "Soft Skills Development",
            articles: [
                { title: "Importance of Soft Skills", url: "https://nationalcareers.service.gov.uk/careers-advice/how-to-develop-your-soft-skills" },
                { title: "Developing Soft Skills at Workplace", url: "https://www.investopedia.com/terms/s/soft-skills.asp" }
            ],
            videos: [
                { title: "Soft Skills Training", url: "https://youtu.be/H4h5T6rhSiY" },
                { title: "Effective Leadership Skills", url: "https://youtu.be/lUIHjOczQVA" }
            ]
        },
        "startup-mentoring": {
            title: "Startup Mentoring",
            articles: [
                { title: "Starting a Startup", url: "https://www.growthmentor.com/" },
                { title: "Funding Your Startup", url: "https://www.startupindia.gov.in/content/sih/en/startup-setu.html" }
            ],
            videos: [
                { title: "Startup Business Planning", url: "https://youtu.be/OtpSKDV1ifo" },
                { title: "Pitching Your Startup Idea", url: "https://youtu.be/SdRFTQ5z8pI" }
            ]
        },
        "freelancing": {
            title: "Freelancing Resources",
            articles: [
                { title: "Finding Freelance Work", url: "https://www.upwork.com/resources/how-to-become-a-freelancer" },
                { title: "Freelance Tax Guide", url: "https://www.themuse.com/advice/every-resource-a-fulltime-freelancer-could-ever-need-plus-some" }
            ],
            videos: [
                { title: "Freelance Skills Development", url: "https://youtu.be/8R5sPV2a5mc" },
                { title: "Building a Successful Freelance Career", url: "https://youtu.be/kUmvjaNE31I" }
            ]
        },
        "digital-marketing": {
            title: "Digital Marketing",
            articles: [
                { title: "Digital Marketing Strategies", url: "https://www.smartinsights.com/" },
                { title: "SEO Best Practices", url: "https://moz.com/" }
            ],
            videos: [
                { title: "Introduction to Digital Marketing", url: "https://youtu.be/Ji46s5BHdr0?si=Q5N5jPVtR50afzW-" },
                { title: "Social Media Marketing Tips", url: "https://youtu.be/SsS0xydtgwY?si=lDZaQV7MhCGRz9Ke" }
            ]
        },
        "entrepreneurship": {
            title: "Entrepreneurship",
            articles: [
                { title: "Starting Your Own Business", url: "https://byjus.com/commerce/what-is-entrepreneurship/" },
                { title: "Funding and Scaling Your Startup", url: "https://www.fundable.com/" }
            ],
            videos: [
                { title: "Entrepreneurship Insights", url: "https://youtu.be/HAnw168huqA?si=qXEgs4dGdAfE5tif" },
                { title: "Building a Startup Culture", url: "https://youtu.be/Ji46s5BHdr0?si=Q5N5jPVtR50afzW-" }
            ]
        },
        "job-search": {
            title: "Job Search Strategies",
            articles: [
                { title: "Effective Job Search Techniques", url: "https://www.monster.com/" },
                { title: "Networking for Job Opportunities", url: "https://www.linkedin.com/" }
            ],
            videos: [
                { title: "Resume Writing Tips", url: "https://youtu.be/XJ7bYdjKDcA?si=B8VSwi-IUC1E3eZ-" },
                { title: "Interview Preparation Guide", url: "https://youtu.be/Ji46s5BHdr0?si=Q5N5jPVtR50afzW-" }
            ]
        },
        "portfolio-building": {
            title: "Portfolio Building",
            articles: [
                { title: "Creating an Impressive Portfolio", url: "https://www.creativebloq.com/" },
                { title: "Portfolio Best Practices", url: "https://www.behance.net/" }
            ],
            videos: [
                { title: "Portfolio Design Tips", url: "https://youtu.be/HAnw168huqA?si=qXEgs4dGdAfE5tif" },
                { title: "Building a Professional Portfolio", url: "https://youtu.be/jE1k7EdJhok?si=qwags4exDFdqEfG5" }
            ]
        },
        "skill-development": {
    title: "Skill Development",
    articles: [
        { title: "Upskilling for Career Growth", url: "https://www.skillsfuture.gov.sg/" },
        { title: "Free Online Courses for Skill Enhancement", url: "https://www.edx.org/" }
    ],
    videos: [
        { title: "Skill Development Workshop", url: "https://youtu.be/SkillDevWorkshop" },
        { title: "Building In-Demand Skills", url: "https://youtu.be/InDemandSkills" }
    ]
}

    };

    if (resources[resource]) {
        title.innerHTML = resources[resource].title;
        body.innerHTML = `
            <h3>Articles:</h3>
            <ul>${resources[resource].articles.map(article => `<li><a href="${article.url}">${article.title}</a></li>`).join('')}</ul>
            <h3>Videos:</h3>
            <ul>${resources[resource].videos.map(video => `<li><a href="${video.url}">${video.title}</a></li>`).join('')}</ul>
        `;
    } else {
        title.innerHTML = "Unknown Resource";
        body.innerHTML = "<p>No information available.</p>";
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("resource-modal").style.display = "none";
}

function toggleAnswer(questionElement) {
    const answer = questionElement.nextElementSibling;

    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
