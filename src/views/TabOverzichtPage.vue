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
        <ion-item>
          <ion-item slot="start">€10,00</ion-item>
          <ion-label>Banaan</ion-label>
          <ion-item slot="end">Fruit</ion-item>
        </ion-item>

        <ion-item>
          <ion-item slot="start">€100,00</ion-item>
          <ion-label>Banaanhangwagen</ion-label>
          <ion-item slot="end">Groente</ion-item>
        </ion-item>

      </ion-list>
     
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem } from '@ionic/vue';

</script>
