const MMSLS = [
    "https://www.maimemo.com/share/page?uid=32529553&pid=66af3f381486ee94f6d672b388932371&tid=6d78d8adaefb68d8874ef3ec6f7e5222",
    "https://www.maimemo.com/share/page?uid=32529553&pid=66af3f381486ee94f6d672b388932371&tid=6d78d8adaefb68d8874ef3ec6f7e5222",
    "https://www.maimemo.com/share/page?uid=32529553&pid=66af3f381486ee94f6d672b388932371&tid=6d78d8adaefb68d8874ef3ec6f7e5222",
    "https://www.maimemo.com/share/page?uid=32529553&pid=66af3f381486ee94f6d672b388932371&tid=6d78d8adaefb68d8874ef3ec6f7e5222",
    "https://www.maimemo.com/share/page?uid=32529553&pid=66af3f381486ee94f6d672b388932371&tid=6d78d8adaefb68d8874ef3ec6f7e5222",
    "https://www.maimemo.com/share/page?uid=32529553&pid=66af3f381486ee94f6d672b388932371&tid=6d78d8adaefb68d8874ef3ec6f7e5222",
    "https://www.maimemo.com/share/page?uid=32529553&pid=66af3f381486ee94f6d672b388932371&tid=6d78d8adaefb68d8874ef3ec6f7e5222",
    "https://www.maimemo.com/share/page?uid=32529553&pid=66af3f381486ee94f6d672b388932371&tid=6d78d8adaefb68d8874ef3ec6f7e5222",
    "https://www.maimemo.com/share/page?uid=32529553&pid=66af3f381486ee94f6d672b388932371&tid=6d78d8adaefb68d8874ef3ec6f7e5222",
    "https://www.maimemo.com/share/page?uid=32529553&pid=66af3f381486ee94f6d672b388932371&tid=6d78d8adaefb68d8874ef3ec6f7e5222",
    "https://www.maimemo.com/share/page?uid=32529553&pid=66af3f381486ee94f6d672b388932371&tid=6d78d8adaefb68d8874ef3ec6f7e5222",
    
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
