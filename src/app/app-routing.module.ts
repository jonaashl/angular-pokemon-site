import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { CataloguePage } from "./pages/catalogue/catalogue.page";
import { LoginPage } from "./pages/login/login.page";
import { TrainerPage } from "./pages/trainer/trainer.page";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: LoginPage
    },
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "catalogue",
        component: CataloguePage
    },
    {
        path: "trainer",
        component: TrainerPage
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}