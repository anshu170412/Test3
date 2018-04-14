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
var common_1 = require("@angular/common");
var admindata_service_1 = require("../../Services/AdminData/admindata.service");
var SchoolDashboard = (function () {
    function SchoolDashboard(_location, _adminDataService, _activatedRoute, _router) {
        this._location = _location;
        this._adminDataService = _adminDataService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
    }
    SchoolDashboard.prototype.ngOnInit = function () {
        //this._selectedSchoolGroup=this._activatedRoute.parent.paramMap
        this._selectedSchoolGroup = this._activatedRoute.parent.snapshot.params['schoolGroup'];
        this._selectSchool = this._activatedRoute.snapshot.params['schoolId'];
        this.classes = this._adminDataService.getClasses(this._selectedSchoolGroup, this._selectSchool);
        this.courses = this._adminDataService.getCourses(this._selectedSchoolGroup, this._selectSchool);
        this.periodicQuaters = this._adminDataService.getPeriodicQuaters(this._selectedSchoolGroup, this._selectSchool);
    };
    return SchoolDashboard;
}());
SchoolDashboard = __decorate([
    core_1.Component({
        selector: 'school-dashboard',
        templateUrl: 'app/Admin/SchoolDashboard/schooldashboard.component.html',
        styleUrls: ["app/Admin/SchoolDashboard/schooldashboard.component.css"],
        providers: [admindata_service_1.AdminDataService]
    }),
    __metadata("design:paramtypes", [common_1.PlatformLocation, admindata_service_1.AdminDataService, router_1.ActivatedRoute, router_1.Router])
], SchoolDashboard);
exports.SchoolDashboard = SchoolDashboard;
//# sourceMappingURL=schooldashboard.component.js.map