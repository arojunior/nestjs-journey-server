import { MomentService } from './moment.service';
import { MomentModel } from './moment.model';
import { Resolver, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

@Resolver(of => MomentModel)
export class MomentResolver {
  constructor(@Inject(MomentService) private momentService: MomentService) {}

  @Query(returns => [MomentModel])
  async moments(): Promise<MomentModel[]> {
    return await this.momentService.findAll();
  }
}
