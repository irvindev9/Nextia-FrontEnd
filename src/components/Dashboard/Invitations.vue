<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getInvitations } from '../../api/invitations';
import { handleTokenExpired } from '../../api/auth';
import InvitationList from './Invitations/List.vue';

const invitations = ref([]);
const infoInvitations = ref({});
const tabInvitations = ref('list');

onMounted(async () => {
  await fetchInvitations();
});

async function fetchInvitations(){
  try {
    const {data, info} = await getInvitations();
    invitations.value = data;
    infoInvitations.value = info;
  } catch (error) {
    console.error({error});
    if (error.response.status === 403) {
      console.log('Token expired');
      handleTokenExpired();
    }
  }
}

</script>

<template>
  <div>
    <div class="row">
      <div class="col-12 text-center">
        <h3>Invitaciones <button class="btn btn-primary btn-sm" @click="tabInvitations='newInvitation'">Agregar +</button></h3>
      </div>
    </div>
    <InvitationList v-if="tabInvitations === 'list'" :invitations="invitations" @refreshList="fetchInvitations" />
  </div>
</template>