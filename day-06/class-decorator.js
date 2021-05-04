var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseEntity = /** @class */ (function () {
    function BaseEntity() {
        this.id = Math.random();
        this.created = new Date().toLocaleDateString();
    }
    return BaseEntity;
}());
var Course = /** @class */ (function (_super) {
    __extends(Course, _super);
    function Course(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    return Course;
}(BaseEntity));
var englishCourse = new Course("English");
console.log("id: " + englishCourse.id);
console.log("created: " + englishCourse.created);
