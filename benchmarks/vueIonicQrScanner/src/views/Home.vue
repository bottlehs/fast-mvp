<template>
  <ion-page>
    <div class="container">
      <div>scanResult: {{ scanResult }}</div>
    </div>
  </ion-page>
</template>

<script>
/* globals QRScanner */
import { IonPage } from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Home",

  components: { IonPage },

  setup() {
    const scanResult = ref("");
    const router = useRouter();

    if (!window.QRScanner) {
      // Avoid error in web
      return;
    }
    QRScanner.scan(displayContents);

    function displayContents(err, result) {
      if (err) {
        console.log(err.message);
      } else {
        scanResult.value = result;
        router.push({ name: "ScanResult", params: { result } });
      }
    }

    QRScanner.show();

    QRScanner.getStatus(function(status) {
      console.log(status);
    });

    return { scanResult };
  },

  methods: {
    ionViewDidEnter() {},

    ionViewWillEnter() {
      document.querySelector("ion-app").classList.add("cameraView");
    },

    ionViewWillLeave() {
      document.querySelector("ion-app").classList.remove("cameraView");
    }
  }
});
</script>

<style scoped>
ion-content {
  --background: transparent;
}
.container {
  background: none transparent;
  min-height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
}
</style>
