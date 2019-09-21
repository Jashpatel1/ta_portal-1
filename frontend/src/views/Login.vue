<template lang="pug">
    span(class="bg")
        v-img(src="../assets/Background_Image.jpg")
            v-container(fluid fill-height)
                v-layout(flex align-center offset-md1 fill-height justify-center)
                    v-flex( xs10 sm6 lg7 )
                        LoginCard
</template>

<script>
import LoginCard from "../components/LoginCard.vue";
export default {
  name: "Login",
  components: {
    LoginCard
  }
};
</script>

<style></style>
