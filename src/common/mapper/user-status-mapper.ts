import { UserStatus } from '../../types/user-status.enum.js';
import { MapperInterface } from './mapper.interface.js';

class UserStatusMapper implements MapperInterface<UserStatus> {
  public mapToModel(data: string) {
    switch (data.toLowerCase()) {
      case UserStatus.Standart: return UserStatus.Standart;
      case UserStatus.Pro: return UserStatus.Pro;
      default: throw new Error(`Значение ${data} не определено в AuthorStatus`);
    }
  }

  public mapToString(data: UserStatus): string {
    if (!data) {
      throw new Error(`Значение ${data} не определено`);
    }
    return data.toString();
  }
}

export default UserStatusMapper;
