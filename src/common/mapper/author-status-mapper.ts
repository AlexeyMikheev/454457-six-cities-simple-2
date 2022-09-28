import { AuthorStatus } from '../../types/author-status.enum.js';
import { MapperInterface } from './mapper.interface.js';

class AuthorStatusMapper implements MapperInterface<AuthorStatus> {
  public mapToItem(data: string) {
    switch (data.toLowerCase()) {
      case AuthorStatus.Standart: return AuthorStatus.Standart;
      case AuthorStatus.Pro: return AuthorStatus.Pro;
      default: throw new Error(`Значение ${data} не определено в AuthorStatus`);
    }
  }

  public mapToString(data: AuthorStatus): string {
    if (!data) {
      throw new Error(`Значение ${data} не определено`);
    }
    return data.toString();
  }
}

export default AuthorStatusMapper;
