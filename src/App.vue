<template>
  <div id="app">
   <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import navigation from './components/navigation'
export default {
  name: 'App',
  components:{
    navigation
  }
}
</script>

<style>
#app{
  padding:0px;

margin:0px;

position:absolute;

top:0px;

left:0px;

width:100%;

height:100%;

border:hidden;

}
</style>
