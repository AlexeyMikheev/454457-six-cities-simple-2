import typegoose, { getModelForClass, defaultClasses } from '@typegoose/typegoose';
import { UserStatus } from '../../types/user-status.enum.js';
import { User } from '../../types/user-type.js';
import { createSHA256 } from '../../utils/common.js';

const { prop, modelOptions } = typegoose;

export interface UserEntity extends defaultClasses.Base { }

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})

export class UserEntity extends defaultClasses.TimeStamps implements User {
  constructor(data: User) {
    super();

    //this.email = data.email;
    this.name = data.name;
    // this.avatar = data.avatar;
    // this.status = data.status;
  }

  // @prop({ unique: true, required: true, default: '' })
  // public email!: string;

  @prop({ required: true, minlength: 1, maxlength: 15, default: '' })
  public name!: string;

  // @prop()
  // public avatar!: string;

  // @prop({ required: true, minlength: 6, maxlength: 12, default: '' })
  // public password!: string;

  // @prop({ required: true, enum: UserStatus })
  // public status!: UserStatus;

  // public setPassword(password: string, salt: string) {
  //   this.password = createSHA256(password, salt);
  // }

  // public getPassword() {
  //   return this.password;
  // }
}

export const UserModel = getModelForClass(UserEntity);
