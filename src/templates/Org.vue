<template>
  <Layout>
    <div>
      <h1 v-html="$page.org.name" />
      <div v-html="$page.org.id" />
    </div>
  </Layout>
</template>

<page-query>
query Org ($path: String!) {
   org: org (path: $path) {
    id
    name
  }
}
</page-query>