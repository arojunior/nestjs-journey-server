import { MigrationInterface, QueryRunner } from 'typeorm';

export class EventPopulation1602332127696 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const events = await import(__dirname + '/../datasets/event.json');
    for (const event of events) {
      await queryRunner.query(
        `INSERT INTO event (data) VALUES ('${JSON.stringify(event)}')`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE from event`);
  }
}
