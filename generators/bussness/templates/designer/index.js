import component from './components/index.vue'

export default {
    name: '示例组件',
    previewData: {
        props: {
            title: '页面标题'
        }
    },
    ctrl: {
        component
    }
}
