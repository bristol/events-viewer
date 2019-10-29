<template>
  <Layout>
    <div>
      <h1 v-html="$page.event.title" />
      <div v-html="$page.event.content" />
      <p v-html="$page.event.description" />
    </div>
  </Layout>
</template>

<page-query>
query Event ($path: String!) {
   event: event (path: $path) {
    title
    description
  }
}
</page-query>