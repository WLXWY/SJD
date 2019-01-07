<template>
    <div class="admin">
       
       <div class="sider">
           <div>
                <router-link to="/admin/user/zhangsan">张三</router-link>
           </div>
          <div>
              <router-link to="/admin/user/lisi">李四</router-link>
          </div>
           
         <button @click="click">跳转到menu页面</button>
         <button @click="rep">替换路由</button>
       </div>
       <div class="content">
           <header> admin</header>
           <main>
               <router-view></router-view>
           </main>
       </div>
    </div>
</template>

<script>
    export default {
        methods:{
            click(){
                // console.log(this.$router)
                // this.$router.push('/admin/User/zhangsan')
                this.$router.push({
                    // path:'/admin/User/zhangsan',
                    //query:{name:'path}
                    name:'UserDetail',
                    params:{name:'lisi'},
                    query:{
                        name:'wangwu'
                    }
                })
            },
            rep(){
                this.$router.replace('/Login')
            }

        }
    }
</script>

<style scoped>
.admin{
    display: flex;
    height: 100%;
    width:100%;;
}
.admin .sider{
    width:200px;
    background: red;
    height:inherit;
}
.admin .content{
    /* width:100%; */
    flex: 1;
    height:64px;
}
.admin .content header{
    height:100%;
    border-bottom: 1px solid #ddd;

}
</style>