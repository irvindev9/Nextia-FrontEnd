<script setup lang="ts">
import { ref } from 'vue';
import Invitations from './Dashboard/Invitations.vue';
import Reservations from './Dashboard/Reservations.vue';

const tab = ref('invitations');
</script>

<template>
  <div>
    <div class="card text-center my-5">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link" :class="{active: (tab === 'invitations')}" href="#" @click="tab='invitations'">Invitaciones</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{active: (tab === 'reservations')}" href="#" @click="tab='reservations'">Reservas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Anuncios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Tickets</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <Invitations v-if="tab === 'invitations'" />
        <Reservations v-if="tab === 'reservations'" />
      </div>
    </div>
  </div>
</template>