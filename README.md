# personal-blog 2019.4.12 开始

- 新建项目目录
  + css/ 存放 css 文件
  + images/ 存放图片
  + js/  存放 JavaScript 文件
  + fonts/ 存放字体图标 阿里巴巴矢量图标 图标在项目 blog 里
  + index.html 入口文件
- Atom 快捷键
  + open-in-browser: ctrl + alt + o
- 基本知识和问题总结
  + li:first-child 伪元素选择器 父元素的第一个li元素
  + background: #000 linear-gradient(to left, #4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55) 渐变色
  + 字体图标大小设置 font-size
  + 伪类元素其 ::before content必须有
  + 子绝父相
  + .menu:hover span 进入到.menu 元素中 就让 span 选装 180deg
  `
  .menu:hover span{
    transform: rotate(180deg);
  }
  `
  + outline:none; 不显示 轮廓
  + js文件，有直接操作页面元素的代码，不能在head里面引用 ，而应该放到body内引用代码。
  + 图标问题 在 .searchico .iconfont 里设置的 margin-top 为什么会影响 .fader .prev, .fader .next 里的margin
  + 对四个点 添加点击事件和鼠标进入事件 替代 .fader .pager_list li:hover,.fader .pager_list li.active 但是 这个也没有删除 但是点击事件和进入离开事件冲突 不知道怎么解决 已解决：设置一个clickflag = i 具体见代码 这个已经删除了
  + 轮播图流程
    1. 获取元素 获取宽度 设置全局变量 pic 记录所在第几张图片
    2. for 循环为 ol 创建 li 为其添加点击事件 实现 li 颜色切换 和 轮播图片切换
    3. 克隆 ul 中的第一个 li 放到 ul 最后 === 克隆
    4. 自动播放 轮播图
    5. 为 box 添加 鼠标进入和离开事件 为 左右图标添加点击事件
    6. 点击处理函数 动画移动处理函数
  + headline 出现了问题 设置浮动没有上去 因为与它的兄弟元素没有设置浮动 所以它才没有浮动上去
  + 多余文本显示省略号
  `
    text-overflow: ellipsis; // 显示省略号
    -webkit-box-orient: vertical; // 方向
    display: -webkit-box; // display 的样式
    -webkit-line-clamp: 2; // 显示两行之后 在显示省略号
  `
  + 在 .newslist 中的其他位置 高度设置为 22px 看权重的问题 用权重来解决 高度问题
  `
  .newslist:hover li:nth-child(1) {
      height: 22px;
      background: none;
  }
  `
  + 获取元素对象 设置类名 带引号表示里面的常量 不带引号是变量
  `
    liObj.className = "类名"
    liObj[i].setAttribute("class", "类名")
  `
