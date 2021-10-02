import { Controller, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {

    constructor(private teacherServie:TeacherService) {}

    @Get()
    getTeachers(): FindTeacherResponseDto[] {
        return this.teacherServie.getTeachers()
    }

    @Get(":teacherId")
    getTeacherById(@Param('teacherId',ParseUUIDPipe) teacherId: string): FindTeacherResponseDto {
        return this.teacherServie.getTeacherById(teacherId)
    }
}
