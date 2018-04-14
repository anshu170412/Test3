import {Component, Inject,OnInit} from '@angular/core';
import {ActivatedRoute} from  '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ISchoolGroup} from '../../models/schoolGroup';
import {DialogAddSchoolGroup} from './AddSchoolGroupDialog/schoolgroupdialog.component';
import {AdminDataService} from '../../Services/AdminData/admindata.service';
import {UtilityService} from '../../Services/utility/utility.service';

@Component({
  selector: 'list-schoolgroup',
  templateUrl: 'app/Admin/ListSchoolGroups/listschoolgroups.component.html',
  styleUrls: ["app/Admin/ListSchoolGroups/listschoolgroups.component.css"],
  
})
export class ListSchoolGroupsComponent implements OnInit
{
    schoolGroups:ISchoolGroup[];
    editMode:boolean=false;
    constructor(public dialog: MatDialog,private _adminDataService:AdminDataService,private _activatedRoute:ActivatedRoute, private _utilityService:UtilityService)
    {
       this._utilityService.infoAdminPanelDisplayMode=true;
    }
     ngOnInit()
    {
        
        this.schoolGroups=this._adminDataService.getSchoolGroups();
    }
    openDialog(schoolGroupId:string,editMode:boolean): void {
        let schoolGroup:ISchoolGroup=null;
        this.editMode=editMode;
        if(schoolGroupId!=null && schoolGroupId!="")  
        {
          schoolGroup=this._adminDataService.getSchoolGroup(schoolGroupId);
         
        } 
        if(schoolGroup==null) 
        {
            schoolGroup={_id:"SCHGRP001",name:""}
        }
        let dialogRef = this.dialog.open(DialogAddSchoolGroup, {
        width: '700px',
        height:'250px',
        data: {schoolGroupData:schoolGroup}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if(this.editMode)
            {
                //don't do anything
            }
            else
            {
                let newschoolGroup :ISchoolGroup={_id:'SCHGRP001',name: result.schoolGroupData.name,};
                newschoolGroup.schools=[];
                this._adminDataService.addSchoolGroup(newschoolGroup);
            }
        });
    }
}