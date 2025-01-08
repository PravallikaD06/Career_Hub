// JavaScript to show additional content dynamically when 'Learn More' buttons are clicked
function showResource(resource) {
    const resourcesContent = {
        'resume-writing': `
            <h2>Articles on Resume Writing</h2>
            <ul>
                <li><a href="https://example.com/resume-article1" target="_blank">How to Write a Winning Resume</a></li>
                <li><a href="https://example.com/resume-article2" target="_blank">10 Resume Mistakes to Avoid</a></li>
            </ul>
            <h2>Useful YouTube Videos</h2>
            <ul>
                <li><a href="https://youtube.com/example1" target="_blank">Resume Writing Tips and Tricks</a></li>
                <li><a href="https://youtube.com/example2" target="_blank">Crafting a Resume that Stands Out</a></li>
            </ul>
        `,
        'interview-preparation': `
            <h2>Articles on Interview Preparation</h2>
            <ul>
                <li><a href="https://example.com/interview-article1" target="_blank">Top 10 Tips for Interview Success</a></li>
                <li><a href="https://example.com/interview-article2" target="_blank">How to Answer Common Interview Questions</a></li>
            </ul>
            <h2>Useful YouTube Videos</h2>
            <ul>
                <li><a href="https://youtube.com/example1" target="_blank">How to Ace Your Interview</a></li>
                <li><a href="https://youtube.com/example2" target="_blank">Common Interview Mistakes to Avoid</a></li>
            </ul>
        `,
        'communication-skills': `
            <h2>Articles on Communication Skills</h2>
            <ul>
                <li><a href="https://example.com/communication-article1" target="_blank">Effective Communication in the Workplace</a></li>
                <li><a href="https://example.com/communication-article2" target="_blank">How to Improve Your Communication Skills</a></li>
            </ul>
            <h2>Useful YouTube Videos</h2>
            <ul>
                <li><a href="https://youtube.com/example1" target="_blank">Mastering Communication Skills</a></li>
                <li><a href="https://youtube.com/example2" target="_blank">Top 5 Tips for Better Communication</a></li>
            </ul>
        `
    };

    const resourceContainer = document.querySelector('#resources');
    resourceContainer.innerHTML = resourcesContent[resource] || "<p>Resource not found.</p>";
}
