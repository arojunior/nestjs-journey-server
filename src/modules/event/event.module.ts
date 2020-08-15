import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModel } from './event.model';
import { EventService } from './event.service';
import { EventResolver } from './event.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([EventModel])],
  providers: [EventService, EventResolver],
  exports: [EventService],
})
export class EventModule {}
