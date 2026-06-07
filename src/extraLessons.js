export const speakingLesson4 = {
  id: 's4',
  title: 'Lesson 4: Prefer',
  category: 'Speaking',
  structures: [
    { name: 'Basic Preference', formula: 'I prefer A to B.', example: 'I prefer coffee to tea. / I prefer living in the city to living in the countryside.' },
    { name: 'Rather Than', formula: 'I prefer to V rather than V', example: 'I prefer to stay at home rather than go out.' },
    { name: 'Level 6.5+ Preference', formula: 'I’d say I prefer A to B, mainly because... / I’m more into A than B.', example: 'I tend to prefer studying in the morning because I’m more productive at that time.' }
  ],
  vocabulary: [
    { word: 'time-efficient', pronunciation: '/taɪm ɪˈfɪʃnt/', definition: 'tiết kiệm thời gian, hiệu quả', example: 'I prefer taking the bus because it’s more time-efficient.', type: 'adj' },
    { word: 'time-consuming', pronunciation: '/taɪm kənˈsjuːmɪŋ/', definition: 'tốn thời gian', example: 'Writing letters is more time-consuming than sending emails.', type: 'adj' },
    { word: 'peaceful', pronunciation: '/ˈpiːsfl/', definition: 'yên bình', example: 'I prefer the countryside as it gives me a sense of peace.', type: 'adj' },
    { word: 'calming', pronunciation: '/ˈkɑːmɪŋ/', definition: 'giúp bình tĩnh', example: 'Listening to music has a calming effect on me.', type: 'adj' },
    { word: 'productive', pronunciation: '/prəˈdʌktɪv/', definition: 'năng suất', example: 'I’m more productive in the morning.', type: 'adj' },
    { word: 'broaden my horizons', pronunciation: '/ˈbrɔːdn maɪ həˈraɪznz/', definition: 'mở rộng tầm nhìn', example: 'I prefer travelling abroad because it helps me broaden my horizons.', type: 'phrase' },
    { word: 'flexible', pronunciation: '/ˈfleksəbl/', definition: 'linh hoạt', example: 'Working online is very flexible.', type: 'adj' },
    { word: 'affordable', pronunciation: '/əˈfɔːdəbl/', definition: 'phải chăng, rẻ', example: 'I prefer cooking at home because it’s more affordable.', type: 'adj' },
    { word: 'cost-effective', pronunciation: '/ˌkɒst ɪˈfektɪv/', definition: 'hiệu quả về chi phí', example: 'Buying high-quality products is more cost-effective in the long run.', type: 'adj' },
    { word: 'budget-friendly', pronunciation: '/ˈbʌdʒɪt ˈfrendli/', definition: 'phù hợp với ngân sách', example: 'I can easily find budget-friendly items online.', type: 'adj' }
  ],
  templateBank: {
    preferAnswer: {
      openers: ['I prefer A because...', 'I’d say I prefer A to B, mainly because...', 'I tend to prefer A, especially when...', 'It really depends, but generally speaking, A is a better choice for me because...'],
      reasonFormulas: [
        { formula: 'A because it is + comparative adjective', example: 'I prefer studying in the morning because it’s more productive.' },
        { formula: 'A because it allows me to + V', example: 'I prefer living in the city because it allows me to access better job opportunities.' },
        { formula: 'A because I can + V', example: 'I prefer studying alone because I can concentrate better.' },
        { formula: 'A mainly because + benefit', example: 'I prefer online shopping mainly because it saves time.' }
      ],
      categories: [
        { name: 'Time', vocab: ['save time', 'time-efficient', 'convenient', 'practical'] },
        { name: 'Relaxation', vocab: ['relaxing', 'peaceful', 'less stressful', 'calming'] },
        { name: 'Productivity', vocab: ['productive', 'focused', 'fewer distractions', 'concentrate better'] },
        { name: 'Personal Development', vocab: ['broaden my horizons', 'gain experience', 'develop my skills', 'learn new things'] },
        { name: 'Freedom', vocab: ['feel comfortable', 'have more freedom', 'be independent', 'flexible'] },
        { name: 'Cost', vocab: ['affordable', 'cost-effective', 'save money', 'budget-friendly'] }
      ],
      examples: ['For example...', 'For instance...', 'This means that...', 'So, I can...', 'which + result'],
      acknowledgements: ['Although B has its own advantages...', 'Even though B can be + adj...', 'I know B is good in some ways, but...']
    }
  },
  practiceExamples: [
    {
      question: 'Do you prefer studying alone or in a group?',
      bands: [
        { band: '5.0', answer: 'I prefer studying alone because i don’t get distracted by other people. Also, I can study at my own pace without waiting for anyone. Although group study is a good way to share ideas, I think studying independently is much more productive for me.' },
        { band: '6.5', answer: 'I prefer studying alone which allows me to be more focused without getting distracted by others. For example, when I study by myself, my productivity is more efficient. Although studying in a group can be more interactive and sociable, I still feel that studying alone works better for me.' }
      ]
    },
    {
      question: 'Do you prefer living in the city or the countryside?',
      bands: [
        { band: '5.0', answer: 'I prefer living in the city to living in the countryside, because it’s more convenient. Living here allows me to access better facilities like modern hospitals, shopping malls and cinemas. For example, I can find everything I need within walking distance of my neighborhood. Although the countryside is more peaceful and has fresh air, I still prefer living in the city at the moment.' },
        { band: '6.5', answer: 'I prefer living in the countryside because it gives me a sense of peace. For example, every morning, I can watch the sunrise, walk around the village with my best friend and enjoy the fresh air. Although currently I’m living in the city for education, I hope I can settle down in the countryside in the future when I have better savings.' }
      ]
    },
    {
      question: 'Do you prefer reading books or watching TV?',
      bands: [
        { band: '5.0', answer: 'I prefer watching TV because it saves more time than reading hundreds of pages. Moreover, it can be enjoyable and it also broadens my knowledge if I watch educational content. However, I still read books in my free time because it helps me learn new things.' },
        { band: '6.5', answer: 'Honestly, I don’t really like either of them because I am quite busy and prefer outdoor activities. However, if I had to choose, I would prefer reading books. The main reason is that books help me broaden my horizons and learn new things at my own pace. Although watching TV is more entertaining, I still feel that reading books is more meaningful for me.' }
      ]
    },
    {
      question: 'Do you prefer shopping online or in stores?',
      bands: [
        { band: '5.0', answer: 'I prefer shopping online to shopping in stores mainly because it saves more time. I can easily find budget-friendly items and compare prices without leaving my comfort zone. Although shopping in stores allows me to check the product quality directly, I still prefer online shopping because it’s more practical for me.' },
        { band: '6.5', answer: 'I prefer shopping online because it is more convenient and time-efficient. For example, when I buy things online, I can order with my phone instead of going to the stores. However, sometimes I still go shopping in stores with my friend on the weekend to lift my mood after a week of intense studying.' }
      ]
    }
  ],
  homeworkQuestions: [
    'Do you prefer travelling alone or with other people?',
    'Do you prefer watching movies at home or at the cinema?'
  ]
};

