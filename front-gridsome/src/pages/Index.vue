<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <h1>Mon premier blog</h1>
      <!-- <div>
     <div>
       <g-image src="~/favicon.png" />
     </div>
     <div>{{ article.node.name }}</div>
     <div>
       <h2>Titre</h2>
       <p>Lieu</p>
       <p>#bbtea</p>
     </div>
    </div> -->
      <div class="grid grid-cols-3 gap-4">
        <div
          class="article flex-post p-3"
          v-for="article in $page.strapiArticle.edges"
          :key="article.id"
        >
          <g-link :to="article.node.slug" class="article__link">
            <div
              class="article__img w-full h-64 bg-center bg-no-repeat bg-cover rounded"
              :style="{
                'background-image': `url(http://localhost:1337${article.node.images[0].url})`,
              }"
            ></div>
            <!-- <g-image :src="`http://localhost:1337/uploads/${image.hash}.jpeg`" width="500" height="500" fit="contain" /> -->
            <div class="article__body pt-1">
              <!-- <g-link :to="article.node.path" class="article__link"></g-link> -->
              <span
                v-for="category in article.node.categories"
                :key="category.id"
                class="uppercase text-xs font-medium tracking-wide text-red-500"
                >{{ category.name }}</span
              >
              <h2 class="article__title text-2xl">
                {{ article.node.name }}
              </h2>
              <p class="article__description text-base pt-1">
                {{ article.node.description }}
              </p>
              <p v-for="place in article.node.places" :key="place.id" class="text-base">
                📍Lieu : {{ place.city }},
                {{ place.country }}
              </p>
            </div>
            <div class="article__tag pt-4">
              <span
                v-for="origin in article.node.origins"
                :key="origin.id"
                class="text-sm rounded-full py-2 px-3 font-medium text-yellow-200 bg-orange-400 bg-opacity-85"
                >#{{ origin.name }}</span
              >
            </div>
          </g-link>
        </div>

        <!-- <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  strapiArticle: allStrapiArticle {
    edges {
      node {
        slug
        path
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
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Blog food - LumyFoody"
  },
  computed: {
    imageUrl() {
      return `${process.env.GRIDSOME_API_URL}${this.image.url}`;
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

/* .article {
  border: 1px solid black;
} */

/* .article__img {
  width: 500px;
  height: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
} */

/* .g-image {
  width: 500px;
  height: 500px;
} */
</style>
