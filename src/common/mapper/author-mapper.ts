import { Author } from '../../types/author-type.js';
import AuthorStatusMapper from './author-status-mapper.js';
import { MapperInterface } from './mapper.interface.js';

class AuthorMapper implements MapperInterface<Author> {
  private statusMapper = new AuthorStatusMapper();

  public mapToItem(data: string) {
    const values = data?.split(';');

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
      status: this.statusMapper.mapToItem(status)
    };
  }
}

export default AuthorMapper;
