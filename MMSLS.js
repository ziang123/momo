const MMSLS = [
    "https://www.maimemo.com/share/page?uid=32529553&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=373d5325458ec0f0ea9a5d02f62f8d8b",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=373d5325458ec0f0ea9a5d02f62f8d8b",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=373d5325458ec0f0ea9a5d02f62f8d8b",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=373d5325458ec0f0ea9a5d02f62f8d8b",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=373d5325458ec0f0ea9a5d02f62f8d8b",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=373d5325458ec0f0ea9a5d02f62f8d8b",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=373d5325458ec0f0ea9a5d02f62f8d8b",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=373d5325458ec0f0ea9a5d02f62f8d8b",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=373d5325458ec0f0ea9a5d02f62f8d8b",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=373d5325458ec0f0ea9a5d02f62f8d8b",
    "https://www.maimemo.com/share/page?uid=32529553&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=373d5325458ec0f0ea9a5d02f62f8d8b",
    
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
