<template>
    <Layout class="container">
      <Content>

      </Content>
      <Sider class="sider" :width="350">
              <Form ref="form" class="form" :model="form" :rules="formRule">
                  <FormItem>
                      <h2>管理系统登录</h2>
                  </FormItem>
                  <FormItem prop="username">
                      <Input v-model="form.username" prefix="md-person" clearable/>
                  </FormItem>
                   <FormItem  prop="password">
                      <Input v-model="form.password" prefix="md-lock" type="password" clearable/>
                  </FormItem>
                   <FormItem  prop="captcha">
                       <Layout class="captcha">
                            <Input  v-model="form.captcha" class="captcha_input"  prefix="md-image" clearable/>
                            <Layout class="captcha_box">
                                <img @load="captchaLoading=false" @click="resetuid(),captchaLoading = true" :src="'/proxyapi/captcha.jpg?uuid=' + form.uuid"/>
                                <Col v-if="captchaLoading" class="demo-spin-col">
                                    <Spin class="spin" fix>
                                        <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
                                    </Spin>
                                </Col>
                            </Layout>
                           
                       </Layout>
                  </FormItem>
                   <FormItem>
                      <Button long type="primary" @click="login" :loading="loading"> 登录</Button>
                  </FormItem>
              </Form>
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
                },
                loading:false,
                captchaLoading:false,
                formRule:{
                    username:[
                        {max:10,min:3,message:'用户名长度必须在3-10之间',tigger:'blur'},
                        {required:true,message:'用户名不能为空',tigger:'blur'}
                    ],
                    password:[
                        {max:10,min:5,message:'密码长度必须在5-12之间',tigger:'blur'},
                        {required:true,message:'密码不能为空',tigger:'blur'}
                    ],
                    captcha:[
                        {max:5,min:5,message:'验证码长度必须为5',tigger:'blur'},
                        {required:true,message:'验证码不能为空',tigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            resetuid(){
                this.form.uuid = uuid();
            },
            async login(){
                this.loading = true;
                const valid = await this.$refs['form'].validate();
                if(valid){
                    const result = await http.post('/sys/login',this.form);
                    const { code, msg,token} = result.data;
                    if(code === 500){
                        this.$Notice.error({
                            title:'提示',
                            desc:msg
                        });
                        this.form.uuid = uuid();
                    }else if(code === 0){
                        localStorage.setItem('token',token)
                        this.$router.replace('/admin')
                    }
                 }
                this.loading = false;
            },
            keydown(e){
                if(e.keyCode == 13){
                    if(this.loading) return;
                    this.$router.replace('/admin')
                }
            }
        },
        created(){
            document.addEventListener('keydown',this.keydown)
        },
        destroyed(){
            document.removeEventListener('keydown',this.keydown)
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
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
}
.captcha .captcha_input{
    width: 130px;
}
.captcha_box img{
    height:32px;
    width:130px;
    position:absolute;
    left:50px;
}
.captcha_box{
    position: relative;
    width:100px;
    height:32px;
    background: #fff;
}
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.demo-spin-col{
    height: 32px;
    position: relative;
}
.spin{
    width:130px;
    height:32px;
    top:0px;
    left:50px;
}
</style>