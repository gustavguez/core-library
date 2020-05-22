import { Component, Input } from '@angular/core';

@Component({
	selector: 'ngx-gustavguez-loader',
	templateUrl: './ngx-gustavguez-loader.component.html',
	styleUrls: ['./ngx-gustavguez-loader.component.scss']
})
export class NgxGustavguezLoaderComponent {
	// Inputs
	@Input() loading: boolean;
	@Input() loadingText: string;
}
