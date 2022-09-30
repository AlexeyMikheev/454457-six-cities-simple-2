import { UserStatus } from '../../../types/user-status.enum.js';
import { User } from '../../../types/user-type.js';

export class CreateUserDto implements User {
  public email!: string;
  public name!: string;
  public avatar!: string;
  public status!: UserStatus;
  public password!: string;
}

export default CreateUserDto;
