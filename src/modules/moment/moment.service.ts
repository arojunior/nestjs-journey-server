import { Injectable } from '@nestjs/common';
import { MomentModel } from './moment.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MomentService {
  constructor(
    @InjectRepository(MomentModel)
    private momentRepository: Repository<MomentModel>,
  ) {}

  findAll(): Promise<MomentModel[]> {
    return this.momentRepository.find();
  }
}
