import UserStatusMapper from './user-status-mapper.js';
import { MapperInterface } from './mapper.interface.js';
import CreateUserDto from '../../modules/user/dto/user.dto.js';

class UserMapper implements MapperInterface<CreateUserDto> {
  private statusMapper = new UserStatusMapper();
  constructor(private readonly separator = ';') { }

  public mapToModel(data: string) {
    const values = data?.split(this.separator);

    const [
      name,
      email,
      avatar,
      password,
      status,
    ] = values;

    return {
      name,
      email,
      avatar,
      password,
      status: this.statusMapper.mapToModel(status)
    };
  }

  public mapToString(data: CreateUserDto): string {
    return [
      data.name,
      data.email,
      data.avatar,
      data.password,
      this.statusMapper.mapToString(data.status),
    ].join(this.separator);
  }
}

export default UserMapper;
