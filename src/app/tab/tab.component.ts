import { Component, OnInit, Input } from '@angular/core';
import { TabListComponent } from '../tab-list/tab-list.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() tabTitle;
  @Input() active : boolean = false;
  
  constructor(tabs : TabListComponent) { 
    tabs.addTab(this);
  }

  ngOnInit() {
  }

}
