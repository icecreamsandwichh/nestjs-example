import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  providers: [StudentService],
  exports:[StudentService],
  controllers:[StudentController]
})
export class StudentModule {}
