<template>
  <div>
    <h1 v-html="$page.event.title" />
    <div v-html="$page.event.content" />
  </div>
</template>

<page-query>
query Event ($path: String!) {
   event: event (path: $path) {
    id
  }
}
</page-query>