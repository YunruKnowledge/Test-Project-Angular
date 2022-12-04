import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  navbarClick(target:string) {
    window.location.href = target
  }

  tohoVote_btn() {
    window.location.href = ""
  }
}
