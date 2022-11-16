import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';

@Injectable()
export class GithubService {
    private octokit: Octokit;

    constructor() {
        this.octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN,
        });
    }

    async getCommits() {
        const request = `GET /repos/ramyx/commit-history-app/commits{?sha,path,author,since,until,per_page,page}`;
        return await this.octokit.request(request, {
            owner: 'OWNER',
            repo: 'REPO'
        });
    }
}
