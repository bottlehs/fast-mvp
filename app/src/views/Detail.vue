<template>
  <ion-page>
    <ion-content>
      Auth
      <ion-button @click="() => router.push('/detail')">Go to detail</ion-button>
      <ion-button @click="() => router.push('/tabs/tab1')">Go to tabs</ion-button>      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'Auth',
    components: {
      IonButton, 
      IonContent, 
      IonPage
    },
    setup() {
      const router = useRouter();
      return { router };
    }
  })
</script>