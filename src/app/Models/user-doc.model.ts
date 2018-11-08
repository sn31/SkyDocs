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
    if (contentWords.length > PREVIEW - 1) {
      returnContent += "......";
    }
    return returnContent;
  }

  getWordCount() {
    return this.content.split(" ").length;
  }

  getDateString() {
    let resultString: string = "";
    let now = new Date().getTime();
    let t = now - this.dateCreated;
    let seconds = t / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let weeks = days / 7;
    let months = days / 30;
    let years = days / 365;
    // console.log(t, seconds, minutes, hours, days, years)
    // resultString = `${minutes}`;
    if (seconds < 59) {
      resultString = `${Math.round(seconds)} seconds ago`;
    } else if (minutes < 59) {
      resultString = `${Math.round(minutes)} minutes ago`;
    } else if (hours < 59) {
      resultString = `${Math.round(hours)} hours ago`;
    } else if (days < 7) {
      resultString = `${Math.round(days)} days ago`;
    } else if (weeks < 4) {
      resultString = `${Math.round(weeks)} weeks ago`;
    } else if (months < 4) {
      resultString = `${Math.round(months)} months ago`;  
    } else if (years < 5) {
      resultString = `${Math.round(years)} years ago`;          
    } else {
      let fullDate = new Date(this.dateCreated);
      resultString = `on ${fullDate.getUTCMonth() + 1}/${fullDate.getUTCDate()}/${fullDate.getUTCFullYear()}`;
    }
    return 'Created ' + resultString;
  }
}
