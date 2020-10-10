import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from '../event/event.module';
import { MomentModule } from '../moment/moment.module';

@Module({
  imports: [
    EventModule,
    MomentModule,
    
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'arojunior',
      password: 'admin',
      database: 'journeys',
      entities: ['dist/**/*.model.js'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
