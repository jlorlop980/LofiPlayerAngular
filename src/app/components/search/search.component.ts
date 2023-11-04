import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/models/Song';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {
  @Input() songs:Song[];
  @Input() logged:boolean;
  
  constructor() { }

  ngOnInit() {}

}
