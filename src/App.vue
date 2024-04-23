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

* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
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

.outline-quanta-shop {
  outline-color: #286874;
  outline-width: 1px;
}

.border-quanta-shop {
  border-color: #286874;
}

.border-quanta-shop-secondary {
  border-color: #98c73a;
}
</style>
