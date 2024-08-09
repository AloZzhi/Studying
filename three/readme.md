# three.js 3D 数据可视化

- 数据可视化
    - echarts  2D
    - three.js 3D
        html5 canvas 做的，浏览器直接访问
        可以分享到朋友圈
        病毒式传播

- 3D 地球仪
- 3D 汽车模型 选择不同的颜色和外观  vue
- 小米汽车  最牛的前端用户体验  让人震撼
    - 微信流量
    - 抖音流量 直播

- geometry  球体
- 材质 

- three.js 3D 初始化工作流程 
    - init
        - camera
        - scene
        - renderer webGLRenderer
            new THREE.WebGLRenderer(
                {
                    canvas: canvas
                }
            )
            renderder.render(scene, camera)
    - animate 动起来     
        不停地去renderder.render(scene, camera)
        - 什么频率去拍呢？
            requestAnimationFrame(animate) 显示器的刷频率一样的 1秒60帧
            用户喜欢  不会阻塞主线程
            调用方式就是 传一个函数
            function animate(){
                requestAnimationFrame(animate)
                renderder.render(scene, camera)
            }
