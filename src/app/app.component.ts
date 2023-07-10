import { Component, OnInit } from '@angular/core';
import { fa, faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  fakeSentence = [''];
  userInput = [''];

  ngOnInit(): void {
    this.generateFakeSentence();
  }

  generateFakeSentence() {
    this.fakeSentence = faker.lorem.sentence().split('');
  }

  compare(event: Event) {
    this.userInput = (event.target as HTMLInputElement).value.split('');
  }

  getColorClass(index: number) {
    if (this.userInput[index] === undefined || this.userInput[index] === '')
      return 'grey';

    return this.fakeSentence[index] === this.userInput[index]
      ? 'correct'
      : 'incorrect';
  }

  compareSentences() {
    return this.userInput.join('') === this.fakeSentence.join('')
      ? true
      : false;
  }
}
