<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { deleteInvitation } from '../../../api/invitations';

defineProps<{
  invitations: any[];
}>();

const emit = defineEmits(['refreshList']);

const deleteInvitationHandler = async (id: number) => {
  try {
    await deleteInvitation(id);
    await emit('refreshList');
  } catch (error) {
    console.error({error});
  }
}

</script>

<template>
  <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-6">
        <div class="list-group">
          <button v-for="invitation in invitations" :key="invitation.id" type="button" class="list-group-item list-group-item-action">
            <div class="grid">
              <div class="col">
                <b>Nombre del invitado:</b> {{ invitation.name }}
              <br>
              <small><b>Fecha de invitación:</b> {{ invitation.invitation_date.split('T')[0].replaceAll('-','/') }}</small>
              <br>
              <small><b>Fecha de expiración:</b> {{ invitation.expiration_date.split('T')[0].replaceAll('-','/') }}</small>  
              </div>
              <div class="col">
                <button class="btn btn-primary btn-sm">Ver</button>
                <button class="btn btn-secondary btn-sm">Editar</button>
                <button class="btn btn-danger btn-sm mt-1" @click="deleteInvitationHandler(invitation.id)">Eliminar</button>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
}

.col {
  padding: 0.5rem;
}

.col .btn {
  display: block;
  margin: 0 auto;
}
</style>