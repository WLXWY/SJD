<template>
    <Layout class="container">
      <Content>

      </Content>
      <Sider class="sider" :width="350">
          <!-- <Layout> -->
              <Form class="form">
                  <FormItem>
                      <h2>管理系统登录</h2>
                  </FormItem>
                  <FormItem>
                      <Input prefix="md-person" clearable/>
                  </FormItem>
                   <FormItem>
                      <Input prefix="md-lock" type="password" clearable/>
                  </FormItem>
                   <FormItem  class="captcha">
                      <Input class="captcha_input"  prefix="md-image" clearable/>
                      <img :src="'/proxyapi/captcha.jpg?uuid=' + form.uuid"/>
                  </FormItem>
                   <FormItem>
                      <Button long type="primary">登录</Button>
                  </FormItem>
              </Form>
          <!-- </Layout> -->
      </Sider>
    </Layout>
</template>

<script>
import http from '@/utils/http'
import uuid from 'uuid'
    export default {
        data(){
            return {
                form:{
                username: "",
                password: "",
                captcha: "",
                uuid: uuid()
                }
            }
        }
     
    }
    
</script>

<style scoped>
.container{
    height:100%;
    width:100%;
}
.sider{
   background: #fff;
}
.sider .form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height:100%;
    padding:15px;
}
.captcha{
    border:1px solid red;
    display: flex;
}
.captcha .captcha_input{
    width: 200px;
}
.captcha img{
    height:32px;
}
</style>