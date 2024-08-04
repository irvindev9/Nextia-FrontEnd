<script setup lang="ts">
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
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Nombre(s)</label>
            <input type="text" class="form-control" id="name">
          </div>
          <div class="mb-3">
            <label for="lastname" class="form-label">Apellido(s)</label>
            <input type="text" class="form-control" id="lastname">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" id="email">
          </div>
          <div class="mb-3">
            <label for="password1" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password1">
          </div>
          <div class="mb-3">
            <label for="password2" class="form-label">Confirmar contraseña</label>
            <input type="password" class="form-control" id="password2">
          </div>
          <div class="mb-3">
            <label for="house_number" class="form-label">Número de casa</label>
            <input type="number" class="form-control" id="house_number">
          </div>
          <button type="submit" class="btn btn-primary mb-5">Registrarme</button>
        </form>
      </div>
    </div>
  </div>
</template>