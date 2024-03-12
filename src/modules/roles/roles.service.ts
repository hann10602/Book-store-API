import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Roles } from 'src/schemas/Roles.schema';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Roles.name) private roleModel: Model<Roles>) {}

  async getRoleByCode(code: string) {
    return await this.roleModel.findOne({ code });
  }
}
