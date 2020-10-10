import { EventService } from './event.service';
import { EventModel } from './event.model';
import { Resolver, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

@Resolver(() => EventModel)
export class EventResolver {
  constructor(@Inject(EventService) private eventService: EventService) {}

  @Query(() => [EventModel])
  async events(): Promise<EventModel[]> {
    return await this.eventService.findAll();
  }
}
