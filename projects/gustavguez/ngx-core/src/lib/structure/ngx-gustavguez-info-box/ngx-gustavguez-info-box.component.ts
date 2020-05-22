import { Component, Input } from '@angular/core';
import { StatusEnum } from '../../status.enum';

@Component({
	selector: 'ngx-gustavguez-info-box',
	templateUrl: './ngx-gustavguez-info-box.component.html',
	styleUrls: ['./ngx-gustavguez-info-box.component.scss']
})
export class NgxGustavguezInfoBoxComponent {
	// Inputs
	@Input() text: string;
	@Input() number: string;
	@Input() status: StatusEnum;
	@Input() icon: string;
}
