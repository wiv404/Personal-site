<template>
  <CustomCursor />
  <div class="min-h-screen w-full grid content-center justify-items-center bg-neutral-950">
    <Clock />
    <About :about="'Web Developer'" />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'V i o l e t | W i v v z',
  htmlAttrs: {
    lang: 'ru'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ]
})

useSeoMeta({
  description: 'Web Developer',
  ogTitle: 'Discord: wivvz',
  ogDescription: 'Web Developer',
  ogImage: 'https://media.discordapp.net/attachments/914640467516350475/1078335706616844388/3517019.gif',
  ogUrl: 'https://github.com/wivvz',
})


const title = ref('');
const animSeq = ref(["/", "$", "\\", "|", "$"]);
const animIndex = ref(0);
const titleIndex = ref(0);

const doInverseSpinZeroPitch = () => {
  const loadTitle = title.value.substring(0, titleIndex.value);
  if (titleIndex.value > title.value.length) {
    animIndex.value = 0;
    titleIndex.value = 0;
  }
  if (animIndex.value > 3) {
    titleIndex.value++;
    animIndex.value = 0;
  }
  document.title = loadTitle + animSeq.value[animIndex.value];
  animIndex.value++;
};

onMounted(() => {
  title.value = document.title; // Установка начального значения title после монтирования компонента
  doInverseSpinZeroPitch();
  setInterval(() => { doInverseSpinZeroPitch(); }, 100);

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  }, false);
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && [85, 73, 67, 86, 83, 123].includes(e.keyCode)) {
      e.preventDefault();
    }
  }, false);
});

</script>

<style lang="scss">
body {
  cursor: url('~/assets/images/cursor/pointer.png'), default;
  font-family: 'Roboto', sans-serif;
}
</style>