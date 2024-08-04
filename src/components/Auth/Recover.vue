<script setup lang="ts">
import { ref } from "vue";
import { recover as recoverRequest } from "../../api/auth";

const email = ref("");
const message = ref("");
const error = ref({
  email: false,
});

const validate = () => {
  error.value.email = !email.value;
  return !Object.values(error).some((e) => e);
};

const recover = async () => {
  if (validate()) return;
  try {
    const response = await recoverRequest({
      email: email.value
    });
    console.log({response});
    message.value = response.message;
  } catch (error) {
    console.error({error});
  }
};
</script>

<template>
  <div>
    <div class="row">
      <div class="col-12 mt-5 text-center">
        <h1>Recuperar cuenta</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" id="email" v-model="email" :class="{error: error.email}">
          </div>
          <button @click="recover" class="btn btn-primary mb-5">Recuperar contraseña</button>
          <br>
          <div v-if="message" class="alert alert-success" role="alert">
            {{ message }}
            <br>
            <Router-link to="/login">Iniciar sesión</Router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error {
  border-color: red;
}
</style>