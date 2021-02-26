import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { User } from './User';

@Entity("users_surveys")
class UserSurvey {

    @PrimaryColumn()
    readonly id: string;
    @Column()
    user_id: string;
    @ManyToOne(() => User)
    @JoinColumn({name:"user_id"})
    user: User
    @Column()
    survey_id: string;
    @Column()
    value: string;
    @CreateDateColumn()
    created_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}

export { UserSurvey }