<template>
  <div class="deal">
    <h2>{{ $props.title.S }}</h2>
    <p class="country"><b>Country</b> {{ $props.country.S }}</p>
    <p>{{ $props.content.S }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "country", "content"],
  data() {
    return {};
  },
};
</script>

<style>
.deal h2 {
  font-family: "ObjectSans-Regular";
  font-size: 2rem;
}

.deal .country p {
  color: orange;
}
</style>
