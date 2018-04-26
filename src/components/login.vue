<template>
    <div id="login-contain">
        <!-- 密码登录 -->
        <div class="user-login" v-if="loginInfo===2">
            <div style="width:250px;margin:18px auto">
                <p class="info-title">密码登录</p>
                <Form :model="userLoginForm" label-position="left" :label-width="60">
                    <FormItem label="用户名">
                        <Input v-model="userLoginForm.userName" placeholder="您的用户名" @on-blur="userLoginUsername_blur()"></Input>
                        <span class="errorInfo">&nbsp;{{userLoginUsername_error}}</span>
                    </FormItem>
                    <FormItem label="密码">
                        <Input v-model="userLoginForm.password" placeholder="您的密码" @on-blur="userLoginPassword_blur()"></Input>
                        <span class="errorInfo">&nbsp;{{userLoginPassword_error}}</span>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" class="submitbtn" style="margin-bottom:20px" @click="userSubmit()">提交</Button>
                        <span class="errorInfo">&nbsp;{{userLoginSubmit_error}}</span>
                    </FormItem>
                </Form>
                <div class="other-login">
                    <span @click="wxLogin()"><img src="../assets/img/wx_logo.png" alt="" style="width:20px;height:20px;margin-top:6px"></span>
                    <span @click="resetPassword()">重置密码</span>
                    <span @click="register()">注册</span>
                    <span @click="goLogin()">免密登录</span>
                </div>
            </div>
        </div>
        <!-- 重置密码 -->
        <div class="reset-password" v-if="loginInfo===3">
            <div style="width:250px;margin:18px auto">
                <p class="info-title">重置密码</p>
                <Form :model="resetPasswordForm" label-position="left" :label-width="60">
                    <FormItem label="手机号">
                        <Input v-model="resetPasswordForm.phone" placeholder="您的手机号" @on-blur="resetPasswordPhone_blur()"></Input>
                        <span class="errorInfo">&nbsp;{{resetPasswordPhone_error}}</span>
                    </FormItem>
                    <FormItem label="验证码">
                        <Row>
                            <Col span="12">
                            <Input v-model="resetPasswordForm.count" placeholder="输入验证码" @on-blur="resetPasswordCount_blur()"></Input>
                            </Col>
                            <Col span="2" offset="1">
                            <Button style="margin-left:8px" type="primary" @click="sendValidation()" :disabled="disabledState">{{sendText}}</Button>
                            </Col>
                        </Row>
                        <span class="errorInfo">&nbsp;{{resetPasswordcount_error}}</span>
                    </FormItem>
                    <FormItem label="密码">
                        <Input v-model="resetPasswordForm.newPassword" placeholder="您的新密码" @on-blur="resetPasswordNewPassword_blur()"></Input>
                        <span class="errorInfo">&nbsp;{{resetPasswordNewPassword_error}}</span>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" class="submitbtn" @click="resetSubmit()">重置密码</Button>
                        <span class="errorInfo">&nbsp;{{resetPasswordSubmit_error}}</span>
                    </FormItem>
                </Form>
                <div class="other-login">
                    <span @click="userLogin()">密码登录</span>
                </div>
            </div>
        </div>
        <!-- 注册账号 -->
        <div class="register-user" v-if="loginInfo===4">
            <div style="width:250px;margin:18px auto">
                <p class="info-title">注册账号</p>
                <Form :model="registerForm" label-position="left" :label-width="60">
                    <FormItem label="手机号">
                        <Input v-model="registerForm.phone" placeholder="您的手机号" @on-blur="registerUserPhone_blur()"></Input>
                        <span class="errorInfo">&nbsp;{{registerUserPhone_error}}</span>
                    </FormItem>
                    <FormItem label="验证码">
                        <Row>
                            <Col span="12">
                            <Input v-model="registerForm.count" placeholder="输入验证码" @on-blur="registerUserCount_blur()"></Input>
                            </Col>
                            <Col span="2" offset="1">
                            <Button style="margin-left:8px" type="primary" @click="sendValidation()" :disabled="disabledState">{{sendText}}</Button>
                            </Col>
                        </Row>
                        <span class="errorInfo">&nbsp;{{registerUserCount_error}}</span>
                    </FormItem>
                    <FormItem label="密码">
                        <Input v-model="registerForm.password" placeholder="您的密码" @on-blur="registerUserPassword_blur()"></Input>
                        <span class="errorInfo">&nbsp;{{registerUserPassword_error}}</span>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" class="submitbtn" @click="registerSubmit()">立即注册</Button>
                        <span class="errorInfo">&nbsp;{{registerSubmit_error}}</span>
                    </FormItem>
                </Form>
                <div class="other-login">
                    <span @click="wxLogin()"><img src="../assets/img/wx_logo.png" alt="" style="width:20px;height:20px;"></span>
                    <span @click="userLogin()">密码登录</span>
                </div>
            </div>
        </div>
        <div class='add-info' v-if="loginInfo===5">
            <div style="width:250px;margin:18px auto">
                <p class="info-title">完善信息</p>
                <Form :model="addInfoForm" label-position="left" :label-width="60">
                    <FormItem label="姓名">
                        <Input v-model="addInfoForm.name" placeholder="您的姓名" @on-blur="addInfoName_blur()"></Input>
                        <span class="errorInfo">&nbsp;{{addInfoName_error}}</span>
                    </FormItem>
                    <FormItem label="公司">
                        <Input v-model="addInfoForm.corporation" placeholder="您的公司" @on-blur="addInfoCorporation_blur()"></Input>
                        <span class="errorInfo">&nbsp;{{addInfoCorporation_error}}</span>
                    </FormItem>
                    <FormItem label="邮箱">
                        <Input v-model="addInfoForm.eamil" placeholder="您的邮箱" @on-blur="addInfoEamil_blur()"></Input>
                        <span class="errorInfo">&nbsp;{{addInfoEamil_error}}</span>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" class="submitbtn" @click="addInfoSubmit()">提交</Button>
                        <span class="errorInfo">&nbsp;{{addInfoSubmit_error}}</span>
                    </FormItem>
                </Form>
            </div>
        </div>
        <!-- success弹框 -->
        <Alert type="success" closable show-icon v-if="successAlert" class="success-alert">
            信息已完善成功
            <span slot="desc">感谢您注册店缘，我们的工作人员将在1个工作日内与您取得联系，请保持电话畅通。 </span>
        </Alert>
        <div class='copyright'>
            <p><span>京ICP备12005794号</span> | <span>京ICP证130311号</span> | <span>京公网安备11010102001221号</span> <span>2011-2018</span> &copy; <span>TalkingData.com</span></p>
            <p><span>服务条款</span> <span>隐私政策</span> <span>终端设备Opt-Out</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                loginModel: {
                    username: '',
                    password: ''
                },
                userLoginForm: {
                    userName: '',
                    password: ''
                },
                resetPasswordForm: {
                    phone: '',
                    count: '',
                    newPassword: ''
                },
                registerForm: {
                    phone: '',
                    count: '',
                    password: ''
                },
                addInfoForm: {
                    name: '',
                    corporation: '',
                    eamil: ''
                },
                loginInfo: 2,
                successAlert: false,
                userLoginUsername_error: '',
                userLoginPassword_error: '',
                userLoginSubmit_error: '',
                resetPasswordPhone_error: '',
                resetPasswordcount_error: '',
                resetPasswordNewPassword_error: '',
                resetPasswordSubmit_error: '',
                registerUserPhone_error: '',
                registerUserCount_error: '',
                registerUserPassword_error: '',
                registerSubmit_error: '',
                addInfoName_error: '',
                addInfoEamil_error: '',
                addInfoSubmit_error: '',
                addInfoCorporation_error: '',
                sendText: "发送验证",
                 timer: null,
                disabledState: false
            }
        },
        mounted() {},
        methods: {
            //以下为切换login方式
            wxLogin() {},
            userLogin() {
                this.loginInfo = 2
            },
            resetPassword() {
                this.loginInfo = 3
            },
            register() {
                this.loginInfo = 4
            },
            goLogin() {
                this.$router.push('/menuPage')
            },
            // 以下为submit验证并提交
            addInfoSubmit() {
                if (this.addInfoForm.name && this.addInfoForm.corporation && this.addInfoForm.eamil) {
                    this.addInfoSubmit_error = ""
                    this.successAlert = true;
                } else {
                    this.addInfoSubmit_error = "请将上述信息填写完整"
                }
            },
            userSubmit(event) {
                if (this.userLoginForm.password && this.userLoginForm.userName) {
                    this.userLoginSubmit_error = ""
                } else {
                    this.userLoginSubmit_error = "请将上述信息填写完整"
                }
            },
            registerSubmit() {
                if (this.registerForm.phone && this.registerForm.count && this.registerForm.password) {
                    this.loginInfo = 5
                    this.registerSubmit_error = ""
                } else {
                    this.registerSubmit_error = "请将上述信息填写完整"
                }
            },
            resetSubmit() {
                if (this.resetPasswordForm.phone && this.resetPasswordForm.count && this.resetPasswordForm.newPassword) {
                    this.resetPasswordSubmit_error = ""
                } else {
                    this.resetPasswordSubmit_error = "请将上述信息填写完整"
                }
            },
            // 以下为blur验证
            userLoginUsername_blur() {
                if (!this.userLoginForm.userName) {
                    this.userLoginUsername_error = "用户名不能为空"
                } else {
                    this.userLoginUsername_error = ""
                }
            },
            userLoginPassword_blur() {
                if (!this.userLoginForm.password) {
                    this.userLoginPassword_error = "密码不能为空"
                } else {
                    this.userLoginPassword_error = ""
                }
            },
            resetPasswordPhone_blur() {
                if (!this.resetPasswordForm.phone) {
                    this.resetPasswordPhone_error = "请将手机号补充完整"
                } else {
                    if ((/^(1)(3(\d){9}$)|(4[5-9]{1}(\d){8}$)|(5[^4]{9})|(66(\d){8})|(7[0-8]{1}(\d){8})|(8(\d){9}$)|(9[8-9](\d){8}$)/.test(this.resetPasswordForm.phone))) {
                        this.resetPasswordPhone_error = ""
                    } else {
                        this.resetPasswordPhone_error = "手机号格式错误"
                    }
                }
            },
            resetPasswordCount_blur() {
                if (!this.resetPasswordForm.count) {
                    this.resetPasswordcount_error = "请输入验证码"
                } else {
                    this.resetPasswordcount_error = ""
                }
            },
            resetPasswordNewPassword_blur() {
                if (!this.resetPasswordForm.newPassword) {
                    this.resetPasswordNewPassword_error = "请输入您的新密码"
                } else {
                    this.resetPasswordNewPassword_error = ""
                }
            },
            registerUserPhone_blur() {
                if (!this.registerForm.phone) {
                    this.registerUserPhone_error = "请输入手机号"
                } else {
                    if ((/^(1)(3(\d){9}$)|(4[5-9]{1}(\d){8}$)|(5[^4]{9})|(66(\d){8})|(7[0-8]{1}(\d){8})|(8(\d){9}$)|(9[8-9](\d){8}$)/.test(this.registerForm.phone))) {
                        this.registerUserPhone_error = ""
                    } else {
                        this.registerUserPhone_error = "手机号格式错误"
                    }
                }
            },
            registerUserCount_blur() {
                if (!this.registerForm.count) {
                    this.registerUserCount_error = "请输入验证码"
                } else {
                    this.registerUserCount_error = ""
                }
            },
            registerUserPassword_blur() {
                if (!this.registerForm.password) {
                    this.registerUserPassword_error = "请输入密码"
                } else {
                    this.registerUserPassword_error = ""
                }
            },
            addInfoName_blur() {
                if (!this.addInfoForm.name) {
                    this.addInfoName_error = "请输入姓名"
                } else {
                    this.addInfoName_error = ""
                }
            },
            addInfoCorporation_blur() {
                if (!this.addInfoForm.corporation) {
                    this.addInfoCorporation_error = "请输入公司名称"
                } else {
                    this.addInfoCorporation_error = ""
                }
            },
            addInfoEamil_blur() {
                if (!this.addInfoForm.eamil) {
                    this.addInfoEamil_error = "请输入邮箱"
                } else {
                    if ((/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g).test(this.addInfoForm.eamil)) {
                        this.addInfoEamil_error = ""
                    } else {
                        this.addInfoEamil_error = "邮箱格式错误"
                    }
                }
            },
            //发送验证
            sendValidation() {
                const count = 59;
                if (!this.timer) {
                    this.sendText = count;
                    this.disabledState = true;
                    this.timer = setInterval(() => {
                        if (this.sendText > 0 && this.sendText <= count) {
                            this.sendText--;
                            if (this.sendText === 0) {
                                this.sendText = "发送验证"
                            }
                        } else {
                            this.disabledState = false;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000)
                }
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
    .add-info {
        width: 340px;
        height: 400px;
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
            padding-bottom: 28px;
        }
    }
    .copyright {
        position: absolute;
        left: 30%;
        bottom: 20px;
        font-size: 12px;
        color: white;
        text-align: center;
    }
    .success-alert {
        width: 500px;
        height: 100px;
        position: absolute;
        bottom: 70px;
        left: 30%; //  margin:0 auto;
    } // 密码登录
    .user-login {
        width: 340px;
        height: 400px;
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
    } // 重置密码
    .reset-password,
    .register-user {
        width: 340px;
        height: 400px;
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
        margin-right: 20px;
        cursor: pointer;
        position: absolute;
        bottom: 18px;
        right: 20px;
    }
    .ivu-form-item {
        margin-bottom: 10px;
    }
    .ivu-form-item .ivu-form-item-content {
        margin-bottom: -10px; // line-height:30px;
    }
    .errorInfo {
        color: red;
        margin-bottom: -10px;
    }
    .submitbtn {
        margin-left: -58px;
        width: 250px
    }
</style>