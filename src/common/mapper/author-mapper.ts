import { Author } from '../../types/author-type.js';
import AuthorStatusMapper from './author-status-mapper.js';
import { MapperInterface } from './mapper.interface.js';

class AuthorMapper implements MapperInterface<Author> {
  private statusMapper = new AuthorStatusMapper();
  constructor(private readonly separator = ';') { }

  public mapToItem(data: string) {
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
      status: this.statusMapper.mapToItem(status)
    };
  }

  public mapToString(data: Author): string {
    return [
      data.name,
      data.email,
      data.avatar,
      data.password,
      this.statusMapper.mapToString(data.status),
    ].join(this.separator);
  }
}

export default AuthorMapper;
