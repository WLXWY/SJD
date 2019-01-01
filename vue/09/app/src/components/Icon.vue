<template>
    <div :class="[prefix + 'icon']" @click="$alert">
 组件名：icon 前缀：{{prefix}}
    </div>
</template>

<script>
import common from '@/mixins/common.js'
    export default {
        mixins:[common]
    }
</script>

<style scoped>

</style>