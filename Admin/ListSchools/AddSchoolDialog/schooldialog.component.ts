import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'dialog-add-school',
  templateUrl: 'app/Admin/ListSchools/AddSchoolDialog/schooldialog.component.html',
  styleUrls: ["app/Admin/ListSchools/AddSchoolDialog/schooldialog.component.css"]
})
export class DialogAddSchool {
  constructor(
    public dialogRef: MatDialogRef<DialogAddSchool>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
         
    }
    
    nameControl = new FormControl('', [Validators.required]);
    branchControl = new FormControl('', [Validators.required]);
    cityControl=new FormControl('',[Validators.required]);
    addressControl=new FormControl('',[Validators.required]);
    contactNumberControl=new FormControl('',[Validators.required]);
    coordinatorControl=new FormControl('',[Validators.required]);

    onNoClick(): void {
        this.dialogRef.close();
    }

}