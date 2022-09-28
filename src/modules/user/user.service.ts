import { DocumentType, types } from '@typegoose/typegoose';
import { UserEntity } from './user.entity.js';
import UserDto from './dto/user.dto.js';
import { UserServiceInterface } from './user-service.interface.js';
import { inject, injectable } from 'inversify';
import { INJECT_KEYS } from '../../types/inject-type.enum.js';
import { LoggerInterface } from '../../common/logger-service/logger-service.interface.js';
import { getErrorMessage } from '../../utils/common.js';

@injectable()
class UserService implements UserServiceInterface {
  constructor(
    @inject(INJECT_KEYS.LoggerInterface) private logger: LoggerInterface,
    @inject(INJECT_KEYS.UserModel) private readonly userModel: types.ModelType<UserEntity>) { }

  public async create(dto: UserDto, salt: string): Promise<DocumentType<UserEntity>> {
    const user = new UserEntity(dto);
    // user.setPassword(dto.password, salt);

    const result = await this.userModel.create(user);

    return result;
  }

  public async findByEmail(email: string): Promise<DocumentType<UserEntity> | null> {
    return this.userModel.findOne({ email });
  }

  public async findOrCreate(dto: UserDto, salt: string): Promise<DocumentType<UserEntity>> {
    const existedUser = await this.findByEmail(dto.email);

    if (existedUser) {
      return existedUser;
    }

    return this.create(dto, salt);
  }
}

export default UserService;
