
import { IonContent, IonHeader, IonPage    } from '@ionic/react';
import './Tab1.css';
// import {   flagOutline } from 'ionicons/icons';
import Toolbar from '../components/Toolbar';
import Footer from '../components/Footer';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <Toolbar/>
      </IonHeader>
      <IonContent fullscreen >
      Tab 1
        {/* Footer */}
        <Footer/>
        {/* Footer */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
