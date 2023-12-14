const MMSLS = [
    "https://www.maimemo.com/share/page?uid=32529553&pid=ffa916c578d2704c198e44e89c8eb24c&tid=0f6114c53408f956576031e2318ef612",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ffa916c578d2704c198e44e89c8eb24c&tid=0f6114c53408f956576031e2318ef612",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ffa916c578d2704c198e44e89c8eb24c&tid=0f6114c53408f956576031e2318ef612",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ffa916c578d2704c198e44e89c8eb24c&tid=0f6114c53408f956576031e2318ef612",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ffa916c578d2704c198e44e89c8eb24c&tid=0f6114c53408f956576031e2318ef612",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ffa916c578d2704c198e44e89c8eb24c&tid=0f6114c53408f956576031e2318ef612",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ffa916c578d2704c198e44e89c8eb24c&tid=0f6114c53408f956576031e2318ef612",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ffa916c578d2704c198e44e89c8eb24c&tid=0f6114c53408f956576031e2318ef612",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ffa916c578d2704c198e44e89c8eb24c&tid=0f6114c53408f956576031e2318ef612",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ffa916c578d2704c198e44e89c8eb24c&tid=0f6114c53408f956576031e2318ef612",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ffa916c578d2704c198e44e89c8eb24c&tid=0f6114c53408f956576031e2318ef612",
    
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
