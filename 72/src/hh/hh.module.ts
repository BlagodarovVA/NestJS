import { Module } from '@nestjs/common';
import { HhService } from './hh.service';
import { TopPageModule } from 'src/top-page/top-page.module';

@Module({
  providers: [HhService],
  imports: [TopPageModule]
})
export class HhModule {}
