<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Producten</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item v-for="{PR_ID, PR_prijs, PR_naam, CT_OM} in producten" :key="PR_ID">
          <ion-item slot="start">€{{PR_prijs}}</ion-item>
          <ion-label>{{PR_naam}}</ion-label>
          <ion-item slot="end">{{CT_OM}}</ion-item>
        </ion-item>

      </ion-list>
     
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, inject } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem, onIonViewWillEnter } from '@ionic/vue';

const producten = ref([]);
const axios = inject('axios') // inject axios

const getProducten = () => {
  axios
    .post('https://stevenop.be/wm/api/PRODUCTSget.php')
    .then(response => {
      // controleer de response
      if(response.status !== 200) {
        // er is iets fout gegaan, doe iets met deze info
        console.log(response.status);
      }
      if(!response.data.data){
        // De data die we verwachten zit niet in response.data :
        // de aangesproken API stopt zijn data in een data object (eigen code).
        // Deze data zit echter ook in het data object in response.
        // Daarom dus response.data.data
        console.log('response.data.data is not ok');
        return;
      }
      console.log(response.date);

      // We gaan eerst de lijst leeg maken, een beetje ruw, maar werkt op dit moment
      producten.value = [];
      for(let i = 0, end = response.data.data.length; i < end; i++){
        // response.data.data is een array, we lopen er door en stoppen de gegevens van iedere record in producten.value (ref!)
        producten.value.push(response.data.data[i]);
      }
    }) ;
}

onIonViewWillEnter(() => {
  // we halen de producten op bij het laden van dit scherm
  // er zijn strategieën mogelijk om dit meer performant te cachen
  getProducten();
});
</script>
