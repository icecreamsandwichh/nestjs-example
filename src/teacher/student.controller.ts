import { Controller, Get, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import { FindStudentResponseDto } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teacher/:teacherId/students')
export class StudentTeacherController {

    constructor(private readonly studentService:StudentService) {}
    
    @Get()
    getStudents(@Param('teacherId',ParseUUIDPipe) teacherId: string): FindStudentResponseDto[] {
        return this.studentService.getStudentsByTeacherId(teacherId)
    }

    @Put(":studentId")
    updateStudentTeacher(@Param('teacherId',ParseUUIDPipe) teacherId: string, @Param('studentId',ParseUUIDPipe) studentId: string) : FindStudentResponseDto {
        return this.studentService.updateStudentTeacher(teacherId,studentId)
    }
}
