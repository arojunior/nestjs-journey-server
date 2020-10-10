import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
class MomentHistory {
  @Field() start: Date;
  @Field() end: Date;
  @Field() analysis_type: string;
  @Field() moment_definition_id: string;
};

@ObjectType()
@Entity({ name: 'moment' })
export class MomentModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'jsonb' })
  data: MomentHistory;
}
