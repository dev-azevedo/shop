<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.bg-quanta-shop {
  background-color: #286874;
}

.bg-quanta-shop-secondary {
  background-color: #98c73a;
}

.text-quanta-shop {
  color: #286874 !important;
}

.text-quanta-shop-secondary {
  color: #98c73a !important;
}
</style>
