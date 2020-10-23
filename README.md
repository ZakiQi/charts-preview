# charts-preview

> 基于Echart的图表预览组件

### serve with hot reload at localhost:8080
npm run dev

### build for production with minification
npm run build

---

## 安装
npm install echarts-preview

## 使用方法
```
import Vue from 'vue'

import previewUI from './index'

Vue.use(previewUI)

<!-- 组件内 -->
<charts-preview 
  :options="pieData"
  :styleOptions="styleOptions"
>
</charts-preview>
```

## 备注
1、外部可以传所有echart的参数，像使用原生Echarts一样
 
2、组件大小默认是100%（自适应），所以只要在包裹组件的div中设置实际的大小即可

3、可以指定图表大小，外部传入styleOptions:对象，宽高等信息

---

## props
  + ``` options ```
    
    图表信息数据，和echarts的options一致

  + ``` styleOptions ```
    
    指定图表样式，宽高等内容
    ###### 在外框宽高不确定时使用，如果外框已经有样式指定宽高，图表的样式以styleOptions展示
  
  + ``` haveHeader ```

    是否需要头部
    