export const speakingLesson5 = {
  id: 's5',
  title: 'Lesson 5: Places + People',
  category: 'Speaking',
  vocabulary: [
    { word: 'cozy', pronunciation: '/ˈkəʊzi/', definition: 'ấm cúng', example: 'My favorite room is the bedroom. It’s not very big, but it’s very cozy.', type: 'adj' },
    { word: 'sense of privacy', pronunciation: '/sens əv ˈprɪvəsi/', definition: 'cảm giác riêng tư', example: 'My room gives me a sense of privacy when I want to spend some time alone.', type: 'phrase' },
    { word: 'hustle and bustle', pronunciation: '/ˈhʌsl ənd ˈbʌsl/', definition: 'sự hối hả và nhộn nhịp', example: 'I like my neighborhood because it helps me stay away from the hustle and bustle of the city life.', type: 'phrase' },
    { word: 'within walking distance', pronunciation: '/wɪðˈɪn ˈwɔːkɪŋ ˈdɪstəns/', definition: 'cách vài bước chân, rất gần', example: 'Everything I need is within walking distance of my house.', type: 'phrase' },
    { word: 'career prospects', pronunciation: '/kəˈrɪə ˈprɒspekts/', definition: 'triển vọng nghề nghiệp', example: 'Moving to a bigger city would offer better career prospects.', type: 'phrase' },
    { word: 'amenities', pronunciation: '/əˈmiːnətiz/', definition: 'tiện ích', example: 'I want a wider range of amenities like hospitals and schools.', type: 'noun' },
    { word: 'look after', pronunciation: '/lʊk ˈɑːftə/', definition: 'chăm sóc', example: 'I often look after my younger brother when my parents are busy.', type: 'phrasal verb' },
    { word: 'grow up with', pronunciation: '/ɡrəʊ ʌp wɪð/', definition: 'lớn lên cùng', example: 'I grew up with my cousins, so we’re very close.', type: 'phrasal verb' },
    { word: 'get along with', pronunciation: '/ɡet əˈlɒŋ wɪð/', definition: 'hòa thuận với', example: 'I get along very well with my family.', type: 'phrasal verb' },
    { word: 'look up to', pronunciation: '/lʊk ʌp tuː/', definition: 'ngưỡng mộ', example: 'I really look up to my father because he’s very responsible.', type: 'phrasal verb' },
    { word: 'rely on', pronunciation: '/rɪˈlaɪ ɒn/', definition: 'dựa vào, trông cậy', example: 'I can always rely on my family when I have problems.', type: 'phrasal verb' },
    { word: 'close-knit', pronunciation: '/ˌkləʊs ˈnɪt/', definition: 'gắn bó', example: 'I come from a close-knit family.', type: 'adj' },
    { word: 'trustworthy', pronunciation: '/ˈtrʌstwɜːði/', definition: 'đáng tin', example: 'My close friends are very trustworthy.', type: 'adj' },
    { word: 'like-minded', pronunciation: '/ˌlaɪk ˈmaɪndɪd/', definition: 'cùng chí hướng', example: 'I enjoy spending time with like-minded people.', type: 'adj' }
  ],
  structures: [
    { name: 'Which + would + V phrase', formula: 'Compared to where I live now, it would be [ ], which would [make my life easier].', example: 'It would be closer to essential amenities, which would save me a lot of time.' },
    { name: 'Compared to', formula: 'Compared to [A], [B] is...', example: 'Compared to where I live now, it would be less crowded and less stressful.' }
  ],
  templateBank: {
    movePlace: {
      openers: ['Yes, I think I’d like to move to a bigger city in the future.', 'Yes, I think I’d like to move to a more tranquil area in the future.'],
      offerings: ['more job opportunities', 'better career prospects', 'a wider range of amenities', 'more educational opportunities', 'a higher quality of life', 'a more peaceful environment', 'a slower pace of life'],
      comparisons: ['more modern and dynamic', 'more convenient for my daily life', 'less crowded and less stressful', 'better connected in terms of transport', 'closer to essential amenities'],
      results: ['make my daily life easier', 'save me a lot of time', 'reduce a lot of stress', 'improve my overall quality of life']
    }
  },
  practiceExamples: [
    {
      question: 'Would you like to move to another place in the future?',
      bands: [
        { band: '5.0', answer: 'Yes, I think I would like to move to a more tranquil area in the future when I retire. I believe it would offer a more peaceful environment and a slower pace of life. Compared to where I live now, it would be less crowded and less stressful. I prefer living in a place with more green space, maybe a mountainous area, so that I can enjoy not only the fresh air but also more outdoor activities such as hiking.' },
        { band: '6.5', answer: 'Yes, in the near future, I’d like to move to a bigger city which would have better job opportunities for me and more educational opportunities for my children. Compared to where I live now, it would be better connected in terms of transport, which would improve my overall quality of life.' }
      ]
    }
  ]
};

