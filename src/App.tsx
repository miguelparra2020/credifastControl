import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cash,  home,  newspaper,  thumbsUp,  } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import AppDown from './pages/AppDown';
import Terminos from './pages/Terminos';
import SoloOpciones from './pages/solicitud/soloOpciones';
import Cd1 from './pages/solicitud/cd1';
import Cd2 from './pages/solicitud/cd2';
import Cd3 from './pages/solicitud/cd3';
import Cd1Mes from './pages/solicitud/cd1mes';
import Cd2Mes from './pages/solicitud/cd2mes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/tab4">
            <Tab4 />
          </Route>
          <Route path="/AppDown">
            <AppDown />
          </Route>
          <Route path="/Terminos">
            <Terminos />
          </Route>
          <Route path="/solicitud/soloOpciones">
            <SoloOpciones />
          </Route>
          <Route path="/solicitud/cd1">
            <Cd1 />
          </Route>
          <Route path="/solicitud/cd1mes">
            <Cd1Mes />
          </Route>
          <Route path="/solicitud/cd2">
            <Cd2 />
          </Route>
          <Route path="/solicitud/cd2mes">
            <Cd2Mes />
          </Route>
          <Route path="/solicitud/cd3">
            <Cd3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={home} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={cash} />
            <IonLabel>Solicitar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={thumbsUp} />
            <IonLabel>Pagar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={newspaper} />
            <IonLabel>Información</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
