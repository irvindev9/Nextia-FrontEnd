<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login as loginRequest } from "../../api/auth";

const email = ref("");
const password1 = ref("");
const error = ref({
  email: false,
  password1: false,
});

const $router = useRouter();

const validate = () => {
  error.value.email = !email.value;
  error.value.password1 = !password1.value || password1.value.length < 8;
  return !Object.values(error).some((e) => e);
};

const login = async () => {
  if (validate()) return;
  try {
    const response = await loginRequest({
      email: email.value,
      password: password1.value,
    });
    console.log({response});
    $router.push("/dashboard");
  } catch (error) {
    console.error({error});
  }
};
</script>

<template>
  <div>
    <div class="row">
      <div class="col-12 mt-5 text-center">
        <h1>Iniciar sesión</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" id="email" v-model="email" :class="{error: error.email}">
          </div>
          <div class="mb-3">
            <label for="password1" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password1" v-model="password1" :class="{error: error.password1}">
          </div>
          <div class="mb-3">
            <RouterLink to="/recuperar">¿Olvidaste tu contraseña?</RouterLink>
          </div>
          <button @click="login" class="btn btn-primary mb-5">Ingresar</button>
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