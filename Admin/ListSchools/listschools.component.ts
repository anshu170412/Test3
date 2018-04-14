import {Component, Inject,OnInit} from '@angular/core';
import {Router,ActivatedRoute,NavigationEnd } from  '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PlatformLocation } from '@angular/common'
import {ISchool} from '../../Models/school';
import {DialogAddSchool} from './AddSchoolDialog/schooldialog.component';
import {AdminDataService} from '../../Services/AdminData/admindata.service';

@Component({
  selector: 'list-schools',
  templateUrl: 'app/Admin/ListSchools/listschools.component.html',
  styleUrls: ["app/Admin/ListSchools/listschools.component.css"],
  
})
export class ListSchoolsComponent implements OnInit  { 
   
    schools:ISchool[];
    editMode:boolean=false;
    isVisible:boolean=true;
    
    private _selectedSchoolGroup:string="";
    private _hasChildren: boolean;
  
    constructor(public dialog: MatDialog,private _location: PlatformLocation,private _adminDataService:AdminDataService,private _activatedRoute:ActivatedRoute,private _router:Router) 
    {
       this,_location.onPopState(() => {
            this.isVisible=true;
        });
    }

    ngOnInit()
    {
        
        this._selectedSchoolGroup=this._activatedRoute.snapshot.params['schoolGroup'];
        this.schools=this._adminDataService.getSchools(this._selectedSchoolGroup);

        this._hasChildren = false;
       // this._router.events.(event => event instanceof NavigationEnd).subscribe(event => {
       // this._hasChildren = this._router.children.length > 0;
      //  });
  
    }
    navigateToSchool(schoolId:string)
    {
        this.isVisible=false;
        this._router.navigate(['./Schools',schoolId],{relativeTo:this._activatedRoute});
    }
    openDialog(schoolId:string,editMode:boolean): void {
        let school:ISchool=null;
        this.editMode=editMode;
        if(schoolId!=null && schoolId!="")  
        {
          school=this._adminDataService.getSchool(this._selectedSchoolGroup,schoolId);
         
        } 
        if(school==null) 
        {
            school={_id:"1",groupId:this._selectedSchoolGroup,name:"",city:"",branch:"",address:"",contactNumber:"",coordinator:""}
        }
        let dialogRef = this.dialog.open(DialogAddSchool, {
        width: '700px',
        height:'620px',
        data: {schoolData:school}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if(this.editMode)
            {
                //don't do anything
            }
            else
            {
                let newschool :ISchool={_id:'VIBGRYJP',groupId: result.schoolData.groupId,name:result.schoolData.name
                                         ,branch:result.schoolData.branch,city:result.schoolData.city
                                         ,address:result.schoolData.address,contactNumber:result.schoolData.contactNumber
                                         ,coordinator:result.schoolData.coordinator};
                this._adminDataService.addSchool(this._selectedSchoolGroup,newschool);
            }
        });
    }    
}

