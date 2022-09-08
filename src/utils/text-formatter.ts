export default class TextFormatter {
  public static stringToArray(data: string, separator = '\n'): string[] {
    if (!data?.length) {
      return [];
    }
    return data.split(separator);
  }
}
