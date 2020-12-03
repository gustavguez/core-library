import { Component, OnInit } from '@angular/core';
import { BreadcrumbModel } from 'projects/gustavguez/ngx-core/src/lib/structure/ngx-gustavguez-breadcrumb/breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: BreadcrumbModel[];

  constructor() { }

  ngOnInit(): void {
    this.breadcrumbs = [
      new BreadcrumbModel('Uno'),
      new BreadcrumbModel('Dos', ['/']),
      new BreadcrumbModel('Tres', ['/'])
    ]
  }

}
