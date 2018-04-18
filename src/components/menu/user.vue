<template>
    <div class="user-info">
        <div style="width:80%;height:100px;">
            <Card>
                <p slot="title">个人中心</p>
                <p class="user-img-wrapper ">
                    <!-- <img class="user-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg" alt=""> -->
                    <span class="user-title">商户管理员： {{user.userName}}</span>
                </p>
                <p class="user-phone mt20">手机号码：{{user.userPhone}}</p>
                <p class="user-corporation mt20">公司名称：{{user.userCorporation}} <a href="" class="ml10">绑定公众号</a></p>
                <p class="user-email mt20">邮箱：{{user.userEmail}}</p>
                <p class="user-wechat mt20">微信号：{{user.userWechat}} <a href="" class="ml10">绑定微信号</a></p>
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                user: {
                    userName: 'XXX',
                    userPhone: '138****8000',
                    userCorporation: '北京腾云天下科技有限公司',
                    userEmail: '138****8000@qq.com',
                    userWechat: 'XXX'
                }
            }
        },
        components: {},
        mounted() {},
        methods: {}
    }
</script>

<style scoped lang="less">
    @import "../style/base.css";
    .user-info {
        .user-img {
            height: 50px;
            width: 50px;
            border-radius: 50%;
        }
        .user-img-wrapper {
            width: 200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .user-title {
            font-weight: 600;
            font-size: 16px;
        }
    }
</style>