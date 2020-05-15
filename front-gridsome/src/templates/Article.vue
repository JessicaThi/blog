<template>
  <Layout>
    <div class="container sm:pxi-0 py-4 mx-auto min-h-screen bg-white">
      <div class="mx-auto max-w-screen-md">
        <span
          v-for="category in $page.article.categories"
          :key="category.id"
          class="uppercase text-sm font-normal tracking-tight text-red-500"
          >{{ category.name }}</span
        >
        <h1 class="text-4xl leading-tight pb-2 border-b">
          {{ $page.article.name }}
        </h1>
        <p
          v-for="place in $page.article.places"
          :key="place.id"
          class="text-base text-gray-600 pt-4 pb-2"
        >
          {{ place.city }}, {{ place.country }}
          <span class="text-sm"> ・ {{ $page.article.createdAt }}</span>
        </p>
      </div>
      <g-image :src="imageUrl" class="mx-auto max-w-screen-lg p-4"></g-image>
      <div class="mx-auto max-w-screen-md">
        <p class="text-base">{{ $page.article.description }}</p>
        <!-- <g-image :src="`http://localhost:1337${image.url}`"></g-image> -->
        <div
          v-for="image in $page.article.images"
          :key="image.url"
          class="h-64 "
          :style="{
            'background-image': `url(http://localhost:1337${image.url})`,
          }"
        ></div>
        <p>c'est bizarre</p>
        <slick ref="slick" :options="slickOptions">
          <div
            v-for="image in $page.article.images"
            :key="image.url"
            class="h-64 "
            :style="{
              'background-image': `url(http://localhost:1337${image.url})`,
            }"
          ></div>
        </slick>
        <div class="article__tag pt-4">
          <span
            v-for="origin in $page.article.origins"
            :key="origin.id"
            class="text-sm rounded-full py-2 px-3 font-medium text-yellow-200 bg-orange-400 bg-opacity-85"
            >#{{ origin.name }}</span
          >
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  article: strapiArticle(id: $id) {
    name
    description
    images {
      url
    }
    origins {
      name
    }
    categories {
      name
    }
    places {
      city
      country
    }
    createdAt(format: "DD/MM/YYYY")
  }
}
</page-query>
<script>
import Slick from "vue-slick";

export default {
  components: { Slick },
  computed: {
    imageUrl() {
      return `${process.env.GRIDSOME_API_URL}${this.$page.article.images[0].url}`;
    }
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 3
        // Any other options that can be got from plugin documentation
      }
    };
  }
};
</script>

<style>
.slide {
  overflow: hidden;
}
</style>
