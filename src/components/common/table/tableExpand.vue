<template>
  <div>
    <Row  class="title">
      <Col span="5">
        <span class="expand-key">奖品等级</span>
      </Col>
      <Col span="5">
        <span class="expand-key">奖品名称 </span>
      </Col>
      <Col span="4">
        <span class="expand-key">有效期</span>
      </Col>
      <Col span="5">
        <span class="expand-key">投放数量</span>
      </Col>
    </Row>
    <Row class="content h30">
      <Col span="5">
        <span class="expand-key">{{row.store_name}}</span>
      </Col>
      <Col span="5">
        <span class="expand-key">{{row.store_name}} </span>
      </Col>
      <Col span="4">
        <span class="expand-key">{{row.store_name}}</span>
      </Col>
      <Col span="5">
        <span class="expand-key">{{row.store_name}}</span>
      </Col>
    </Row>
    <Row class="content h30">
      <Col span="5">
        <span class="expand-key">{{row.store_name}}</span>
      </Col>
      <Col span="5">
        <span class="expand-key">{{row.store_name}} </span>
      </Col>
      <Col span="4">
        <span class="expand-key">{{row.store_name}}</span>
      </Col>
      <Col span="5">
        <span class="expand-key">{{row.store_name}}</span>
      </Col>
    </Row>
  </div>
</template>

<script>
    export default {
      props: {
        row: Object
      }
    }
</script>

<style scoped lang="less">
  .title{
    margin-bottom: 16px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: rgba(28,36,56,0.80);
    text-align: left;
    line-height: 22px;
  }
  .content{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: rgba(28,36,56,0.80);
    text-align: left;
    line-height: 22px;
  }
</style>
