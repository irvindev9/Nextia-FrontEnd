<script setup lang="ts">
import { ref } from "vue";
import { createInvitation } from "../../../api/invitations";
import { handleTokenExpired } from '../../../api/auth';

const emit = defineEmits(['refreshList', 'cancel']);

const name = ref("");
const invitation_date = ref("");
const expiration_date = ref("");
const error = ref({
  name: false,
  invitation_date: false,
  expiration_date: false,
});

const validate = () => {
  error.value.name = !name.value;
  error.value.invitation_date = !invitation_date.value;
  error.value.expiration_date = !expiration_date.value || expiration_date.value < invitation_date.value;
  return Object.values(error.value).some((e) => e);
};

const create = async () => {
  if (validate()) return;
  try {
    await createInvitation({
      name: name.value,
      invitation_date: invitation_date.value,
      expiration_date: expiration_date.value,
    });
    await emit('refreshList');
    await emit('cancel');
  } catch (error) {
    console.error({error});
    handleTokenExpired();
  }
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6 text-start">
      <div class="mb-3">
        <label for="name" class="form-label">Nombre del invitado</label>
        <input type="text" class="form-control" id="name" v-model="name" :class="{error: error.name}">
      </div>
      <div class="mb-3">
        <label for="invitation_date" class="form-label">Fecha de invitación</label>
        <input type="date" class="form-control" id="invitation_date" v-model="invitation_date" :class="{error: error.invitation_date}">
      </div>
      <div class="mb-3">
        <label for="expiration_date" class="form-label">Fecha expiración</label>
        <input type="date" class="form-control" id="expiration_date" v-model="expiration_date" :class="{error: error.expiration_date}">
      </div>
      <button @click="create" class="btn btn-primary mb-5">Crear invitación</button>
    </div>
  </div>
</template>

<style scoped>
.error {
  border-color: red;
}
</style>