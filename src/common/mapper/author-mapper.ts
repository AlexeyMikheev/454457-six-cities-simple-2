import { Author } from '../../types/author-type.js';
import { stringToArray } from '../utils/text-formatter.js';
import AuthorStatusMapper from './author-status-mapper.js';
import { MapperInterface } from './mapper.interface.js';

export default class AuthorMapper implements MapperInterface<Author> {
  private statusMapper = new AuthorStatusMapper();

  public mapToItem(data: string) {
    const values = stringToArray(data, ';');

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
