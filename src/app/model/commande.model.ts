import { Article } from "./article.model";
import { User } from "./user.model";

export class Commande {
    id: Number;
    articles: Article;
    user: User;

}
