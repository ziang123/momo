const MMSLS = [
    "https://www.maimemo.com/share/page?uid=32529553&pid=7094feee0ff3461cb9ef7dd1e513759e&tid=f0daae3ddc6fbd440842bf4d033879af",
    "https://www.maimemo.com/share/page?uid=32529553&pid=7094feee0ff3461cb9ef7dd1e513759e&tid=f0daae3ddc6fbd440842bf4d033879af",
    "https://www.maimemo.com/share/page?uid=32529553&pid=7094feee0ff3461cb9ef7dd1e513759e&tid=f0daae3ddc6fbd440842bf4d033879af",
    "https://www.maimemo.com/share/page?uid=32529553&pid=7094feee0ff3461cb9ef7dd1e513759e&tid=f0daae3ddc6fbd440842bf4d033879af",
    "https://www.maimemo.com/share/page?uid=32529553&pid=7094feee0ff3461cb9ef7dd1e513759e&tid=f0daae3ddc6fbd440842bf4d033879af",
    "https://www.maimemo.com/share/page?uid=32529553&pid=7094feee0ff3461cb9ef7dd1e513759e&tid=f0daae3ddc6fbd440842bf4d033879af",
    "https://www.maimemo.com/share/page?uid=32529553&pid=7094feee0ff3461cb9ef7dd1e513759e&tid=f0daae3ddc6fbd440842bf4d033879af",
    "https://www.maimemo.com/share/page?uid=32529553&pid=7094feee0ff3461cb9ef7dd1e513759e&tid=f0daae3ddc6fbd440842bf4d033879af",
    "https://www.maimemo.com/share/page?uid=32529553&pid=7094feee0ff3461cb9ef7dd1e513759e&tid=f0daae3ddc6fbd440842bf4d033879af",
    "https://www.maimemo.com/share/page?uid=32529553&pid=7094feee0ff3461cb9ef7dd1e513759e&tid=f0daae3ddc6fbd440842bf4d033879af",
    "https://www.maimemo.com/share/page?uid=32529553&pid=7094feee0ff3461cb9ef7dd1e513759e&tid=f0daae3ddc6fbd440842bf4d033879af",
    
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
