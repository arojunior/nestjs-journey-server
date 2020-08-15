import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { EventModel } from '../event/event.model';

@ObjectType()
@Entity({ name: 'moment' })
export class MomentModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(type => EventModel)
  @ManyToOne(
    type => EventModel,
    event => event.moments,
  )
  event: EventModel;

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
  @Column({ type: 'text' })
  moment_definition_id: string;
}
