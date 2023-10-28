import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFirstDropdown = false;
  showSecondDropdown = false;
  selectedFirstItem: string;
  selectedSecondItem: string;
  firstItems = ['Option1', 'Option2', 'Option3'];
  secondItems = ['SubOption1', 'SubOption2', 'SubOption3'];
  chipText = '';

  onFirstSelect(event) {
    this.showSecondDropdown = true;
  }

  onSecondSelect(event) {
    this.chipText = `${this.selectedFirstItem} - ${this.selectedSecondItem}`;
  }
}