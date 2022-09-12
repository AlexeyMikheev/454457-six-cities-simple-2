import { Author } from '../../types/author-type.js';
import TextFormatter from '../text-formatter.js';
import AuthorStatusMapper from './author-status-mapper.js';
import { MapperInterface } from './mapper.interface.js';

export default class AuthorMapper implements MapperInterface<Author> {
  private statusMapper = new AuthorStatusMapper();

  public mapToItem(data: string) {
    const values = TextFormatter.stringToArray(data, ';');

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
