import { MigrationInterface, QueryRunner } from 'typeorm';

export class MomentPopulation1602335446595 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const events = await import(__dirname + '/../datasets/moment.json');
    for (const event of events) {
      await queryRunner.query(
        `INSERT INTO moment (data) VALUES ('${JSON.stringify(event)}')`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE from moment`);
  }
}
