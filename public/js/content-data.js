var topics = [
  'Before you Start a Social Business',
  'Starting a Social Business',
  'Running a Social Business',
  'Growing A Social Business',
  'Case Studies',
];

var classes = [
  'question-form-section-default',
  'question-form-section-1',
  'question-form-section-2',
  'question-form-section-3',
  'question-form-section-4',
]

var questions = [
  {
    topic: topics[0],
    question: 'Have you started your social enterprise?',
    class: classes[0],
  },
  {
    topic: topics[1],
    question: 'Do you have an engaged group of people?',
    class: classes[1],
  },
  {
    topic: topics[1],
    question: 'Have you formed a legal structure?',
    class: classes[1],
  },
  {
    topic: topics[1],
    question: 'Are you bidding for contracts or seeking funding?',
    class: classes[1],
  },
  {
    topic: topics[1],
    question: 'Are you employing staff?',
    class: classes[1],
  },
  {
    topic: topics[2],
    question: 'Are you confident in your organisation\'s governance?',
    class: classes[2],
  },
  {
    topic: topics[2],
    question: 'Do you use a form of Social Accounting?',
    class: classes[2],
  },
  {
    topic: topics[2],
    question: 'Do you have a skilled management?',
    class: classes[2],
  },
  {
    topic: topics[3],
    question: 'Are you looking to grow (expand, diversify etc.)?',
    class: classes[3],
  },
  {
    topic: topics[3],
    question: 'Are you thinking of connecting with like-minded groups?',
    class: classes[3],
  },
  {
    topic: topics[3],
    question: 'Do you think your idea could work in other areas?',
    class: classes[3],
  },
  {
    topic: topics[3],
    question: 'Would you like to buy another business to help you grow?',
    class: classes[3],
  },
  {
    topic: topics[4],
    question: 'Would you like to see some case studies?',
    class: classes[4],
  },
  {
    topic: null,
    question: 'Click on sections of the doughnut to show content specific to the questions you answered',
    class: classes[0],
  },
];


