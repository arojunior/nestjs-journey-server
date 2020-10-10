import { EventService } from './event.service';
import { EventModel } from './event.model';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

@Resolver(() => EventModel)
export class EventResolver {
  constructor(@Inject(EventService) private eventService: EventService) {}

  @Query(() => EventModel)
  async event(@Args('id') id: string): Promise<EventModel> {
    return await this.eventService.findById(id);
  }

  @Query(() => [EventModel])
  async events(): Promise<EventModel[]> {
    return await this.eventService.findAll();
  }
}
