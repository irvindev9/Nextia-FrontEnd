<script setup lang="ts">
import { ref } from "vue";
import { register } from "../../api/auth";

const name = ref("");
const lastname = ref("");
const email = ref("");
const password1 = ref("");
const password2 = ref("");
const house_number = ref();
const error = ref({
  name: false,
  lastname: false,
  email: false,
  password1: false,
  password2: false,
  house_number: false,
});

const loading = ref(false); 

const validate = () => {
  error.value.name = !name.value;
  error.value.lastname = !lastname.value;
  error.value.email = !email.value;
  error.value.password1 = !password1.value || password1.value.length < 8;
  error.value.password2 = !password2.value || password1.value !== password2.value;
  error.value.house_number = !house_number.value || house_number.value < 1;
  console.log(Object.values(error).some((e) => e))
  return !Object.values(error).some((e) => e);
};

const submit = async () => {
  if (validate()) return;
  
  try {
    loading.value = true;
    const response = await register({
      names: name.value,
      lastnames: lastname.value,
      email: email.value,
      password: password1.value,
      house_number: house_number.value,
    });
    console.log({response});
    loading.value = false;
  } catch (error) {
    console.error({error});
    loading.value = false;
  }
};

</script>

<template>
  <div>
    <div class="row">
      <div class="col-12 mt-5 text-center">
        <h1>Registrarse</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <div>
          <div class="mb-3">
            <label for="name" class="form-label">Nombre(s)</label>
            <input type="text" class="form-control" id="name" v-model="name" :class="{error: error.name}">
          </div>
          <div class="mb-3">
            <label for="lastname" class="form-label">Apellido(s)</label>
            <input type="text" class="form-control" id="lastname" v-model="lastname" :class="{error: error.lastname}">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" id="email" v-model="email" :class="{error: error.email}">
          </div>
          <div class="mb-3">
            <label for="password1" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password1" v-model="password1" :class="{error: error.password1}">
          </div>
          <div class="mb-3">
            <label for="password2" class="form-label">Confirmar contraseña</label>
            <input type="password" class="form-control" id="password2" v-model="password2" :class="{error: error.password2}">
          </div>
          <div class="mb-3">
            <label for="house_number" class="form-label">Número de casa</label>
            <input type="number" class="form-control" id="house_number" v-model.number="house_number" :class="{error: error.house_number}">
          </div>
          <button @click="submit" class="btn btn-primary mb-5">Registrarme</button>
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