const MMSLS = [
    "https://www.maimemo.com/share/page?uid=32529553&pid=1df5f3e7566c3a5bee70b3d1cba6a275&tid=7728c4727122f9d29deb405a0ef6bcd9",
    "https://www.maimemo.com/share/page?uid=32529553&pid=1df5f3e7566c3a5bee70b3d1cba6a275&tid=7728c4727122f9d29deb405a0ef6bcd9",
    "https://www.maimemo.com/share/page?uid=32529553&pid=1df5f3e7566c3a5bee70b3d1cba6a275&tid=7728c4727122f9d29deb405a0ef6bcd9",
    "https://www.maimemo.com/share/page?uid=32529553&pid=1df5f3e7566c3a5bee70b3d1cba6a275&tid=7728c4727122f9d29deb405a0ef6bcd9",
    "https://www.maimemo.com/share/page?uid=32529553&pid=1df5f3e7566c3a5bee70b3d1cba6a275&tid=7728c4727122f9d29deb405a0ef6bcd9",
    "https://www.maimemo.com/share/page?uid=32529553&pid=1df5f3e7566c3a5bee70b3d1cba6a275&tid=7728c4727122f9d29deb405a0ef6bcd9",
    "https://www.maimemo.com/share/page?uid=32529553&pid=1df5f3e7566c3a5bee70b3d1cba6a275&tid=7728c4727122f9d29deb405a0ef6bcd9",
    "https://www.maimemo.com/share/page?uid=32529553&pid=1df5f3e7566c3a5bee70b3d1cba6a275&tid=7728c4727122f9d29deb405a0ef6bcd9",
    "https://www.maimemo.com/share/page?uid=32529553&pid=1df5f3e7566c3a5bee70b3d1cba6a275&tid=7728c4727122f9d29deb405a0ef6bcd9",
    "https://www.maimemo.com/share/page?uid=32529553&pid=1df5f3e7566c3a5bee70b3d1cba6a275&tid=7728c4727122f9d29deb405a0ef6bcd9",
    "https://www.maimemo.com/share/page?uid=32529553&pid=1df5f3e7566c3a5bee70b3d1cba6a275&tid=7728c4727122f9d29deb405a0ef6bcd9",
    
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
