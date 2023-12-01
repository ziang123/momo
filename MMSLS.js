/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    "https://www.maimemo.com/share/page?tid=6c38676c7e39b523a2e6c2e8dd2599cb&uid=32529553&pid=1bf25d8bf75c3fa500a13ed9b6cc7793",
    "https://www.maimemo.com/share/page?tid=6c38676c7e39b523a2e6c2e8dd2599cb&uid=32529553&pid=1bf25d8bf75c3fa500a13ed9b6cc7793",
    "https://www.maimemo.com/share/page?tid=6c38676c7e39b523a2e6c2e8dd2599cb&uid=32529553&pid=1bf25d8bf75c3fa500a13ed9b6cc7793",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
*/
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    "https://www.maimemo.com/share/page?uid=32529553&pid=fe5003e1b151e64387b8875c72fab5d2&tid=78820a52ed3c233d3ef2f06f5c9d8f56",
    
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
