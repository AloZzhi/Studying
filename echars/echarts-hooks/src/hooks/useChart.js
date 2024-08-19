// series 响应式 
// dom  option type 各种图标的封装 
import { onUnmounted, nextTick } from "vue";
import * as echarts from 'echarts';
import { useResize } from './useResize';
import { throttle } from 'lodash-es';
export function useChart(
    elRef,  // 容器 
    theme // 风格·
) {
    let chartsInstanceRef = null;

    function resize() {
        if (!chartsInstanceRef) {
            return 
        }
        
    }

}
// coze 聊天API 
// coze  返回了列表后， 滚动条自动滚动到底部 看到最新消息
// ref value改变 同步到 DOM 上 ， nextTick(callback) 微任务