export const speakingLesson6 = {
  id: 's6',
  title: 'Lesson 6: Learn + Good at',
  category: 'Speaking',
  summary: [
    "Use 'pick up a skill' instead of 'learn' for a more natural expression.",
    "Structure your answer chronologically: Context ➔ Process ➔ Result.",
    "For things you are bad at, use phrases like 'not my strong suit' or 'I have no knack for it'.",
    "Always explain WHY you learned something (or why you haven't yet)."
  ],
  vocabulary: [
    { word: 'pick up a skill', pronunciation: '/pɪk ʌp ə skɪl/', definition: 'học một kỹ năng (thay cho learn)', example: 'I picked it up when I was a student.', type: 'phrase' },
    { word: 'struggle with', pronunciation: '/ˈstrʌɡl wɪð/', definition: 'gặp khó khăn với cái gì', example: 'I struggled with the basic steps at first.', type: 'phrase' },
    { word: 'get the hang of it', pronunciation: '/ɡet ðə hæŋ əv ɪt/', definition: 'dần quen với/nắm bắt được', example: 'After some time, I started to get the hang of it.', type: 'phrase' },
    { word: 'pay off', pronunciation: '/peɪ ɒf/', definition: 'được đền đáp xứng đáng', example: 'Finally, my efforts paid off.', type: 'phrasal verb' },
    { word: 'keep my skills sharp', pronunciation: '/kiːp maɪ skɪlz ʃɑːp/', definition: 'duy trì kỹ năng nhạy bén', example: 'I still practice it now and then to keep my skills sharp.', type: 'phrase' },
    { word: 'have a knack for something', pronunciation: '/hæv ə næk fɔː ˈsʌmθɪŋ/', definition: 'có năng khiếu làm gì', example: 'Definitely! I have a knack for it.', type: 'phrase' },
    { word: 'not my strong suit', pronunciation: '/nɒt maɪ strɒŋ suːt/', definition: 'không phải thế mạnh của tôi', example: 'Actually, no. It’s definitely not my strong suit.', type: 'phrase' },
    { word: 'be hopeless at something', pronunciation: '/bi ˈhəʊpləs æt ˈsʌmθɪŋ/', definition: 'rất tệ/vô vọng ở khoản nào đó', example: 'Unfortunately, I’m quite hopeless at this.', type: 'phrase' },
    { word: 'be more of a [X] person', pronunciation: '/bi mɔːr əv ə ˈpɜːsn/', definition: 'thuộc tuýp người thích/giỏi cái [X] hơn', example: 'I think I’m more of a language person rather than a technical one.', type: 'phrase' }
  ],
  structures: [
    { name: 'Direct Answer (Yes)', formula: 'Definitely! I picked it up when I was...', example: 'Definitely! I picked it up when I was a student.' },
    { name: 'Direct Answer (No)', formula: 'To be honest, I’ve never had the chance to learn it.', example: 'Actually, no, it’s not something I’ve tried before.' },
    { name: 'Direct Answer (Good at)', formula: 'Yes, I’d say I’m pretty good at it.', example: 'Yes, I’m quite confident in my ability when it comes to this.' }
  ],
  topicSections: [
    {
      name: 'Have you learned...? (Yes)',
      questions: [
        {
          question: 'Pattern for YES',
          template: "1. Direct Answer: Yes, I did. I learned it a few years ago.\n2. Context: I took it up because I wanted to improve myself.\n3. Process: At first, it was quite challenging. I struggled with...\n4. Result: Finally, my efforts paid off.\n5. Extension: I still practice it now and then to keep my skills sharp.",
          options: {
            step1: ['Yes, I did.', 'Definitely!', 'Yes, I’ve actually spent some time learning it.'],
            step2: ['It was a required subject at school.', 'I took it up because I wanted to improve myself.', 'It was my mother’s expectation.'],
            step3: ['At first, it was quite difficult.', 'I struggled with the basic steps.', 'After some time, I started to get the hang of it.'],
            step4: ['My efforts paid off.', 'It helped me become more confident.', 'I gained a lot of useful knowledge.']
          }
        }
      ]
    },
    {
      name: 'Have you learned...? (No)',
      questions: [
        {
          question: 'Pattern for NO',
          template: "1. Direct Answer: To be honest, I’ve never had the chance to learn it.\n2. Reason: I’ve been very busy with my studies / I had little exposure to it.\n3. Future Intention: However, I really want to give it a go in the future.\n4. Wrap-up: Maybe I will join a class when I have more free time.",
          options: {
            reasons: ['busy with studies/work', 'don\'t have a talent for it', 'little exposure to it', 'out of reach (too expensive)'],
            future: ['really want to give it a go', 'not really my thing (I\'m more of a music person)']
          }
        }
      ]
    },
    {
      name: 'Are you good at...? (Yes)',
      questions: [
        {
          question: 'Pattern for Good At',
          template: "1. Direct Answer: Yes, I’d say I’m pretty good at it. I have a knack for it.\n2. Context: I picked it up when I was a student because...\n3. Process: I struggled with it at first, but I got the hang of it.\n4. Result: My efforts have paid off. I can easily...\n5. Extension: I still do it from time to time to keep my skills sharp."
        }
      ]
    },
    {
      name: 'Are you good at...? (No)',
      questions: [
        {
          question: 'Pattern for Not Good At',
          template: "1. Direct Answer: To be honest, I’m not really good at it. It's not my strong suit.\n2. Reason: I feel I don't have a natural talent for it.\n3. Attitude: To be fair, it's just not really my thing. I’m more of a [music/sports] person.\n4. Wrap-up: So for now, I usually leave it to experts."
        }
      ]
    }
  ],
  practiceExamples: [
    {
      question: 'Have you ever learned a digital skill?',
      bands: [
        { band: '6.5', answer: '(Yes Pattern) Definitely! I learned how to use Photoshop a few years ago. I took it up because I wanted to edit my own photos to post on social media. At first, it was quite tricky because there were so many tools. However, after practicing every day, I started to get the hang of it. It turned out to be very useful. Now, I can design simple posters for my friends. I still use it from time to time to keep my skills sharp.' },
        { band: '5.0', answer: '(No Pattern) To be honest, I’ve never had the chance to learn any professional digital skills yet. During my time at high school, I was always busy with academic subjects, so I had little exposure to design software. However, I’m quite keen on learning Photoshop in the near future. It is actually on my bucket list. So, I’m planning to watch some online tutorials to give it a go when I have more breathing space.' }
      ]
    },
    {
      question: 'Are you good at solving math problems?',
      bands: [
        { band: '6.5', answer: 'To be honest, I’m not really good at math. It’s definitely not my strong suit. During my school years, I always struggled with numbers and complex formulas. I feel I just don\'t have a natural talent for it. To be fair, I’m more of a language person rather than a technical one. So whenever I need to calculate something complicated, I just use a calculator to save time.' }
      ]
    },
    {
      question: 'Have you ever learned to play a musical instrument?',
      bands: [
        { band: '6.5', answer: 'Yes, I did learn to play the guitar through online tutorials. I started learning it because I wanted to play some instruments but It was so difficult for me. I faced a number of challenges during practice because my hands were not familiar with the finger positions on the guitar. After putting in a lot of effort, I could finally play some basic chords. Now, I am still learning it and believe practice would make perfect.' },
        { band: '5.0', answer: 'To be honest, I’ve never had the chance to learn how to play any musical instruments yet. When I was younger, I was always busy with academic subjects, so I had little exposure to music classes. Also, buying a musical instrument was quite expensive back then. However, I’m keen on learning the guitar in the near future because I love acoustic music.' }
      ]
    }
  ],
  homeworkQuestions: [
    'Have you ever learned about the history of your hometown?',
    'Are you good at solving math problems?',
    'Have you ever learned how to read a map?',
    'Are you good at making things by hand?',
    'Have you ever learned about stars and planets?'
  ]
};

