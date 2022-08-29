import { Injectable } from '@nestjs/common';

// 서비스는 실제로 비즈니스 로직을 실행한다.
@Injectable()
export class AppService {
  getHello(): string {
    return 'HeyHeyHey';
  }
  getHi(): string{
    return 'Hi Nest'
  }
}
