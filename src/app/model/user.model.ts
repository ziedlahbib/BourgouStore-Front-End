import { RowOutlet } from "@angular/cdk/table";
import { Commande } from "./commande.model";

export class User {
    id: Number;
    userName: String;
    email: String;
    password: String;
    name: String;
    lastName: String;
    address: String;
    active: Boolean;
    roles:RowOutlet;
    cmd:Commande;
 
}
