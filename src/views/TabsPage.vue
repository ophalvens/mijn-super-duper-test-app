<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tabNieuw">
          <ion-icon :icon="addCircle" />
          <ion-label>Nieuw</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tabOverzicht">
          <ion-icon :icon="list" />
          <ion-label>Overzicht</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tabExperiment">
          <ion-icon :icon="construct" />
          <ion-label>Experimento</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { addCircle, construct, list } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      addCircle, 
      construct, 
      list,
    }
  }
});
</script>
