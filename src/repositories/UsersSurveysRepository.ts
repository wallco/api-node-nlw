import { EntityRepository, Repository } from "typeorm";
import { UserSurvey } from "../models/UserSurvey";

@EntityRepository(UserSurvey)
class UsersSurveysRepository extends Repository<UserSurvey> {

}

export { UsersSurveysRepository };