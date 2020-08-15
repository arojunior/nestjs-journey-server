import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { MomentModel } from '../moment/moment.model';

// type Location = {
//   significance: string;
// };

@ObjectType()
@Entity({ name: 'event' })
export class EventModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'text' })
  type: string;

  @Field(type => MomentModel)
  @OneToMany(
    type => MomentModel,
    moment => moment.event,
  )
  moments: MomentModel[];

  @Field()
  @Column()
  start: Date;

  @Field()
  @Column()
  end: Date;

  @Field()
  @Column({ type: 'text' })
  analysis_type: string;

  @Field()
  @Column({ type: 'float' })
  latitude: number;

  @Field()
  @Column({ type: 'float' })
  longitude: number;

  // @Field()
  // @Column({ type: 'simple-json' })
  // location: Location;
}
