import { Component } from "@angular/core";

@Component({
    selector: 'app-ng-for',
    templateUrl: './ngfor.component.html'
}) 
export class ForLoopComponent {
    products = [
        {proImg:'https://www.digitaltrends.com/wp-content/uploads/2021/08/dell-xps-15-oled-2021-laptop.jpg?fit=720%2C720&p=1',name: 'Laptop', id: 'pro01',price: '70000'},
        {proImg:'https://static01.nyt.com/images/2020/04/16/business/16apple-new/15apple-new-articleLarge.jpg?quality=75&auto=webp&disable=upscale',name: 'Mobile', id: 'pro02',price: '20000'},
        {proImg:'https://i.pcmag.com/imagery/reviews/05USmNmGKiWMsLrCnbjnFRu-1.fit_lim.size_357x209.v1649174436.jpg',name: 'TV', id: 'pro03',price: '50000'},
        {proImg:'https://www.whirlpool.com/content/whirlpoolv2/en_us/blog/washers-and-dryers/top-load-vs-front-load.thumb.500.500.png',name: 'Washing Machine', id: 'pro04',price: '20000'}
    ]
}
//https://www.digitaltrends.com/computing/laptop-buying-guide/
//https://www.globalbrandsmagazine.com/top-10-mobile-brands-in-world/
//https://www.pcmag.com/picks/the-best-tvs
//https://www.whirlpool.com/blog/washers-and-dryers/he-washing-machine-water-usage.html