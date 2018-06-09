import { Component } from '@angular/core';
import { TimelineElement } from './components/horizontal-timeline/timeline-element';
import { mockData } from './mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowLoad = true;
  isShowTimeline = false;

  data: TimelineElement;
  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae 
  ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, 
  ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam 
  quisquam, quae, temporibus dolores porro doloribus.`;

  timeline: TimelineElement[] = [
    new TimelineElement({id: '1123', name: 'aws-issue1', severity: 'high', start: new Date(2014, 1, 16), end: new Date(2014, 1, 16), causes: 'system crash', selected: true}),
    new TimelineElement({id: '1123', name: 'aws-issue2', severity: 'high', start: new Date(2014, 2, 16), end: new Date(2014, 1, 16), causes: 'system crash', selected: true}),
    new TimelineElement({id: '1123', name: 'aws-issue3', severity: 'high', start: new Date(2014, 3, 16), end: new Date(2014, 1, 16), causes: 'system crash', selected: true}),
    new TimelineElement({id: '1123', name: 'aws-issue4', severity: 'high', start: new Date(2014, 4, 16), end: new Date(2014, 1, 16), causes: 'system crash', selected: true}),
    new TimelineElement({id: '1123', name: 'aws-issue5', severity: 'high', start: new Date(2014, 5, 16), end: new Date(2014, 1, 16), causes: 'system crash', selected: true}),
    new TimelineElement({id: '1123', name: 'aws-issue6', severity: 'high', start: new Date(2014, 6, 16), end: new Date(2014, 1, 16), causes: 'system crash', selected: true}),
  ];

  togglePage(page) {
    if (page === 'load') {
      this.isShowLoad = true;
      this.isShowTimeline = false;
    } else if (page === 'timeline') {
      this.isShowLoad = false;
      this.isShowTimeline = true;
    }
  }
}
