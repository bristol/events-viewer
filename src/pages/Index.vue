<template>
  <Layout>
    <p>There's {{ $page.allEvent.totalCount }} upcoming events planned</p>
    <div class="post-list">
      <div v-for="(edge, index) in $page.allEvent.edges" :key="index">
        <h1 class="title" v-html="edge.node.title" />
        <g-link :to="edge.node.path">Read more</g-link>
        <br />
        <g-link :to="edge.node.org.path">{{ edge.node.org.name }}</g-link>
        <hr class="line" />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Upcoming events in bristol"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<page-query>
query {
  allEvent {
    totalCount
    edges {
      node {
        id
        path
        title
        org {
          name
          homepage
          path
        }
      }
    }
  }
}
</page-query>