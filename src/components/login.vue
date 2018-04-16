<template>
    <div id="login-contain">
        <!-- 微信登录 -->
        <div class="wx-login" v-if="loginInfo===1">
            <div style="width:250px;margin:16px auto">
                <p class="info-title">手机扫描，安全登录</p>
                <div class="wx-img"></div>
                <div class="wx-expand">
                    <Icon type="android-expand"></Icon>
                    <span>打开微信扫一扫登录</span></div>
            </div>
            <div class="other-login">
                <span @click="userLogin()">密码登录</span>
                <span @click="register()">注册</span>
            </div>
        </div>
        <!-- 密码登录 -->
        <div class="user-login" v-if="loginInfo===2">
            <div style="width:250px;margin:16px auto">
                <p class="info-title">密码登录</p>
                <Form :model="formLeft" label-position="left" :label-width="60">
                    <FormItem label="用户名">
                        <Input v-model="formLeft.input1" placeholder="您的用户名"></Input>
                        <br>
                    </FormItem>
                    <FormItem label="密码">
                        <Input v-model="formLeft.input2" placeholder="您的密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" class="submit-btn" style="margin-left:-58px;margin-bottom:20px;width:250px;" @click="userSubmit()">提交</Button>
                    </FormItem>
                </Form>
                <div class="other-login">
                    <span @click="wxLogin()"><img src="../assets/img/wx_logo.png" alt="" style="width:20px;height:20px;margin-top:6px"></span>
                    <span @click="resetPassword()">重置密码</span>
                    <span @click="register()">注册</span>
                </div>
            </div>
        </div>
        <!-- 重置密码 -->
        <div class="reset-password" v-if="loginInfo===3">
            <div style="width:250px;margin:16px auto">
                <p class="info-title">重置密码</p>
                <Form :model="formLeft" label-position="left" :label-width="60">
                    <FormItem label="手机号">
                        <Input v-model="formLeft.input1" placeholder="您的手机号"></Input>
                    </FormItem>
                    <FormItem label="验证码">
                        <Row>
                            <Col span="12">
                            <Input v-model="formLeft.input1" placeholder="输入验证码" ></Input>
                            </Col>
                            <Col span="2" offset="1">
                            <Button style="margin-left:8px" type="primary">发送验证</Button>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="密码">
                        <Input v-model="formLeft.input2" placeholder="您的新密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" style="margin-left:-58px;width:250px;" @click="submit()">重置密码</Button>
                    </FormItem>
                </Form>
                <div class="other-login">
                    <span @click="userLogin()">密码登录</span>
                    <!-- <span>注册</span> -->
                </div>
            </div>
        </div>
        <!-- 注册账号 -->
        <div class="reset-password" v-if="loginInfo===4">
            <div style="width:250px;margin:16px auto">
                <p class="info-title">注册账号</p>
                <Form :model="formLeft" label-position="left" :label-width="60">
                    <FormItem label="手机号">
                        <Input v-model="formLeft.input1" placeholder="您的手机号"></Input>
                    </FormItem>
                    <FormItem label="验证码">
                        <Row>
                            <Col span="12">
                            <Input v-model="formLeft.input1" placeholder="输入验证码" ></Input>
                            </Col>
                            <Col span="2" offset="1">
                            <Button style="margin-left:8px" type="primary">发送验证</Button>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="密码">
                        <Input v-model="formLeft.input2" placeholder="您的密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" style="margin-left:-58px;width:250px;" @click="submit()">立即注册</Button>
                    </FormItem>
                </Form>
                <div class="other-login">
                    <span @click="wxLogin()">微信登录</span>
                    <span @click="userLogin()">密码登录</span>
                </div>
            </div>
        </div>
        <div class='login' v-if="loginInfo===5">
            <div style="width:250px;margin:25px auto">
                <p class="info-title">完善信息</p>
                <Form :model="formLeft" label-position="left" :label-width="60">
                    <FormItem label="姓名">
                        <Input v-model="formLeft.input1" placeholder="您的姓名"></Input>
                        <br>
                    </FormItem>
                    <FormItem label="公司">
                        <Input v-model="formLeft.input2" placeholder="您的公司"></Input>
                    </FormItem>
                    <FormItem label="邮箱">
                        <Input v-model="formLeft.input3" placeholder="您的邮箱"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" style="margin-left:-58px;width:250px;" @click="submit()">提交</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
        <div class='copyright'>
            <p><span>京ICP备12005794号</span> | <span>京ICP证130311号</span> | <span>京公网安备11010102001221号</span> <span>2011-2018</span> &copy; <span>TalkingData.com</span></p>
            <p><span>服务条款</span> <span>隐私政策</span> <span>终端设备Opt-Out</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        props: {
            loginTitle: {
                type: String,
                default: '登录' // 修改登录名称
            },
            findPw: { // true 保留忘记密码功能  false 删除忘记密码功能
                type: Boolean,
                default: false
            },
            rememberMe: { // true 保留记住我功能  false 删除记住我功能
                type: Boolean,
                default: false
            },
            // register: { // true 保留注册功能  false 删除注册功能
            //     type: Boolean,
            //     default: false
            // },
        },
        data() {
            return {
                'login_error': false,
                'error': '',
                'single': false,
                loginUrl: 'api/login',
                submitBtn: '登录',
                waitBtn: false,
                msg: '',
                loginModel: {
                    username: '',
                    password: ''
                },
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                loginInfo: 2
            }
        },
        mounted() {},
        methods: {
            focus() {
                let vm = this
                vm.login_error = false
                vm.error = ''
            },
            submit(event) {
                event.preventDefault()
                this.$router.push('/hello')
            },
            submit() {
                console.log(this.formLeft)
            },
            cancel() {
                this.formLeft = {
                    input1: '',
                    input2: '',
                    input3: ''
                }
            },
            wxLogin() {
                this.loginInfo = 1
            },
            userLogin() {
                this.loginInfo = 2
            },
            resetPassword() {
                this.loginInfo = 3
            },
            register() {
                this.loginInfo = 4
            },
            countDown(){
                // for(var i=60;i>0;i--){
                  
                // }
            }
        }
    }
