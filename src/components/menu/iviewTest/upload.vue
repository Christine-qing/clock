<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <Button type="primary" @click="uploadModal = true" style="margin:100px 0 0 100px;;">上传文件</Button>
        <Modal v-model="uploadModal" :closable="false" title="请选择需要上传的文件" :loading="loading" @on-ok="asyncOK(true)" @click="open(true)">
            <!-- <Upload ref="upload" multiple accept=".shp,.sbx,.shx" :format="['shp','sbx','shx']" :before-upload="handleBeforeUpload" :on-success="handleSuccess" :on-format-error="handleFormatError" :max-size="2048" enctype="multipart/form-data" action="//jsonplaceholder.typicode.com/posts/">
                    <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
            </Upload> -->
            <Upload ref="upload" accept=".xlsx" :format="['xlsx']"  :on-success="handleSuccess" :on-format-error="handleFormatError" enctype="multipart/form-data" action="//jsonplaceholder.typicode.com/posts/" clearFiles>
                <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
            </Upload>
        </Modal>
    </div>
</template>
<script>
    export default {
        name: "",
        data() {
            return {
                uploadModal: false,
                loading: true,
                uploadList: [],
            }
        },
        mounted() {
            this.uploadList = this.$refs.upload.fileList;
        },
        methods: {
            asyncOK(val) {
                 setTimeout(() => {
                       this.uploadModal = false;
                    }, 2000);
                     this.uploadList.length=0;
                    //  this.$refs.upload.fileList.resetFields();
            },
            handleFormatError(file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件' + file.name + '格式不正确,请上传*.xlsx格式的文件。'
                });
            },
            handleSuccess(res, file) {
                console.log(this.uploadList)
               debugger
                this.$Notice.open({
                    title: file.name+"上传成功",
                    desc: res ? '' : file.name+"上传成功，接下来可以继续上传。"
                });
                
            },

        }
    }
</script>

<style scoped>

</style>