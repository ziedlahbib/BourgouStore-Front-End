import { Categorie } from "./categorie";
import { Commande } from "./commande.model";
import { FileDBTrip } from "./file-dbtrip.model";
import { Type } from "./type";

export class Article {
    id: String;
    description: String;
    name:String;
    prix: Number;
    categorie:Categorie;
    type:Type;
    cmd:Commande[];
    files:FileDBTrip;
}
