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
var schoolgroupdialog_component_1 = require("./AddSchoolGroupDialog/schoolgroupdialog.component");
var admindata_service_1 = require("../../Services/AdminData/admindata.service");
var utility_service_1 = require("../../Services/utility/utility.service");
var ListSchoolGroupsComponent = (function () {
    function ListSchoolGroupsComponent(dialog, _adminDataService, _activatedRoute, _utilityService) {
        this.dialog = dialog;
        this._adminDataService = _adminDataService;
        this._activatedRoute = _activatedRoute;
        this._utilityService = _utilityService;
        this.editMode = false;
        this._utilityService.infoAdminPanelDisplayMode = true;
    }
    ListSchoolGroupsComponent.prototype.ngOnInit = function () {
        this.schoolGroups = this._adminDataService.getSchoolGroups();
    };
    ListSchoolGroupsComponent.prototype.openDialog = function (schoolGroupId, editMode) {
        var _this = this;
        var schoolGroup = null;
        this.editMode = editMode;
        if (schoolGroupId != null && schoolGroupId != "") {
            schoolGroup = this._adminDataService.getSchoolGroup(schoolGroupId);
        }
        if (schoolGroup == null) {
            schoolGroup = { _id: "SCHGRP001", name: "" };
        }
        var dialogRef = this.dialog.open(schoolgroupdialog_component_1.DialogAddSchoolGroup, {
            width: '700px',
            height: '250px',
            data: { schoolGroupData: schoolGroup }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (_this.editMode) {
                //don't do anything
            }
            else {
                var newschoolGroup = { _id: 'SCHGRP001', name: result.schoolGroupData.name, };
                newschoolGroup.schools = [];
                _this._adminDataService.addSchoolGroup(newschoolGroup);
            }
        });
    };
    return ListSchoolGroupsComponent;
}());
ListSchoolGroupsComponent = __decorate([
    core_1.Component({
        selector: 'list-schoolgroup',
        templateUrl: 'app/Admin/ListSchoolGroups/listschoolgroups.component.html',
        styleUrls: ["app/Admin/ListSchoolGroups/listschoolgroups.component.css"],
    }),
    __metadata("design:paramtypes", [material_1.MatDialog, admindata_service_1.AdminDataService, router_1.ActivatedRoute, utility_service_1.UtilityService])
], ListSchoolGroupsComponent);
exports.ListSchoolGroupsComponent = ListSchoolGroupsComponent;
//# sourceMappingURL=listSchoolgroups.component.js.map