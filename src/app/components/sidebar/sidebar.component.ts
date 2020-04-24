import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "ni-tv-2 text-primary",
    class: "",
  },
  { path: "/icons", title: "Icons", icon: "ni-planet text-blue", class: "" },
  { path: "/maps", title: "Maps", icon: "ni-pin-3 text-orange", class: "" },
  {
    path: "/user-profile",
    title: "User profile",
    icon: "ni-single-02 text-yellow",
    class: "",
  },
  {
    path: "/tables",
    title: "Tables",
    icon: "ni-bullet-list-67 text-red",
    class: "",
  },
  { path: "/login", title: "Login", icon: "ni-key-25 text-info", class: "" },
  {
    path: "/register",
    title: "Register",
    icon: "ni-circle-08 text-pink",
    class: "",
  },
  {
    path: "/alladherents",
    title: "Liste des Adhérents",
    icon: "ni-circle-08 text-pink",
    class: "",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  listUsersRoute: RouteInfo = {
    path: "/users",
    title: "liste des Utilisateurs",
    icon: "ni-single-02 text-yellow",
    class: "",
  };

  public menuItems: any[];
  public isCollapsed = true;
  isAdmin = localStorage.getItem("role");
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    if (this.isAdmin === "admin") {
      this.menuItems.push(this.listUsersRoute);
    }
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
