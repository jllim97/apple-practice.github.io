import {Component, OnInit} from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {flipInX, flipOutX} from "ng-animate";

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
  animations: [
    trigger('flipInOut', [
      transition('visible => invisible', [
        useAnimation(flipOutX, {
          params: {timing: '0.5'}
        }),
      ]),
      transition('invisible => visible', [
        useAnimation(flipInX)
      ])
    ]),
    trigger('openClose', [
      transition('visible => invisible', [
        useAnimation(flipOutX, {
          params: {timing: '0.5'}
        }),
      ]),
      transition('invisible => visible', [
        useAnimation(flipInX)
      ])
    ])
    // trigger('openClose', [
    //   state('visible', style({
    //     display: 'inline-flex'
    //   })),
    //   state('invisible', style({
    //     display: 'hidden'
    //   })),
    //   transition('visible => invisible', [
    //     animate('1s'),
    //   ]),
    //   transition('invisible => visible', [
    //     animate('1s')
    //   ])
    // ])

  ]
})
export class HeaderNavComponent implements OnInit {

  isMenuBarVisible: boolean = true;
  isCloseVisible: boolean = false;
  isSearchTriggered: boolean = false;
  toExclude: string[] = ['apple', 'search','shopping_bag']
  headerList: Array<{ title?: string, link?: string, isIcon?: boolean }> = [
    {
      title: 'apple',
      link: '#',
      isIcon: true
    },
    {
      title: 'store',
      link: '#',
      isIcon: true
    },
    {
      title: 'mac',
      link: '#',
      isIcon: true
    },
    {
      title: 'ipad',
      link: '#',
      isIcon: true
    },
    {
      title: 'iphone',
      link: '#',
      isIcon: true
    },
    {
      title: 'watch',
      link: '#',
      isIcon: true
    },
    {
      title: 'airpods',
      link: '#',
      isIcon: true
    },
    {
      title: 'tv',
      link: '#',
      isIcon: true
    },
    {
      title: 'only',
      link: '#',
      isIcon: true
    },
    {
      title: 'accessories',
      link: '#',
      isIcon: true
    },
    {
      title: 'support',
      link: '#',
      isIcon: true
    },
    {
      title: 'search',
      link: '#',
      isIcon: true
    },
    {
      title: 'shopping_bag',
      link: '#',
      isIcon: true
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick = () => {
  }

  triggerDrawer = () => {
    this.isCloseVisible = true;
    document.getElementById('html')?.classList.add('overflow-hidden')
  }

  onMenuBarClosed(event: any) {
    if (event.fromState === 'visible' && event.toState === 'invisible') {
      this.isCloseVisible = true;
    }
  }

  onCloseClosed(event: any) {
    if (event.toState === 'invisible') {
      this.triggerDrawer();
    }
  }

  triggerClose() {
    this.isCloseVisible = !this.isCloseVisible;
    document.getElementById('html')?.classList.remove('overflow-hidden')
  }

  triggerSearch() {
    this.isSearchTriggered = true;
  }
  cancelTrigger() {
    this.isSearchTriggered = false;
  }
}
