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
          <ion-title size="large">Voeg een product toe</ion-title>
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
                v-model="productNaam"
                required="true"
                @ion-blur="logProduct()"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Prijs :</ion-label>
              <ion-input 
                placeholder="10.00" 
                v-model="productPrijs"
                type="number"
                required="true"
                @ion-blur="logProduct()"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Categorie :</ion-label>
              <ion-select interface="popover" 
                  placeholder="Selecteer categorie"
                  v-model="productCategorie"
                  @ion-change="logProduct()">
                <ion-select-option value="0" disabled="true">Welk type product?</ion-select-option>
                <ion-select-option value="1">Fruit</ion-select-option>
                <ion-select-option value="2">Groente</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button expand="block" @click="verzendProduct()">Bevestig</ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-label>Product: {{productNaam}}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Prijs: {{productPrijs}}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Categorienummer: {{productCategorie}}</ion-label>
            </ion-item>
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
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton  },
  data() {
    return {
      productNaam: '',
      productPrijs: '',
      productCategorie : '0',
    }
  },
  methods: {
    verzendProduct() {
      // TODO: input controle indien nodig
      
      // TODO: verstuur naar de backend (API)

      // log de waarden
      this.logProduct();
    },
    logProduct(){
      console.log(`naam: ${this.productNaam}, prijs: ${this.productPrijs}, categorie: ${this.productCategorie}`);
    }

  }
  
});
</script>


