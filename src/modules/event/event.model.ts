import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
class Location {
  @Field() significance: string;
}

@ObjectType()
class EventHistory {
  @Field() type: string;
  @Field() start: Date;
  @Field() end: Date;
  @Field() analysis_type: string;
  @Field() latitude: number;
  @Field() longitude: number;
  @Field() location: Location;
}

@ObjectType()
@Entity({ name: 'event' })
export class EventModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'jsonb' })
  data: EventHistory;
}
