import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'ngx-gustavguez-file',
	templateUrl: './ngx-gustavguez-file.component.html',
	styleUrls: ['./ngx-gustavguez-file.component.scss']
})
export class NgxGustavguezFileComponent {
	// Inputs
	@Input() form: FormGroup;
	@Input() label: string;
	@Input() placeholder: string;
	@Input() controlId: string;
	@Input() controlName: string;
	@Input() controlFileName: string;
	@Input() requiredErrorText: string;

	//ViewChild
	@ViewChild('file') input: ElementRef;

	// Outputs
	@Output() onChange: EventEmitter<any> = new EventEmitter();

	// Custom events
	onEmitChange(): void {
		//Try to get the file
		if(this.input.nativeElement.files){
			const file: File = this.input.nativeElement.files[0];

			//Persis value to input file
			this.changeFormValue(file);

			//Emit event
			this.onChange.emit(file);
		}
	}

	onClear(): void {
		//Clear
		this.changeFormValue(null, null);

		//Emit change
		this.onChange.emit(null);
	}

	//Helper functions
	private changeFormValue(file: File, fileName?: string): void {
		this.form.patchValue({
			[this.controlName]: file,
			[this.controlFileName]: fileName ? fileName : null,
		});
	}
}
