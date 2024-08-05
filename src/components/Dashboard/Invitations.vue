<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getInvitations } from '../../api/invitations';
import { handleTokenExpired } from '../../api/auth';
import InvitationList from './Invitations/List.vue';
import InvitationAdd from './Invitations/Add.vue';
import InvitationEdit from './Invitations/Edit.vue';

const invitations = ref([]);
const infoInvitations = ref({});
const tabInvitations = ref('list');
const invitationSelected = ref({
  id: 0,
  name: '',
  invitation_date: '',
  expiration_date: '',
  code: '',
});

onMounted(async () => {
  await fetchInvitations();
});

async function fetchInvitations(page:number = 1){
  try {
    const {data, info} = await getInvitations(page);
    console.log({data, info});
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

const selectInvitation = (invitation: any) => {
  invitationSelected.value = invitation;
  tabInvitations.value = 'editInvitation';
}

</script>

<template>
  <div>
    <div class="row">
      <div class="col-12 text-center">
        <h3>Invitaciones <button v-if="tabInvitations==='list'" class="btn btn-primary btn-sm" @click="tabInvitations='newInvitation'">Agregar +</button><button v-if="tabInvitations==='newInvitation' || tabInvitations==='editInvitation'" class="btn btn-primary btn-sm" @click="tabInvitations='list'">Cancelar</button></h3>
      </div>
    </div>
    <InvitationList v-if="tabInvitations === 'list'" :invitations="invitations" @refreshList="fetchInvitations" :infoInvitations="infoInvitations"  @edit="selectInvitation"/>
    <InvitationAdd v-else-if="tabInvitations === 'newInvitation'" @cancel="tabInvitations='list'" @refreshList="fetchInvitations"/>
    <InvitationEdit v-else-if="tabInvitations === 'editInvitation'" @cancel="tabInvitations='list'" @refreshList="fetchInvitations" :invitation="invitationSelected" />
    
  </div>
</template>