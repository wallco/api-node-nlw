import { Request, Response } from "express";
import { getCustomRepository, Not, IsNull } from "typeorm";

import { UsersSurveysRepository } from "../repositories/UsersSurveysRepository";


class NpsController {
    async execute(request: Request, response: Response) {

        const { survey_id } = request.params;

        const usersSurveysRepository = getCustomRepository(UsersSurveysRepository);

        const usersSurveys = await usersSurveysRepository.find({
            survey_id,
            value: Not(IsNull())
        });

        const detractor = usersSurveys.filter(
            (survey) =>  Number(survey.value) >= 0 && Number(survey.value) <= 6       
        ).length;

        const promoter = usersSurveys.filter(
            (survey) => Number(survey.value) >= 9 && Number(survey.value) <= 10
        ).length;

        const totalAnswers = usersSurveys.length;

        const calculate = Number((100 *(promoter - detractor)/ totalAnswers).toFixed(2));

        return response.json({
            detractor,
            promoter,
            totalAnswers,
            nps: calculate
        })

    }
}

export { NpsController }