import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
class Location {
  @Field() significance: string;
}

@ObjectType()
class Trajectory {
  @Field() type: string;
  @Field() encoded: string;
}

@ObjectType()
class Waypoint {
  @Field() type: string;
  @Field() accuracy: number;
  @Field() latitude: number;
  @Field() longitude: number;
  @Field() timestamp: Date;
}

@ObjectType()
class EventHistory {
  @Field() type: string;
  @Field() start: Date;
  @Field() end: Date;
  @Field() analysis_type: string;
  @Field() mode?: string;
  @Field() distance?: number;
  @Field() latitude?: number;
  @Field() longitude?: number;
  @Field() location?: Location;
  @Field(() => [Waypoint]) waypoints?: Waypoint[];
  @Field() trajectory?: Trajectory | null;
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
