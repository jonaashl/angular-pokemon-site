import { Component } from "@angular/core";
import { User } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";
import { StorageUtil } from "src/app/utils/storage.util";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
    get user(): User | undefined {
        return this.userService.user;
    }

    constructor(private readonly userService: UserService) {}

    onLogoutClick(): void {
        this.userService.logOut();
    }
}
