import { Component } from '@angular/core';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
	// Models
	loading: boolean = true;

	// Custom events
	onToggleLoading(): void {
		this.loading = !this.loading;
	}

}
