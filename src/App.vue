<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/other/contact">Contact</router-link>
  </div>
  <!-- Add Route transitions between Routes and Components -->
  <!-- <router-view v-slot="{ Component }"> -->
  <!--   <transition name="route" mode="out-in"> -->
  <!--     <component :is="Component"></component> -->
  <!--   </transition> -->
  <!-- </router-view> -->

  <!-- Per-Route Transitions -->
  <!-- <router-view v-slot="{ Component, route }"> -->
  <!--   <transition :name="route.meta.transition"> -->
  <!--     <component :is="Component" /> -->
  <!--   </transition> -->
  <!-- </router-view> -->

  <!-- Route-Based Dynamic Transition using router.afterEach() -->
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background: #f2f2f2;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

/* slide-left */
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.slide-left-enter-active {
  transition: all 0.3s ease-out;
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.slide-left-enter-active {
  transition: all 0.3s ease-in;
}

/* slide-right */
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.slide-right-enter-active {
  transition: all 0.3s ease-in;
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.slide-right-enter-active {
  transition: all 0.3s ease-out;
}
</style>
