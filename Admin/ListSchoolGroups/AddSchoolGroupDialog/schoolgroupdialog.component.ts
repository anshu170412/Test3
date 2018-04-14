import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'dialog-add-school',
  templateUrl: 'app/Admin/ListSchoolGroups/AddSchoolGroupDialog/schoolgroupdialog.component.html',
  styleUrls: ["app/Admin/ListSchoolGroups/AddSchoolGroupDialog/schoolgroupdialog.component.css"]
})
export class DialogAddSchoolGroup {
    constructor(
    public dialogRef: MatDialogRef<DialogAddSchoolGroup>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
         
    }
    nameControl = new FormControl('', [Validators.required]);
     onNoClick(): void {
        this.dialogRef.close();
    }

}