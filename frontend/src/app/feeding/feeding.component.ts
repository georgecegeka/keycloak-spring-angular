import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FeedingService} from '../feeding.service';
import {FeedingResult} from './feedingResult.model';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.component.html',
  styleUrls: ['./feeding.component.css']
})
export class FeedingComponent implements OnInit {
  feedingResult = '';

  constructor(private route: ActivatedRoute, private feedingService: FeedingService) { }

  ngOnInit() {
    this.feedingService.getFeedingResult(this.route.snapshot.routeConfig.path).subscribe((data: FeedingResult) => {
      this.feedingResult = data.message;
    });
  }

}
