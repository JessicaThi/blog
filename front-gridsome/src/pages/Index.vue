<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

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

    <div class="article"
        v-for="restaurant in $page.StrapiRestaurant.edges"
        :key="restaurant.id"
    >
      <div v-for="image in restaurant.node.images" :key="image.id">
        <div class="article__img" :style="{ 'background-image': `url(http://localhost:1337/uploads/${image.hash}.jpeg)` }"></div>
       <!-- <g-image :src="`http://localhost:1337/uploads/${image.hash}.jpeg`" width="500" height="500" fit="contain" /> -->
     </div>
      <div class="article__body">
        <!-- <g-link :to="article.node.path" class="article__link"></g-link> -->
        <h2 class="article__title">{{ restaurant.node.name }}</h2>
        <p class="article__description">{{ restaurant.node.description }}</p>
      </div>
    </div>

    <!-- <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->

  </Layout>
</template>
<page-query>
query {
  StrapiRestaurant: allStrapiRestaurant {
    edges {
      node {
        name
        description
        images { 
          hash
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
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.article {
  border: 1px solid black;
}

.article__img {
  width: 500px;
  height: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.g-image {
  width: 500px;
  height: 500px;
}
</style>
