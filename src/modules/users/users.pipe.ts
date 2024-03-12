import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CreateUsersPipe implements PipeTransform {
  transform(value: any) {
    const allowsFields = ['username'];
    const filteredBody = {};

    for (const key in value) {
      if (allowsFields.includes(key)) {
        filteredBody[key] = value[key];
      }
    }

    return filteredBody;
  }
}

@Injectable()
export class UpdateUsersPipe implements PipeTransform {
  transform(value: any) {
    const allowsFields = ['status', 'role'];
    const filteredBody = {};

    for (const key in value) {
      if (allowsFields.includes(key)) {
        filteredBody[key] = value[key];
      }
    }

    return filteredBody;
  }
}
