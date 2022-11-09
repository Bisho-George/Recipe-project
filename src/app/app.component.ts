import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature: string;
  ngOnInit() {
    this.loadedFeature = 'recipe';
  }
  title = 'first-project';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
