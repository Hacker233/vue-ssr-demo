import { createApp } from './main'
const { app, router } = createApp()
router.onReady(() => {
    console.log('router ready')
    app.$mount('#app')
})