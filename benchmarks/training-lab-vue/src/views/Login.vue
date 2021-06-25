<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label position="floating">E-Mail Address</ion-label>
          <ion-input type="email" v-model.trim="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" v-model.trim="password"></ion-input>
        </ion-item>
      </ion-list>

      <div class="ion-text-center">
        <a href="tabs/tab1">Skip Login</a>
      </div>

      <div
        v-if="email && password"
        class="login-control ion-text-center"
        @click="signInClicked"
        data-testid="signin-button"
      >
        <ion-icon :icon="logInOutline"></ion-icon>
        <div>Sign In</div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import { logInOutline } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  components: {
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup() {
    const email = ref('');
    const password = ref('');

    const router = useRouter();

    async function signInClicked() {
      console.log('signin clicked', email.value, password.value);
      router.replace('/');
    }

    return { email, password, logInOutline, signInClicked };
  },
};
</script>

<style scoped>
.login-control {
  margin-top: 3em;
  font-size: xx-large;
}
</style>
