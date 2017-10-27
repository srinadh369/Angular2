import { Component } from 'angular2/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'

})
export class ProductListComponent {

    imageWidth: number = 50;
    imageMargin: number = 22;
   


    pageTitle: string = "Product list";
    products: any[] = [
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
    showImage: boolean = true;
    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    listFilter: string = 'gard';

}
