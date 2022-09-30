import { DocumentType, types } from '@typegoose/typegoose';
import { UserEntity } from './user.entity.js';
import CreateUserDto from './dto/user.dto.js';
import { UserServiceInterface } from './user-service.interface.js';
import { inject, injectable } from 'inversify';
import { INJECT_KEYS } from '../../types/inject-type.enum.js';

@injectable()
class UserService implements UserServiceInterface {
  constructor(
    @inject(INJECT_KEYS.UserModel) private readonly userModel: types.ModelType<UserEntity>
  ) { }

  public async validate(dto: CreateUserDto): Promise<void> {
    const user = new UserEntity(dto);
    await this.userModel.validate(user);
  }

  public async create(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>> {
    const user = new UserEntity(dto);
    user.updatePasswordHash(salt);

    const result = await this.userModel.create(user);
    return result;
  }

  public async findByEmail(email: string): Promise<DocumentType<UserEntity> | null> {
    return this.userModel.findOne({ email });
  }

  public async findOrCreate(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>> {
    const user = await this.findByEmail(dto.email);

    if (user) {
      return user;
    }

    return this.create(dto, salt);
  }
}

export default UserService;
