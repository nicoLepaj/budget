import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  progressColor: string;

  @Input('progress') progress;

  constructor() {
  }

  ngOnChanges() {

    if (this.progress <= 50) {
      this.progressColor = "#32db64";
    }
    else if (this.progress <= 66) {
      this.progressColor = "	#f37735";
    }
    else if (this.progress <= 100) {
      this.progressColor = "	#eb8c00";
    }
    else if (this.progress > 100) {
      this.progressColor = "#f53d3d";
    }
  }

}
