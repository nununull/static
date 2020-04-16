let timerList = [];

const APP = {
    DATA: {
        scrollInfoVOList: function () {

            let scrollInfoVOList = [];

            scrollInfoVOList.push({msg: "点我😘帮忙点下广告噢~", url: "https://mp.weixin.qq.com/s/kTaYpWRRxzBYN4lSH5NfMQ"},
                {msg: "每天点一次就可以了噢~", url: "https://mp.weixin.qq.com/s/QeyeyyKbR6eZ-LcqKKYShQ"},
                {msg: "谢谢亲啦~~（づ￣3￣）づ╭❤～", url: "https://mp.weixin.qq.com/s/omn3j5JBc-EzJY-7B8ysEg"},
                {msg: "♥看这里♥", url: "https://mp.weixin.qq.com/s/_09N7VoE7Wb-kjAUD0v-sw"},
                {msg: "这是一条推荐~", url: "https://mp.weixin.qq.com/s/-GOU2rp-AbfNl96edjF81g"},
                {msg: "推荐1", url: "https://mp.weixin.qq.com/s/vD1EA07mgR5U12JiOSWdPQ"},
                {msg: "推荐2", url: "https://mp.weixin.qq.com/s/L0EJZ67drY7LiwfBc0PuZA"},
                {msg: "推荐3", url: "https://mp.weixin.qq.com/s/F8spwjbtIZ-PbK-17tlG5Q"},
                {msg: "推荐4", url: "https://mp.weixin.qq.com/s/HuRJ1yMXG-h-NBtEuRvqSg"},
                {msg: "每天点一次就可以了噢~", url: "https://mp.weixin.qq.com/s/AunvipMAmM7vFGz-cII5Bg"},
            );

            return scrollInfoVOList;
        }
    },
    INIT: {
        initFunction: function () {

            APP.SERVICE.scrollInfoTimer();
        }
    },
    SERVICE: {
        scrollInfoTimer: function () {

            // 拿到数据
            let scrollInfoVOList = APP.DATA.scrollInfoVOList();

            if (!scrollInfoVOList || scrollInfoVOList.length <= 0) {
                return;
            }

            // 增加初始控件
            let scrollInfoNode = document.getElementById("scrollInfo");

            let a1 = "<a href='"+ scrollInfoVOList[0].url +"' target='_blank' rel='nofollow noopener'>"+ scrollInfoVOList[0].msg +"</a>";
            let div1 = document.createElement("div");
            div1.innerHTML = a1;
            scrollInfoNode.appendChild(div1);

            // 显示控件
            $($('.scroll-info')[0]).removeClass('hide');

            timerList[0] = setInterval(function () {
                APP.SERVICE.scrollInfoShow(scrollInfoVOList);
            }, 2000);
        },
        scrollInfoShow: function (scrollInfoVOList) {
            let scrollInfoNode = document.getElementById("scrollInfo");

            if (!scrollInfoNode) {
                return;
            }

            let index = scrollInfoNode.index ? scrollInfoNode.index : 0;

            let nextIndex = 0;

            if (scrollInfoVOList.length <= index) {
                nextIndex = 0;
            }

            if (scrollInfoVOList.length >= index + 2) {
                nextIndex = index + 1;
            }

            scrollInfoNode.index = nextIndex;

            let nextScrollInfoVO = scrollInfoVOList[nextIndex];

            // 获取节点下的子节点
            if (scrollInfoNode.childNodes.length === 0) {

                let scrollInfoVO = scrollInfoVOList[index];

                let a2 = "<a href='"+ nextScrollInfoVO.url +"' target='_blank' rel='nofollow noopener'>"+ nextScrollInfoVO.msg +"</a>";

                let div2 = document.createElement("div");
                div2.innerHTML = a2;

                scrollInfoNode.appendChild(div2);
            } else {
                // 更新标签值中的属性
                scrollInfoNode.childNodes[0].childNodes[0].href = nextScrollInfoVO.url;
                scrollInfoNode.childNodes[0].childNodes[0].text = nextScrollInfoVO.msg;
                scrollInfoNode.appendChild(scrollInfoNode.childNodes[0]);
                scrollInfoNode.scrollTop = 0;
            }

            scrollInfoNode.index = nextIndex;
            clearInterval(timerList[1]);
            // 在展示X秒之后 向上移动
            timerList[1] = setInterval(function () {

                document.getElementById("scrollInfo").scrollTop++;

            }, 30);
        }
    }
};
// 页面加载完成后，执行该方法
window.onload = function () {
    APP.INIT.initFunction();
};