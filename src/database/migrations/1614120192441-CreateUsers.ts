import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1614120192441 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"users",
                columns:[
                    {
                        name:"id",
                        type:"varchar",
                        isPrimary:true
                    },
                    {
                        name:"name",
                        type:"varchar",
                        isNullable:false
                    },
                    {
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        "default":"now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
