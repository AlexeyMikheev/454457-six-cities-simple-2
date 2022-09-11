import { AuthorStatus } from './author-status.enum.js';

export type Author = {
    name: string;
    email: string;
    avatar: string;
    password: string;
    status: AuthorStatus;
}
