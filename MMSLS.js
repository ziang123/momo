const MMSLS = [
    "https://www.maimemo.com/share/page?uid=32529553&pid=04409beafb458214a07bb655f006cc13&tid=174bba1350f59022919d5791b6582b85",
    "https://www.maimemo.com/share/page?uid=32529553&pid=04409beafb458214a07bb655f006cc13&tid=174bba1350f59022919d5791b6582b85",
    "https://www.maimemo.com/share/page?uid=32529553&pid=04409beafb458214a07bb655f006cc13&tid=174bba1350f59022919d5791b6582b85",
    "https://www.maimemo.com/share/page?uid=32529553&pid=04409beafb458214a07bb655f006cc13&tid=174bba1350f59022919d5791b6582b85",
    "https://www.maimemo.com/share/page?uid=32529553&pid=04409beafb458214a07bb655f006cc13&tid=174bba1350f59022919d5791b6582b85",
    "https://www.maimemo.com/share/page?uid=32529553&pid=04409beafb458214a07bb655f006cc13&tid=174bba1350f59022919d5791b6582b85",
    "https://www.maimemo.com/share/page?uid=32529553&pid=04409beafb458214a07bb655f006cc13&tid=174bba1350f59022919d5791b6582b85",
    "https://www.maimemo.com/share/page?uid=32529553&pid=04409beafb458214a07bb655f006cc13&tid=174bba1350f59022919d5791b6582b85",
    "https://www.maimemo.com/share/page?uid=32529553&pid=04409beafb458214a07bb655f006cc13&tid=174bba1350f59022919d5791b6582b85",
    "https://www.maimemo.com/share/page?uid=32529553&pid=04409beafb458214a07bb655f006cc13&tid=174bba1350f59022919d5791b6582b85",
    "https://www.maimemo.com/share/page?uid=32529553&pid=04409beafb458214a07bb655f006cc13&tid=174bba1350f59022919d5791b6582b85",
    
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
