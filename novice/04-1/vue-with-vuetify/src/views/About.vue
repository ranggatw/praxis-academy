<template>
  <div class="about">
    <h1>This is an about page</h1>
     <h4>{{$store.state.count}}</h4>
     <p>{{$store.state.a.address}}</p>
     <p>{{$store.state.user.title}}</p>
  </div>
</template>
