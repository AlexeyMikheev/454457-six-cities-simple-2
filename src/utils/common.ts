import crypto from 'crypto';

export const getErrorMessage = (error: unknown, defaulMessage = ''): string =>
  error instanceof Error ? error.message : defaulMessage;


export const createSHA256 = (line: string, salt: string): string => {
  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line).digest('hex');
};
