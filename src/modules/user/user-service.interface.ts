import { DocumentType } from '@typegoose/typegoose';
import { UserEntity } from './user.entity.js';
import UserDto from './dto/user.dto.js';

export interface UserServiceInterface {
  create(dto: UserDto, salt: string): Promise<DocumentType<UserEntity>>;
  // findByEmail(email: string): Promise<DocumentType<UserEntity> | null>;
  findOrCreate(dto: UserDto, salt: string): Promise<DocumentType<UserEntity>>;
}
