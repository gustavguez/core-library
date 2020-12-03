import { Component, Input } from "@angular/core";
import { BreadcrumbModel } from "./breadcrumb.model";

@Component({
  selector: "ngx-gustavguez-breadcrumb",
  templateUrl: "./ngx-gustavguez-breadcrumb.component.html",
  styleUrls: ["./ngx-gustavguez-breadcrumb.component.scss"],
})
export class NgxGustavguezBreadcrumbComponent {
  @Input() breadcrumbs: BreadcrumbModel[];
}
