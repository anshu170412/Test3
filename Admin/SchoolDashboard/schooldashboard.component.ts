import {Component,OnInit} from '@angular/core';
import {Router,ActivatedRoute,NavigationEnd } from  '@angular/router';
import { PlatformLocation } from '@angular/common'
import {AdminDataService} from '../../Services/AdminData/admindata.service';
import {IClass} from '../../Models/class';
import {ICourse} from '../../Models/course';
import {IPeriodicQuater} from '../../Models/periodicquater';

@Component({
  selector: 'school-dashboard',
  templateUrl: 'app/Admin/SchoolDashboard/schooldashboard.component.html',
  styleUrls: ["app/Admin/SchoolDashboard/schooldashboard.component.css"],
  providers:[AdminDataService]
})
export class SchoolDashboard implements OnInit  { 
    classes:IClass[];
    courses:ICourse[];
    periodicQuaters:IPeriodicQuater[];
    private _selectSchool:string;
    private _selectedSchoolGroup:string;

    constructor(private _location: PlatformLocation,private _adminDataService:AdminDataService,private _activatedRoute:ActivatedRoute,private _router:Router) 
    {
      
    }
    ngOnInit()
    {
        //this._selectedSchoolGroup=this._activatedRoute.parent.paramMap
        this._selectedSchoolGroup=this._activatedRoute.parent.snapshot.params['schoolGroup'];
        this._selectSchool=this._activatedRoute.snapshot.params['schoolId'];
        this.classes=this._adminDataService.getClasses(this._selectedSchoolGroup,this._selectSchool);
        this.courses=this._adminDataService.getCourses(this._selectedSchoolGroup,this._selectSchool);
        this.periodicQuaters=this._adminDataService.getPeriodicQuaters(this._selectedSchoolGroup,this._selectSchool);
    }
}
