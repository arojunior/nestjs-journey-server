import { Injectable } from '@nestjs/common';
import { EventModel } from './event.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventModel)
    private eventRepository: Repository<EventModel>,
  ) {}

  findAll(): Promise<EventModel[]> {
    return this.eventRepository.find();
  }
}
