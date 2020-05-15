<template>
  <Layout>
    <p>tag</p>
    <PostListItem v-for="article in $page.article.articles" :key="article.id" :article="article"/>
  </Layout>
</template>
<page-query>
query ($id: ID!) {
  article: strapiOrigin(id: $id) {
    name
    articles {
      name
      description
      images { 
        url
      }
      origins
      categories 
      places
      slug
    }
  }
}
</page-query>
<script>
import PostListItem from "~/components/PostListItem.vue";

export default {
  components: {
    PostListItem
  }
};
</script>