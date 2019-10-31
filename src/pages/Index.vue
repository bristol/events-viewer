<template>
  <Layout>
    <p>There's {{ $page.allEvent.totalCount }} events</p>
    <div class="post-list">
      <div v-for="(edge, index) in $page.allEvent.edges" :key="index">
        <h1 class="title" v-html="edge.node.title" />
        <g-link :to="edge.node.path">Read more</g-link>
        <p class="date">{{ edge.node.start_time | moment }}</p>
        <br />
        <g-link :to="edge.node.org.path">{{ edge.node.org.name }}</g-link>
        <hr class="line" />
      </div>
    </div>
  </Layout>
</template>

<script>
import moment from "moment";

export default {
  metaInfo: {
    title: "Upcoming events in bristol"
  },
  filters: {
    moment: function(date) {
      return moment.unix(date).calendar();
    }
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
  allEvent(sortBy: "start_time", order: DESC) {
    totalCount
    edges {
      node {
        id
        path
        title
        start_time
        end_time
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