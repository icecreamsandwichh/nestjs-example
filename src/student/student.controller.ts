import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private readonly studentService:StudentService) {}

    @Get()
    getStudents() : FindStudentResponseDto[] {
        return this.studentService.getStudents()
    }

    @Get(":id")
    getStudentById(@Param('id',ParseUUIDPipe) id: string) : FindStudentResponseDto {
        return this.studentService.getStudentById(id)
    }

    @Post()
    createStudent(@Body() student:CreateStudentDto) : StudentResponseDto {
        return this.studentService.createStudent(student)
    }

    @Put(":id")
    updateUserById(@Param('id',ParseUUIDPipe) id: string) : StudentResponseDto {
        return  
    }

}
