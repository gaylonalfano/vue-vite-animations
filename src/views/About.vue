<template>
  <div class="about">
    <transition
      appear
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <h1 v-if="showTitle">About</h1>
    </transition>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    const showTitle = ref<boolean>(true);

    // Enter hooks
    function beforeEnter(el: HTMLTitleElement) {
      console.log("beforeEnter", el);
    }
    function enter(el: HTMLTitleElement) {
      console.log("enter", el);
    }
    function afterEnter(el: HTMLTitleElement) {
      console.log("afterEnter", el);
      el.style.color = "green";

      setTimeout(() => (showTitle.value = false), 2000);

      // ERROR Don't put console.log() inside setTimeout! Breaks!
      // setTimeout(() => {
      //   console.log("afterEnter: waiting for 2 seconds...");
      //   (showTitle.value = false), 2000;
      // });
    }

    // Leave hooks
    function beforeLeave(el: HTMLTitleElement) {
      console.log("beforeLeave", el);
      el.style.color = "pink";
    }
    function leave(el: HTMLTitleElement) {
      console.log("leave", el);
    }
    function afterLeave(el: HTMLTitleElement) {
      console.log("afterLeave", el);
    }

    return {
      showTitle,
      beforeEnter,
      enter,
      afterEnter,
      beforeLeave,
      leave,
      afterLeave,
    };
  },
});
</script>

<style>
.about {
  max-width: 600px;
  margin: 20px auto;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s ease;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 3s ease;
}
</style>
