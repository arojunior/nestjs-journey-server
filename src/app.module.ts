import{ join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './modules/event/event.module';
import { MomentModule } from './modules/moment/moment.module';

@Module({
  imports: [
    EventModule,
    MomentModule,
    
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'arojunior',
      password: 'admin',
      database: 'journeys',
      entities: ['dist/**/*.model.js'],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
