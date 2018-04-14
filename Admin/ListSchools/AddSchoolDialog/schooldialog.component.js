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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var DialogAddSchool = (function () {
    function DialogAddSchool(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.nameControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.branchControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.cityControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.addressControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.contactNumberControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.coordinatorControl = new forms_1.FormControl('', [forms_1.Validators.required]);
    }
    DialogAddSchool.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return DialogAddSchool;
}());
DialogAddSchool = __decorate([
    core_1.Component({
        selector: 'dialog-add-school',
        templateUrl: 'app/Admin/ListSchools/AddSchoolDialog/schooldialog.component.html',
        styleUrls: ["app/Admin/ListSchools/AddSchoolDialog/schooldialog.component.css"]
    }),
    __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
], DialogAddSchool);
exports.DialogAddSchool = DialogAddSchool;
//# sourceMappingURL=schooldialog.component.js.map