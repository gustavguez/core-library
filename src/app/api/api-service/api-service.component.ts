import { Component, OnInit } from '@angular/core';

import { ApiService } from 'projects/gustavguez/ngx-core/src/public-api';

@Component({
	selector: 'app-api-service',
	templateUrl: './api-service.component.html',
	styleUrls: ['./api-service.component.scss']
})
export class ApiServiceComponent implements OnInit {
	// Models
	loading: boolean;

	// Inject services
	constructor(
		private apiService: ApiService
	) { }

	// On component init
	ngOnInit(): void {
		//Set api url
		this.apiService.setApiURL("https://jsonplaceholder.typicode.com");
		this.apiService.changeApiResponseStrategy('root');
	}

	// Custom events
	onClick(): void {
		// Start loading
		this.loading = true;

		// Do request
		this.apiService.fetchData("/posts").subscribe(
			(response: any) => {
				//Stop loading
				this.loading = false;

				//Display response
				console.log(response);
			},
			(error: any) => {
				//Stop loading
				this.loading = false;
			}
		);
	}

}
