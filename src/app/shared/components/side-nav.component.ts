import { Component, Input } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component ({
  selector: "side-nav",
  templateUrl: "../templates/side-nav.component.html",
})
export class SideNavComponent {

  @Input() sidenavObject: any;

  private links = [
    {name: 'Taskboard', path:'/taskboard', icon:'fa fa-tasks'},
    {name: 'Projects', path:'/projects', icon:'fa fa-folder-o'}
  ];

  constructor(private route: ActivatedRoute, private router: Router){}


  navigateTo(path) {
    this.router.navigate([path]);
    this.sidenavObject.close();
  }

}
