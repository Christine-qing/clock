<template>
  <div>
    <!--<h1>vue测试页面</h1>
       
         <div  v-for="item in cityList">
        　　　　<div>城市名称：{{item.title}}</div>
        　　　　<div>城市ID：{{item.id}}</div>
       　　　　 <div @click='foo()'>城市图片：<img :src='item.img'></div>  
       </div>
       <br />
       <br /><br /><br /><br />
       
            <h1 v-if='ok'>我是v-if的条件</h1>
          
            <h1 v-show='ok'>我是v-show的条件</h1>
       
            <a href='msg'>1238787</a>
            
            <h2 ref='foo'>我是ref的值</h2>-->
    <h2 style="color:red">我是主页面</h2>
    <content-f> </content-f>
    <Table :columns="columns1" :data="data1"></Table>
    <Page :total="20"  :current="1"   @on-change="changePage"  show-total></Page>
  </div>
</template>

<script>
  import contentF from './contentF'
  export default {
    name: "",
    data() {
      return {
        cityList: [{
            title: '北京',
            　　　　　　　　　　　id: '001',
            img: '../../../static/logo.png'
          }, 　　　　　　　　
          {
            title: '上海',
            　　　　　　　　　　　id: '002',
            img: '../../../static/logo.png'
          }
        ],
        ok: false,
        msg: 'https://www.baidu.com/',
        columns1: [{
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        data1: [{
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },{
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ],
        pageNum:1
      }
    },
    components: {
      contentF
    },
    mounted() {
      console.log(this.data1.length)
    },
    methods: {
      foo() {
        //  		alert(123)
        var arr = [1, 2, 3, 4, 5];
        var arr2 = [];
        arr.forEach((item, index) => {
          //  			console.log(item)
          if (item === 3) {
            return false
          }
        })
        debugger
        console.log(this.$refs.foo.innerHTML)
        this.$refs.foo.innerHTML = '我是新值'
        this.$router.go('+1')
      },
      changePage(pageNum){
       console.log(pageNum)
      this.data1=this.data1.slice((pageNum-1)*10,pageNum*10)
      // console.log(this.data1.length)
      }
    }
  }
</script>

<style scoped>

</style>