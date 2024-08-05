<script setup lang="ts">
import { ref } from "vue";
import { updateInvitation } from "../../../api/invitations";
import { handleTokenExpired } from '../../../api/auth';

const props = defineProps<{
  invitation: {
    id: number;
    name: string;
    invitation_date: string;
    expiration_date: string;
    code: string;
  }
}>();

const emit = defineEmits(['refreshList', 'cancel']);

const error = ref({
  name: false,
  invitation_date: false,
  expiration_date: false,
});

const validate = () => {
  error.value.name = !props.invitation.name;
  error.value.invitation_date = !props.invitation.invitation_date;
  error.value.expiration_date = !props.invitation.expiration_date || props.invitation.expiration_date < props.invitation.invitation_date;
  return Object.values(error.value).some((e) => e);
};

const update = async () => {
  if (validate()) return;
  try {
    await updateInvitation(props.invitation.id,{
      id: props.invitation.id,
      name: props.invitation.name,
      invitation_date: props.invitation.invitation_date,
      expiration_date: props.invitation.expiration_date,
      code: props.invitation.code,
    });
    emit('refreshList');
    emit('cancel');
  } catch (error) {
    console.error({error});
    handleTokenExpired();
  }
}
</script>

<template>
  <div class="row justify-content-center" v-if="invitation">
    <div class="col-12 col-md-8 col-lg-6 text-start">
      <div class="mb-3">
        <label for="name" class="form-label">Nombre del invitado</label>
        <input type="text" class="form-control" id="name" v-model="invitation.name" :class="{error: error.name}">
      </div>
      <div class="mb-3">
        <label for="invitation_date" class="form-label">Fecha de invitación</label>
        <input type="date" class="form-control" id="invitation_date" v-model="invitation.invitation_date" :class="{error: error.invitation_date}">
      </div>
      <div class="mb-3">
        <label for="expiration_date" class="form-label">Fecha expiración</label>
        <input type="date" class="form-control" id="expiration_date" v-model="invitation.expiration_date" :class="{error: error.expiration_date}">
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Codigo de invitación</label>
        <input type="text" class="form-control disabled" id="name" :value="invitation.code" disabled>
      </div>
      <button @click="update" class="btn btn-primary mb-5">Crear invitación</button>
    </div>
  </div>
</template>

<style scoped>
.error {
  border-color: red;
}
</style>