"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var common_1 = require("@angular/common");
var schooldialog_component_1 = require("./AddSchoolDialog/schooldialog.component");
var admindata_service_1 = require("../../Services/AdminData/admindata.service");
var ListSchoolsComponent = (function () {
    function ListSchoolsComponent(dialog, _location, _adminDataService, _activatedRoute, _router) {
        var _this = this;
        this.dialog = dialog;
        this._location = _location;
        this._adminDataService = _adminDataService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.editMode = false;
        this.isVisible = true;
        this._selectedSchoolGroup = "";
        this, _location.onPopState(function () {
            _this.isVisible = true;
        });
    }
    ListSchoolsComponent.prototype.ngOnInit = function () {
        this._selectedSchoolGroup = this._activatedRoute.snapshot.params['schoolGroup'];
        this.schools = this._adminDataService.getSchools(this._selectedSchoolGroup);
        this._hasChildren = false;
        // this._router.events.(event => event instanceof NavigationEnd).subscribe(event => {
        // this._hasChildren = this._router.children.length > 0;
        //  });
    };
    ListSchoolsComponent.prototype.navigateToSchool = function (schoolId) {
        this.isVisible = false;
        this._router.navigate(['./Schools', schoolId], { relativeTo: this._activatedRoute });
    };
    ListSchoolsComponent.prototype.openDialog = function (schoolId, editMode) {
        var _this = this;
        var school = null;
        this.editMode = editMode;
        if (schoolId != null && schoolId != "") {
            school = this._adminDataService.getSchool(this._selectedSchoolGroup, schoolId);
        }
        if (school == null) {
            school = { _id: "1", groupId: this._selectedSchoolGroup, name: "", city: "", branch: "", address: "", contactNumber: "", coordinator: "" };
        }
        var dialogRef = this.dialog.open(schooldialog_component_1.DialogAddSchool, {
            width: '700px',
            height: '620px',
            data: { schoolData: school }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (_this.editMode) {
                //don't do anything
            }
            else {
                var newschool = { _id: 'VIBGRYJP', groupId: result.schoolData.groupId, name: result.schoolData.name,
                    branch: result.schoolData.branch, city: result.schoolData.city,
                    address: result.schoolData.address, contactNumber: result.schoolData.contactNumber,
                    coordinator: result.schoolData.coordinator };
                _this._adminDataService.addSchool(_this._selectedSchoolGroup, newschool);
            }
        });
    };
    return ListSchoolsComponent;
}());
ListSchoolsComponent = __decorate([
    core_1.Component({
        selector: 'list-schools',
        templateUrl: 'app/Admin/ListSchools/listschools.component.html',
        styleUrls: ["app/Admin/ListSchools/listschools.component.css"],
    }),
    __metadata("design:paramtypes", [material_1.MatDialog, common_1.PlatformLocation, admindata_service_1.AdminDataService, router_1.ActivatedRoute, router_1.Router])
], ListSchoolsComponent);
exports.ListSchoolsComponent = ListSchoolsComponent;
//# sourceMappingURL=listschools.component.js.map