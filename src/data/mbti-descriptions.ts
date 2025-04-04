import { MBTIDescriptions } from '../types/mbti';

export const mbtiDescriptions: MBTIDescriptions = {
  INFP: {
    title: "治愈者",
    description: "理想主义者，总是寻找善意和可能性。你富有同情心，渴望帮助他人实现潜力。",
    characteristics: [
      "富有同理心和理解力",
      "重视个人价值观和信念",
      "创造力强，喜欢探索新想法",
      "追求真实和意义",
      "倾向于理想化思维"
    ],
    careerSuggestions: [
      "作家/诗人",
      "心理咨询师",
      "艺术家",
      "教师",
      "社会工作者"
    ],
    interactionTips: {
      bestTypes: ["ENFJ", "ENTJ"],
      tips: [
        "需要个人空间和独处时间",
        "重视真诚的沟通和深度对话",
        "避免过于直接的批评"
      ]
    },
    developmentAreas: {
      strengths: [
        "富有创造力和想象力",
        "对他人富有同情心",
        "坚持个人价值观"
      ],
      improvements: [
        "可能过于理想化",
        "有时难以做出决定",
        "可能过于敏感"
      ],
      suggestions: [
        "培养实践能力",
        "学会设定界限",
        "发展决策能力"
      ]
    },
    imageUrl: "/images/mbti/infp.png"
  },
  INTJ: {
    title: "策略家",
    description: "具有创新思维的战略家，擅长制定系统和长期计划。你追求知识和能力的完善。",
    characteristics: [
      "独立思考，追求完美",
      "擅长战略规划",
      "重视效率和逻辑",
      "创新思维",
      "追求持续进步"
    ],
    careerSuggestions: [
      "科学家",
      "战略分析师",
      "系统架构师",
      "投资顾问",
      "企业家"
    ],
    interactionTips: {
      bestTypes: ["ENFP", "ENTP"],
      tips: [
        "需要独立思考的空间",
        "重视理性和逻辑的交流",
        "避免过多的社交活动"
      ]
    },
    developmentAreas: {
      strengths: [
        "战略思维能力强",
        "追求持续改进",
        "独立性强"
      ],
      improvements: [
        "可能显得过于疏离",
        "有时过于完美主义",
        "可能忽视他人感受"
      ],
      suggestions: [
        "培养情感表达能力",
        "学会接纳不完美",
        "发展人际交往技能"
      ]
    },
    imageUrl: "/images/mbti/intj.png"
  },
  ENFJ: {
    title: "导师",
    description: "富有魅力的领导者，善于激发他人潜能。你关注他人的成长和发展。",
    characteristics: [
      "天生的领导者",
      "善于激励他人",
      "富有同理心",
      "重视和谐关系",
      "追求个人成长"
    ],
    careerSuggestions: [
      "教育工作者",
      "人力资源经理",
      "职业教练",
      "非营利组织领导",
      "公共关系专家"
    ],
    interactionTips: {
      bestTypes: ["INFP", "ISFP"],
      tips: [
        "给予他人成长空间",
        "避免过度操心",
        "保持适度距离"
      ]
    },
    developmentAreas: {
      strengths: [
        "领导能力强",
        "善于沟通",
        "富有同理心"
      ],
      improvements: [
        "可能过度理想化",
        "有时过于敏感",
        "可能忽视自身需求"
      ],
      suggestions: [
        "学会设定界限",
        "关注自身需求",
        "培养独立决策能力"
      ]
    },
    imageUrl: "/images/mbti/enfj.png"
  },
  ENTJ: {
    title: "指挥官",
    description: "天生的领袖，擅长制定计划并带领团队实现目标。你追求效率和卓越。",
    characteristics: [
      "果断自信",
      "擅长组织领导",
      "追求效率",
      "目标导向",
      "重视能力"
    ],
    careerSuggestions: [
      "企业高管",
      "管理咨询顾问",
      "项目经理",
      "创业者",
      "政策制定者"
    ],
    interactionTips: {
      bestTypes: ["INTP", "INFP"],
      tips: [
        "注意倾听他人意见",
        "培养耐心",
        "关注情感需求"
      ]
    },
    developmentAreas: {
      strengths: [
        "领导力出众",
        "决策能力强",
        "执行力强"
      ],
      improvements: [
        "可能过于专制",
        "有时缺乏耐心",
        "可能忽视他人感受"
      ],
      suggestions: [
        "培养同理心",
        "提高情商",
        "学会倾听"
      ]
    },
    imageUrl: "/images/mbti/entj.png"
  },
  INTP: {
    title: "思想家",
    description: "创新的逻辑思考者，热爱探索理论和抽象概念。你追求知识和理解。",
    characteristics: [
      "逻辑思维能力强",
      "创新思维",
      "追求知识",
      "独立性强",
      "重视客观性"
    ],
    careerSuggestions: [
      "软件工程师",
      "数据科学家",
      "研究员",
      "系统分析师",
      "哲学家"
    ],
    interactionTips: {
      bestTypes: ["ENTJ", "ESTJ"],
      tips: [
        "需要独立思考时间",
        "重视理性讨论",
        "避免过多社交压力"
      ]
    },
    developmentAreas: {
      strengths: [
        "分析能力强",
        "创新思维",
        "追求真理"
      ],
      improvements: [
        "可能过于理论化",
        "有时忽视细节",
        "可能缺乏行动力"
      ],
      suggestions: [
        "培养实践能力",
        "提高执行力",
        "发展社交技能"
      ]
    },
    imageUrl: "/images/mbti/intp.png"
  },
  ENTP: {
    title: "辩论家",
    description: "充满创意的思考者，善于发现新的可能性。你喜欢挑战和创新。",
    characteristics: [
      "思维敏捷",
      "创新能力强",
      "善于辩论",
      "追求可能性",
      "灵活多变"
    ],
    careerSuggestions: [
      "企业家",
      "创新顾问",
      "市场策略师",
      "发明家",
      "律师"
    ],
    interactionTips: {
      bestTypes: ["INTJ", "INFJ"],
      tips: [
        "注意他人感受",
        "完成已开始的项目",
        "培养耐心"
      ]
    },
    developmentAreas: {
      strengths: [
        "创新能力强",
        "思维灵活",
        "适应力强"
      ],
      improvements: [
        "可能缺乏持续性",
        "有时过于争辩",
        "可能忽视细节"
      ],
      suggestions: [
        "提高执行力",
        "培养同理心",
        "注重细节"
      ]
    },
    imageUrl: "/images/mbti/entp.png"
  },
  INFJ: {
    title: "提倡者",
    description: "富有洞察力的理想主义者，致力于改善世界。你关注他人的成长和发展。",
    characteristics: [
      "洞察力强",
      "理想主义",
      "追求意义",
      "富有同理心",
      "重视真诚"
    ],
    careerSuggestions: [
      "心理治疗师",
      "作家",
      "人权活动家",
      "职业顾问",
      "艺术治疗师"
    ],
    interactionTips: {
      bestTypes: ["ENTP", "ENFP"],
      tips: [
        "需要独处时间",
        "避免过度完美主义",
        "设定健康界限"
      ]
    },
    developmentAreas: {
      strengths: [
        "洞察力强",
        "富有同理心",
        "追求完美"
      ],
      improvements: [
        "可能过于理想化",
        "有时过度敏感",
        "可能过于完美主义"
      ],
      suggestions: [
        "接纳不完美",
        "培养实践能力",
        "平衡理想与现实"
      ]
    },
    imageUrl: "/images/mbti/infj.png"
  },
  ENFP: {
    title: "冒险家",
    description: "热情洋溢的创意者，善于发现生活中的可能性。你追求自由和创新。",
    characteristics: [
      "充满热情",
      "创意丰富",
      "适应力强",
      "重视自由",
      "善于沟通"
    ],
    careerSuggestions: [
      "创意总监",
      "演艺工作者",
      "市场营销",
      "职业教练",
      "自由撰稿人"
    ],
    interactionTips: {
      bestTypes: ["INTJ", "INFJ"],
      tips: [
        "保持专注",
        "完成已开始的项目",
        "设定实际目标"
      ]
    },
    developmentAreas: {
      strengths: [
        "创造力强",
        "适应力强",
        "人际关系好"
      ],
      improvements: [
        "可能缺乏专注",
        "有时过于理想化",
        "可能难以做决定"
      ],
      suggestions: [
        "提高执行力",
        "培养专注力",
        "发展决策能力"
      ]
    },
    imageUrl: "/images/mbti/enfp.png"
  },
  ISTJ: {
    title: "检查者",
    description: "负责任的实践者，重视传统和秩序。你追求稳定和可靠。",
    characteristics: [
      "责任心强",
      "注重细节",
      "重视传统",
      "实践能力强",
      "追求稳定"
    ],
    careerSuggestions: [
      "会计师",
      "项目经理",
      "质量检查员",
      "军警人员",
      "行政管理"
    ],
    interactionTips: {
      bestTypes: ["ESFP", "ESTP"],
      tips: [
        "保持开放心态",
        "接纳新想法",
        "培养灵活性"
      ]
    },
    developmentAreas: {
      strengths: [
        "组织能力强",
        "可靠稳重",
        "注重细节"
      ],
      improvements: [
        "可能过于保守",
        "有时缺乏灵活性",
        "可能抗拒变化"
      ],
      suggestions: [
        "培养创新思维",
        "提高适应能力",
        "开放新观点"
      ]
    },
    imageUrl: "/images/mbti/istj.png"
  },
  ISFJ: {
    title: "守护者",
    description: "富有同情心的保护者，致力于服务他人。你重视和谐与稳定。",
    characteristics: [
      "富有同情心",
      "责任心强",
      "重视和谐",
      "注重细节",
      "善于照顾他人"
    ],
    careerSuggestions: [
      "护士",
      "小学教师",
      "社会工作者",
      "行政助理",
      "客户服务"
    ],
    interactionTips: {
      bestTypes: ["ESFP", "ESTP"],
      tips: [
        "学会说不",
        "关注自身需求",
        "设定界限"
      ]
    },
    developmentAreas: {
      strengths: [
        "关怀他人",
        "可靠负责",
        "注重细节"
      ],
      improvements: [
        "可能过度牺牲",
        "有时难以拒绝",
        "可能过于保守"
      ],
      suggestions: [
        "培养自我关怀",
        "提高决断力",
        "接纳变化"
      ]
    },
    imageUrl: "/images/mbti/isfj.png"
  },
  ESTJ: {
    title: "执行者",
    description: "实践的组织者，重视效率和结果。你追求秩序和规范。",
    characteristics: [
      "组织能力强",
      "重视效率",
      "实践导向",
      "直接坦率",
      "追求秩序"
    ],
    careerSuggestions: [
      "项目经理",
      "财务总监",
      "军事领导",
      "法官",
      "企业管理者"
    ],
    interactionTips: {
      bestTypes: ["INTP", "ISFP"],
      tips: [
        "培养耐心",
        "注意他人感受",
        "保持灵活性"
      ]
    },
    developmentAreas: {
      strengths: [
        "执行力强",
        "组织能力好",
        "重视效率"
      ],
      improvements: [
        "可能过于固执",
        "有时过于直接",
        "可能缺乏灵活性"
      ],
      suggestions: [
        "培养同理心",
        "提高适应能力",
        "发展创新思维"
      ]
    },
    imageUrl: "/images/mbti/estj.png"
  },
  ESFJ: {
    title: "供给者",
    description: "热心的协调者，致力于帮助他人。你重视和谐与合作。",
    characteristics: [
      "善于照顾他人",
      "组织能力强",
      "重视和谐",
      "责任心强",
      "善于社交"
    ],
    careerSuggestions: [
      "人力资源",
      "销售代表",
      "医疗保健",
      "活动策划",
      "客户关系"
    ],
    interactionTips: {
      bestTypes: ["ISFP", "ISTP"],
      tips: [
        "接纳不同意见",
        "关注自身需求",
        "培养独立性"
      ]
    },
    developmentAreas: {
      strengths: [
        "人际关系好",
        "组织能力强",
        "服务精神好"
      ],
      improvements: [
        "可能过度依赖他人",
        "有时过于敏感",
        "可能难以接受批评"
      ],
      suggestions: [
        "培养独立性",
        "提高抗压能力",
        "发展自我认同"
      ]
    },
    imageUrl: "/images/mbti/esfj.png"
  },
  ISTP: {
    title: "工匠",
    description: "灵活的问题解决者，擅长处理危机。你追求效率和实用性。",
    characteristics: [
      "动手能力强",
      "灵活适应",
      "独立思考",
      "冷静理性",
      "追求效率"
    ],
    careerSuggestions: [
      "工程师",
      "技术专家",
      "机械师",
      "运动员",
      "紧急救援"
    ],
    interactionTips: {
      bestTypes: ["ESFJ", "ENFJ"],
      tips: [
        "表达情感",
        "保持耐心",
        "建立长期关系"
      ]
    },
    developmentAreas: {
      strengths: [
        "实践能力强",
        "问题解决好",
        "应变能力强"
      ],
      improvements: [
        "可能缺乏耐心",
        "有时过于冷漠",
        "可能难以承诺"
      ],
      suggestions: [
        "培养情感表达",
        "提高人际技能",
        "发展长期规划"
      ]
    },
    imageUrl: "/images/mbti/istp.png"
  },
  ISFP: {
    title: "艺术家",
    description: "灵活的艺术家，享受当下的美好。你追求自由和美感。",
    characteristics: [
      "艺术感强",
      "重视自由",
      "善于感受",
      "适应力强",
      "追求和谐"
    ],
    careerSuggestions: [
      "艺术家",
      "设计师",
      "音乐家",
      "厨师",
      "美容师"
    ],
    interactionTips: {
      bestTypes: ["ENFJ", "ESFJ"],
      tips: [
        "表达想法",
        "建立自信",
        "设定目标"
      ]
    },
    developmentAreas: {
      strengths: [
        "艺术天赋",
        "感受力强",
        "适应力好"
      ],
      improvements: [
        "可能缺乏计划",
        "有时过于敏感",
        "可能难以决策"
      ],
      suggestions: [
        "培养规划能力",
        "提高自信心",
        "发展决策能力"
      ]
    },
    imageUrl: "/images/mbti/isfp.png"
  },
  ESTP: {
    title: "冒险家",
    description: "灵活的行动者，善于解决即时问题。你追求刺激和自由。",
    characteristics: [
      "行动力强",
      "善于应变",
      "实用主义",
      "喜欢冒险",
      "重视现实"
    ],
    careerSuggestions: [
      "企业家",
      "销售",
      "运动员",
      "警察",
      "紧急救援"
    ],
    interactionTips: {
      bestTypes: ["ISFJ", "ISTJ"],
      tips: [
        "考虑长期影响",
        "注意细节",
        "培养耐心"
      ]
    },
    developmentAreas: {
      strengths: [
        "行动力强",
        "应变能力好",
        "解决问题快"
      ],
      improvements: [
        "可能缺乏规划",
        "有时过于冲动",
        "可能忽视他人感受"
      ],
      suggestions: [
        "培养规划能力",
        "提高耐心",
        "发展同理心"
      ]
    },
    imageUrl: "/images/mbti/estp.png"
  },
  ESFP: {
    title: "表演者",
    description: "热情的表演者，享受生活的乐趣。你追求快乐和自由。",
    characteristics: [
      "活力充沛",
      "善于社交",
      "适应力强",
      "乐观开朗",
      "重视享受"
    ],
    careerSuggestions: [
      "演艺人员",
      "销售代表",
      "活动策划",
      "旅游顾问",
      "公关专员"
    ],
    interactionTips: {
      bestTypes: ["ISFJ", "ISTJ"],
      tips: [
        "培养专注力",
        "完成承诺",
        "考虑后果"
      ]
    },
    developmentAreas: {
      strengths: [
        "人际关系好",
        "适应力强",
        "乐观积极"
      ],
      improvements: [
        "可能缺乏计划",
        "有时过于冲动",
        "可能难以专注"
      ],
      suggestions: [
        "培养规划能力",
        "提高责任心",
        "发展专注力"
      ]
    },
    imageUrl: "/images/mbti/esfp.png"
  }
}; 