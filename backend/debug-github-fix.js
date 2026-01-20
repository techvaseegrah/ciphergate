require('dotenv').config();
const { Octokit } = require("@octokit/rest");

// Mock Express Response
const res = {
    json: (data) => {
        console.log("---------------------------------------------------");
        console.log("API Response Received");
        if (data.repositories) {
            console.log(`Total Repositories: ${data.repositories.length}`);
            const targetRepo = data.repositories.find(r => r.name === 'Run-Development');
            if (targetRepo) {
                console.log(`Target Repo URL: ${targetRepo.html_url}`);
                console.log(`Private: ${targetRepo.private}`);
                console.log(`Owner: ${targetRepo.owner.login}`);
            } else {
                console.log("Run-Development repo not found in list.");
            }
            console.log(`Public: ${data.stats.publicRepos}, Private: ${data.stats.privateRepos}`);
            console.log(`Total Commits: ${data.stats.totalCommits}`);
            console.log(`Total PRs: ${data.stats.totalPRs}`);
            console.log(`Valid Commits: ${data.analyzedData.validCommits.length}`);
            console.log(`Quality Points: ${JSON.stringify(data.analyzedData.qualityMetrics)}`);
        } else {
            console.log("Data:", data);
        }
        console.log("---------------------------------------------------");
    },
    status: (code) => {
        console.log(`Status Code: ${code}`);
        return { json: (data) => console.log("Error Data:", data) };
    }
};

const req = {
    query: {
        username: process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'santhosh611' // Default or fallback
    }
};

// Import Controller
const githubController = require('./controllers/githubController');

async function runDebug() {
    console.log(`Testing GitHub Dashboard Data for: ${req.query.username}`);
    try {
        await githubController.getDashboardData(req, res);
    } catch (error) {
        console.error("Test Failed:", error);
    }
}

runDebug();
