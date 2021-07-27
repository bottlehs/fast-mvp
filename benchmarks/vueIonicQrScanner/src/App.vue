<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
import { QRScanner } from "@ionic-native/qr-scanner";

export default defineComponent({
  name: "App",

  components: {
    IonApp,
    IonRouterOutlet
  },

  setup() {
    function onDone(err, status) {
      if (err) {
        // here we can handle errors and clean up any loose ends.
        console.error(err);
      }
      if (status.authorized) {
        // W00t, you have camera access and the scanner is initialized.
        // QRscanner.show() should feel very fast.
        console.log("AUTHORIZED");
      } else if (status.denied) {
        // The video preview will remain black, and scanning is disabled. We can
        // try to ask the user to change their mind, but we'll have to send them
        // to their device settings with `QRScanner.openSettings()`.
        console.log("DENIED");
      } else {
        // we didn't get permission, but we didn't get permanently denied. (On
        // Android, a denial isn't permanent unless the user checks the "Don't
        // ask again" box.) We can ask again at the next relevant opportunity.
        console.log("DENIED");
      }
    }

    console.log(onDone);

    alert('s')
    let status = {};
    try {
      status = QRScanner.prepare();
    }catch(e) {
      console.log(e)
    }

    console.log(status);
  }
});
</script>
