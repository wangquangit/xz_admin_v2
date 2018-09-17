<template>
    <div>
        <div class="login_wrapper">
            <div class="animate form login_form">
                <section class="login_content">
                    <form>
                        <h1>管理员登录</h1>
                        <div>
                            <input v-model="adminName" type="text" class="form-control" placeholder="管理员登录名" required/>
                        </div>
                        <div>
                            <input v-model="adminPwd" type="password" class="form-control" placeholder="管理员登录密码" required/>
                        </div>
                        <div>
                            <a @click.prevent="doLogin" class="btn btn-default submit" href="index.html">&nbsp;登&nbsp;录&nbsp;</a>
                        </div>

                        <div class="clearfix"></div>

                        <div class="separator">
                            <div class="clearfix"></div>
                            <br/>
                            <div>
                                <h1><img src="../assets/img/favicon.ico">学子商城后台管理系统</h1>
                                <p>©2017 版权所有，CODEBOY.COM</p>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    //引入&打包全局静态资源文件 --ES6导入语法
    import '../assets/css/bootstrap.css'
    import '../assets/css/font-awesome.css'
    import '../assets/css/animate.css'
    import '../assets/css/app.css'
    import axios from 'axios' //引入node_modules下的axsios模块

    export default {
        name: "login",
        data() {
            return {
                adminName:'admin',
                adminPwd:'123456',
            }
        },
        components: {},
        methods: {
            doLogin(){
                //处理登陆
                var url = `http://127.0.0.1:8080/vue/project/data/admin_login.php?aname=${this.adminName}&apwd=${this.adminPwd}`;
                //向数据服务器发起异步请求，进行登陆验证
                axios.get(url).then((res)=>{
                    //请求成功，跳转到/main
                    if (res.data.code === 200){
                        this.$router.push('/main');
                    } else {
                        alert('登陆失败！服务器返回消息：'+res.data.msg);
                    }
                }).catch((err)=>{
                    //请求失败，弹出错误消息
                    alert('无法从服务器获取到验证信息');
                })
            },
        },
        computed: {},
        watch: {},
        mounted() {
        },
    }
</script>

<style scoped>

</style>