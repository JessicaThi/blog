<template>
    <div
      class="article flex-post p-3"
    >
      <g-link :to="article.node.slug" class="article__link">
        <div
          class="article__img w-full h-64 bg-center bg-no-repeat bg-cover rounded"
          :style="{
            'background-image': `url(http://localhost:1337${
              article.node.images[0].url
            })`,
          }"
        ></div>
      </g-link>

      <div class="article__body pt-1">
        <span
          v-for="category in article.node.categories"
          :key="category.id"
          class="uppercase text-xs font-medium tracking-wide text-red-500"
          >{{ category.name }}</span
        >
        <g-link :to="article.node.slug" class="article__link">
          <h2 class="article__title text-2xl">
            {{ article.node.name }}
          </h2>
          <p class="article__description text-base pt-1">
            {{ article.node.description }}
          </p>
          <p
            v-for="place in article.node.places"
            :key="place.id"
            class="text-base"
          >
            Lieu : {{ place.city }},
            {{ place.country }}
          </p>
        </g-link>
      </div>
      <div class="article__tag pt-4">
        <g-link
          v-for="origin in article.node.origins"
          :key="origin.id" :to="`tags/${origin.name}`"
          class="text-sm rounded-full py-2 px-3 font-medium text-yellow-200 bg-orange-400 bg-opacity-85"
          >#{{ origin.name }}</g-link
        >
      </div>
    </div>
</template>

<script>
export default {
  props: ["article"]
};
</script>
