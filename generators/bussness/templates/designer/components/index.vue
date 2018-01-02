<template>
    <div>
        <el-form label-width="90px" label-position="left">
            <el-form-item label="标题">
                <el-input v-model="title" @change="commit"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        props: {
            value: Object
        },
        data() {
            let props = this.value && this.value.props || {};
            return {
                title: props.title,
            }
        },
        watch: {
        },
        methods: {
            commit() {
                let form = {
                    title: this.title
                };

                this.$emit('onupdate', {
                    props: form
                })
            }
        }
    }

</script>

<style lang="less">

</style>