const contentData = [
  {
    title: 'The Mission',
    subtitle: 'The objective of this section is to help you write a succinct mission statement that describes your social business\'s purpose.',
    topic: topics[0],
    question: questions[0].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/mission',
    resources: [
      {
        title: 'Download the Wales Co-operative Centre\'s vision, mission and values statement',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Centre%20values%20mission%20vision%20v2_0.pdf',
      },
    ],
  },
  {
    title: 'Motivation',
    subtitle: 'Ask yourself, “Why do I want to start up this social business?”  If it is for personal financial gain then you should consider setting up a sole trader business where you own it and take the profit from it.',
    URL: 'https://businesswales.gov.wales/socialbusinesswales/motivation',
    topic: topics[0],
    question: questions[0].question,
    resources: [
      {
        title: 'Download a template to record the results of your analysis',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Motivation%20analysis%20template%20v4_0.docx',
      },
    ],
  },
  {
    title: 'Community',
    subtitle: 'Having identified the need in the community that your social business will address, can you now describe or define that community?',
    URL: 'https://businesswales.gov.wales/socialbusinesswales/community',
    topic: topics[0],
    question: questions[0].question,
    resources: [
      {
        title: 'Download the Community Analysis tool',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Community%20analysis%20v4_0.docx',
      },
    ],
  },
  {
    title: 'Organisational structure',
    subtitle: '',
    URL: 'https://businesswales.gov.wales/socialbusinesswales/organisational-structure',
    topic: topics[0],
    question: questions[0].question,
    resources: [
      {
        title: 'Organisational Structure Template',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Organisational%20Structure%20template%20v4_0.docx',
      },
      {
        title: 'Co-operative Values and Principles',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/The%20Co-operative%20Principles%20vSBW.pdf',
      },
    ],
  },
  {
    title: 'Who We Are',
    subtitle: 'In this section, we focus on individual people and how they work together.',
    URL: 'https://businesswales.gov.wales/socialbusinesswales/who-we-are',
    topic: topics[0],
    question: questions[0].question,
    resources: [
      {
        title: 'Steering Group Description',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Steering%20Group%20description%20v4_0.docx',
      },
    ],
  },
  {
    title: 'The Market',
    subtitle: 'The market is the group of consumers that may be interested to receive your commercial products, services and social output.  It may consist of a number of smaller groups, or segments, that you need to address separately.',
    URL: 'https://businesswales.gov.wales/socialbusinesswales/market',
    topic: topics[0],
    question: questions[0].question,
    resources: [
      {
        title: 'Market Analysis Template',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Market%20Analysis%20template%20v4_0.docx',
      },
    ],
  },
  {
    title: 'Investment',
    subtitle: 'No business is instantly profitable.  Until it becomes profitable, your social business will require investment.  You will not be able to launch your enterprise until you have raised investment. Feasibility therefore depends upon securing investment.  However, it will be difficult to raise money before feasibility is established – a classic Catch 22 situation.',
    URL: 'https://businesswales.gov.wales/socialbusinesswales/investment',
    topic: topics[0],
    question: questions[0].question,
    resources: [
      {
        title: 'Investment Requirement Analysis Template',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Investment%20Requirement%20Analysis%20template%20v4_0.docx',
      },
    ],
  },
  {
    title: 'Other critical factors',
    subtitle: 'Consider your critical success factors – those things that absolutely must be in place.  For example, is the project dependent upon the acquisition of premises?  Is there a particular contract that must be in place?  Achieving these goals must be a priority for you, so what is your plan?',
    URL: 'https://businesswales.gov.wales/socialbusinesswales/other-critical-factors',
    topic: topics[0],
    question: questions[0].question,
    resources: [
      {
        title: 'Critical Factors and Risk Analysis Template',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Critical%20Factors%20and%20Risk%20Analysis%20template%20v4_0.docx',
      },
    ],
  },
  {
    title: 'Implementation plan',
    subtitle: 'This is the last piece of the puzzle.  Having designed your social business in enough detail to give confidence in its feasibility, you now need to demonstrate that it is actually possible to get it off the ground.',
    URL: 'https://businesswales.gov.wales/socialbusinesswales/implementation-plan',
    topic: topics[0],
    question: questions[0].question,
    resources: [
      {
        title: 'Implementation Plan Template',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Implementation%20Plan%20template%20v4_0.docx',
      },
    ],
  },
  {
    title: 'Expansion',
    subtitle: 'Expansion in this context is taken to mean increasing production and sales while maintaining the same general shape of the business and similar product range and customer definition. This is by far the simplest model for growth since it requires the least innovation or journey into the unknown.',
    topic: topics[3],
    question: questions[8].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/expansion',
    resources: [
    ],
  },
  {
    title: 'Diversification',
    subtitle: 'Diversification involves looking for new opportunities outside of current products and existing customers.  Diversification is inherently more difficult than the “more of the same” option described in expansion because it involves developing and delivering products or services outside of the existing “comfort zone”.',
    topic: topics[3],
    question: questions[8].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/diversification',
    resources: [
    ],
  },
  {
    title: 'Consortia Working',
    subtitle: 'One way in which a business can develop its revenue, profitability and standing and also reduce its cost base is to establish consortia with other businesses.',
    topic: topics[3],
    question: questions[9].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/consortia-working',
    resources: [
    ],
  },
  {
    title: 'Spin-outs',
    subtitle: 'It is worth considering that there might be more than one enterprise bound up in the existing Social Business and it may be possible to create two – or more – Social Businesses that would find it both easier to manage themselves, raise investment, increase capacity and focus resources on providing an “offer” that is simpler to explain in the market place.',
    topic: topics[3],
    question: questions[10].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/spin-outs',
    resources: [
    ],
  },
  {
    title: 'Mergers and Acquisition',
    subtitle: 'Mergers and acquisitions might sound predatory and not the sort of process undertaken by a Social Business but there are situations in which it might be worthy of consideration as a growth strategy. For example, if another business operating in your market-place becomes available for purchase from retiring owners.',
    topic: topics[3],
    question: questions[11].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/mergers-and-acquisition',
    resources: [
    ],
  },
  {
    title: 'Social Franchising',
    subtitle: 'The general concept of Social Franchising concerns replicating a successful Social Business model into new environments. This enables other people who want to achieve the same positive results in their own communities to do so without having to “reinvent the wheel”.',
    topic: topics[3],
    question: questions[10].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/social-franchising',
    resources: [
    ],
  },
  {
    title: 'Employee Ownership',
    subtitle: 'Employee ownership means a significant and meaningful stake in a business for all its employees. If this is achieved then a business has employee ownership: it has employee owners.',
    topic: topics[3],
    question: questions[8].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/employee-ownership',
    resources: [
      {
        title: 'Simply Buyout: A guide to employee buyouts and becoming an employee owned business.',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Simply%20Buyout.pdf',
      },
      {
        title: 'Co-operative Values and Principles',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/The%20Co-operative%20Principles%20vSBW_0.pdf',
      },
    ],
  },
  {
    title: 'Business Plan',
    subtitle: 'As a social business your business plan will differ slightly in focus from that of a more conventional business.',
    topic: topics[1],
    question: questions[3].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/business-plan',
    resources: [
      {
        title: 'Guide to Business Planning',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Business%20Planning%20vSBW_0.pdf',
      },
      {
        title: 'Budget Template',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Budget%20Template_0_0.xls',
      },
      {
        title: 'Business Plan Template',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Business%20Plan%20template.v4_0.docx',
      },
    ],
  },
  {
    title: 'The structure of a Social Business',
    subtitle: 'At some point in the start up process, you will need to create a new legal vehicle for your social business.',
    topic: topics[1],
    question: questions[2].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/structure-social-business',
    resources: [
      {
        title: 'The types of Social Business',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/types-social-business',
      },
      {
        title: 'The legal form of a Social Business',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/legal-form-social-business',
      },
      {
        title: 'Charitable status of a Social Business',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/charitable-status-social-business',
      },
      {
        title: 'Choosing the structure of a Social Business',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/choosing-structure-social-business',
      },
    ],
  },
  {
    title: 'Human Resources',
    subtitle: 'When starting up a new business proper thought must be put to the recruitment and employment of its people – the human resource.  ',
    topic: topics[1],
    question: questions[4].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/human-resources',
    resources: [
      {
        title: 'Guide to Employing People',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Employing%20People%20vSBW.pdf',
      },
      {
        title: 'Appendix A-K Model Forms for Employing People',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Appendix%20A-K%20Model%20Forms%20for%20Employing%20People.docx',
      },
      {
        title: 'Appendix L-V Model Employment Policies',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Appendix%20L-V%20Model%20Employment%20Policies.docx',
      },
      {
        title: 'Appendix X (1-39) Template Letters and Forms',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Appendix%20X%20%281-39%29%20Template%20Letters%20and%20Forms.docx',
      },
      {
        title: 'Appendix Y (1-9) Employment Process Flowcharts',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Appendix%20Y%20%281-10%29%20-%20Employment%20Process%20Flow%20Charts.pdf',
      },
    ],
  },
  {
    title: 'Project Management',
    subtitle: 'Creating a new business or undertaking change in an existing business is a project which requires co-ordination and effective co-ordination of design and implementation.',
    topic: topics[1],
    question: questions[1].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/project-management',
    resources: [
    ],
  },
  {
    title: 'Sources of Finance',
    subtitle: '',
    topic: topics[1],
    question: questions[3].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/sources-finance',
    resources: [
    ],
  },
  {
    title: 'Lenders',
    subtitle: 'The following are links to suitable lenders that are familiar in dealing with Social Businesses. However, with a strong business plan and a strong team, do not rule out the possibility of approaching traditional high street banks.',
    topic: topics[1],
    question: questions[3].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/lenders',
    resources: [
    ],
  },
  {
    title: 'Books and Online Resources',
    subtitle: '',
    topic: topics[1],
    question: questions[3].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/books-and-online-resources',
    resources: [
      {
        title: 'Co-operative Loan Agreement Template',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Co-operative%20Loan%20Agreement%20template%20v4_0.docx',
      },
    ],
  },
  {
    title: 'Social Business Governance Zone',
    subtitle: 'Social Businesses are at the forefront of the development of good governance, combining as they do the requirements to provide the governance functions of commercial businesses and organisations providing benefit to Members or some community.',
    topic: topics[2],
    question: questions[5].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/social-business-governance-zone',
    resources: [
      {
        title: 'Download a Governance Questionnaire',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Governance%20Questionnaire%20v4_0.docx',
      },
    ],
  },
  {
    title: 'Developing required Policies',
    subtitle: '',
    topic: topics[2],
    question: questions[5].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/developing-required-policies',
    resources: [
      {
        title: 'Policy Checklist',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Policy_Checklist_v5ac.xls',
      },
      {
        title: 'Guide to Employing People 2015',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Guide%20to%20Employing%20People%20-%202015%20FINAL.pdf',
      },
    ],
  },
  {
    title: 'Meeting Legal Reporting Requirements',
    subtitle: 'A Social Business will be established as some kind of legal entity. A legal entity has important rights, most importantly to enter into contracts with suppliers, customers, employees, project partners and the like.',
    topic: topics[2],
    question: questions[5].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/meeting-legal-reporting-requirements',
    resources: [
      {
        title: 'Download a Guide to Business Compliance for Social Businesses',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Business%20Compliance%20vSBW_0.pdf',
      },
    ],
  },
  {
    title: 'Stakeholder and Membership Engagement',
    subtitle: 'One of the great strengths of Social Businesses is that they engage in ownership and influence wider ranges and greater numbers of Stakeholders and Members than most businesses of similar size.',
    topic: topics[2],
    question: questions[5].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/stakeholder-and-membership-engagement',
    resources: [
    ],
  },
  {
    title: 'Providing Control and Oversight',
    subtitle: 'A Social Business, as a legal entity, is a body corporate and must obey all laws, not only the Companies Act or Co-operative Societies Act (or equivalent legislation for the precise legal form taken by the Social Business) but also those that relate to Health and Safety, employment, tax, trade, contracts, finance, equal opportunity, protection of the vulnerable and much, much more.',
    topic: topics[2],
    question: questions[5].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/providing-control-and-oversight',
    resources: [
    ],
  },
  {
    title: 'Developing Governance Capacity',
    subtitle: 'A fundamental component of success for a Social Business is the strength of its Governance. Governance is the systems and processes concerned with ensuring the overall direction, supervision and accountability of an organisation.',
    topic: topics[2],
    question: questions[5].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/developing-governance-capacity',
    resources: [
      {
        title: 'Download a Governance Questionnaire',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Governance%20Questionnaire%20v4_0_0.docx',
      },
    ],
  },
  {
    title: 'Business Planning for a Social Business',
    subtitle: '',
    topic: topics[2],
    question: questions[7].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/business-planning-social-business',
    resources: [
      {
        title: 'Guide to Business Planning',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Business%20Planning%20vSBW_1.pdf',
      },
      {
        title: 'Download a Business Plan template here',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Business%20Plan%20template.v4_0_0.docx',
      },
    ],
  },
  {
    title: 'Quality Systems for Social Business',
    subtitle: 'A Quality System is whatever is needed in any particular Social Business to deliver a quality assured product or service.',
    topic: topics[2],
    question: questions[6].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/quality-systems-social-business',
    resources: [
    ],
  },
  {
    title: 'Business Planning for a Social Business',
    subtitle: '',
    topic: topics[2],
    question: questions[7].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/business-planning-social-business',
    resources: [
      {
        title: 'Guide to Business Planning',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Business%20Planning%20vSBW_1.pdf',
      },
      {
        title: 'Download a Business Plan template here',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Business%20Plan%20template.v4_0_0.docx',
      },
    ],
  },
  {
    title: 'Financial Control in Social Business',
    subtitle: 'In law it is the responsibility of the Board of Directors (or equivalent) to control the business and this includes all spending.',
    topic: topics[2],
    question: questions[7].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/financial-control-social-business',
    resources: [
    ],
  },
  {
    title: 'Human Resources Development in a Social Business',
    subtitle: 'It is important to be clear what the basis of the relationship between a social business and the people who carry out work for it is. Is the worker a partner, a self-employed contractor, a volunteer or a directly paid employee? Are they full time or part time and if part-time is the business the main employer or a secondary employer?',
    topic: topics[2],
    question: questions[7].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/human-resources-development-social-business',
    resources: [
      {
        title: 'Guide to Employing People',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Employing%20People%20vSBW_0.pdf',
      },
      {
        title: 'Appendix A-K Model Forms for Employing People',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Appendix%20A-K%20Model%20Forms%20for%20Employing%20People.docx',
      },
      {
        title: 'Appendix L-V Model Employment Policies',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Appendix%20L-V%20Model%20Employment%20Policies.docx',
      },
      {
        title: 'Appendix X (1-39) Template Letters and Forms',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Appendix%20X%20%281-39%29%20Template%20Letters%20and%20Forms.docx',
      },
      {
        title: 'Appendix Y (1-9) Employment Process Flowcharts',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Appendix%20Y%20%281-10%29%20-%20Employment%20Process%20Flow%20Charts.pdf',
      },
    ],
  },
  {
    title: 'Marketing for a Social Business',
    subtitle: 'The whole understanding of what constitutes “The Market” can be more complex for a Social Business than for others. Generally, business is predicated on the concept of a marketplace in which the consumer is also the purchaser and they make their purchasing decision based on considerations of quality, price and convenience. The range of options and prices at which the product is offered by the supplier is pitched by a calculation of the optimum mix of likely sales volume and profit per item to suit their own capacity and ambition.',
    topic: topics[2],
    question: questions[7].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/marketing-social-business',
    resources: [
      {
        title: 'Developing a Marketing Strategy',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/developing-marketing-strategy',
      },
    ],
  },
  {
    title: 'Managing Risk in a Social Business',
    subtitle: 'The Wales Co-operative Centre has a process that provides it with a systematic view of the risks it faces in the course of activities. As part of this process the Centre establishes a corporate risk register as well as programme, project and function risk registers to identify the risks that the organisation faces, their grading in terms of likelihood of occurring and seriousness of impact and plans for managing each risk.',
    topic: topics[2],
    question: questions[7].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/managing-risk-social-business',
    resources: [
      {
        title: 'Risk Register Procedure',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Risk%20Register%20Procedure%20v4_0.docx',
      },
      {
        title: 'Risk Register Methodology',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sites/socialbusiness/files/Risk%20register%20methodology.xls',
      },
    ],
  },
  {
    title: 'Case Studies',
    subtitle: 'Examples of social businesses we have worked with across Wales to help grow, expand, diversify, collaborate and transform.',
    topic: topics[4],
    question: questions[12].question,
    URL: 'https://businesswales.gov.wales/socialbusinesswales/case-studies',
    resources: [
      {
        company: 'Vi-Ability',
        description: 'UK Social Enterprise of the Year 2015',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/vi-ability',
      },
      {
        company: 'Wild Women Enterprise Co.',
        description: 'Creating prosperity for the Powys rural economy',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/wild-women-enterprise-co',
      },
      {
        company: 'Theatr Soar',
        description: 'Enriching lives in Merthyr through the arts',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/theatr-soar',
      },
      {
        company: 'Ail Gyfle-Second Chance',
        description: 'Engaging ex-offenders to improve their employability',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/ail-gyfle-second-chance',
      },
      {
        company: 'PS Facilities Management',
        description: 'Promoting positive mental health and well-being',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/ps-facilities-management',
      },
      {
        company: 'SPPOT',
        description: 'Supporting people and pets through opportunities and training',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/sppot',
      },
      {
        company: 'Eurosource',
        description: 'Global suppliers of pipeline products ',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/eurosource',
      },
      {
        company: 'Splash Magic Leisure Centre',
        description: 'The community hub alive and kicking',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/splash-magic-leisure-centre',
      },
      {
        company: 'Down to Earth Project',
        description: 'Practical hands on sustainability training',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/down-earth-project',
      },
      {
        company: 'Tyn-Y-Capel Inn & Restaurant',
        description: 'Community owned business',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/tyn-y-capel-inn-restaurant',
      },
      {
        company: 'Allied Construction Consortium Ltd (ACC Ltd)',
        description: 'Stronger together through consortia working',
        URL: 'https://businesswales.gov.wales/socialbusinesswales/allied-construction-consortium-ltd-acc-ltd',
      },
    ],
  },
];
