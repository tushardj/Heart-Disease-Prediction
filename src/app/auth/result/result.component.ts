import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  displayString = '';
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.displayString = this.route.snapshot.paramMap.get('id');
  }

}
