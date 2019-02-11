import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    @Output() header = new EventEmitter<string>();

    onNavigate(navigation: string){
        this.header.emit(navigation)
    }

}