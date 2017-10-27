System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent() {
                    this.imageWidth = 50;
                    this.imageMargin = 22;
                    this.pageTitle = "Product list";
                    this.products = [
                        {
                            "productId": 2,
                            "productName": "Garden Cart",
                            "productCode": "GDN-0023",
                            "releaseDate": "March 18, 2016",
                            "description": "15 gallon capacity rolling garden cart",
                            "price": 32.99,
                            "starRating": 4.2,
                            "imageUrl": "https://www.gstatic.com/webp/gallery3/1.png"
                        },
                        {
                            "productId": 5,
                            "productName": "Hammer",
                            "productCode": "TBX-0048",
                            "releaseDate": "May 21, 2016",
                            "description": "Curved claw steel hammer",
                            "price": 8.9,
                            "starRating": 4.8,
                            "imageUrl": "https://www.gstatic.com/webp/gallery3/2.png"
                        }
                    ];
                    this.showImage = true;
                    this.listFilter = 'gard';
                }
                ProductListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                ProductListComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-products',
                        templateUrl: 'app/products/product-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map