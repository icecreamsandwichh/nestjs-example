import { HttpException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { students } from "src/teacher/db";

@Injectable()
export class ValidateStudentMiddleware implements NestMiddleware {

    private students = students

    use(req: Request, res: Response, next: NextFunction) {
        const studentId = req.params.studentId;
        const isStudentExist = this.students.some(student => student.id === studentId)
        if (!isStudentExist) {
            throw new HttpException("Student not found",400)
        }
        next()
    }
}