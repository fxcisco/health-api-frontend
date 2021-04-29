export class Sanitizer {
  static stripClean(text: string){
    return text.replace(/[^A-Za-z0-9\-_ ]/g, '');
  }
  static stripTitle(text: string){
    return text.replace(/[^A-Za-z0-9\-_\?]/g, '');
  }
  static stripMarkdown(text: string){
    if(!text) return '';
    text = text.replace(/\r?\n|\r/g, '');
    text = text.replace(/\[(.*?)\]/g, '');
    text = text.replace(/\*{1,3}/g, '');
    text = text.replace(/#/g, '');
    return text;
  }
}