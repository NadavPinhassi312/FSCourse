import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { enableDebugTools } from "@angular/platform-browser";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { AlertComponent } from "../shared/alert/alert.component";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode: boolean = true;
    isLoading: boolean = false;
    error: string = null;

    constructor(private authService: AuthService, private router: Router, private dataStorageService: DataStorageService, ) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (form.invalid) {
            return;
        }
        const email = form.value.email
        const password = form.value.password

        let authObs: Observable<AuthResponseData>

        this.isLoading = true;
        if (this.isLoginMode) {
            authObs = this.authService.login(email, password)
        }
        else {
            authObs = this.authService.signup(email, password)
        }

        authObs.subscribe(responseData => {
            console.log("Response data from component.ts: ")
            console.log(responseData)
            this.isLoading = false;
            this.router.navigate(['/recipes'])
            this.dataStorageService.fetchRecipes().subscribe();
        }, errorMessage => {
            console.log(errorMessage)
            this.error = errorMessage
            this.showErrorAlert(errorMessage);
            this.isLoading = false;
        }
        )

        form.reset();
    }

    onHandleError() {
        this.error=null;
    }

    private showErrorAlert(message: string) {
        const alrtCmp = new AlertComponent
    }
}