export const extraWritingLesson4 = {
  id: 104,
  title: 'Lesson 4: Line Graph (Enriched)',
  category: 'Writing',
  essayStructure: {
    introduction: "The line graph illustrates the number of / the amount of / the percentage of + (object) + over the period from (start year) to (end year).",
    overview: "Sentence 1: Overall trend (upward, downward, fluctuated). Sentence 2: Most striking feature (highest, overtook, significant change).",
    body1: "Describe 1-2 lines in detail. Start year, main changes, notable points, end point.",
    body2: "Describe remaining lines. Compare with body 1 lines.",
    target: "170–200 words total"
  },
  trendReference: {
    overview_cases: {
      verbs: ['recorded the highest values', 'was far higher than all the other categories', 'remained the lowest category', 'experienced the most significant change', 'which started with the smallest figure, later became the leading category'],
      nouns: ['highest figures throughout the period', 'leading category']
    }
  },
  approximationWords: [
    {
      category: 'Approximations',
      words: ['about', 'around', 'approximately', 'roughly', 'nearly', 'almost', 'just under', 'just over']
    }
  ],
  commonMistakes: [
    { wrong: "quantity of people", right: "number of people", rule: "'quantity' used for goods/freight, not people" },
    { wrong: "goods is", right: "goods are / amount of goods is", rule: "goods is plural, but amount of goods is singular" }
  ],
  practiceExamples: [
    {
      question: 'Line graph: Average CO2 emissions per person in 4 countries (1967-2007)',
      bands: [
        { band: '6.5', answer: 'The line graph illustrates the amount of CO2 emitted by each person in four European countries from 1967 and 2007. Overall, while carbon dioxide emissions per person in the UK and Sweden experienced downward trends, the figures for Italy and Portugal increased over the years. Additionally, it is clear that the UK consistently recorded the highest figures throughout the period. In 1967, the amount of CO2 each person produced in the UK started at roughly 11 metric tonnes, which then reduced steadily to just under 9 metric tonnes in 2007. Meanwhile, the quantity of CO2 in Sweden recorded rapid growth from nearly 9 to just over 10 metric tonnes by 1977. However, there was a significant reduction to just under 6 metric tonnes at the end of the period. Regarding the remaining categories, CO2 emissions in Italy experienced a significant climb from around 4 to just under 8 metric tonnes and then remained unchanged. Similarly, the figure for Portugal rose considerably to approximately 5 metric tonnes.' }
      ]
    },
    {
      question: 'Line graph: Quantities of goods transported in the UK (1974-2002) by 4 modes',
      bands: [
        { band: '6.5', answer: 'The line graph illustrates the amount of goods transported in the UK by four means of transport, namely road, water, rail and pipeline, from 1974 to 2002. Overall, while the quantities of goods transported by road, water and pipeline experienced upward trends, the figure for rail fluctuated. In addition, road transport was far higher than all the categories. In 1974, goods transported by road started at 70 million tonnes, increasing steadily to 95 million tonnes in 2002. Similarly, water transport increased substantially from just under 40 to around 55 million tonnes, before falling and then rising to 65 million tonnes in 2002. Regarding the remaining categories, rail started at 40 million tonnes, hit its lowest point of 30 million tonnes in 1994, and grew back to just over 40 million tonnes. By contrast, pipeline transport experienced a steady climb from 5 to roughly 25 million tonnes.' }
      ]
    }
  ]
};
