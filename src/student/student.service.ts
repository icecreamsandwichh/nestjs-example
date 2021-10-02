import { Injectable } from '@nestjs/common';
import { students } from 'src/teacher/db';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto } from './dto/student.dto';
import { v4 as uuid } from 'uuid'

@Injectable()
export class StudentService {
    private students = students

    createStudent(payload: CreateStudentDto): StudentResponseDto {
        let newStudent = {
            id: uuid(),
            ...payload
        }
        this.students.push(newStudent)
        return newStudent
    }

    getStudents(): FindStudentResponseDto[] {
        return this.students
    }

    getStudentById(studentId: string): FindStudentResponseDto {
        return this.students.find(student => student.id === studentId)
    }

    getStudentsByTeacherId(id: string): FindStudentResponseDto[] {
        return this.students.filter(student => (student.teacher === id))
    }

    updateStudentTeacher(teacherId: string, studentId: string) {
        const updatedList = students.map(student => {
            if (student.id === studentId) {
                const updated = {
                    ...student,
                    teacher: teacherId
                }
                return updated
            } else {
                return student
            }
        })
        this.students = updatedList;
        return updatedList.find(student => student.id===studentId)
    }
}
