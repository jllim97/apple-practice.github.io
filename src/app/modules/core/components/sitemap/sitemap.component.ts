import { Component, OnInit } from '@angular/core';

export interface LinkModel {
  title?: string;
  link?: string;
}
export interface SiteMapModel {
  category: string;
  children: Array<LinkModel>
}


@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {

  shopAndLearn: SiteMapModel = {
    category: 'Shop and Learn',
    children: [
      {
        title: 'Store',
        link: '#'
      },
      {
        title: 'Mac',
        link: '#'
      },
      {
        title: 'iPad',
        link: '#'
      },
      {
        title: 'iPhone',
        link: '#'
      },
      {
        title: 'Watch',
        link: '#'
      },
      {
        title: 'AirPods',
        link: '#'
      },
      {
        title: 'TV & Home',
        link: '#'
      },
      {
        title: 'AirTag',
        link: '#'
      },
      {
        title: 'Accessories',
        link: '#'
      },
    ]
  };

  services: SiteMapModel = {
    category: 'Services',
    children: [
      {
        title: 'Apple Music',
        link: '#'
      },
      {
        title: 'Apple TV+',
        link: '#'
      },
      {
        title: 'Apple Fitness+',
        link: '#'
      },
      {
        title: 'Apple Arcade',
        link: '#'
      },
      {
        title: 'iCloud',
        link: '#'
      },
      {
        title: 'Apple One',
        link: '#'
      },
      {
        title: 'Apple Pay',
        link: '#'
      },
      {
        title: 'Apple Books',
        link: '#'
      },
      {
        title: 'Apple Podcasts',
        link: '#'
      },
      {
        title: 'App Store',
        link: '#'
      },
    ]
  };

  account: SiteMapModel = {
    category: 'Account',
    children: [
      {
        title: 'Manage Your Apple ID',
        link: '#'
      },
      {
        title: 'Apple Store Account',
        link: '#'
      },
      {
        title: 'iCloud.com',
        link: '#'
      },
    ]
  };

  appleStore: SiteMapModel = {
    category: 'Apple Store',
    children: [
      {
        title: 'Apple Store App',
        link: '#'
      },
      {
        title: 'Apple Recycling Programme',
        link: '#'
      },
      {
        title: 'Order Status',
        link: '#'
      },
      {
        title: 'Shopping Help',
        link: '#'
      },
    ]
  };

  forBusiness: SiteMapModel = {
    category: 'For Business',
    children: [
      {
        title: 'Apple and Business',
        link: '#'
      },
    ]
  };

  forEducation: SiteMapModel = {
    category: 'For Education',
    children: [
      {
        title: 'Apple and Education',
        link: '#'
      },
      {
        title: 'Shop for University',
        link: '#'
      },
    ]
  };

  forHealthCare: SiteMapModel = {
    category: 'For Healthcare',
    children: [
      {
        title: 'Apple in HealthCare',
        link: '#'
      },
      {
        title: 'Health on Apple Watch',
        link: '#'
      },
    ]
  };

  appleValues: SiteMapModel = {
    category: 'Apple Values',
    children: [
      {
        title: 'Accessibility',
        link: '#'
      },
      {
        title: 'Education',
        link: '#'
      },
      {
        title: 'Environment',
        link: '#'
      },
      {
        title: 'Privacy',
        link: '#'
      },
      {
        title: 'Supplier Responsibility',
        link: '#'
      },
    ]
  };

  aboutApple: SiteMapModel = {
    category: 'About Apple',
    children: [
      {
        title: 'Career Opportunities',
        link: '#'
      },
      {
        title: 'Investors',
        link: '#'
      },
      {
        title: 'Ethics and Compliance',
        link: '#'
      },
      {
        title: 'Events',
        link: '#'
      },
      {
        title: 'Contact Apple',
        link: '#'
      },
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
