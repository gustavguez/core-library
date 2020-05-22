import { Component, Input } from '@angular/core';

@Component({
	selector: 'ngx-gustavguez-card',
	templateUrl: './ngx-gustavguez-card.component.html',
	styleUrls: ['./ngx-gustavguez-card.component.scss']
})
export class NgxGustavguezCardComponent {
	// Inputs
	@Input() title: string;
}