</script>

<style scoped lang="less">
    #login-contain {
        width: 100%;
        height: 100%;
        background: url("../assets/img/login.png")center center no-repeat;
        background-size: 100% 100%;
        position: fixed;
        z-index: 1;
    }
    .login {
        width: 340px;
        height: 380px;
        position: absolute;
        top: 50px;
        right: 50px;
        background: white;
        z-index: 2;
        box-shadow: 0 0 10px #ccc;
        .login-img {
            width: 100%;
            height: 100px;
            background: url('../assets/img/login-img.png') center center no-repeat;
            background-size: 176px 28px;
            margin: 0 auto;
            margin-top: 10px;
        }
        .info-title {
            font-size: 18px;
            text-align: center;
            padding-bottom: 40px;
        }
    }
    .copyright {
        position: absolute;
        left: 30%;
        bottom: 20px;
        font-size: 12px;
        color: white;
        text-align: center;
    } // 密码登录
    .user-login {
        width: 340px;
        height: 320px;
        position: absolute;
        top: 50px;
        right: 50px;
        background: white;
        z-index: 2;
        box-shadow: 0 0 10px #ccc;
        .info-title {
            font-size: 18px;
            text-align: center;
            padding-bottom: 40px;
        }
    } // 微信登录
    .wx-login {
        width: 340px;
        height: 320px;
        position: absolute;
        top: 50px;
        right: 50px;
        background: white;
        z-index: 2;
        box-shadow: 0 0 10px #ccc;
        .wx-img {
            width: 150px;
            height: 150px;
            background: pink;
            margin: 0 auto;
            // background: url("../assets/img/mingpian.png") center center  no-repeat;
        }
        .info-title {
            font-size: 18px;
            text-align: center;
            padding-bottom: 30px;
        }
        .wx-expand {
            font-size: 20px;
            color: red;
            text-align: center;
            margin-top: 10px;
            span {
                font-size: 12px;
            }
        }
    } // 重置密码
    .reset-password {
        width: 340px;
        height: 340px;
        position: absolute;
        top: 50px;
        right: 50px;
        background: white;
        z-index: 2;
        box-shadow: 0 0 10px #ccc;
        .info-title {
            font-size: 18px;
            text-align: center;
            padding-bottom: 30px;
        }
    }
    .other-login {
        text-align: right;
        margin-right: 20px;
        cursor: pointer;
    }
</style>