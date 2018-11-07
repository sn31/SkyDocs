import { UserDocsService } from '../user-docs.service';

export class UserDoc {
  wordCount: number;
  // dateCreated: string;
  constructor(public title: string, public content: string, public dateCreated?: number) {
    this.wordCount = this.getWordCount();
    if (!dateCreated) {
      this.dateCreated = new Date().getTime();
    }
    
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
