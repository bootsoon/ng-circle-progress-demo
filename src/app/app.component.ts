import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  githubLink = "https://github.com/bootsoon/ng-circle-progress";
  
  options = {
    percent: 85,
    radius: 100,
    space: 4,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    animationDuration: 300,
    outerStrokeColor: "rgb(120, 192, 0)",
    innerStrokeColor: "rgb(199, 229, 150)",
    backgroundColor: "white",
    backgroundOpacity: 1,
    class: 'center-block cursor-pointer',
    subtitleFormat: (percent): string => {
      if (percent >= 100) {
        return "Completed"
      } else if (percent >= 80) {
        return "Almost done"
      } else if (percent >= 50) {
        return "Half"
      } else if (percent > 0) {
        return "Percent"
      } else {
        return "Not started"
      }
    }
  }

}
