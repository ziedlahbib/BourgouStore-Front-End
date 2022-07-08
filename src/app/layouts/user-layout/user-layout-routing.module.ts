import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficharticlebycategorieUniversInformatiqueComponent } from 'app/pages/afficharticlebycategorie-univers-informatique/afficharticlebycategorie-univers-informatique.component';
import { ComposantetmaintComponent } from 'app/pages/afficharticlebycategorie-univers-informatique/composantetmaint/composantetmaint.component';
import { PcPortableComponent } from 'app/pages/afficharticlebycategorie-univers-informatique/pc-portable/pc-portable.component';
import { PcbureauComponent } from 'app/pages/afficharticlebycategorie-univers-informatique/pcbureau/pcbureau.component';
import { PrefaccessstockComponent } from 'app/pages/afficharticlebycategorie-univers-informatique/prefaccessstock/prefaccessstock.component';
import { TabletteComponent } from 'app/pages/afficharticlebycategorie-univers-informatique/tablette/tablette.component';
import { AccestelComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/accestel/accestel.component';
import { AfficharticlebycategorieUniversTelephonieComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/afficharticlebycategorie-univers-telephonie.component';
import { AppleComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/apple/apple.component';
import { GsmComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/gsm/gsm.component';
import { SmartphoneComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/smartphone/smartphone.component';
import { SmartwatchComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/smartwatch/smartwatch.component';
import { TelephonefixeComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/telephonefixe/telephonefixe.component';
import { AfficharticlebycategorieComponent } from 'app/pages/afficharticlebycategorie/afficharticlebycategorie.component';
import { ComposantpcgamingComponent } from 'app/pages/afficharticlebycategorie/composantpcgaming/composantpcgaming.component';
import { ConsoledujeuxComponent } from 'app/pages/afficharticlebycategorie/consoledujeux/consoledujeux.component';
import { PcportableComponent } from 'app/pages/afficharticlebycategorie/pcportable/pcportable.component';
import { PerepheriquepcgamingComponent } from 'app/pages/afficharticlebycategorie/perepheriquepcgaming/perepheriquepcgaming.component';
import { UnitegamingComponent } from 'app/pages/afficharticlebycategorie/unitegaming/unitegaming.component';
import { PanierComponent } from 'app/pages/panier/panier.component';

const routes: Routes = [
    { path: 'AfficharticlebycategorieComponent',        component: AfficharticlebycategorieComponent },
    { path: 'AfficharticlebycategorieUniversInformatiqueComponent',        component: AfficharticlebycategorieUniversInformatiqueComponent },
    { path: 'AfficharticlebycategorieUniversTelephonieComponent',        component: AfficharticlebycategorieUniversTelephonieComponent },
    { path: 'panier',        component: PanierComponent },
    { path: 'ConsoledujeuxComponent',        component: ConsoledujeuxComponent },
    { path: 'PcportableComponent',        component: PcportableComponent },
    { path: 'UnitegamingComponent',        component: UnitegamingComponent },
    { path: 'PerepheriquepcgamingComponent',        component: PerepheriquepcgamingComponent },
    { path: 'ComposantpcgamingComponent',        component: ComposantpcgamingComponent },
    { path: 'TabletteComponent',        component: TabletteComponent },
    { path: 'PcPortableComponent',        component: PcPortableComponent },
    { path: 'PcbureauComponent',        component: PcbureauComponent },
    { path: 'PrefaccessstockComponent',        component: PrefaccessstockComponent },
    { path: 'ComposantetmaintComponent',        component: ComposantetmaintComponent },
    { path: 'SmartphoneComponent',        component: SmartphoneComponent },
    { path: 'AppleComponent',        component: AppleComponent },
    { path: 'GsmComponent',        component: GsmComponent },
    { path: 'TelephonefixeComponent',        component: TelephonefixeComponent },
    { path: 'AccestelComponent',        component: AccestelComponent },
    { path: 'SmartwatchComponent',        component: SmartwatchComponent },
    
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
