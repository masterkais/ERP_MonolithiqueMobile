var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var BadgeOriginal = /** @class */ (function (_super) {
    __extends(BadgeOriginal, _super);
    function BadgeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BadgeOriginal.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    BadgeOriginal.prototype.set = function (badgeNumber) { return cordova(this, "set", {}, arguments); };
    BadgeOriginal.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    BadgeOriginal.prototype.increase = function (increaseBy) { return cordova(this, "increase", {}, arguments); };
    BadgeOriginal.prototype.decrease = function (decreaseBy) { return cordova(this, "decrease", {}, arguments); };
    BadgeOriginal.prototype.isSupported = function () { return cordova(this, "isSupported", {}, arguments); };
    BadgeOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    BadgeOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    BadgeOriginal.pluginName = "Badge";
    BadgeOriginal.plugin = "cordova-plugin-badge";
    BadgeOriginal.pluginRef = "cordova.plugins.notification.badge";
    BadgeOriginal.repo = "https://github.com/katzer/cordova-plugin-badge";
    BadgeOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return BadgeOriginal;
}(AwesomeCordovaNativePlugin));
var Badge = new BadgeOriginal();
export { Badge };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmFkZ2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBZ0NqRSx5QkFBMEI7Ozs7SUFPbkQscUJBQUs7SUFXTCxtQkFBRyxhQUFDLFdBQW1CO0lBVXZCLG1CQUFHO0lBV0gsd0JBQVEsYUFBQyxVQUFrQjtJQVczQix3QkFBUSxhQUFDLFVBQWtCO0lBVTNCLDJCQUFXO0lBVVgsNkJBQWE7SUFVYixpQ0FBaUI7Ozs7OztnQkFqSG5CO0VBaUMyQiwwQkFBMEI7U0FBeEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQmFkZ2VcbiAqIEBwcmVtaWVyIGJhZGdlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBlc3NlbnRpYWwgcHVycG9zZSBvZiBiYWRnZSBudW1iZXJzIGlzIHRvIGVuYWJsZSBhbiBhcHBsaWNhdGlvbiB0byBpbmZvcm0gaXRzIHVzZXJzIHRoYXQgaXQgaGFzIHNvbWV0aGluZyBmb3IgdGhlbSDigJQgZm9yIGV4YW1wbGUsIHVucmVhZCBtZXNzYWdlcyDigJQgd2hlbiB0aGUgYXBwbGljYXRpb24gaXNu4oCZdCBydW5uaW5nIGluIHRoZSBmb3JlZ3JvdW5kLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1iYWRnZS4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JhZGdlIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWJhZGdlKS5cbiAqXG4gKiBBbmRyb2lkIE5vdGU6IEJhZGdlcyBoYXZlIGhpc3RvcmljYWxseSBvbmx5IGJlZW4gYSBmZWF0dXJlIGltcGxlbWVudGVkIGJ5IHRoaXJkIHBhcnR5IGxhdW5jaGVycyBhbmQgbm90IHZpc2libGUgdW5sZXNzIG9uZSBvZiB0aG9zZSBsYXVuY2hlcnMgd2FzIGJlaW5nIHVzZWQgKEUuRy4gU2Ftc3VuZyBvciBOb3ZhIExhdW5jaGVyKSBhbmQgaWYgZW5hYmxlZCBieSB0aGUgdXNlci4gQXMgb2YgQW5kcm9pZCA4IChPcmVvKSwgW25vdGlmaWNhdGlvbiBiYWRnZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3RyYWluaW5nL25vdGlmeS11c2VyL2JhZGdlcykgd2VyZSBpbnRyb2R1Y2VkIG9mZmljaWFsbHkgdG8gcmVmbGVjdCB1bnJlYWQgbm90aWZpY2F0aW9ucy4gVGhpcyBwbHVnaW4gaXMgdW5saWtlbHkgdG8gd29yayBhcyBleHBlY3RlZCBvbiBkZXZpY2VzIHJ1bm5pbmcgQW5kcm9pZCA4IG9yIG5ld2VyLiBQbGVhc2Ugc2VlIHRoZSBbbG9jYWwgbm90aWZpY2F0aW9ucyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2thdHplci9jb3Jkb3ZhLXBsdWdpbi1sb2NhbC1ub3RpZmljYXRpb25zKSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBiYWRnZSB1c2Ugd2l0aCBub3RpZmljYXRpb25zLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9iYWRnZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFkZ2U6IEJhZGdlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmJhZGdlLnNldCgxMCk7XG4gKiB0aGlzLmJhZGdlLmluY3JlYXNlKDEpO1xuICogdGhpcy5iYWRnZS5jbGVhcigpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFkZ2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iYWRnZScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5ub3RpZmljYXRpb24uYmFkZ2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2thdHplci9jb3Jkb3ZhLXBsdWdpbi1iYWRnZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFkZ2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDbGVhciB0aGUgYmFkZ2Ugb2YgdGhlIGFwcCBpY29uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2xlYXIoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgYmFkZ2Ugb2YgdGhlIGFwcCBpY29uLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYmFkZ2VOdW1iZXIgIFRoZSBuZXcgYmFkZ2UgbnVtYmVyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXQoYmFkZ2VOdW1iZXI6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYmFkZ2Ugb2YgdGhlIGFwcCBpY29uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2UgdGhlIGJhZGdlIG51bWJlci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluY3JlYXNlQnkgIENvdW50IHRvIGFkZCB0byB0aGUgY3VycmVudCBiYWRnZSBudW1iZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5jcmVhc2UoaW5jcmVhc2VCeTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGVjcmVhc2UgdGhlIGJhZGdlIG51bWJlci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlY3JlYXNlQnkgIENvdW50IHRvIHN1YnRyYWN0IGZyb20gdGhlIGN1cnJlbnQgYmFkZ2UgbnVtYmVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlY3JlYXNlKGRlY3JlYXNlQnk6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHN1cHBvcnQgdG8gc2hvdyBiYWRnZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzU3VwcG9ydGVkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgYXBwIGhhcyBwZXJtaXNzaW9uIHRvIHNob3cgYmFkZ2VzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHBlcm1pc3Npb24gdG8gc2V0IGJhZGdlIG5vdGlmaWNhdGlvbnNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==