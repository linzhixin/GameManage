<style scoped>
.selectFactory{
    width:50%;
    float:left
}

.UploadLogo{
    float:right;
    width:30%
}
</style>
<template>
    <Form :model="formItem" :label-width="80">
        <Form-item label="游戏名称">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="游戏厂商">
            <Select v-model="formItem.select" placeholder="请选择" class="selectFactory">
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
            </Select>
                <Upload action="//jsonplaceholder.typicode.com/posts/" class="UploadLogo">
        <Button type="ghost" icon="ios-cloud-upload-outline">上传游戏LOGO</Button>
    </Upload>
        </Form-item>
        <Form-item label="游戏描述">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 20}" placeholder="请输入..."></Input>
        </Form-item>
        <Form-item>
            <Button type="primary">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </Form-item>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: '',
                }
            }
        }
    }
</script>