import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private readonly appService: PostsService) {}

    @Get()
    getHello(): string {
     return this.appService.findAll() + "";
  } 
}
