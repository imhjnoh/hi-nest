import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// [@decorator]
// They're like a function on top of the class.
// so they can do something for the class.
// 아이스크림 위의 스프링클처럼 같이 먹으면 더 맛있다

// 모듈은 앱에 필요한 것들을 import한다.
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [], 
})
export class AppModule {}
