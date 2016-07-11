import { Component }                                        from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { PageinfoService }                                  from './pageinfo.service';

import { ServicesComponent }                                from './services.component';
import { ReferencesComponent }                              from './references.component';
import { CompanyComponent }                                 from './company.component';
import { BlogComponent }                                    from './blog.component';
import { ContactComponent }                                 from './contact.component';


@Component({
    selector: 'my-app',
    templateUrl: 'html/app.component.html',
    styleUrls: ['css/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS, 
        PageinfoService
    ]
})

@RouteConfig([
    {
        path: '/services',
        name: 'Services',
        component: ServicesComponent,
        useAsDefault: true
    },
    {
        path: '/references',
        name: 'References',
        component: ReferencesComponent
    },
    {
        path: '/company',
        name: 'Company',
        component: CompanyComponent
    },
    {
        path: '/blog',
        name: 'Blog',
        component: BlogComponent
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactComponent
    }
])

export class AppComponent {
    title: string = "Company";
    showMenuScreen = false;

    constructor(private pageinfoService: PageinfoService) {
    }

    // SetTitle() {
    //     this.title = this.pageinfoService.getTitle();
    // }

    MenuToggle() {
        this.showMenuScreen = !this.showMenuScreen;
        console.log("showMenuScreen: " + this.showMenuScreen);
    }

    MenuOff() {
        this.showMenuScreen = false;
    }
}