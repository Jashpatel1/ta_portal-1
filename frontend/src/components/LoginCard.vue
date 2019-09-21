<template lang="pug">
    div
        v-card(max-width="1000" class="mx-auto")
         v-row(justify-md="8")
            v-col
                v-img(src="../assets/iitjlogo.jpg" height="100" aspect-ratio=1 contain=true justify-left)
            v-col
                    v-card-title Sign in to TA Portal
                    v-card-text(pt-4)
                        div
                            v-form(v-model="valid" ref="form")
                                h3 USERNAME
                                    v-text-field(
                                        outlined
                                        v-model="email"
                                        :rules="emailRules"
                                        required
                                    )
                                h3 PASSWORD
                                    v-text-field(
                                        outlined
                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="() => (showPassword = !showPassword)"
                                        :rules="passwordRules"
                                        :type="showPassword ? 'password' : 'text'"
                                        min="8"
                                        required
                                        v-model="password"
                                    )
                                v-layout(justify-center)
                                    v-btn(rounded color="#049999" dark extra large) Log in

                                v-layout(justify-center)
                                    h4 OR

                                v-layout(justify-center)
                                    a
                                        img(
                                            :src="googleSignInBtn"
                                            class="gsign-responsive"
                                            alt="sign in google"
                                        )

</template>

<script>
import googleSignInBtn from "../assets/btn_google_light_normal.svg";
export default {
  name: "LoginCard",
  data() {
    return {
      valid: false,
      showPassword: false,
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      email: "",
      emailRules: [v => !!v || "E-mail is required"],
      googleSignInBtn
    };
  }
};
</script>

<style scoped>
.gsign-responsive {
  width: 100%;
  height: auto;
}
</style>
