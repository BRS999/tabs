import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})
export class TabListComponent implements OnInit {

  tabs: TabComponent[] = [];
  constructor() { }

  ngOnInit() {
  }

  addTab(tab: TabComponent) {
    if(this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab: TabComponent) {
    this.tabs.map(tab => tab.active = false);
    tab.active = true;
  }

}
