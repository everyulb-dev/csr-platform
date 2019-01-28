import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-progress',
  templateUrl: './project-progress.component.html',
  styleUrls: ['./project-progress.component.css']
})
export class ProjectProgressComponent implements OnInit {

  isLinear = false;
  panelOpenState = false;
  
  steps = [
    {
      stepName: 'Orientation Discussion',
      tasks: [
        'Open meeting at village level',
        'Village representative and government officials meeting'
      ]
    },
    {
      stepName: 'Transect Walk',
      tasks: [
        'Baseline survey',
        'Primary data collection-QUestion asked to villagers',
        'Identifying key issue areas(Litering places, dumpings site, pics and geotag)',
      ]
    },
    {
      stepName: 'Current system & Need analysis',
      tasks: [
        'Current / Existing SWM system',
        'Waste generation',
        'Waste Characteristics',
        'Need analysis - Required facility / Machinery etc.'
      ]
    },
    {
      stepName: 'Proposed SWM system',
      tasks: [
        'Preparation of DPR for current system',
      ]
    },
    {
      stepName: 'Approval of DPR in open meeting',
      tasks: [
        'DPR get approved in open meeting with villagers',
      ]
    },
    {
      stepName: 'Technical Appraisal',
      tasks: [
        'Technical Appraisal of DPR',
      ]
    },
    {
      stepName: 'Financial Appraisal',
      tasks: [
        'Financial Appraisal',
      ]
    },
    {
      stepName: 'Money Released',
      tasks: [
        'Money released by Government',
      ]
    }
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
