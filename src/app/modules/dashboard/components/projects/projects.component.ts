import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  projects: Array<any> = [
    {
      name: 'Jagmagaata Uttarakhand - Waste Segregation & Management',
      date: '10 FEB 2019',
      location: 'Uttarakhand'
    },
    {
      name: 'Watershed Development in Madhya Pradesh',
      date: '6 JAN 2019',
      location: 'Madhya Pradesh'
    },
    {
      name: 'Watershed Development in Jharkhand',
      date: '8 JAN 2019',
      location: 'Jharkhand'
    },
    {
      name: 'Watershed Development in Odisha',
      date: '5 JAN 2019',
      location: 'Odisha'
    },
    {
      name: 'Watershed Development in Maharashtra',
      date: '11 FEB 2019',
      location: 'Maharashtra'
    },
    {
      name: 'Community Drinking Water Intervention - Water ATMs in Rajasthan',
      date: '6 JAN 2019',
      location: 'Rajasthan'
    },
    {
      name: 'Community Drinking Water Intervention - Water ATMs in U.P.',
      date: '20 JAN 2019',
      location: 'Uttar-Pradesh'
    },
    {
      name: 'Restoration of Water Bodies - Sholinganallur Lake in Chennai',
      date: '5 JAN 2019',
      location: 'Chennai'
    },
    {
      name: 'Restoration of Water Bodies - Rejuvenation of Ponds in Chennai ',
      date: '6 JAN 2019',
      location: 'Chennai'
    },
    {
      name: 'Restoration of Water Bodies - Refurbishment of the Wazirabad Drain',
      date: '6 FEB 2019',
      location: 'Wazirabad'
    },
    {
      name: 'Revival of Village water ponds - Jaitaran Rajasthan',
      date: '15 JAN 2019',
      location: 'Rajasthan'
    },
    {
      name: 'Rain Roof Water Harvesting in Rajasthan',
      date: '6 JAN 2019',
      location: 'Rajasthan'
    },
    {
      name: 'Urban Afforestation',
      date: '6 JAN 2019',
      location: 'Jharkhand'
    },
    {
      name: 'Schools on Solar',
      date: '6 MAR 2019',
      location: 'Uttarakhand'
    },
    {
      name: 'Rural Solar Street Lights',
      date: '16 APR 2019',
      location: 'Jharkhand'
    },
    {
      name: 'Enhanced Education Programme',
      date: '6 JAN 2019',
      location: 'Uttarakhand'
    },
    {
      name: 'Mid Day Meals for children of Municipal Schools of Bhubaneswar',
      date: '16 FEB 2019',
      location: 'Bhubaneswar'
    },
    {
      name: 'Support for Education of Under-privileged Children',
      date: '2 JAN 2019',
      location: 'Uttarakhand'
    },
    {
      name: 'Scholarships for Young India Fellowship (YIF) Programme',
      date: '3 JAN 2019',
      location: 'Jharkhand'
    },
    {
      name: 'Sahapedia Heritage Fellowship Programme',
      date: '2 FEB 2019',
      location: 'Uttarakhand'
    },
    {
      name: 'Legal Literacy Programme for Women',
      date: '6 MAR 2019',
      location: 'Uttarakhand'
    },
    {
      name: 'PMGDISHA - National Digital Literacy Programme',
      date: '8 APR 2019',
      location: 'Jharkhand'
    },
    {
      name: 'Skill Devt of drug rehabilitated youth in Maharashtra',
      date: '6 FEB 2019',
      location: 'Maharashtra'
    },
    {
      name: 'Skill Development of rural youth in Rajasthan',
      date: '5 MAR 2019',
      location: 'Rajasthan'
    },
    {
      name: 'Mini Health Clinics in Rural Areas',
      date: '10 MAR 2019',
      location: 'Jharkhand'
    },
    {
      name: 'Stree Swabhimaan (Sanitary Napkins)',
      date: '20 FEB 2019',
      location: 'Jharkhand'
    },
    {
      name: 'Support for Children with Cancer',
      date: '20 MAR 2019',
      location: 'Uttarakhand'
    },
    {
      name: 'IndusInd Girl Power Programme',
      date: '11 JAN 2019',
      location: 'Uttarakhand'
    },
    {
      name: 'IndusInd Para Champions Programme',
      date: '6 JAN 2019',
      location: 'Uttarakhand'
    },
    {
      name: 'IndusInd Blind Cricket Programme',
      date: '8 MAR 2019',
      location: 'Jharkhand'
    },
    {
      name: 'Welfare activities for family members of defence personnel',
      date: '13 JAN 2019',
      location: 'Jharkhand'
    },
    {
      name: 'Disaster Relief',
      date: '9 FEB 2019',
      location: 'Uttarakhand'
    },
  ]

  ngOnInit() {
  }

  goToProject(): void {
    this.router.navigate(['project']);
  }

}
