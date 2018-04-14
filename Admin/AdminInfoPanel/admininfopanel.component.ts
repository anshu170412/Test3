import { Component} from '@angular/core';

@Component({
    selector: 'panel-admininfo',
    templateUrl:'app/Admin/AdminInfoPanel/admininfopanel.component.html',
    styleUrls: ["app/Admin/AdminInfoPanel/admininfopanel.component.css"]
})
export class AdminInfoPanel {
    name:string='';
    emailId:string='';
    contactNumber:string='';
}