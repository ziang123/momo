const MMSLS = [
    "https://www.maimemo.com/share/page?uid=32529553&pid=c66517ff3b691ba6d65c1f79554ac902&tid=d18b14d72bb8cd95be201aca27a50f74",
    "https://www.maimemo.com/share/page?uid=32529553&pid=c66517ff3b691ba6d65c1f79554ac902&tid=d18b14d72bb8cd95be201aca27a50f74",
    "https://www.maimemo.com/share/page?uid=32529553&pid=c66517ff3b691ba6d65c1f79554ac902&tid=d18b14d72bb8cd95be201aca27a50f74",
    "https://www.maimemo.com/share/page?uid=32529553&pid=c66517ff3b691ba6d65c1f79554ac902&tid=d18b14d72bb8cd95be201aca27a50f74",
    "https://www.maimemo.com/share/page?uid=32529553&pid=c66517ff3b691ba6d65c1f79554ac902&tid=d18b14d72bb8cd95be201aca27a50f74",
    "https://www.maimemo.com/share/page?uid=32529553&pid=c66517ff3b691ba6d65c1f79554ac902&tid=d18b14d72bb8cd95be201aca27a50f74",
    "https://www.maimemo.com/share/page?uid=32529553&pid=c66517ff3b691ba6d65c1f79554ac902&tid=d18b14d72bb8cd95be201aca27a50f74",
    "https://www.maimemo.com/share/page?uid=32529553&pid=c66517ff3b691ba6d65c1f79554ac902&tid=d18b14d72bb8cd95be201aca27a50f74",
    "https://www.maimemo.com/share/page?uid=32529553&pid=c66517ff3b691ba6d65c1f79554ac902&tid=d18b14d72bb8cd95be201aca27a50f74",
    "https://www.maimemo.com/share/page?uid=32529553&pid=c66517ff3b691ba6d65c1f79554ac902&tid=d18b14d72bb8cd95be201aca27a50f74",
    "https://www.maimemo.com/share/page?uid=32529553&pid=c66517ff3b691ba6d65c1f79554ac902&tid=d18b14d72bb8cd95be201aca27a50f74",
    
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
