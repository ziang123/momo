const MMSLS = [
    "https://www.maimemo.com/share/page?uid=32529553&pid=ca61e29648691a4736dab4b5837e55a4&tid=d04f02c15ab0e1dd009ec9d4ff179cb3",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ca61e29648691a4736dab4b5837e55a4&tid=d04f02c15ab0e1dd009ec9d4ff179cb3",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ca61e29648691a4736dab4b5837e55a4&tid=d04f02c15ab0e1dd009ec9d4ff179cb3",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ca61e29648691a4736dab4b5837e55a4&tid=d04f02c15ab0e1dd009ec9d4ff179cb3",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ca61e29648691a4736dab4b5837e55a4&tid=d04f02c15ab0e1dd009ec9d4ff179cb3",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ca61e29648691a4736dab4b5837e55a4&tid=d04f02c15ab0e1dd009ec9d4ff179cb3",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ca61e29648691a4736dab4b5837e55a4&tid=d04f02c15ab0e1dd009ec9d4ff179cb3",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ca61e29648691a4736dab4b5837e55a4&tid=d04f02c15ab0e1dd009ec9d4ff179cb3",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ca61e29648691a4736dab4b5837e55a4&tid=d04f02c15ab0e1dd009ec9d4ff179cb3",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ca61e29648691a4736dab4b5837e55a4&tid=d04f02c15ab0e1dd009ec9d4ff179cb3",
    "https://www.maimemo.com/share/page?uid=32529553&pid=ca61e29648691a4736dab4b5837e55a4&tid=d04f02c15ab0e1dd009ec9d4ff179cb3",
    
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
