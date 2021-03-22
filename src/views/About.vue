<template>
  <div class="about">
    <!-- NOTE If using JS-only then pass :css="false" for performance -->
    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      :css="false"
    >
      <h1>About</h1>
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
import { defineComponent } from "vue";
import gsap from "gsap";

export default defineComponent({
  name: "About",
  setup() {
    function beforeEnter(el: HTMLTitleElement) {
      console.log("beforeEnter - set initial state/styles of the element", el);
      // Set initial state/styles of element
      el.style.transform = "translateY(-60px)";
      el.style.opacity = "0";
    }

    // Use done function arg to tell Vue the transition is complete
    function enter(el: HTMLTitleElement, done: () => void) {
      console.log("enter - starting to enter, make transition", el);
      // This is where we can use gsap built-in animations
      gsap.to(el, {
        duration: 2,
        // transform: translateY(0)
        y: 0,
        opacity: 1,
        ease: "bounce.out",
        // Call done on the onComplete property to tell Vue
        onComplete: done,
      });
    }

    function afterEnter(el: HTMLTitleElement) {
      console.log("afterEnter");
    }

    return {
      beforeEnter,
      enter,
      afterEnter,
    };
  },
});
</script>

<style>
.about {
  max-width: 600px;
  margin: 20px auto;
}
</style>
