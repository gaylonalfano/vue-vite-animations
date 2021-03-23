<template>
  <div class="contact">
    <h1>Contact</h1>
    <transition-group
      appear
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <li v-for="(icon, index) in icons" :key="icon.name" :data-index="index">
        <span class="material-icons">{{ icon.name }}</span>
        <div>{{ icon.text }}</div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import gsap from "gsap";

interface Icon {
  name: string;
  text: string;
}

export default defineComponent({
  setup() {
    const icons = ref<Icon[]>([
      { name: "alternate_email", text: "by email" },
      { name: "local_phone", text: "by phone" },
      { name: "local_post_office", text: "by post" },
      { name: "local_fire_department", text: "by smoke signal" },
    ]);

    function beforeEnter(el: HTMLLIElement) {
      console.log("beforeEnter - set initial state/style of element", el);
      // Set initial styles to be down below the screen
      el.style.opacity = "0";
      el.style.transform = "translateY(100px)";
    }

    function enter(el: HTMLLIElement, done: () => void) {
      console.log("enter - starting to enter, make transition", el);
      // Using v-for index + :data-index + delay
      gsap.to(el, {
        duration: 0.8,
        y: 0,
        opacity: 1,
        onComplete: done,
        delay: el.dataset.index * 0.2,
      });

      // Using GSAP stagger - BROKEN
      // gsap.to(el, {
      //   duration: 2,
      //   y: 0,
      //   opacity: 1,
      //   onComplete: done,
      //   //delay: el.dataset.index * 0.2,
      //   stagger: {
      //     each: 0.4,
      //     yoyo: true,
      //   },
      // });
    }

    return { icons, beforeEnter, enter };
  },
});
</script>

<style>
.contact ul {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  max-width: 400px;
  margin: 60px auto;
}
.contact li {
  list-style-type: none;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  line-height: 1.5em;
}
</style>
