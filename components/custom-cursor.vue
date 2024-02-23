<template>
  <div class="cursor">
    <div class="ring-cursor">
      <div></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
onMounted(() => {
  const ringCursor = document.querySelector(".ring-cursor") as HTMLElement;

  document.addEventListener("mousemove", (e) => {
    ringCursor.style.transform = `translate(calc(${e.clientX}px - 1rem), calc(${e.clientY}px - 1rem))`
  })

  document.addEventListener("mouseout", () => {
    ringCursor.classList.add("hidden")
  })

  document.addEventListener("mouseover", () => {
    ringCursor.classList.remove("hidden")
  })

  document.querySelectorAll(".hovered").forEach((el) => {
    console.log(el)
    el.addEventListener('mouseover', () => {
      ringCursor.classList.add("hover")
    });

    el.addEventListener('mouseout', () => {
      ringCursor.classList.remove("hover")
    });
  })
})
</script>

<style lang="scss" scoped>
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 2rem;
  height: 2rem;
  z-index: 2;
  pointer-events: none;

  .ring-cursor {
    position: absolute;
    display: grid;
    place-items: center;

    div {
      border: 1px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 50px 5px #ffffff6e;
    }
  }

  div {
    width: 100%;
    height: 100%;
  }

  div {
    transition: transform 0.2s ease-out;
  }
}

.hover {
  div {
    transform: scale(1.5);
  }
}
</style>