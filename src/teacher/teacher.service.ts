import { Injectable } from '@nestjs/common';
import { teachers } from './db';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
    
    private readonly teachers = teachers

    create() {

    }

    getTeachers() {
        return this.teachers;
    }

    getTeacherById(id:string) : FindTeacherResponseDto  {
        return this.teachers.find(teacher => teacher.id === id)
    }
}
