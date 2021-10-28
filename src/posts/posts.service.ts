import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from '@nestjs/common/node_modules/axios';
import { Observable } from 'rxjs';
import { PostModel } from 'src/models/PostModel';

@Injectable()
export class PostsService {
    constructor(private httpService: HttpService) {}

  findAll(): Observable<AxiosResponse<PostModel[]>> {
    return  this.httpService.get('https://jsonplaceholder.typicode.com/posts');
  }
}
