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

        <ion-item>
          <ion-label>lat : {{ coords.latitude }} | lon :  {{ coords.longitude }}</ion-label>
          <ion-button @click="getLocation">Haal locatie op</ion-button>
        </ion-item>

        
      </ion-list>
      

    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, IonToggle, onIonViewDidEnter, onIonViewDidLeave, onIonViewWillEnter, onIonViewWillLeave, IonButton  } from '@ionic/vue';
import { colorWand } from 'ionicons/icons';
import { Geolocation } from '@capacitor/geolocation';

const coords = ref({latitude:4,longitude:50});

const getLocation = async () => {
  // gaal de locatie op;
  let coordinates = await Geolocation.getCurrentPosition();
  coords.value.latitude = coordinates.coords.latitude;
  coords.value.longitude = coordinates.coords.longitude;
};

const darkmode = ref( false );
const toggleMode = () => {
  // Doe iets met de darkmode true of false
  // Hier loggen we gewoon de huidige (nieuwe) waarde

  // om de waarde uit een ref te halen moet je die met .value ophalen
  console.log(`darkmode : ${darkmode.value}`);
};

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

</script>

<style scoped>
  ion-icon {
    color:darkgoldenrod;
  }
</style>
