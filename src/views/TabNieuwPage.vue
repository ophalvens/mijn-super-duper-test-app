<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Voeg een product toe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content 
      :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ion-grid>
        <ion-row>
          <ion-col class="ion-text-center"><h1 >Nieuw product</h1></ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-text-center">Welk product wil je toevoegen?</ion-col> 
        </ion-row>

        <ion-row>
          <ion-col >
            <ion-item>
              <ion-label position="floating">Product :</ion-label>
              <ion-input 
                placeholder="Naam product" 
                id="productNaam"
                name="productNaam"
                required="true"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Prijs :</ion-label>
              <ion-input 
                placeholder="10" 
                id="productPrijs"
                name="productPrijs"
                type="number"
                required="true"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Categorie :</ion-label>
              <ion-select interface="popover" placeholder="Selecteer categorie">
                <ion-select-option value="1">Fruit</ion-select-option>
                <ion-select-option value="2">Groente</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button expand="block">Bevestig</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      
        
     
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton } from '@ionic/vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton  }
});
</script>


