import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersSurvey1614287649325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: "users_surveys",
            columns: [
                {
                    name:"id",
                    type:"varchar",
                    isPrimary: true
                },
                {
                    name:"user_id",
                    type:"varchar"
                },
                {
                    name:"survey_id",
                    type:"varchar"
                },
                {
                    name:"value",
                    type:"number",
                    isNullable: true
                },
                {
                    name:"created_at",
                    type:"timestamp",
                    default:"now()",
                }
            ],
            foreignKeys: [
                {
                    name:"FKUser",
                    referencedTableName:"users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                },
                {
                    name:"FKSurvey",
                    referencedTableName:"surveys",
                    referencedColumnNames: ["id"],
                    columnNames: ["survey_id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        })
    )
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_surveys")
    }

}
