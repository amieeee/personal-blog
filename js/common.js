window.onload = function () {
  // 搜索图标的点击事件 是否被点击的标志
  function searchClick () {
    let flag = true
    document.getElementById("searchico").onclick = function () {
      if (flag == true) {
        document.getElementById("search").style.display =  "block"
        flag = false
      } else {
        document.getElementById("search").style.display =  "none"
        flag = true
      }
    }
    document.getElementById("close").onclick = function () {
        document.getElementById("search").style.display = "none"
    }
  }
  searchClick ()
  // 轮播图
  function lunbotu () {
    let box = document.querySelector("#banbox")
    let screen = document.querySelector(".screen")
    let imgWidth = screen.offsetWidth
    let ulObj = screen.children[0]
    let list = ulObj.children
    let olObj = screen.children[1]
    // let arr = screen.children[2]
    let pic = 0
    let right = document.querySelector(".next")
    let left = document.querySelector(".prev")
    for (let i = 0; i < list.length; i++) {
      let liObj = document.createElement("li")
      olObj.appendChild(liObj)
      liObj.setAttribute("index", i)
      // 两种实现方式 这是第一种鼠标进入
      // liObj.onmouseover = function () {
      //   for (let j = 0; j < olObj.children.length; j++) {
      //     olObj.children[j].removeAttribute("class")
      //   }
      //   this.className = "current"
      //   pic = this.getAttribute("index")
      //   animate(ulObj, -pic * imgWidth)
      // }
      // 这是第二种鼠标点击 个人认为这种更好一些
      liObj.onclick = function () {
        for (let j = 0; j < olObj.children.length; j++) {
          olObj.children[j].removeAttribute("class")
        }
        this.className = "current"
        pic = this.getAttribute("index")
        animate(ulObj, -pic * imgWidth)
      }
    }
    olObj.children[0].className = "current"
    // 克隆一个ul中第一个li,加入到ul中的最后=====克隆
    ulObj.appendChild(ulObj.children[0].cloneNode(true))
    // 自动播放
    let timeId = setInterval(clickHandle, 5000) //与下面的鼠标离开时设置的定时器要统一
    box.onmouseover = function () {
      // olObj.style.display = "block"
      clearInterval(timeId)
    }
    box.onmouseout = function () {
      // olObj.style.display = "none"
      timeId = setInterval(clickHandle, 5000) // 与上面的统一时间
    }
    right.onclick = clickHandle
    function clickHandle () {
      if (pic === list.length - 1) {
        pic = 0
        ulObj.style.left = 0 + "px"
      }
      pic++
      animate(ulObj, -pic * imgWidth)
      if (pic === list.length - 1) {
        olObj.children[olObj.children.length - 1].className = ""
        olObj.children[0].className = "current"
      } else {
        for (let i = 0; i < olObj.children.length; i++) {
          olObj.children[i].removeAttribute("class")
        }
        olObj.children[pic].className = "current"
      }
    }
    left.onclick = function () {
      if (pic == 0) {
        pic = 4;
        ulObj.style.left = -pic * imgWidth + "px";
      }
      pic--;
      animate(ulObj, -pic * imgWidth);
      //设置小按钮的颜色---所有的小按钮干掉颜色
      for (var i = 0; i < olObj.children.length; i++) {
        olObj.children[i].removeAttribute("class");
      }
      //当前的pic索引对应的按钮设置颜色
      olObj.children[pic].className = "current";
    }
    function animate (element, target) {
      clearInterval(element.timeId)
      element.timeId = setInterval(function () {
        let current = element.offsetLeft
        let step = 10
        step = current < target ? step : -step
        current += step
        if (Math.abs(current - target) > Math.abs(step)) {
          element.style.left = current + "px"
        } else {
          clearInterval(element.timeId)
          element.style.left = target + "px"
        }
      }, 1)
    }
  }
  lunbotu()
  // 点击切换界面内容等
  function tabClick () {
    let liObj = document.querySelector(".tab_buttons").children[0].children
    let newstabObj = document.querySelector(".newstab").children
    for (let i = 0; i < liObj.length; i++) {
      liObj[i].onclick = function () {
        for (let j = 0; j < liObj.length; j++) {
          liObj[j].className = ""
        }
        liObj[i].setAttribute("class", "newscurrent")
        for (let j = 0; j < newstabObj.length; j++) {
          newstabObj[j].style.display = "none"
        }
        newstabObj[i].style.display = "block"
      }
    }
  }
  tabClick()
  // 点击回到头部
  const clickBackHead = () => {
    
  }
  // 原来的想法现在被删除了
  /* // 搜索框的关闭的点击事件

  // 轮播图的序列点的生成 和 点的点击，鼠标进入和离开事件
  for (let i = 0; i < 4; i++) {
      let li = document.createElement("li")
      document.getElementById("pager_list").appendChild(li)
  }
  // 点击事件
  let lis = document.getElementById("pager_list").children
  // 被点击点的序号标志
  let clickflag = 0
  for (let i = 0; i < lis.length; i++) {
    lis[i].onclick = function () {
      clickflag = i
      lis[i].style.background = "#12b7de"
      for (let j = 0; j < lis.length; j++) {
        if (i === j) {
          continue
        } else {
          lis[j].style.background = "#fff"
        }
      }
    }
  }
  // 鼠标进入事件
  for (let i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function () {
      lis[i].style.opacity = "1"
      lis[i].style.background = "#12b7de"
    }
  }
  // 鼠标离开事件
  for (let i = 0 ; i < lis.length; i++) {
    lis[i].onmouseout = function () {
      if (i !== clickflag) {
        lis[i].style.opacity = "1"
        lis[i].style.background = "#fff"
      }

    }
  }*/
}
