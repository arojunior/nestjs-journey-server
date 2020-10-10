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
  @Field() timestamp: string;
}

@ObjectType()
class EventHistory {
  @Field() type: string;
  @Field() start: string;
  @Field() end: string;
  @Field() analysis_type: string;
  @Field({ nullable: true }) mode?: string;
  @Field({ nullable: true }) distance?: number;
  @Field({ nullable: true }) latitude?: number;
  @Field({ nullable: true }) longitude?: number;
  @Field({ nullable: true }) location?: Location;
  @Field(() => [Waypoint], { nullable: true }) waypoints?: Waypoint[];
  @Field({ nullable: true }) trajectory?: Trajectory | null;
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
