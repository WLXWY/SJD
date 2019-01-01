<template>
  <div id="app">
   <Icon/>
   <Test/>
   <Button/>
  </div>
</template>

<script>
import Icon from '@/components/Icon';
import Test from '@/components/Test';
import Button from '@/components/Button';
export default {
  name: 'App',
  components: {
    Icon,
    Test,
    Button
  },
  beforeCreate() {
    console.log('组件的生命周期')
  }
}
</script>

<style lang="less">
// @import './assets/style/base.less';
// body{
//   background: @red;
// }
</style>
