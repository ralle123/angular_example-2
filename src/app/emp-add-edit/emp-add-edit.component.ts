import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {
  empForm: FormGroup;
  location: string[] =[
    'Downtown',
    'Office 1',
    'Office 2'
  ]
  constructor(
    private _fb: FormBuilder, 
    private _empService: EmployeeService, 
    private _dialogRef: MatDialogRef<EmpAddEditComponent>
    ){
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      telephone: '',
      hire: '',
      gender: '',
      location: ''
    })
  }

  onFormSubmit(){
    if(this.empForm.valid){
      //console.log(this.empForm.value)
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val:any) => {
          alert('Employee added successfully');
          this._dialogRef.close(true);
        },
        error: (err:any) => {
          console.error(err);
        }
        
      })
    }
  }
}
