import { EventService } from './event.service';
import { EventModel } from './event.model';
import { Resolver, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

@Resolver(of => EventModel)
export class EventResolver {
  constructor(@Inject(EventService) private eventService: EventService) {}

  @Query(returns => [EventModel])
  async events(): Promise<EventModel[]> {
    return await this.eventService.findAll();
  }
}
