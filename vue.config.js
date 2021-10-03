module.exports = {
    devServer: {
        // 第一种
        // proxy: 'http://localhost:3001'
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                ws: true,
                changeOrigin: true
            }
        }
    }
}
