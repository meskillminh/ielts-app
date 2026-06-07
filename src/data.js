export const allLessons = [
  // SPEAKING LESSONS
  {
    id: "speak_1",
    category: "Speaking",
    title: "Lesson 1 - Expand your answer",
    summary: [
      "Trong IELTS Speaking Part 1, bạn chỉ cần trả lời từ 2–4 câu cho mỗi câu hỏi. Không cần nói quá dài, nhưng phải Rõ ràng, mạch lạc, ngắn gọn nhưng giàu ý.",
      "3 Cách Trả Lời Hiệu Quả: 1. Answer – 5WH1H – Expansion. 2. It depends (Tùy tình huống). 3. Negative answer (Trả lời phủ định).",
      "Lưu ý: Không lặp lại nguyên văn từ trong câu hỏi. Tránh trả lời chỉ 'Yes/No'. Hãy nói trọn câu."
    ],
    structures: [
      { 
        id: 1, 
        name: "Answer – 5WH1H – Expansion", 
        formula: "Direct Answer + WHEN + WHERE + WHO + WHY", 
        example: "Absolutely, I'm quite fond of walking, especially in the early morning (WHEN) when the air is fresh and quiet (WHY). I usually go for a walk around my neighborhood (WHERE) along with a couple of friends (WHO)." 
      },
      {
        id: 2,
        name: "Mệnh đề quan hệ (Relative Clause)",
        formula: "Noun + which/who/where + Clause",
        example: "Well, I often play badminton, WHICH is one of the most popular sports in my country."
      },
      {
        id: 3,
        name: "Cấu trúc song song",
        formula: "Not only... but also...",
        example: "Playing badminton not only helps me stay in shape but also improves my concentration."
      }
    ],
    vocabulary: [
      { id: 101, word: "To be into something", pronunciation: "/tuː biː ˈɪntuː ˈsʌmθɪŋ/", definition: "Thích cái gì đó (thay vì nói I like).", example: "I am really into listening to pop music.", type: "idiom" },
      { id: 102, word: "Bookworm", pronunciation: "/ˈbʊk.wɜːm/", definition: "Mọt sách.", example: "I consider myself a bookworm.", type: "noun" },
      { id: 103, word: "Stay in shape", pronunciation: "/steɪ ɪn ʃeɪp/", definition: "Giữ dáng.", example: "Playing sports helps me stay in shape.", type: "collocation" },
      { id: 104, word: "Improve concentration", pronunciation: "/ɪmˈpruːv ˌkɒn.sənˈtreɪ.ʃən/", definition: "Cải thiện sự tập trung.", example: "It improves my concentration.", type: "collocation" },
      { id: 105, word: "Unwind", pronunciation: "/ʌnˈwaɪnd/", definition: "Thư giãn (sau khi làm việc căng thẳng).", example: "I listen to music in the evening when I want to unwind.", type: "verb" },
      { id: 131, word: "Clear my mind", pronunciation: "/klɪər maɪ maɪnd/", definition: "Giúp đầu óc nhẹ nhõm, hết lo âu.", example: "Walking is a great way to clear my mind.", type: "collocation" },
      { id: 132, word: "Recharge my batteries", pronunciation: "/riːˈtʃɑːdʒ maɪ ˈbæt.ər.iz/", definition: "Nạp lại năng lượng (sau khi mệt mỏi).", example: "I take a break to recharge my batteries.", type: "idiom" },
      { id: 133, word: "Broaden my knowledge", pronunciation: "/ˈbrɔː.dən maɪ ˈnɒl.ɪdʒ/", definition: "Mở rộng kiến thức.", example: "Reading books helps me broaden my knowledge.", type: "collocation" },
      { id: 134, word: "Sharpen my skills", pronunciation: "/ˈʃɑːr.pən maɪ skɪlz/", definition: "Rèn luyện/làm sắc bén các kỹ năng.", example: "Practice helps me sharpen my skills.", type: "collocation" },
      { id: 135, word: "Lift my mood", pronunciation: "/lɪft maɪ muːd/", definition: "Làm tâm trạng tốt lên.", example: "Listening to music really lifts my mood.", type: "collocation" },
      { id: 136, word: "Step out of my comfort zone", pronunciation: "/step aʊt əv maɪ ˈkʌm.fət zəʊn/", definition: "Bước ra khỏi vùng an toàn.", example: "Traveling helps me step out of my comfort zone.", type: "idiom" },
      { id: 137, word: "A good way to kill time", pronunciation: "/ə ɡʊd weɪ tuː kɪl taɪm/", definition: "Một cách tốt để giết thời gian.", example: "I think reading is a good way to kill time.", type: "phrase" }
    ],
    whyVocabulary: [
      { category: "Thư giãn & Giải tỏa", phrases: [
        { phrase: "Unwind after a long day", meaning: "Thư giãn sau một ngày dài" },
        { phrase: "Clear my mind", meaning: "Giúp đầu óc nhẹ nhõm, hết lo âu" },
        { phrase: "Recharge my batteries", meaning: "Nạp lại năng lượng" },
        { phrase: "Relieve stress / Take pressure off", meaning: "Giảm bớt áp lực, căng thẳng" }
      ]},
      { category: "Phát triển bản thân", phrases: [
        { phrase: "Broaden my knowledge / horizon", meaning: "Mở rộng kiến thức / tầm nhìn" },
        { phrase: "Sharpen my skills", meaning: "Rèn luyện kỹ năng" },
        { phrase: "Step out of my comfort zone", meaning: "Bước ra khỏi vùng an toàn" }
      ]},
      { category: "Sức khỏe & Cảm xúc", phrases: [
        { phrase: "Keep my body in shape", meaning: "Giữ dáng, giữ cơ thể cân đối" },
        { phrase: "Lift my mood", meaning: "Làm tâm trạng tốt lên" },
        { phrase: "Give me a sense of freshness", meaning: "Mang lại cảm giác mới mẻ" }
      ]},
      { category: "Tính tiện lợi / Sở thích", phrases: [
        { phrase: "A good way to kill time", meaning: "Cách tốt để giết thời gian" },
        { phrase: "My all-time favorite", meaning: "Thứ mà tôi luôn yêu thích nhất" }
      ]}
    ],
    expandTable: [
      { wh: "WHO", direction: "Đi với ai", phrases: ["Along with...", "My close friends", "My family members"], example: "I usually go shopping along with my close friends at weekends." },
      { wh: "WHERE", direction: "Ở đâu", phrases: ["Not far from...", "Near my neighborhood", "Within walking distance from my house"], example: "There is a small park near my neighborhood where I can exercise." },
      { wh: "WHEN / HOW OFTEN", direction: "Khi nào / Tần suất", phrases: ["Most of the time", "Every now and then", "Whenever I have free time", "Once / Twice a month"], example: "I listen to music whenever I have free time to relax." },
      { wh: "WHAT", direction: "Chi tiết", phrases: ["Especially…", "Something like...", "All kinds of…"], example: "I like all kinds of movies, something like action or comedy." },
      { wh: "HOW", direction: "Như thế nào", phrases: ["Spend a lot of time on...", "Use my phone/laptop to...", "Quite difficult / easy"], example: "I spend a lot of time on practicing English every day." }
    ],
    practiceExamples: [
      {
        question: "Do you enjoy walking?",
        bands: [
          { band: "4.0", answer: "Yes, I like walking. I usually walk to school every day because it's good for my health. Sometimes I walk with my friends in the park." },
          { band: "5.0", answer: "Yes, I do. I really enjoy walking in the morning because it helps me feel fresh and relaxed. I often walk around the park near my house with my sister. It's also a nice way to talk with her and do some exercise." },
          { band: "6.5", answer: "Absolutely, I'm quite fond of walking, especially in the early morning when the air is fresh and quiet. I usually go for a walk around my neighborhood along with a couple of friends. It's a great way to clear my mind and stay fit at the same time. I try to do it at least four times a week." }
        ]
      },
      {
        question: "How often do you go shopping?",
        bands: [
          { band: "4.0", answer: "I go shopping once a week. I usually go to the supermarket near my house to buy food and drinks. Sometimes I go with my mom when we have free time." },
          { band: "5.0", answer: "I usually go shopping once or twice a week, mostly at the weekend. I often go to a shopping mall with my sister to buy groceries and clothes. I really enjoy it because it's a good way to relax after a busy week." },
          { band: "6.5", answer: "Well, I go shopping quite regularly, maybe once or twice a week, usually on Sundays. I often visit a supermarket which is within walking distance from my house, and I go there with my close friends who love shopping as much as I do. I enjoy it a lot because it's not only a way to buy what I need, but also a chance to relax and catch up with my friends." }
        ]
      },
      {
        question: "What sports do you regularly do?",
        bands: [
          { band: "4.0", answer: "I usually play badminton. I often play it with my friends in the park near my house. We play twice a week to stay healthy." },
          { band: "5.0", answer: "I usually play badminton two or three times a week, mostly in the evening after work. I often play at a sports center near my house with my colleagues. I enjoy it because it helps me keep fit and release stress after a long day." },
          { band: "6.5", answer: "Well, I often play badminton, which is one of the most popular sports in my country. I usually play it with my close friends at a local gym on weekends because that's the only time we're all free. Playing badminton not only helps me stay in shape but also improves my concentration. I've been doing it regularly for a few years now, at least twice a week." }
        ]
      },
      {
        question: "Do you like music?",
        bands: [
          { band: "4.0", answer: "Yes, I like music very much. I often listen to Vietnamese pop songs when I do my homework or clean my room. I usually listen on my phone because it's easy and convenient. Music makes me happy and helps me relax after studying." },
          { band: "5.0", answer: "Yes, I really enjoy listening to music, especially pop and ballad songs. I usually listen in the evening after finishing my homework, or when I travel by bus. Music helps me relax and stay in a good mood, so I listen to it almost every day." },
          { band: "6.5", answer: "Absolutely, I'm really into music, which has always been an essential part of my life. I enjoy listening to different genres like pop, R&B, and sometimes classical music, especially in the evening when I want to unwind. I usually listen at home or while I'm studying, because it helps me concentrate. Honestly, I can't imagine my life without music." }
        ]
      }
    ],
    homeworkQuestions: [
      "How often do you go shopping?",
      "Do you like traveling?",
      "What kind of food do you like to eat?",
      "How often do you use your phone?",
      "What do you usually do in your free time?",
      "What do you usually do on weekends?",
      "Do you like watching movies?",
      "Who do you spend most of your free time with?",
      "Do you like cooking?"
    ]
  },
  {
    id: "speak_2",
    category: "Speaking",
    title: "Lesson 2 - Expand the answer (2)",
    summary: [
      "Chiến lược 'IT DEPENDS': Kéo dài câu trả lời bằng cách nêu 2 tình huống trái ngược (Tình huống thuận lợi vs. Tình huống ngược lại).",
      "Chiến lược 'NEGATIVE ANSWER': 1. Thừa nhận không thích. 2. Nêu lý do. 3. Giải pháp thay thế (Instead). 4. Tương lai dự định."
    ],
    structures: [
      { 
        id: 4, 
        name: "The 'It Depends' Template", 
        formula: "Well, it really depends on my [mood/schedule]. If I [Condition A], I usually [Action A] because [Reason]. But if I [Condition B], I [Action B] instead.", 
        example: "It depends on my schedule. If I have a day off, I try a new recipe. But if I'm exhausted, I order takeaway instead." 
      },
      {
        id: 5,
        name: "Negative Answer Template",
        formula: "To be honest, I don't really [Action]. I'm usually [Reason], so instead, I usually [Alternative].",
        example: "To be honest, I don't exercise regularly. I'm usually up to my ears in schoolwork, so instead, I just stretch at home."
      }
    ],
    vocabulary: [
      { id: 106, word: "Up to my ears in", pronunciation: "/ʌp tuː maɪ ɪəz ɪn/", definition: "Bận ngập đầu.", example: "I'm usually up to my ears in work/study.", type: "idiom" },
      { id: 107, word: "Time-consuming", pronunciation: "/ˈtaɪm.kənˌsjuː.mɪŋ/", definition: "Tốn thời gian.", example: "I find reading long books very time-consuming.", type: "adjective" },
      { id: 108, word: "On a tight budget", pronunciation: "/ɒn ə taɪt ˈbʌdʒ.ɪt/", definition: "Ngân sách eo hẹp.", example: "I rarely go shopping because I'm on a tight budget.", type: "idiom" },
      { id: 109, word: "Binge-watch", pronunciation: "/ˈbɪndʒ.wɒtʃ/", definition: "Xem liền tù tì nhiều tập phim.", example: "If I'm tired, I just stay home and binge-watch Netflix.", type: "verb" },
      { id: 138, word: "Feel under the weather", pronunciation: "/fiːl ˈʌn.dər ðə ˈweð.ər/", definition: "Cảm thấy không khỏe.", example: "If I feel under the weather, I just stay home and rest.", type: "idiom" },
      { id: 139, word: "Treat myself", pronunciation: "/triːt maɪˈself/", definition: "Tự thưởng cho bản thân.", example: "I usually treat myself to a nice meal on weekends.", type: "phrase" },
      { id: 140, word: "Strike a balance", pronunciation: "/straɪk ə ˈbæl.əns/", definition: "Cân bằng giữa hai thứ.", example: "I'm trying to strike a balance between using social media and focusing on important tasks.", type: "idiom" },
      { id: 141, word: "Engaging", pronunciation: "/ɪnˈɡeɪ.dʒɪŋ/", definition: "Thu hút, lôi cuốn.", example: "Short videos are more engaging than long books.", type: "adjective" },
      { id: 142, word: "Lack motivation", pronunciation: "/læk ˌməʊ.tɪˈveɪ.ʃən/", definition: "Thiếu động lực.", example: "Sometimes I lack motivation to exercise.", type: "phrase" }
    ],
    templateBank: {
      itDepends: {
        openers: ["mood", "schedule", "free time", "budget", "energy level", "weather"],
        conditionA: ["have free time", "finish my homework", "have a day off", "feel energetic", "be in a good mood", "feel motivated", "the weather is nice", "receive my salary"],
        actionA: ["cook something nice", "try a new recipe", "exercise / work out", "go jogging", "hang out with friends", "read a book", "study at a café", "go shopping", "eat out", "take photos"],
        reasonA: ["relax", "unwind", "stay healthy", "boost my mood", "clear my mind", "feel refreshed", "bond with friends", "learn something new", "treat myself"],
        conditionB: ["feel tired / exhausted", "feel stressed / overwhelmed", "am up to my ears in work", "have a tight schedule", "feel under the weather", "don't have money / am broke", "traffic is terrible"],
        actionB: ["stay home", "relax in bed", "order food / get takeaway", "watch YouTube / TikTok", "binge-watch Netflix", "listen to music / podcast", "play games", "scroll through social media", "shop online"],
        reasonB: ["save money", "save time", "more convenient", "more relaxing", "avoid traffic", "rest my body / mind", "recharge my energy", "keep things simple"]
      },
      negativeAnswer: {
        openers: ["To be honest, I don't really + V…", "Honestly speaking, I'm not that into + V-ing…", "To be fair, I rarely…", "Well, actually, I don't really enjoy…", "In fact, I hardly ever…"],
        reasons: ["I'm usually up to my ears in work/study", "It's time-consuming", "It takes too much effort", "I'm on a tight budget", "I don't find it enjoyable", "I'm a bit lazy / unmotivated", "I prefer something quicker / simpler"],
        alternatives: ["so instead, I usually...", "so I just…", "so I prefer to… instead", "so most of the time I end up + V-ing…"],
        futurePlans: ["But in the future, I'll try to…", "However, I might start doing it when I have more free time", "But I know it's good for me, so I should give it a try"]
      }
    },
    practiceExamples: [
      {
        question: "Do you like cooking?",
        strategy: "IT DEPENDS",
        bands: [
          { band: "IT DEPENDS", answer: "Well, it really depends on my free time. If I have a day off and feel energetic, I usually try a new recipe or cook something nice because it helps me relax, unwind, and treat myself. I also enjoy updating my cooking skills and making homemade food. But if I'm busy with work or feel exhausted, I just order food or make something quick instead, because it's more convenient and saves time, especially when I don't have the energy to cook or clean up." },
          { band: "NEGATIVE", answer: "Honestly, I don't like cooking much because I am up to my ears in work and cooking is time-consuming. So instead, I often order some food through online apps because it is more convenient for me after a long working day. But I'll try to cook at the weekend when I have more free time." }
        ]
      },
      {
        question: "Do you exercise regularly?",
        strategy: "IT DEPENDS",
        bands: [
          { band: "IT DEPENDS", answer: "To be honest, it depends on my schedule. If I have a lot of free time, I often go for a walk with my close friend at the park near my house, especially at weekends because it is the only time we're all free. But on busy days, instead of going out, I usually stretch my body after waking up in the morning, because it is a great way to keep my body in shape and stay focused." },
          { band: "NEGATIVE", answer: "To be honest, I don't usually do exercise, because I'm up to my ears in study and I don't find it enjoyable. So, instead I usually read books, I think reading is a great way for me to broaden my knowledge and lift my mood. But I know doing exercise is good for my health, so I will try to do it more regularly in the future." }
        ]
      },
      {
        question: "Do you like going to cafés?",
        strategy: "IT DEPENDS",
        bands: [
          { band: "IT DEPENDS", answer: "Honestly, it depends on my mood. When I'm in a good mood, I often go to a café, study there, or hang out with friends because I want to enjoy the atmosphere, feel inspired, and boost my mood. The environment helps me focus and get new ideas too. But if I feel tired or need to save money, I prefer to stay home and make coffee myself instead, since it's cheaper, more relaxing, and I can also avoid crowds." },
          { band: "NEGATIVE", answer: "Not really — I like to study and relax at home. It helps me save money and concentrate better. But I go sometimes with friends or classmates." }
        ]
      },
      {
        question: "Do you enjoy reading books?",
        strategy: "NEGATIVE",
        bands: [
          { band: "NEGATIVE", answer: "Actually, I don't read long books very often. It's quite time-consuming, and sometimes I find it hard to concentrate after a long day. So instead, I usually read short articles or watch educational videos because they're faster and more engaging. But I do want to read more books when I have extra time." }
        ]
      }
    ],
    homeworkQuestions: [
      "Do you watch movies at home?",
      "Do you enjoy social media?",
      "How often do you go to cafés?",
      "Do you like shopping for clothes?"
    ]
  },
  {
    id: "speak_3",
    category: "Speaking",
    title: "Lesson 3 - Basic Information (Hometown)",
    summary: [
      "Overview: Giới thiệu quê hương (I was born and raised in...).",
      "Key Features: Nêu 2-3 điểm nổi bật (beautiful coastline, traditional food, historical sites).",
      "Sử dụng phương pháp P.E.E (Point - Explanation - Emotion) để nói về điều bạn thích nhất ở quê."
    ],
    structures: [
      { 
        id: 6, 
        name: "Hometown Overview", 
        formula: "I was born and raised in [Place], which is a rather [Adj] city located in the [Direction] of Vietnam.", 
        example: "I was born and raised in Hanoi, which is a rather lively city located in the north of Vietnam." 
      },
      {
        id: 7,
        name: "The P.E.E Method (What you like most)",
        formula: "What I treasure most is [Point]. To be specific, [Explanation]. This is why I feel [Emotion].",
        example: "What I treasure most is the hospitality. Everyone is incredibly warm, which creates a wonderful sense of community."
      },
      {
        id: 18,
        name: "Key Features Template",
        formula: "It is best known for [feature] that attract many tourists from all over the world.",
        example: "It is best known for its beautiful coastline and traditional food that attract many tourists from all over the world."
      },
      {
        id: 19,
        name: "Dislike Template",
        formula: "To be honest, I love my hometown, but I don't really like the [problem]. It is a big problem because [reason]. So, I find it quite [emotion] sometimes.",
        example: "To be honest, I love my hometown, but I don't really like the heavy traffic. It is a big problem because there are too many motorbikes. So, I find it quite annoying sometimes."
      }
    ],
    vocabulary: [
      { id: 110, word: "Hustle and bustle", pronunciation: "/ˈhʌs.əl ənd ˈbʌs.əl/", definition: "Sự hối hả và nhộn nhịp.", example: "Unlike the hustle and bustle of big cities, life here is slow-paced.", type: "idiom" },
      { id: 111, word: "Hospitality", pronunciation: "/ˌhɒs.pɪˈtæl.ə.ti/", definition: "Sự hiếu khách.", example: "My city is famous for the hospitality of the local people.", type: "noun" },
      { id: 112, word: "Close-knit", pronunciation: "/ˌkləʊsˈnɪt/", definition: "Khăng khít, gắn bó.", example: "My neighbors are very close-knit.", type: "adjective" },
      { id: 113, word: "Tranquility", pronunciation: "/træŋˈkwɪl.ə.ti/", definition: "Sự yên bình.", example: "I take a stroll around the park to enjoy the tranquility.", type: "noun" },
      { id: 143, word: "Lively", pronunciation: "/ˈlaɪv.li/", definition: "Sôi động.", example: "Hanoi is a lively city with lots of activities.", type: "adjective" },
      { id: 144, word: "Vibrant", pronunciation: "/ˈvaɪ.brənt/", definition: "Đầy sức sống, năng động.", example: "Ho Chi Minh City is a vibrant place with a fast-paced lifestyle.", type: "adjective" },
      { id: 145, word: "Picturesque", pronunciation: "/ˌpɪk.tʃərˈesk/", definition: "Đẹp như tranh vẽ.", example: "Sapa is picturesque with mountains and fog.", type: "adjective" },
      { id: 146, word: "Laid-back", pronunciation: "/ˌleɪd ˈbæk/", definition: "Thư giãn, thoải mái.", example: "People in my hometown have a laid-back lifestyle.", type: "adjective" },
      { id: 147, word: "Sense of belonging", pronunciation: "/sens əv bɪˈlɒŋ.ɪŋ/", definition: "Cảm giác thuộc về nơi đó.", example: "I always feel a strong sense of belonging whenever I'm there.", type: "noun phrase" },
      { id: 148, word: "Born and raised", pronunciation: "/bɔːn ənd reɪzd/", definition: "Sinh ra và lớn lên.", example: "I was born and raised in Da Nang.", type: "phrase" },
      { id: 149, word: "Best known for", pronunciation: "/best nəʊn fɔːr/", definition: "Nổi tiếng nhất vì...", example: "My city is best known for its beautiful coastline.", type: "phrase" }
    ],
    topicSections: [
      {
        name: "I – HOMETOWN",
        questions: [
          {
            question: "Where is your hometown?",
            template: "I was born and raised in [city], which is a rather [adj] city located in the [direction] of Vietnam. It is best known for [feature] that attract many tourists. At the moment, I'm still living there / I've moved to [city] for work/study.",
            options: {
              adjectives: ["lively", "peaceful", "vibrant", "picturesque"],
              features: ["beautiful coastline", "traditional food", "historical sites", "exciting nightlife"],
              lifestyle: ["laid-back", "slow-paced", "energetic", "hustle and bustle"]
            }
          },
          {
            question: "What do you like most about your hometown?",
            template: "What I treasure most about my hometown is [Point]. To be more specific, [Explanation]. For example, [Example]. This is probably why I always feel a strong sense of belonging whenever I'm there.",
            options: {
              food: { point: "the diverse food scene / cuisine", detail: "The local dishes are not only delicious but also very affordable.", example: "You can enjoy a variety of street food from early morning until late at night." },
              people: { point: "the hospitality of the local people", detail: "Everyone is incredibly warm and welcoming, and they are always willing to give you a hand.", example: "My neighbors are very close-knit, which creates a wonderful sense of community." },
              atmosphere: { point: "the laid-back atmosphere", detail: "Unlike the hustle and bustle of big cities, life here moves at a much slower pace.", example: "I love spending my afternoons taking a stroll around the local park to enjoy the tranquility." }
            }
          },
          {
            question: "Is there anything you dislike about it?",
            template: "To be honest, I love my hometown, but I don't really like the [problem]. It is a big problem because [reason]. For example, it takes me a lot of time to [example]. So, I find it quite [feeling] sometimes.",
            options: {
              traffic: { problem: "heavy traffic", reason: "There are too many motorbikes and cars on the street.", example: "commute to work or go to school in the morning", feeling: "annoying" },
              weather: { problem: "hot weather", reason: "In the summer, it is very sunny and uncomfortable.", example: "go out with my friends during the day", feeling: "tiring" },
              noise: { problem: "noise", reason: "Because it is a big city, there is noise from everywhere.", example: "sleep well at night or focus on my study", feeling: "stressful" },
              facilities: { problem: "lack of facilities", reason: "There are not many big hospitals or shopping malls near my house.", example: "buy modern clothes or see a doctor, I have to go to the city", feeling: "inconvenient" }
            }
          }
        ]
      },
      {
        name: "II – THE AREA YOU LIVE IN",
        questions: [
          {
            question: "Which town or city are you living in now?",
            template: "Right now, I'm living in [city], in [District], which is a pretty [adj] area. It's well-known for its [feature], so it's usually quite [adj]. I chose to live here because [reason].",
            options: {
              adjectives: ["modern", "bustling", "peaceful"],
              features: ["street food", "friendly people", "lively atmosphere", "convenient lifestyle"],
              reasons: ["there are more job opportunities", "it's convenient for my studies", "my family moved here"]
            }
          },
          {
            question: "Do you like living there?",
            template: "Absolutely, I really enjoy living here because of its convenience. Everything I need is within walking distance of my apartment, which is really comfortable for my daily life. For example, I can easily [example], which makes living here really enjoyable.",
            options: {
              examples: ["commute to work", "hang out with friends", "find food late at night"]
            }
          }
        ]
      },
      {
        name: "III – WORK OR STUDY",
        questions: [
          {
            question: "Are you a student or do you work?",
            template: "[Student] I'm currently a full-time student. I'm majoring in [subject] at [university]. I'm in my [year] year now.\n[Worker] At the moment, I'm working as a [job]. My company is located in [city], and I've been working there for about [years] years.",
            options: {}
          },
          {
            question: "Why did you choose that major/job?",
            template: "[Student] I chose this major because it's a very practical subject. Also, I believe this major will help me find a good job with a high salary after I graduate.\n[Worker] I decided to do this job because it fits my skills and personality. The working environment at my company is very professional and supportive.",
            options: {
              reasons: ["Passionate about it", "Stable career", "Inspired by family", "Good salary"]
            }
          },
          {
            question: "What are your plans for the future?",
            template: "[Student] My main goal right now is to graduate with a good degree. After that, I plan to [plan]. I believe this will help me [goal].\n[Worker] I will continue working at my current company, but I'm also planning to [plan]. I want to [goal] within the next 5 years.",
            options: {
              studentPlans: ["Find a stable job", "Study for a Master's degree", "Work for a foreign company", "Start my own business"],
              workerPlans: ["Get a promotion", "Learn a new skill", "Save enough money", "Change my career path"],
              goals: ["have a successful career", "support my family", "build my own family"]
            }
          }
        ]
      }
    ]
  },
  {
    id: "speak_4",
    category: "Speaking",
    title: "Lesson 4 - Prefer",
    summary: [
      "Cách nói thích cái gì hơn cái gì (Prefer).",
      "Tuyệt đối không dùng: Prefer reading to watch TV. Phải đồng nhất V-ing: Prefer reading to watching TV.",
      "Band 6.5-7.0: Dùng lý do sâu sắc hơn (time-efficient, allows me to, mainly because)."
    ],
    structures: [
      { 
        id: 8, 
        name: "Prefer A to B", 
        formula: "I prefer [V-ing] to [V-ing]", 
        example: "I prefer living in the city to living in the countryside." 
      },
      {
        id: 9,
        name: "Advanced Preference (Band 6.5+)",
        formula: "I'd say I prefer A to B, mainly because it allows me to [V].",
        example: "I prefer living in the city because it allows me to access better job opportunities."
      }
    ],
    vocabulary: [
      { id: 114, word: "Time-efficient", pronunciation: "/ˈtaɪm.ɪˌfɪʃ.ənt/", definition: "Hiệu quả về thời gian.", example: "I prefer shopping online because it's more time-efficient.", type: "adjective" },
      { id: 115, word: "More into", pronunciation: "/mɔːr ˈɪntuː/", definition: "Thích hơn.", example: "I'm more into A than B.", type: "phrase" },
      { id: 116, word: "Access better opportunities", pronunciation: "/ˈæk.ses ˈbet.ər ˌɒp.əˈtjuː.nə.tiz/", definition: "Tiếp cận cơ hội tốt hơn.", example: "The city allows me to access better job opportunities.", type: "collocation" }
    ]
  },
  {
    id: "speak_5",
    category: "Speaking",
    title: "Lesson 5 - Places + People",
    summary: [
      "Tập trung vào từ vựng miêu tả vị trí (Location & Distance) khi nói về Topic Home/Places.",
      "Mô tả người: Nên chia ra miêu tả Ngoại hình (Appearance), Tính cách (Personality), và Lý do ngưỡng mộ."
    ],
    structures: [
      { 
        id: 10, 
        name: "Relative Clauses for Location", 
        formula: "I live close to [Noun], which is [Adjective].", 
        example: "I live close to a large supermarket, which is very convenient." 
      }
    ],
    vocabulary: [
      { id: 117, word: "Within walking distance of", pronunciation: "/wɪˈðɪn ˈwɔːkɪŋ ˈdɪstəns əv/", definition: "Trong khoảng cách đi bộ.", example: "My house is within walking distance of my office.", type: "prep. phrase" },
      { id: 118, word: "Conveniently located", pronunciation: "/kənˈviːniəntli ləʊˈkeɪtɪd/", definition: "Tọa lạc ở vị trí thuận tiện.", example: "My apartment is conveniently located near many restaurants.", type: "adj. phrase" },
      { id: 119, word: "Residential area", pronunciation: "/ˌrezɪˈdenʃl ˈeəriə/", definition: "Khu dân cư.", example: "I live in a peaceful residential area.", type: "noun phrase" },
      { id: 120, word: "Easily accessible", pronunciation: "/ˈiːzɪli əkˈsesəbl/", definition: "Dễ tiếp cận.", example: "My favorite coffee shop is easily accessible by bus.", type: "adjective phrase" }
    ]
  },

  // WRITING LESSONS
  {
    id: "write_1",
    category: "Writing",
    title: "Lesson 1 - Cấu trúc câu mô tả xu hướng",
    summary: [
      "Xác định bài viết là dạng 'Thay đổi theo thời gian' (Xu hướng) hay 'So sánh' (1 năm duy nhất).",
      "Sử dụng 5 thành phần chính để mô tả: Chủ ngữ, Động từ/Danh từ xu hướng, Trạng từ/Tính từ mức độ, Số liệu, và Thời gian.",
      "Chủ ngữ (Subject): Dùng 'the number of' + danh từ đếm được, 'the amount of' + danh từ không đếm được, hoặc 'the percentage/proportion of'."
    ],
    structures: [
      { 
        id: 11, 
        name: "Structure 1: Verb + Adverb", 
        formula: "Subject + verb (increase/decrease) + adverb (significantly) + from [X] to [Y] + between [Year] and [Year].", 
        example: "The number of cases increased slightly from 100 to 200 between 1965 and 1970." 
      },
      { 
        id: 12, 
        name: "Structure 2: There was + Adj + Noun", 
        formula: "There was a + adjective + noun + in + Subject.", 
        example: "There was a significant increase in the number of cases." 
      },
      {
        id: 20,
        name: "Structure 3: Experienced / Recorded",
        formula: "Subject + experienced/witnessed/recorded + a/an + adj + noun + time.",
        example: "Tourist arrivals recorded a significant increase to 9M in 2015."
      }
    ],
    vocabulary: [
      { id: 121, word: "Significantly", pronunciation: "/sɪɡˈnɪf.ɪ.kənt.li/", definition: "Đáng kể.", example: "Sales rose significantly.", type: "adverb" },
      { id: 122, word: "Slightly", pronunciation: "/ˈslaɪt.li/", definition: "Một chút, nhẹ.", example: "The temperature decreased slightly.", type: "adverb" },
      { id: 150, word: "Dramatically", pronunciation: "/drəˈmæt.ɪ.kəl.i/", definition: "Đột ngột, ấn tượng.", example: "The number of users grew dramatically.", type: "adverb" },
      { id: 151, word: "Gradually", pronunciation: "/ˈɡrædʒ.u.ə.li/", definition: "Dần dần, từ từ.", example: "The price increased gradually over the years.", type: "adverb" },
      { id: 152, word: "Steadily", pronunciation: "/ˈsted.əl.i/", definition: "Đều đặn.", example: "The population grew steadily.", type: "adverb" },
      { id: 153, word: "Sharply", pronunciation: "/ˈʃɑːp.li/", definition: "Mạnh mẽ, đột ngột.", example: "The rate fell sharply in 2010.", type: "adverb" }
    ],
    trendReference: {
      increase: { verbs: ["rise", "increase", "grow", "climb", "go up"], nouns: ["a rise", "an increase", "a growth", "a climb", "an upward trend"] },
      decrease: { verbs: ["decrease", "fall", "drop", "decline", "reduce", "go down"], nouns: ["a decrease", "a fall", "a drop", "a decline", "a reduction", "a downward trend"] },
      stable: { verbs: ["remain unchanged at", "remain constant", "remain stable", "stabilize"], nouns: ["a stability"] },
      fluctuate: { verbs: ["fluctuate between A and B"], nouns: ["a fluctuation"] },
      peak: { verbs: ["peak at", "reach its peak of", "reach its highest point of"] },
      bottom: { verbs: ["hit its lowest point of"] }
    },
    degreeReference: {
      veryStrong: { adjectives: ["dramatic", "rapid", "sharp"], adverbs: ["dramatically", "rapidly", "sharply"] },
      strong: { adjectives: ["significant", "considerable", "substantial", "remarkable"], adverbs: ["significantly", "considerably", "substantially", "remarkably"] },
      medium: { adjectives: ["gradual", "moderate", "steady"], adverbs: ["gradually", "moderately", "steadily"] },
      small: { adjectives: ["slight", "marginal", "minimal"], adverbs: ["slightly", "marginally", "minimally"] }
    },
    prepositionReference: {
      numbers: [
        { prep: "TO", usage: "rose TO 50%", meaning: "final value (where it ended up)" },
        { prep: "BY", usage: "rose BY 20%", meaning: "amount of change (how much it moved)" },
        { prep: "FROM...TO", usage: "from A to B", meaning: "start point and end point" },
        { prep: "AT", usage: "remain unchanged AT", meaning: "the level it stayed at" },
        { prep: "BETWEEN...AND", usage: "fluctuate BETWEEN A AND B", meaning: "range of fluctuation" }
      ],
      time: [
        { prep: "in", usage: "in [year / month]" },
        { prep: "over the period", usage: "over the period (from X to Y)" },
        { prep: "from...to", usage: "from [year] to [year]" },
        { prep: "between...and", usage: "between [year] and [year]" },
        { prep: "throughout", usage: "throughout the period" }
      ]
    }
  },
  {
    id: "write_2",
    category: "Writing",
    title: "Lesson 2 - Mô tả xu hướng (II)",
    summary: [
      "Miêu tả chính xác mức độ thay đổi (Level of changes). Ví dụ: rose 'significantly' vs. declined 'steadily'.",
      "Cách sử dụng giới từ: increased BY 10% (tăng thêm 10%), peaked AT 50% (đạt đỉnh tại 50%).",
      "Band 7 rule: Không bao giờ dùng cùng một từ chỉ mức độ hai lần trong một đoạn văn."
    ],
    structures: [
      { 
        id: 13, 
        name: "Fluctuation and Stability", 
        formula: "Subject + fluctuated / remained stable + between [Year] and [Year].", 
        example: "The number of students from Thailand fluctuated between 2000 and 2020." 
      },
      {
        id: 21,
        name: "Structure 3 Verbs",
        formula: "Subject + experienced / witnessed / recorded / saw + a/an + adj + noun",
        example: "The tourism industry witnessed a remarkable growth over the period."
      }
    ],
    vocabulary: [
      { id: 123, word: "Fell sharply", pronunciation: "/fel ˈʃɑːp.li/", definition: "Giảm mạnh.", example: "The number fell sharply then remained stable.", type: "verb phrase" },
      { id: 124, word: "Remained stable", pronunciation: "/rɪˈmeɪnd ˈsteɪ.bəl/", definition: "Giữ ổn định.", example: "The data from India remained stable.", type: "verb phrase" },
      { id: 125, word: "Declined steadily", pronunciation: "/dɪˈklaɪnd ˈsted.əl.i/", definition: "Giảm đều đặn.", example: "The numbers declined steadily from 2000 to 2020.", type: "verb phrase" },
      { id: 154, word: "Experienced", pronunciation: "/ɪkˈspɪə.ri.ənst/", definition: "Trải qua (dùng trong Structure 3).", example: "The sector experienced a significant decline.", type: "verb" },
      { id: 155, word: "Witnessed", pronunciation: "/ˈwɪt.nəst/", definition: "Chứng kiến (dùng cho thay đổi đột ngột).", example: "The market witnessed a rapid growth.", type: "verb" }
    ]
  },
  {
    id: "write_3",
    category: "Writing",
    title: "Lesson 3 - Viết đoạn văn mô tả xu hướng",
    summary: [
      "Cách sử dụng từ nối để gom nhóm dữ liệu trong một đoạn văn (Body paragraph).",
      "Có 2 loại từ nối: 1. Nối 2 mệnh đề (dấu phẩy: While, After). 2. Nối 2 câu (dấu chấm: However, In contrast).",
      "Quick Decision Guide: Cùng chủ ngữ + cùng hướng → Then/After that. Cùng chủ ngữ + khác hướng → However. Khác chủ ngữ + cùng hướng → Similarly. Khác chủ ngữ + khác hướng → By contrast."
    ],
    structures: [
      { 
        id: 14, 
        name: "Time progression (After/Before)", 
        formula: "Clause 1, after which + Clause 2", 
        example: "The percentage increased to 40% in 1990, after which it peaked at 45% in 1995." 
      },
      { 
        id: 15, 
        name: "Contrast (Tương phản)", 
        formula: "While / Whereas Clause 1, Clause 2", 
        example: "While the US saw an increase, the UK experienced a decline." 
      },
      {
        id: 22,
        name: "After V-ing",
        formula: "After V-ing, Clause 2",
        example: "After remaining stable until 2005, the figure rose sharply."
      },
      {
        id: 23,
        name: "Before V-ing",
        formula: "Clause 1 before V-ing",
        example: "The figure remained stable until 2005 before rising sharply."
      },
      {
        id: 24,
        name: "Relative clause continuation",
        formula: "Clause 1, which then + V",
        example: "It remained stable until 2005, which then rose sharply."
      }
    ],
    vocabulary: [
      { id: 126, word: "Peak at", pronunciation: "/piːk æt/", definition: "Đạt đỉnh tại...", example: "This figure peaked at 45% in 1995.", type: "verb" },
      { id: 127, word: "Dramatic increase", pronunciation: "/drəˈmæt.ɪk ɪnˈkriːs/", definition: "Sự tăng đột ngột, ấn tượng.", example: "There was a dramatic increase from 5 to 90.", type: "noun phrase" },
      { id: 128, word: "Remained unchanged", pronunciation: "/rɪˈmeɪnd ʌnˈtʃeɪndʒd/", definition: "Không thay đổi.", example: "The figure remained unchanged at 5 million.", type: "verb phrase" }
    ],
    connectorReference: {
      withinSentence: {
        time: [
          { connector: "After V-ing, Clause 2", example: "After remaining stable until 2005, the figure rose sharply." },
          { connector: "Clause 1 before V-ing", example: "The figure remained stable until 2005 before rising sharply." },
          { connector: "Clause 1, and then Clause 2", example: "It remained stable until 2005, and then rose sharply." },
          { connector: "Clause 1, which then + V", example: "It remained stable until 2005, which then rose sharply." }
        ],
        contrast: [
          { connector: "While / Whereas Clause 1, Clause 2", example: "While car use rose, bus ridership declined." },
          { connector: "Clause 1, but Clause 2", example: "Car use rose, but bus ridership declined." },
          { connector: "Despite V-ing / Noun, Clause 2", example: "Despite rising demand overall, bus ridership declined." }
        ]
      },
      betweenSentences: {
        time: ["Then, …", "After that, …", "Following that, …"],
        contrast: ["However, … (SAME subject)", "In contrast / By contrast, … (DIFFERENT subject)"],
        similarity: ["Similarly, …", "Likewise, …"],
        neutral: ["Meanwhile, …"]
      }
    },
    approximationWords: [
      { category: "General 'around'", words: ["about", "around", "approximately"] },
      { category: "Not quite there", words: ["nearly", "almost", "roughly"] },
      { category: "Just above / below", words: ["just over", "just under"] }
    ]
  },
  {
    id: "write_4",
    category: "Writing",
    title: "Lesson 4 - Line Graph",
    summary: [
      "Introduction: Paraphrase lại đề bài (Không đưa số liệu vào Mở bài). Dùng từ như 'illustrates', 'proportion'.",
      "Overview: Cần 2 câu. Câu 1 nêu xu hướng chung (Overall, it is clear that...). Câu 2 nêu đặc điểm nổi bật nhất (đường nào cao nhất).",
      "Body: Chia thành 2 đoạn. Body 1 mô tả xu hướng chính. Body 2 mô tả xu hướng phụ, so sánh."
    ],
    structures: [
      { 
        id: 16, 
        name: "Introduction Template", 
        formula: "The line graph illustrates the proportion of + [Đối tượng] + from [Năm] to [Năm].", 
        example: "The line graph illustrates the proportion of Internet users in three nations from 2000 to 2020." 
      },
      { 
        id: 17, 
        name: "Overview Template", 
        formula: "Overall, it is clear that + [tất cả các nhóm] + [tăng/giảm] + over the period.", 
        example: "Overall, it is clear that all groups increased over the period, with X seeing the most dramatic rise." 
      }
    ],
    vocabulary: [
      { id: 129, word: "Illustrate", pronunciation: "/ˈɪl.ə.streɪt/", definition: "Minh họa (Paraphrase cho 'show').", example: "The line graph illustrates the changes.", type: "verb" },
      { id: 130, word: "Proportion", pronunciation: "/prəˈpɔː.ʃən/", definition: "Tỷ lệ (Paraphrase cho 'percentage').", example: "The proportion of people using the Internet.", type: "noun" }
    ],
    essayStructure: {
      introduction: "Paraphrase the task question (1-2 sentences). 'The graph shows…' → 'The line graph illustrates…'. 'changes in…' → 'how X changed / trends in…'",
      overview: "Summarise the 2 biggest trends (2 sentences, NO numbers). 'Overall, it is clear that…' or 'What stands out most is that…'",
      body1: "Biggest/most important trend with specific data (4-5 sentences). Use 'In [year], [subject] stood at [X], which then…'. Mix Structures 1, 2, and 3.",
      body2: "Supporting trends, comparisons (3-4 sentences). Start with 'Turning to…' or 'In terms of…'. Use 'It is worth noting that…' for interesting details.",
      target: "170–200 words total"
    },
    commonMistakes: [
      { wrong: "The data show", right: "The data shows", rule: "'data' = singular in IELTS" },
      { wrong: "The number of students were", right: "The number of students was", rule: "'the number' = singular subject" },
      { wrong: "An increase of the number", right: "An increase in the number", rule: "increase in, not 'of'" },
      { wrong: "Decreased from 2010 until 2020", right: "Decreased from 2010 to 2020", rule: "use 'to' for time ranges" },
      { wrong: "Rose by 50% (when 50% = final value)", right: "Rose to 50%", rule: "TO = final value, BY = amount" },
      { wrong: "The sales in CDs", right: "The sales of CDs", rule: "sales of, not 'in'" },
      { wrong: "Copy the task question word-for-word", right: "Paraphrase the introduction", rule: "Never copy — always rephrase" }
    ]
  }
];
