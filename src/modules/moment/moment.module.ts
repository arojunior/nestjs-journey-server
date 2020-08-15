import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MomentModel } from './moment.model';
import { MomentService } from './moment.service';
import { MomentResolver } from './moment.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([MomentModel])],
  providers: [MomentService, MomentResolver],
  exports: [MomentService],
})
export class MomentModule {}
