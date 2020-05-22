import { Component, Input } from '@angular/core';

@Component({
	selector: 'ngx-gustavguez-page-header',
	templateUrl: './ngx-gustavguez-page-header.component.html',
	styleUrls: ['./ngx-gustavguez-page-header.component.scss']
})
export class NgxGustavguezPageHeaderComponent {
	// Inputs
	@Input() text: string;
}
