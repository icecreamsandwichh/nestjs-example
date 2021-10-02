import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { StudentTeacherController } from './student.controller';
import { StudentModule } from 'src/student/student.module';
import { ValidateStudentMiddleware } from 'src/common/middleware/validate.middleware';

@Module({
  providers: [TeacherService],
  imports: [StudentModule],
  controllers: [TeacherController, StudentTeacherController],
})
export class TeacherModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateStudentMiddleware).forRoutes({
      path:"/student/:studentId",
      method:RequestMethod.GET
    })
  }
}
