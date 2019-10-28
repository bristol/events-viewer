<template>
  <Layout>
    <p v-html="$page.allEvent.totalCount"></p>
    <div class="post-list">
      <div v-for="(edge, index) in $page.allEvent.edges" :key="index">
        <h1 class="title" v-html="edge.node.title" />
        <h1 class="title" v-html="edge.node.path" />
        <p>by</p>
        <p v-html="edge.node.org.name" />
        <hr class="line" />
        <p>hi</p>
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
        }
      }
    }
  }
}
</page-query>