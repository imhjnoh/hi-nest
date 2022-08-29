import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Get 데코레이터는 express의 get라우터와 같은 역할. (메소드 매핑)
  // 데코레이터는 항상 꾸며주는 함수/클래스와 붙어있어야 한다는 것을 주의.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi()
  }
}
