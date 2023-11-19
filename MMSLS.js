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
    "https://www.maimemo.com/share/page?tid=25e12791e26ad81f01c4f91da51d9f85&uid=32529553&pid=5e93a0a0c120398c3f43056f2003fbad",
    "https://www.maimemo.com/share/page?tid=25e12791e26ad81f01c4f91da51d9f85&uid=32529553&pid=5e93a0a0c120398c3f43056f2003fbad",
    "https://www.maimemo.com/share/page?tid=25e12791e26ad81f01c4f91da51d9f85&uid=32529553&pid=5e93a0a0c120398c3f43056f2003fbad",
    "https://www.maimemo.com/share/page?tid=25e12791e26ad81f01c4f91da51d9f85&uid=32529553&pid=5e93a0a0c120398c3f43056f2003fbad",
    
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
