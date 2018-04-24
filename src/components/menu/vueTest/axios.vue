<template>
  <div>
    <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
    <div id="demo">
      <button v-on:click="show=!show" @click="aa()">
                  Toggle
              </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
    <br/> <br/>
    <!--请求本地数据-->
    <Button @click="getData(href)">请求本地数据</Button>
    <Button @click="newGetdata()">新封装方法请求本地数据</Button>
    <div>
      name:{{name}} age:{{age}} phone{{phone}}
    </div>
    <!--请求后端数据-->
    <Button @click="extranetData()">请求后台数据</Button>
    <Button @click="createProject()">创建项目</Button>
    <div>{{extranet}}</div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "test",
    // el:"#dome",
    data() {
      return {
        show: true,
        isDisplay: "block",
        a: '你好',
        name: "",
        age: "",
        phone: "",
        extranet: "",
        href:'www.baidu.com'
      }
    },
    mounted() {},
    methods: {
      aa() {
        this.isDisplay = "none"
      },
      getData(e) {
        // 请求本地文件
        var url = "static/newdata.json"
        var perms = {
          name: '',
        };
        debugger
        this.$axios.post(url, perms)
          // this.$axios({
          //   method: "get",
          //   baseurl: '',
          //   url: "static/newdata.json",
          //   data: {
          //     "name":""
          //   }
          // })
          .then((response) => {
            //  window.location = e
            window.location.href = "http://www.baidu.com";
            debugger
            this.name = response.data.name;
            this.age = response.data.age;
            this.phone = response.data.phone;
          })
      },
      newGetdata() {
      },
      //  请求后端数据
      extranetData() {
        axios({
            method: 'post',
            url: 'http://113.106.54.212/gateway/datamanager/api/DataManger/dataSearch',
            data: {
              "facttable": "t1",
              "metrics": ["年份", "人均GDP", "增速.人均GDP"],
              "conditions": [
                [
                  ["城市", "=", "温州市"]
                ],
                [
                  ["年份", ">", "2009"]
                ],
                [
                  ["年份", "<", "2021"]
                ]
              ]
            },
            headers: {
              authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDExOTU3ODMsInVzZXJfbmFtZSI6ImRlbW8iLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiMWI5NzQ4MWMtY2M4Yy00ZjI5LWFiNzctNTZhOTkxY2E5MTQ1IiwiY2xpZW50X2lkIjoid2ViX2FwcCIsInNjb3BlIjpbIm9wZW5pZCJdfQ.TsGRvee14vPiyuhpYOHlFTRFWOTdqiJ6SQYEdSuRmIzWbYvdD0eX3VcS_Yz6bmmuAhaBTPeR_iicPeSq_zDwRBo_A1Ot-mYE1PwPczK_oW9ovqMgUCqD9o1IYl7lCwVMsH6x8tMexPL6fL8ytFu_dNxgU7jnX9orLY6rSnFZ18rZSzofudzl4BrKppOQpXWDdfhX-kWw2ZV1qgHtrcGVWeDwirduCo2e_GnluD25lYKLX3b3s6kQBf5CWZuZmFbzmtPBx5x3YCSA9Sa3oWoxSzRTmv_VikCJP_Uoc3FtwSnT9tmIwuEFMic2s70iB8Fc7ZY5nS0Bv9HsLocOEaVGzw'
            },
            // withCredentials:true,
          })
          .then(function(response) {
            console.log(response)
          })
      },
      createProject() {
        axios({
            method: 'post',
            url: 'http://192.168.11.50:9999/projects',
            data: {
              "name": "新石商场",
              "province": "河北",
              "city": "石家庄"
            },
            //          headers: {
            //            authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDExOTU3ODMsInVzZXJfbmFtZSI6ImRlbW8iLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiMWI5NzQ4MWMtY2M4Yy00ZjI5LWFiNzctNTZhOTkxY2E5MTQ1IiwiY2xpZW50X2lkIjoid2ViX2FwcCIsInNjb3BlIjpbIm9wZW5pZCJdfQ.TsGRvee14vPiyuhpYOHlFTRFWOTdqiJ6SQYEdSuRmIzWbYvdD0eX3VcS_Yz6bmmuAhaBTPeR_iicPeSq_zDwRBo_A1Ot-mYE1PwPczK_oW9ovqMgUCqD9o1IYl7lCwVMsH6x8tMexPL6fL8ytFu_dNxgU7jnX9orLY6rSnFZ18rZSzofudzl4BrKppOQpXWDdfhX-kWw2ZV1qgHtrcGVWeDwirduCo2e_GnluD25lYKLX3b3s6kQBf5CWZuZmFbzmtPBx5x3YCSA9Sa3oWoxSzRTmv_VikCJP_Uoc3FtwSnT9tmIwuEFMic2s70iB8Fc7ZY5nS0Bv9HsLocOEaVGzw'
            //          },
            // withCredentials:true,
          })
          .then(function(response) {
            console.log(response)
          })
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 5s
  }
  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active in below version 2.1.8 */
  {
    opacity: 0
  }
</style>