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
            const commitsFrontEnd = await this.githubService.getCommits('ramyx', 'reactjs-githistory-app');
            const commitsBackEnd = await this.githubService.getCommits('ramyx', 'nestjs-githistory-app');
            return res.status(HttpStatus.OK).json({
                frontend: commitsFrontEnd.data,
                backend: commitsBackEnd.data
            });
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'An error ocurred.'})
        }
    }
}
