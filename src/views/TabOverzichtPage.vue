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
        <ion-item v-for="product in producten" :key="product.id">
          <ion-item slot="start">€{{product.pr_prijs}}</ion-item>
          <ion-label>{{product.pr_naam}}</ion-label>
          <ion-item slot="end">{{product.ct_naam}}</ion-item>
        </ion-item>

      </ion-list>
     
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem } from '@ionic/vue';

const producten = ref([
  {pr_id:1, pr_naam: "Banaan", pr_prijs: 1.50, ct_naam: "fruit", pr_ct_id: 1},
  {pr_id:2, pr_naam: "Spruitjes", pr_prijs: 3.50, ct_naam: "groente", pr_ct_id: 2},
  {pr_id:3, pr_naam: "Sinaasappel", pr_prijs: 1.00, ct_naam: "fruit", pr_ct_id: 1}
]);

</script>
