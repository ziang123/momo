const MMSLS = [
    "https://www.maimemo.com/share/page?uid=32529553&pid=6b54a142186dc75c046d87bbb612c5d8&tid=00a0f75fa98c6f88b903db6bb56463ec",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6b54a142186dc75c046d87bbb612c5d8&tid=00a0f75fa98c6f88b903db6bb56463ec",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6b54a142186dc75c046d87bbb612c5d8&tid=00a0f75fa98c6f88b903db6bb56463ec",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6b54a142186dc75c046d87bbb612c5d8&tid=00a0f75fa98c6f88b903db6bb56463ec",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6b54a142186dc75c046d87bbb612c5d8&tid=00a0f75fa98c6f88b903db6bb56463ec",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6b54a142186dc75c046d87bbb612c5d8&tid=00a0f75fa98c6f88b903db6bb56463ec",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6b54a142186dc75c046d87bbb612c5d8&tid=00a0f75fa98c6f88b903db6bb56463ec",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6b54a142186dc75c046d87bbb612c5d8&tid=00a0f75fa98c6f88b903db6bb56463ec",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6b54a142186dc75c046d87bbb612c5d8&tid=00a0f75fa98c6f88b903db6bb56463ec",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6b54a142186dc75c046d87bbb612c5d8&tid=00a0f75fa98c6f88b903db6bb56463ec",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6b54a142186dc75c046d87bbb612c5d8&tid=00a0f75fa98c6f88b903db6bb56463ec",
    
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
