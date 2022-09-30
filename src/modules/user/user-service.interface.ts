import { DocumentType } from '@typegoose/typegoose';
import { UserEntity } from './user.entity.js';
import CreateUserDto from './dto/user.dto.js';

export interface UserServiceInterface {
  validate(dto: CreateUserDto): Promise<void>;
  create(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>>;
  // findByEmail(email: string): Promise<DocumentType<UserEntity> | null>;
  findOrCreate(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>>;
}
