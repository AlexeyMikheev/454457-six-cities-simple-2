import { AuthorStatus } from '../../types/author-status.enum.js';
import { MapperInterface } from './mapper.interface.js';

export default class AuthorStatusMapper implements MapperInterface<AuthorStatus> {
  public mapToItem(data: string) {
    switch (data.toLowerCase()) {
      case AuthorStatus.Standart: return AuthorStatus.Standart;
      case AuthorStatus.Pro: return AuthorStatus.Pro;
      default: return AuthorStatus.Standart;
    }
  }
}
