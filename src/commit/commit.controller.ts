import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { GithubService } from 'src/services/github/github.service';

@ApiTags('Commit')
@Controller('commit')
export class CommitController {
    constructor(
        readonly githubService: GithubService
    ) { }

    @Get('commits')
    public async getCommitHistory(@Res() res: Response) {
        try {
            const commits = await this.githubService.getCommits();
            return res.status(HttpStatus.OK).json(commits.data);
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'An error ocurred.'})
        }
    }
}
