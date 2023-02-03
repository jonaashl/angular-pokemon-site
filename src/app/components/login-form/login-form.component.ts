import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, NgForm, Validators, FormsModule, FormGroup } from "@angular/forms";
import { User } from "src/app/models/user.model";
import { LoginService } from "src/app/services/login.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-login-form",
    templateUrl: "./login-form.component.html",
    styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent {
    
    @Output() login: EventEmitter<void> = new EventEmitter();
    
    usernameControl = new FormControl("", [Validators.required]);

    constructor(
        private readonly loginService: LoginService,
        private readonly userService: UserService,
        ) {}

        public loginSubmit(loginForm: NgForm): void {
            if(loginForm.invalid) {
                this.usernameControl.get("username");
                return;
            }
            const { username } = loginForm.value;
        
            this.loginService.login(username).subscribe({
                next: (user: User) => {
                    this.userService.user = user;
                    this.login.emit();
            },
            error: () => {},
        });
    }
}
