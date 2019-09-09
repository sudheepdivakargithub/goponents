import { Component, OnInit } from '@angular/core';

import {
  GoBrandingService,
  GoIconComponent,
  GoModalService,
  GoOffCanvasService,
  GoSideNavService,
  GoToasterService,
  NavGroup,
  NavItem
} from '../../../go-lib/src/public_api';
import { OffCanvasTestComponent } from './components/off-canvas-test/off-canvas-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  logo: string = 'https://mobi.thefutureis.mobi/images/assets/theme_logo/000/000/000/178/header.png?1556627290';
  title: string = 'go-tester';

  menuItems: Array<NavGroup | NavItem> = [
    { routeIcon: 'dashboard', routeTitle: 'Tests', description: 'Test Routes', subRoutes: [
      { route: 'test-page-1', routeTitle: 'Test 1', description: 'Test Route 1' },
      { route: 'test-page-2', routeTitle: 'Test 2' },
      { route: 'test-page-3', routeTitle: 'Test 3', description: 'Forms' }
    ]},
    { routeIcon: 'explore', routeTitle: 'Second Test', route: 'test-page-4', description: 'Test Route 4' },
    {
      routeIcon: 'search',
      routeTitle: 'External Link (New Tab)',
      description: 'Test external link opening in new tab',
      route: 'https://www.google.com/',
      isExternalLink: true
    },
    {
      routeIcon: 'search',
      routeTitle: 'External Link (Same Tab)',
      description: 'Test external link opening in same tab',
      route: 'https://www.google.com/',
      isExternalLink: true,
      externalLinkTarget: '_self'
    }
  ];

  constructor(
    private goBrandingService: GoBrandingService,
    private goToasterService: GoToasterService,
    private goOffCanvasService: GoOffCanvasService,
    private goSideNavService: GoSideNavService,
    private goModalService: GoModalService
  ) { }

  ngOnInit(): void {
    this.goBrandingService.setBrandColor('#8A4EDE');
  }

  openOffCanvas(): void {
    this.goOffCanvasService.openOffCanvas({
      component: OffCanvasTestComponent,
      bindings: {}
    });
  }

  toggleSideMenu(): void {
    this.goSideNavService.toggleNav();
  }

  openModal(): void {
    this.goModalService.openModal(
      GoIconComponent,
      {
        icon: 'alarm'
      }
    );
  }

  openToast(): void {
    this.goToasterService.toastInfo({ message: 'From the action sheet'});
  }
}
