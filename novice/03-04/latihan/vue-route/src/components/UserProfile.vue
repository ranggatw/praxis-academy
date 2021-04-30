<template>
  <div>
    ini halaman user profile {{id}}
    {{$route.params.id}}
  </div>
</template>
<script>
export default {
  props:['id']
}
</script>