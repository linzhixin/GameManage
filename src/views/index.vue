<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }
    .right{
        float:left;
        width:80%;
        padding:10%;
    }
</style>
<template>
    <div class="index">
    <Row style="padding:30px 0;background-color:#495060">
        <Col span="18" push="6" >好酷游戏中心运营后台</Col>
        <Col span="6" pull="18" style="color:white;font-size:20px;font-weight:900;">好酷游戏中心运营后台</Col>
    </Row>
    <Menu :theme="theme3" active-name="1" style="height:100%;margin-left:0;float:left">
        <Menu-group title="内容管理">
            <Menu-item name="1">
                <Icon type="document-text"></Icon>
                游戏管理
            </Menu-item>
            <Menu-item name="2">
                <Icon type="chatbubbles"></Icon>
                渠道管理
            </Menu-item>
            <Menu-item name="3">
                <Icon type="document-text"></Icon>
                栏目管理
            </Menu-item>
            <Menu-item name="4">
                <Icon type="chatbubbles"></Icon>
                Banner管理
            </Menu-item>
        </Menu-group>
    </Menu>
    <div class="right">
    <router-view></router-view>
    </div>
    </div>
</template>
<script>
import Table from './table.vue' 
    export default {
        data () {
            return {
                theme3: 'dark'
            }
        },
        components:{
            Table
        },
    }
</script>