<template>
  <Layout>
    <p>{{$page.StrapiRestaurant.name}}</p>
  </Layout>
</template>

<page-query>
query ($path: String!) {
  restaurant: StrapiRestaurant (path: $path) {
    name
    description
  }
}
</page-query>

<script>
export default {
  components: {},
  metaInfo() {
    return {
      title: this.$page.StrapiRestaurant.name
    };
  }
};
</script>