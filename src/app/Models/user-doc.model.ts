import { UserDocsService } from '../user-docs.service';

export class UserDoc {
  wordCount: number;
  dateCreated: Date;
  constructor(public title: string, public content: string) {
    this.wordCount = this.getWordCount();
    this.dateCreated = new Date();
  }

  getPreviewContent() {
    let returnContent = "";
    let contentWords = this.content.split(" ");
    let previewLength;
    const PREVIEW = 25;
    (contentWords.length < PREVIEW) ? previewLength = contentWords.length : previewLength = PREVIEW;
    for (let i = 0; i < previewLength; i++) {
      returnContent += contentWords[i] + " ";
    }
    return returnContent;
  }

  getWordCount() {
    return this.content.split(" ").length;
  }
}
