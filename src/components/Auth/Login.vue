<script setup lang="ts">
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
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" id="email">
          </div>
          <div class="mb-3">
            <label for="password1" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password1">
          </div>
          <button type="submit" class="btn btn-primary mb-5">Ingresar</button>
        </form>
      </div>
    </div>
  </div>
</template>