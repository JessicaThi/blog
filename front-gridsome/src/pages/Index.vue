<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <h1>Mes meilleures adresses pour régaler votre jolie petit ventre !</h1>
      <div class="grid grid-cols-3 gap-4">
        <PostListItem v-for="article in $page.strapiArticle.edges"
        :key="article.id" :article="article" :origin="origin"/>
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
          id
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
  strapiOrigin: allStrapiOrigin {
    edges {
      node {
        path
        name
        articles{
          name
        }
        belongsTo {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
}
</page-query>
<script>
import PostListItem from "~/components/PostListItem.vue";

export default {
  metaInfo: {
    title: "Blog food - LumyFoody"
  },
  components: {
    PostListItem
  },
  computed: {
    imageUrl() {
      return `${process.env.GRIDSOME_API_URL}${this.image.url}`;
    }
  }
};
</script>