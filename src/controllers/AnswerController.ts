import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { UsersSurveysRepository } from "../repositories/UsersSurveysRepository";


class AnswerController {
    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;
        const usersSurveysRepository = getCustomRepository(UsersSurveysRepository);

        const userSurvey = await usersSurveysRepository.findOne({
            id: String(u)
        });

        if(!userSurvey) {
            throw new AppError("Survey User does not exist")
        }

        userSurvey.value = String(value);

        await usersSurveysRepository.save(userSurvey);

        return response.json(userSurvey)
    }
}

export { AnswerController }