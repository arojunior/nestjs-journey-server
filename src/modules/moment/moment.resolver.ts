import { MomentService } from './moment.service';
import { MomentModel } from './moment.model';
import { Resolver, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

@Resolver(() => MomentModel)
export class MomentResolver {
  constructor(@Inject(MomentService) private momentService: MomentService) {}

  @Query(() => [MomentModel])
  async moments(): Promise<MomentModel[]> {
    return await this.momentService.findAll();
  }
}
