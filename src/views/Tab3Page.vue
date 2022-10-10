<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Experimento Patronum! <ion-icon :icon="colorWand"></ion-icon></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      
        <ion-list>
        
        <ion-item>
          <ion-label slot="start">Expecto experimento</ion-label>
          <ion-icon :icon="colorWand" size="large" slot="end"></ion-icon>
        </ion-item>
        <ion-item>
          <ion-label>Darkmode</ion-label>
          <ion-toggle slot="end" v-model="darkmode" @ionChange="toggleMode();"></ion-toggle>

        </ion-item>

        
      </ion-list>
      

    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, IonToggle, onIonViewDidEnter, onIonViewDidLeave, onIonViewWillEnter, onIonViewWillLeave  } from '@ionic/vue';
import { colorWand } from 'ionicons/icons';

export default defineComponent({
  name: 'Tab3Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonItem, IonLabel, IonIcon, IonToggle },
  data() {
    // voor de 2-way binding, hier fixed geïnitialiseerd
    return {
      darkmode: false,
    }
    
  },
  methods: {
    // functies (of methods) beschikbaar binnen deze vue component
    toggleMode() {
      // Doe iets met de darkmode true of false
      // Hier loggen we gewoon de huidige (nieuwe) waarde
      console.log(`darkmode : ${this.darkmode}`);
    }
  },

  setup() {
    // demo van een aantal event-hooks in Ionic 
    onIonViewDidEnter(() => {
      console.log('Home page did enter');
    });

    onIonViewDidLeave(() => {
      console.log('Home page did leave');
    });

    onIonViewWillEnter(() => {
      console.log('Home page will enter');
    });

    onIonViewWillLeave(() => {
      console.log('Home page will leave');
    });
    return{
      colorWand
    }
    
  }
});
</script>

<style scoped>
  ion-icon {
    color:darkgoldenrod;
  }
</style>
