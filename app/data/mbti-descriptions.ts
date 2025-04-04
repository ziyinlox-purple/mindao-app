interface MBTIDescription {
  title: string;
  description: string;
  characteristics: string[];
  careerSuggestions: string[];
  interactionTips: {
    bestTypes: string[];
    tips: string[];
  };
  developmentAreas: {
    strengths: string[];
    improvements: string[];
    suggestions: string[];
  };
  imageUrl: string;
}

export const mbtiDescriptions: Record<string, MBTIDescription> = {
  'INFP': {
    title: '理想主义者',
    description: '你是一个富有理想主义和深度情感的探索者，追求内心价值与和谐。',
    imageUrl: '/images/mbti/infp.png',
    characteristics: [
      '富有同理心和创造力',
      '重视个人价值观和信念',
      '追求真实和自我表达',
      '善于发现他人的潜力和可能性'
    ],
    careerSuggestions: [
      '作家/编剧 - 发挥你的创造力和深度思考',
      '心理咨询师 - 运用你的同理心帮助他人',
      '艺术家/设计师 - 表达你的独特视角',
      'NGO工作者 - 实现你的理想主义抱负',
      '教育工作者 - 启发他人的潜能'
    ],
    interactionTips: {
      bestTypes: ['ENFJ', 'ENTJ', 'INFJ', 'INTJ'],
      tips: [
        '与思考型人格（T）交流时，尽量提供具体的逻辑依据',
        '与判断型人格（J）合作时，注意设定明确的时间表',
        '在团队中担任创意和人文关怀的角色',
        '寻找能够理解你价值观的深度交流伙伴'
      ]
    },
    developmentAreas: {
      strengths: [
        '强大的创造力和想象力',
        '深刻的同理心',
        '对价值观的坚持',
        '追求真实和成长'
      ],
      improvements: [
        '有时过于理想化',
        '可能忽视现实细节',
        '决策时可能过于感性',
        '容易受情绪影响'
      ],
      suggestions: [
        '培养务实的工作方法，设定可实现的小目标',
        '学习时间管理，提高执行力',
        '在保持理想的同时关注现实可行性',
        '建立情绪管理机制，保持内心平衡'
      ]
    }
  },
  'INTJ': {
    title: '建筑师',
    description: '你是一个具有战略思维的创新者，追求知识和完美。',
    imageUrl: '/images/mbti/intj.png',
    characteristics: [
      '善于系统性思考和规划',
      '追求持续改进和创新',
      '重视效率和逻辑',
      '独立思考，坚持高标准'
    ],
    careerSuggestions: [
      '战略分析师 - 发挥你的系统思维',
      '科学研究员 - 探索创新理论',
      '技术架构师 - 设计复杂系统',
      '投资策略师 - 运用你的分析能力',
      '企业顾问 - 提供战略性建议'
    ],
    interactionTips: {
      bestTypes: ['ENTP', 'ENFP', 'INFP', 'INTP'],
      tips: [
        '与感受型人格（F）交流时，注意表达共情',
        '在团队中担任战略规划的角色',
        '学会适当表达赞赏和认可',
        '保持开放心态，倾听他人观点'
      ]
    },
    developmentAreas: {
      strengths: [
        '出色的战略思维',
        '强大的分析能力',
        '追求卓越的态度',
        '独立的问题解决能力'
      ],
      improvements: [
        '可能显得过于疏离',
        '有时过于完美主义',
        '可能忽视他人感受',
        '不够灵活变通'
      ],
      suggestions: [
        '培养情商，增进人际交往能力',
        '学会在完美和效率之间找到平衡',
        '发展同理心，更好地理解他人',
        '保持开放心态，接受不同观点'
      ]
    }
  },
  'INTP': {
    title: '逻辑学家',
    description: '你是一个富有创造力的思考者，热爱探索理论和可能性。',
    imageUrl: '/images/mbti/intp.png',
    characteristics: [
      '擅长分析复杂问题',
      '追求知识和理解',
      '重视逻辑和准确性',
      '善于发现创新解决方案'
    ],
    careerSuggestions: [
      '软件工程师 - 创造逻辑系统',
      '数据科学家 - 分析复杂数据',
      '研究员 - 探索理论创新',
      '系统分析师 - 解决复杂问题',
      '哲学家/作家 - 探讨深层理论'
    ],
    interactionTips: {
      bestTypes: ['ENTJ', 'ESTJ', 'INFJ', 'ENFJ'],
      tips: [
        '与实践型人格（S）合作时，注意提供具体例子',
        '在团队中承担创新思维的角色',
        '学会简化表达，使想法更容易理解',
        '注意倾听他人的实际需求'
      ]
    },
    developmentAreas: {
      strengths: [
        '优秀的逻辑思维',
        '创新的问题解决能力',
        '对知识的持续追求',
        '独特的观察视角'
      ],
      improvements: [
        '可能过于理论化',
        '容易忽视实际细节',
        '社交互动可能不足',
        '可能难以做出决定'
      ],
      suggestions: [
        '将理论与实践相结合',
        '培养项目管理能力',
        '主动参与社交活动',
        '学习快速决策的方法'
      ]
    }
  },
  'INFJ': {
    title: '提倡者',
    description: '你是一个富有洞察力和同理心的理想主义者，致力于帮助他人。',
    imageUrl: '/images/mbti/infj.png',
    characteristics: [
      '具有强烈的使命感',
      '重视深层的人际连接',
      '追求个人成长和意义',
      '善于理解他人需求'
    ],
    careerSuggestions: [
      '心理治疗师 - 帮助他人成长',
      '职业顾问 - 指导他人发展',
      '非营利组织领导者 - 推动社会变革',
      '作家/艺术家 - 表达深刻见解',
      '人力资源发展专家 - 培养人才'
    ],
    interactionTips: {
      bestTypes: ['ENFP', 'ENTP', 'INFP', 'INTJ'],
      tips: [
        '与外向型人格（E）合作时，注意表达自己的想法',
        '在团队中担任调解者和顾问的角色',
        '学会设立适当的个人界限',
        '分享你的洞察，但不要强求他人认同'
      ]
    },
    developmentAreas: {
      strengths: [
        '深刻的洞察力',
        '强大的同理心',
        '追求完美的理想',
        '良好的写作和表达能力'
      ],
      improvements: [
        '可能过度理想化',
        '容易承担过多责任',
        '可能过于完美主义',
        '有时难以放手'
      ],
      suggestions: [
        '学会设定健康的界限',
        '在理想和现实间找到平衡',
        '培养自我关爱的能力',
        '发展实践性的问题解决能力'
      ]
    }
  },
  'ENFP': {
    title: '探索者',
    description: '你是一个充满热情和创造力的自由灵魂，善于发现新的可能性。',
    imageUrl: '/images/mbti/enfp.png',
    characteristics: [
      '富有同理心和创造力',
      '热爱探索新事物',
      '善于激发他人潜能',
      '追求自由和真实表达'
    ],
    careerSuggestions: [
      '创意总监 - 发挥你的创新思维',
      '企业家 - 追求创新和可能性',
      '培训师/教练 - 激发他人潜能',
      '市场营销专家 - 运用你的感染力',
      '公共关系顾问 - 建立良好人际关系'
    ],
    interactionTips: {
      bestTypes: ['INTJ', 'INFJ', 'ENTJ', 'ENFJ'],
      tips: [
        '与判断型人格（J）合作时，注意遵守时间计划',
        '在团队中发挥创意和激励作用',
        '学会在热情和务实之间找到平衡',
        '善用你的感染力带动团队氛围'
      ]
    },
    developmentAreas: {
      strengths: [
        '出色的创造力和想象力',
        '强大的同理心和感染力',
        '灵活的思维方式',
        '善于激励和启发他人'
      ],
      improvements: [
        '可能过于理想化',
        '注意力容易分散',
        '有时难以坚持完成任务',
        '可能过于感性决策'
      ],
      suggestions: [
        '建立有效的时间管理系统',
        '学会设定实际可行的目标',
        '培养执行力和持续性',
        '在感性和理性之间保持平衡'
      ]
    }
  },
  'ENTP': {
    title: '辩论家',
    description: '你是一个富有创造力的思想家，喜欢挑战传统和探索可能性。',
    imageUrl: '/images/mbti/entp.png',
    characteristics: [
      '思维敏捷，善于辩论',
      '创新思维，勇于挑战',
      '追求知识和理解',
      '灵活应变，善于解决问题'
    ],
    careerSuggestions: [
      '企业战略顾问 - 发挥你的创新思维',
      '创业者 - 开创新的商业模式',
      '律师 - 运用你的辩论技巧',
      '产品经理 - 推动创新发展',
      '科技创新专家 - 探索新技术应用'
    ],
    interactionTips: {
      bestTypes: ['INFJ', 'INTJ', 'ENFJ', 'ENTJ'],
      tips: [
        '与感受型人格（F）交流时，注意照顾他人感受',
        '在团队中担任创新推动者角色',
        '学会倾听和接纳不同观点',
        '平衡批判性思维和建设性建议'
      ]
    },
    developmentAreas: {
      strengths: [
        '卓越的分析能力',
        '创新的问题解决方式',
        '出色的辩论技巧',
        '灵活的应变能力'
      ],
      improvements: [
        '可能过于好辩',
        '容易忽视细节',
        '有时难以坚持到底',
        '可能忽视他人感受'
      ],
      suggestions: [
        '培养同理心和情商',
        '加强执行力和项目管理能力',
        '学会在辩论中保持建设性',
        '注意细节和后续跟进'
      ]
    }
  },
  'ENFJ': {
    title: '教导者',
    description: '你是一个富有魅力和同理心的领导者，致力于帮助他人成长。',
    imageUrl: '/images/mbti/enfj.png',
    characteristics: [
      '天生的领导才能',
      '强烈的同理心',
      '善于激励他人',
      '追求和谐与成长'
    ],
    careerSuggestions: [
      '教育工作者 - 培养下一代',
      '组织发展顾问 - 促进团队成长',
      '非营利组织领导 - 推动社会进步',
      '人力资源总监 - 发展人才潜能',
      '职业生涯规划师 - 指导他人发展'
    ],
    interactionTips: {
      bestTypes: ['INFP', 'INTP', 'ISFP', 'ISTP'],
      tips: [
        '与内向型人格（I）合作时，给予足够的独处空间',
        '在团队中发挥引导和协调作用',
        '学会在关心他人的同时照顾自己',
        '保持开放心态，接纳不同观点'
      ]
    },
    developmentAreas: {
      strengths: [
        '出色的领导能力',
        '强大的人际影响力',
        '优秀的沟通技巧',
        '对他人发展的洞察力'
      ],
      improvements: [
        '可能过度关心他人',
        '有时过于理想主义',
        '容易承担过多责任',
        '可能忽视自身需求'
      ],
      suggestions: [
        '学会设定个人界限',
        '在理想和现实间保持平衡',
        '培养自我关爱的能力',
        '发展务实的决策能力'
      ]
    }
  },
  'ENTJ': {
    title: '指挥官',
    description: '你是一个果断的战略家和领导者，善于规划和实现目标。',
    imageUrl: '/images/mbti/entj.png',
    characteristics: [
      '天生的领导才能',
      '战略性思维',
      '追求效率和成果',
      '善于组织和规划'
    ],
    careerSuggestions: [
      '企业高管 - 领导团队发展',
      '管理咨询顾问 - 优化组织效率',
      '投资银行家 - 把握市场机会',
      '创业者 - 开创事业版图',
      '项目总监 - 统筹重要项目'
    ],
    interactionTips: {
      bestTypes: ['INTP', 'INFP', 'ISTP', 'ISFP'],
      tips: [
        '与感受型人格（F）共事时，注意表达共情',
        '在团队中发挥战略引领作用',
        '学会倾听和接纳不同意见',
        '平衡效率和人文关怀'
      ]
    },
    developmentAreas: {
      strengths: [
        '出色的领导能力',
        '优秀的战略思维',
        '强大的执行力',
        '果断的决策能力'
      ],
      improvements: [
        '可能显得过于专制',
        '有时忽视他人感受',
        '可能过于追求完美',
        '容易显得不耐烦'
      ],
      suggestions: [
        '培养情商和同理心',
        '学会耐心倾听他人',
        '在效率和关怀间找到平衡',
        '发展更包容的领导方式'
      ]
    }
  },
  'ISTJ': {
    title: '检查者',
    description: '你是一个负责任和可靠的实践者，重视传统和秩序。',
    imageUrl: '/images/mbti/istj.png',
    characteristics: [
      '注重细节和准确性',
      '高度负责和可靠',
      '遵守规则和传统',
      '善于组织和执行'
    ],
    careerSuggestions: [
      '财务分析师 - 处理精确数据',
      '项目经理 - 确保有序执行',
      '质量控制专家 - 保证标准执行',
      '审计师 - 维护规范运作',
      '运营经理 - 优化日常运营'
    ],
    interactionTips: {
      bestTypes: ['ESFP', 'ESTP', 'ENFP', 'ENTP'],
      tips: [
        '与感知型人格（P）合作时，保持灵活性',
        '在团队中担任稳定和规范的角色',
        '学会接受新的工作方式',
        '培养对创新想法的开放态度'
      ]
    },
    developmentAreas: {
      strengths: [
        '极强的责任心',
        '出色的组织能力',
        '可靠的执行力',
        '严谨的工作态度'
      ],
      improvements: [
        '可能过于死板',
        '不太适应变化',
        '有时过于保守',
        '可能忽视创新'
      ],
      suggestions: [
        '培养适应变化的能力',
        '学会欣赏新观点',
        '在传统和创新间找平衡',
        '发展更灵活的思维方式'
      ]
    }
  },
  'ISFJ': {
    title: '守护者',
    description: '你是一个细心和富有同情心的照顾者，重视和谐与稳定。',
    imageUrl: '/images/mbti/isfj.png',
    characteristics: [
      '关心他人需求',
      '注重细节和实用性',
      '重视传统和稳定',
      '富有同理心和耐心'
    ],
    careerSuggestions: [
      '护理师 - 照顾他人健康',
      '行政助理 - 支持团队运作',
      '社工 - 服务社会群体',
      '客户服务经理 - 解决客户需求',
      '幼教工作者 - 培育下一代'
    ],
    interactionTips: {
      bestTypes: ['ENFP', 'ENTP', 'ESFP', 'ESTP'],
      tips: [
        '与外向型人格（E）合作时，表达自己的想法',
        '在团队中发挥支持和关怀作用',
        '学会设定适当的界限',
        '培养主动表达的能力'
      ]
    },
    developmentAreas: {
      strengths: [
        '强大的同理心',
        '出色的组织能力',
        '可靠的执行力',
        '细致的观察力'
      ],
      improvements: [
        '可能过分在意细节',
        '不太善于拒绝',
        '有时过于谨慎',
        '可能压抑自己需求'
      ],
      suggestions: [
        '学会适度放手',
        '培养拒绝的能力',
        '在付出和自我关爱间平衡',
        '发展更自信的态度'
      ]
    }
  },
  'ISTP': {
    title: '工匠',
    description: '你是一个灵活和实用的问题解决者，善于处理具体事务。',
    imageUrl: '/images/mbti/istp.png',
    characteristics: [
      '善于解决实际问题',
      '灵活应变能力强',
      '注重效率和实用',
      '独立思考和行动'
    ],
    careerSuggestions: [
      '工程师 - 解决技术问题',
      '技术专家 - 处理系统故障',
      '数据分析师 - 处理复杂数据',
      '机械师 - 维修和优化设备',
      '自由职业者 - 独立承接项目'
    ],
    interactionTips: {
      bestTypes: ['ENFJ', 'ENTJ', 'ESFJ', 'ESTJ'],
      tips: [
        '与外向型人格（E）合作时，保持开放沟通',
        '在团队中发挥技术专长',
        '学会表达自己的想法',
        '培养团队协作能力'
      ]
    },
    developmentAreas: {
      strengths: [
        '出色的问题解决能力',
        '灵活的应变能力',
        '实用的行动力',
        '独立的工作能力'
      ],
      improvements: [
        '可能显得过于冷淡',
        '有时难以长期专注',
        '可能忽视他人感受',
        '不太擅长计划'
      ],
      suggestions: [
        '发展长期规划能力',
        '培养情商和沟通技巧',
        '学会团队协作',
        '建立稳定的工作方式'
      ]
    }
  },
  'ISFP': {
    title: '艺术家',
    description: '你是一个敏感和富有艺术气质的创作者，追求自我表达和和谐。',
    imageUrl: '/images/mbti/isfp.png',
    characteristics: [
      '艺术感知力强',
      '重视个人价值观',
      '善于感受美好事物',
      '追求和谐与自由'
    ],
    careerSuggestions: [
      '艺术家/设计师 - 创造美的作品',
      '室内设计师 - 打造和谐空间',
      '摄影师 - 捕捉美好瞬间',
      '美容师 - 创造个人风格',
      '音乐家 - 表达艺术情感'
    ],
    interactionTips: {
      bestTypes: ['ENFJ', 'ENTJ', 'ESFJ', 'ESTJ'],
      tips: [
        '与判断型人格（J）合作时，注意时间管理',
        '在团队中发挥创意和审美作用',
        '学会更好地表达自己',
        '保持独特风格的同时兼顾团队需求'
      ]
    },
    developmentAreas: {
      strengths: [
        '优秀的艺术感知力',
        '强烈的个人风格',
        '细腻的情感表达',
        '和谐的处事方式'
      ],
      improvements: [
        '可能过于理想化',
        '不太擅长规划',
        '有时难以做决定',
        '可能过于敏感'
      ],
      suggestions: [
        '培养实际规划能力',
        '学会果断决策',
        '平衡理想和现实',
        '建立情绪管理机制'
      ]
    }
  },
  'ESTP': {
    title: '冒险家',
    description: '你是一个充满活力的行动派，善于把握机会和解决问题。',
    imageUrl: '/images/mbti/estp.png',
    characteristics: [
      '行动力强',
      '善于解决危机',
      '享受冒险和挑战',
      '灵活应变能力强'
    ],
    careerSuggestions: [
      '企业家 - 把握商业机会',
      '销售经理 - 开拓市场',
      '运动教练 - 激励他人',
      '危机管理专家 - 处理紧急情况',
      '投资交易员 - 把握市场机会'
    ],
    interactionTips: {
      bestTypes: ['ISFJ', 'ISTJ', 'INFJ', 'INTJ'],
      tips: [
        '与内向型人格（I）合作时，给予空间',
        '在团队中发挥行动力和决断力',
        '学会耐心倾听他人',
        '平衡冒险和稳健'
      ]
    },
    developmentAreas: {
      strengths: [
        '出色的行动力',
        '优秀的危机处理能力',
        '灵活的应变能力',
        '强大的影响力'
      ],
      improvements: [
        '可能过于冲动',
        '不太注重长期规划',
        '有时忽视细节',
        '可能过于直接'
      ],
      suggestions: [
        '培养战略思维',
        '加强细节管理',
        '发展耐心和持续性',
        '学会温和表达'
      ]
    }
  },
  'ESFP': {
    title: '表演者',
    description: '你是一个活力四射的表演者，善于带给他人快乐和能量。',
    imageUrl: '/images/mbti/esfp.png',
    characteristics: [
      '热情开朗',
      '善于社交',
      '富有同理心',
      '享受当下生活'
    ],
    careerSuggestions: [
      '演艺工作者 - 展现才艺',
      '活动策划师 - 创造欢乐氛围',
      '公关专员 - 建立良好关系',
      '销售代表 - 感染他人',
      '旅游顾问 - 分享精彩体验'
    ],
    interactionTips: {
      bestTypes: ['ISFJ', 'ISTJ', 'INFJ', 'INTJ'],
      tips: [
        '与内向型人格（I）互动时注意给予空间',
        '在团队中发挥活力和感染力',
        '学会深入思考和规划',
        '平衡娱乐和责任'
      ]
    },
    developmentAreas: {
      strengths: [
        '出色的表现力',
        '强大的感染力',
        '优秀的社交能力',
        '乐观的生活态度'
      ],
      improvements: [
        '可能过于追求刺激',
        '不太注重计划',
        '有时难以专注',
        '可能过于随性'
      ],
      suggestions: [
        '培养规划能力',
        '加强自我约束',
        '发展深度思考',
        '建立稳定的工作方式'
      ]
    }
  },
  'ESTJ': {
    title: '管理者',
    description: '你是一个务实和有效率的组织者，善于制定规则和维护秩序。',
    imageUrl: '/images/mbti/estj.png',
    characteristics: [
      '组织能力强',
      '重视效率和规则',
      '务实的行动力',
      '善于领导和决策'
    ],
    careerSuggestions: [
      '项目经理 - 统筹项目进展',
      '行政主管 - 管理日常运营',
      '财务总监 - 控制财务风险',
      '军警人员 - 维护社会秩序',
      '生产主管 - 优化生产流程'
    ],
    interactionTips: {
      bestTypes: ['ISFP', 'ISTP', 'INFP', 'INTP'],
      tips: [
        '与感知型人格（P）合作时保持灵活',
        '在团队中发挥组织和管理作用',
        '学会体谅他人感受',
        '培养开放和包容的态度'
      ]
    },
    developmentAreas: {
      strengths: [
        '出色的组织能力',
        '强大的执行力',
        '清晰的判断力',
        '可靠的领导力'
      ],
      improvements: [
        '可能过于固执',
        '不太灵活变通',
        '有时过于严厉',
        '可能忽视感受'
      ],
      suggestions: [
        '培养灵活性思维',
        '发展同理心',
        '学会温和表达',
        '在规则和变通间平衡'
      ]
    }
  },
  'ESFJ': {
    title: '主人公',
    description: '你是一个热心和负责任的照顾者，善于创造和谐的氛围。',
    imageUrl: '/images/mbti/esfj.png',
    characteristics: [
      '关心他人需求',
      '组织能力强',
      '重视和谐关系',
      '责任心强'
    ],
    careerSuggestions: [
      '人力资源专员 - 关注员工发展',
      '客户关系经理 - 维护客户关系',
      '社区工作者 - 服务社会群体',
      '活动组织者 - 创造和谐氛围',
      '医疗服务人员 - 照顾病患需求'
    ],
    interactionTips: {
      bestTypes: ['ISFP', 'ISTP', 'INFP', 'INTP'],
      tips: [
        '与思考型人格（T）合作时保持客观',
        '在团队中发挥凝聚力作用',
        '学会处理冲突',
        '平衡他人需求和自我需要'
      ]
    },
    developmentAreas: {
      strengths: [
        '优秀的人际关系',
        '强大的组织能力',
        '可靠的执行力',
        '出色的服务精神'
      ],
      improvements: [
        '可能过分在意他人看法',
        '不太善于处理冲突',
        '有时过于传统',
        '可能忽视自我需求'
      ],
      suggestions: [
        '培养独立判断能力',
        '学会处理分歧',
        '在传统和创新间平衡',
        '注意自我关爱'
      ]
    }
  }
}; 