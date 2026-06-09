// Knowledge-content lessons added to enrich the tool (June 2026).
// Grounded in current IELTS band-7 guidance — see product/english-knowledge-enrichment/research.md
//   1. Writing Task 2 (Essays)         -> category 'Writing'
//   2. Grammar Essentials for Band 7   -> category 'Foundations'
//   3. Band 7+ Vocabulary & Collocations -> category 'Foundations'
//   4. Pronunciation & Connected Speech -> category 'Speaking'

export const writingTask2Lesson = {
  id: 'write_7',
  category: 'Writing',
  title: 'Lesson 7 - Writing Task 2 (Essays)',
  summary: [
    "Task 2 = bài luận 250+ từ, ~40 phút, chiếm 2/3 điểm Writing. Cấu trúc 4 đoạn: Mở bài – Thân bài 1 – Thân bài 2 – Kết bài.",
    "Band 7 cần đủ 4 tiêu chí: Task Response (trả lời ĐÚNG & ĐỦ mọi phần câu hỏi), Coherence & Cohesion (mạch lạc, dùng từ nối đúng), Lexical Resource (từ vựng đa dạng), Grammatical Range (60–70% câu phức, ít lỗi).",
    "4 dạng đề chính: Opinion (Agree/Disagree), Discussion (both views + opinion), Problem–Solution (Causes/Problems + Solutions), Advantages–Disadvantages.",
    "Nguyên tắc vàng: ÍT ý nhưng triển khai SÂU (lý do + ví dụ) tốt hơn nhiều ý hời hợt. Giữ một QUAN ĐIỂM rõ ràng xuyên suốt bài."
  ],
  structures: [
    { id: 71, name: "Mở bài (Introduction)", formula: "Câu 1: Paraphrase đề bài. Câu 2: Thesis — nêu rõ quan điểm / hướng triển khai.", example: "Whether university tuition should be funded by the state is a topic of ongoing debate. While free education has clear benefits, I believe a shared-cost model is fairer." },
    { id: 72, name: "Câu chủ đề (Topic sentence)", formula: "On the one hand / Firstly, + ý chính của đoạn.", example: "On the one hand, those who support free education argue that it widens access." },
    { id: 73, name: "Triển khai (Explain + Example)", formula: "This is because + lý do. For example / For instance, + ví dụ cụ thể.", example: "This is because removing fees allows talented low-income students to attend. For example, Germany charges no public-university fees." },
    { id: 74, name: "Kết bài (Conclusion)", formula: "In conclusion, + tóm tắt + nhắc lại quan điểm (KHÔNG thêm ý mới).", example: "In conclusion, although free education has advantages, a means-tested system is, in my view, the most equitable approach." }
  ],
  vocabulary: [
    { id: 7001, word: "to what extent do you agree", pronunciation: "/tə wɒt ɪkˈstent/", definition: "mức độ bạn đồng ý (dạng đề Opinion)", example: "To what extent do you agree or disagree?", type: "phrase" },
    { id: 7002, word: "argue / claim / maintain", pronunciation: "/ˈɑːɡjuː/", definition: "lập luận / cho rằng (nêu quan điểm người khác)", example: "Critics argue that the policy is unfair.", type: "verb" },
    { id: 7003, word: "proponents / opponents", pronunciation: "/prəˈpəʊnənts/", definition: "người ủng hộ / phản đối", example: "Proponents of the plan highlight its benefits.", type: "noun" },
    { id: 7004, word: "a means-tested system", pronunciation: "/miːnz ˈtestɪd/", definition: "hệ thống xét theo thu nhập", example: "A means-tested system supports those in need.", type: "phrase" },
    { id: 7005, word: "outweigh", pronunciation: "/ˌaʊtˈweɪ/", definition: "vượt trội hơn (dùng cho Adv/Disadv)", example: "The benefits clearly outweigh the drawbacks.", type: "verb" },
    { id: 7006, word: "address an issue", pronunciation: "/əˈdres/", definition: "giải quyết một vấn đề", example: "Governments must address this issue urgently.", type: "collocation" }
  ],
  topicSections: [
    {
      name: "Dạng 1: Opinion (Agree / Disagree)",
      questions: [{
        question: "“To what extent do you agree or disagree?”",
        template: "Intro: Paraphrase + nêu RÕ quan điểm (agree / disagree / partly agree).\nBody 1: Lý do 1 ủng hộ quan điểm + giải thích + ví dụ.\nBody 2: Lý do 2 + giải thích + ví dụ.\nConclusion: Nhắc lại quan điểm.",
        options: { "Mở bài": ["It is often argued that…", "Many people believe that…"], "Nêu quan điểm": ["I completely agree that…", "I partly agree, because…", "In my view…"] }
      }]
    },
    {
      name: "Dạng 2: Discussion (Both views + opinion)",
      questions: [{
        question: "“Discuss both views and give your opinion.”",
        template: "Intro: Paraphrase + nói sẽ bàn cả 2 quan điểm + quan điểm riêng.\nBody 1: Quan điểm A (lý do + ví dụ).\nBody 2: Quan điểm B (lý do + ví dụ).\nConclusion: Nêu quan điểm của BẠN rõ ràng.",
        options: { "Bắc cầu": ["On the one hand…", "On the other hand…"], "Lưu ý": ["PHẢI bàn cả 2 view + nêu opinion, thiếu 1 phần = mất điểm Task Response"] }
      }]
    },
    {
      name: "Dạng 3: Problem – Solution / Cause – Solution",
      questions: [{
        question: "“What are the causes/problems and what solutions can you suggest?”",
        template: "Intro: Paraphrase + nói sẽ nêu nguyên nhân/vấn đề và giải pháp.\nBody 1: Causes/Problems (1–2 ý, giải thích).\nBody 2: Solutions (mỗi giải pháp gắn với 1 vấn đề).\nConclusion: Tóm tắt.",
        options: { "Nguyên nhân": ["This is largely due to…", "A key factor is…"], "Giải pháp": ["One effective solution would be to…", "Governments could…"] }
      }]
    },
    {
      name: "Dạng 4: Advantages – Disadvantages",
      questions: [{
        question: "“Do the advantages outweigh the disadvantages?”",
        template: "Intro: Paraphrase + trả lời câu hỏi (advantages outweigh hay không).\nBody 1: Advantage(s) + giải thích + ví dụ.\nBody 2: Disadvantage(s) + giải thích.\nConclusion: Cân nhắc và kết luận.",
        options: { "So sánh": ["The main benefit is that…", "However, a significant drawback is…", "On balance, the advantages outweigh…"] }
      }]
    }
  ],
  referenceCards: {
    tabLabel: "🔗 Linking",
    title: "🔗 Linking Words — Từ nối cho bài luận",
    description: "Dùng đúng từ nối để tăng điểm Coherence & Cohesion. Đừng lạm dụng — mỗi đoạn 2–3 từ nối là đủ.",
    groups: [
      { label: "➕ Bổ sung (Addition)", color: "#22c55e", items: ["In addition", "Moreover", "Furthermore", "Besides this"] },
      { label: "↔️ Tương phản (Contrast)", color: "#ef4444", items: ["However", "On the other hand", "Nevertheless", "While / Whereas"] },
      { label: "🎯 Nguyên nhân–Kết quả", color: "#f59e0b", items: ["because / since", "Therefore", "As a result", "Consequently", "This leads to…"] },
      { label: "📌 Ví dụ (Examples)", color: "#a855f7", items: ["For example", "For instance", "such as", "A case in point is…"] },
      { label: "🧾 Quan điểm (Opinion)", color: "#4f8cff", items: ["In my view", "I would argue that", "It seems to me that", "From my perspective"] },
      { label: "✅ Kết luận (Conclusion)", color: "#14b8a6", items: ["In conclusion", "To sum up", "Overall", "On balance"] }
    ]
  },
  commonMistakes: [
    { wrong: "Viết tắt: don't, can't, it's", right: "do not, cannot, it is", rule: "Văn học thuật KHÔNG dùng viết tắt" },
    { wrong: "Nêu nhiều ý nhưng không giải thích", right: "1–2 ý + giải thích + ví dụ", rule: "Triển khai sâu > liệt kê" },
    { wrong: "Quan điểm mơ hồ, đổi ý giữa bài", right: "Giữ MỘT quan điểm xuyên suốt", rule: "Clear position = yêu cầu Band 7" },
    { wrong: "Conclusion thêm ý mới", right: "Conclusion chỉ tóm tắt", rule: "Không đưa thông tin mới ở kết bài" },
    { wrong: "Dưới 250 từ", right: "260–290 từ", rule: "Thiếu từ bị trừ điểm Task Response" }
  ],
  practiceExamples: [
    {
      question: "ĐỀ (Discussion): “Some people believe university education should be free for all, while others think students should pay for it. Discuss both views and give your opinion.”",
      bands: [
        { band: "5.0", answer: "Nowadays many people think university must be free and other people think student should pay money. I will discuss both side. Some people say free education is good because poor student can go to university. If education is free, everybody have a chance to study and get good job. But other people think it is too expensive. The government must pay a lot and the tax will be high. Some people don't go to university so they don't want to pay for other people. In my opinion, government should help poor student and rich student pay by themselves. In conclusion, free university have advantage and disadvantage, but I think mix system is the best." },
        { band: "7.0", answer: "Whether university tuition ought to be funded by the state or paid for by students themselves is a topic of ongoing debate. While there are clear benefits to free higher education, I believe that a shared-cost model is ultimately fairer and more sustainable. On the one hand, supporters of free education argue that it widens access. When fees are removed, talented students from low-income families are no longer excluded on financial grounds, which helps to create a more equal and meritocratic society. In addition, a better-educated workforce benefits the whole country, since graduates tend to earn more, pay more tax and contribute to economic growth. Countries such as Germany, where public universities charge no tuition, show that this approach can succeed without lowering academic standards. On the other hand, opponents point out that free education is extremely expensive and must be funded through higher taxes. They argue that it is unfair to ask the entire population, including those who never attend university, to pay for the studies of a minority. Moreover, when students contribute to the cost of their own degrees, they may take their studies more seriously and choose courses with stronger career prospects rather than enrolling without a clear purpose. In my opinion, the most balanced solution lies between these positions: governments should fully fund students from disadvantaged backgrounds while asking wealthier families to pay a reasonable share. This would protect access for those who need support without placing an unsustainable burden on taxpayers. In conclusion, although free university education has undeniable advantages, a means-tested system that combines public funding with student contributions is, in my view, the most equitable approach." }
      ]
    }
  ],
  homeworkQuestions: [
    "Opinion: “Some people think that children should begin formal education at a very early age. To what extent do you agree or disagree?”",
    "Problem–Solution: “Traffic congestion is increasing in many cities. What are the causes and what solutions can you suggest?”",
    "Adv–Disadv: “More people are working from home. Do the advantages outweigh the disadvantages?”"
  ]
};

export const grammarLesson = {
  id: 'grammar_1',
  category: 'Foundations',
  title: 'Grammar Essentials for Band 7',
  summary: [
    "Band 7 Grammatical Range & Accuracy = dùng ĐA DẠNG cấu trúc phức + phần lớn câu KHÔNG lỗi. Khoảng 60–70% câu nên là câu phức hoặc phức-ghép.",
    "Ưu tiên ĐỘ CHÍNH XÁC: 10 câu phức đúng > 5 câu 'cao siêu' nhưng sai. Nếu không chắc, dùng cấu trúc đơn giản hơn nhưng đúng.",
    "7 cấu trúc 'ăn điểm': mệnh đề phụ thuộc, mệnh đề quan hệ, câu điều kiện, bị động, mệnh đề quan hệ rút gọn, danh từ hóa (nominalisation), đảo ngữ.",
    "Lỗi hay gặp của người Việt: hòa hợp chủ–vị, mạo từ (a/an/the), thì không nhất quán, câu thiếu/chạy (run-on)."
  ],
  structures: [
    { id: 81, name: "1. Câu phức — mệnh đề phụ thuộc", formula: "Although / Because / While / When + clause, + main clause.", example: "Although the policy is expensive, it benefits society in the long run." },
    { id: 82, name: "2. Mệnh đề quan hệ (Relative clause)", formula: "…, who / which / that / whose + V…", example: "Students who study abroad often gain valuable experience." },
    { id: 83, name: "3. Câu điều kiện (Conditionals)", formula: "Type 1: If + present, will + V. · Type 2: If + past, would + V.", example: "If governments invested more in education, literacy rates would rise." },
    { id: 84, name: "4. Bị động (Passive)", formula: "be + V3 · It is argued / believed / said that + clause.", example: "It is widely believed that technology has improved our lives." },
    { id: 85, name: "5. Mệnh đề quan hệ rút gọn (Participle)", formula: "Noun + V-ing / V3 (bỏ 'who/which + be').", example: "People living in cities face higher living costs. (= people who live…)" },
    { id: 86, name: "6. Danh từ hóa (Nominalisation)", formula: "Verb/Clause → Noun phrase.", example: "The government decided to… → The government's decision to… improved the economy." },
    { id: 87, name: "7. Đảo ngữ (Inversion)", formula: "Not only + aux + S + V, but also… · Rarely / Never + aux + S + V.", example: "Not only does exercise improve health, but it also reduces stress." }
  ],
  vocabulary: [
    { id: 8001, word: "although / even though", pronunciation: "/ɔːlˈðəʊ/", definition: "mặc dù (nối tương phản, theo sau là mệnh đề)", example: "Although it was raining, they continued.", type: "conjunction" },
    { id: 8002, word: "despite / in spite of", pronunciation: "/dɪˈspaɪt/", definition: "mặc dù (theo sau là N / V-ing, KHÔNG phải mệnh đề)", example: "Despite the rain, they continued.", type: "preposition" },
    { id: 8003, word: "whereas / while", pronunciation: "/weərˈæz/", definition: "trong khi (so sánh tương phản)", example: "Cities are crowded, whereas the countryside is calm.", type: "conjunction" },
    { id: 8004, word: "which / that", pronunciation: "/wɪtʃ/", definition: "mệnh đề quan hệ cho vật (which có dấu phẩy, that không)", example: "The plan, which was costly, succeeded.", type: "relative pronoun" },
    { id: 8005, word: "would / could / might", pronunciation: "/wʊd/", definition: "động từ khuyết thiếu cho giả định / khả năng", example: "This would reduce pollution significantly.", type: "modal" },
    { id: 8006, word: "nominalisation", pronunciation: "/ˌnɒmɪnəlaɪˈzeɪʃn/", definition: "biến động từ/mệnh đề thành danh từ (giọng học thuật)", example: "develop → the development of…", type: "noun" }
  ],
  referenceCards: {
    tabLabel: "📐 Article + Cohesion",
    title: "📐 Mạo từ & Liên kết câu",
    description: "Hai nguồn lỗi lớn của người Việt: mạo từ và liên kết. Học theo nhóm dưới đây.",
    groups: [
      { label: "a / an", color: "#22c55e", items: ["a + phụ âm: a university (/juː/)", "an + nguyên âm: an hour (h câm)", "đếm được, số ít, lần đầu nhắc"], example: "She is a teacher. He waited an hour." },
      { label: "the", color: "#4f8cff", items: ["vật đã xác định / nhắc lại", "duy nhất: the sun, the government", "so sánh nhất: the best", "+ nhóm: the rich, the elderly"], example: "The plan I mentioned earlier worked." },
      { label: "∅ (không mạo từ)", color: "#a855f7", items: ["danh từ không đếm được chung chung", "số nhiều chung chung", "tên riêng"], example: "Education is important. Cars cause pollution." },
      { label: "🔗 Liên kết câu", color: "#f59e0b", items: ["Reference: this, these, such, it", "Substitution: one, do so", "Đừng lặp từ — thay bằng đại từ/đồng nghĩa"], example: "Pollution is rising; this trend worries scientists." }
    ]
  },
  commonMistakes: [
    { wrong: "The number of cars are rising", right: "The number of cars is rising", rule: "'the number of' = số ít" },
    { wrong: "Although + N (Although the rain)", right: "Although + mệnh đề / Despite + N", rule: "Although cần S+V; Despite cần N/V-ing" },
    { wrong: "She go to school / two car", right: "She goes / two cars", rule: "hòa hợp chủ–vị & số nhiều" },
    { wrong: "In 1990 the population increases", right: "In 1990 the population increased", rule: "nhất quán thì (quá khứ với mốc quá khứ)" },
    { wrong: "I think education very important", right: "I think education is very important", rule: "đừng quên động từ 'to be'" }
  ],
  practiceExamples: [
    {
      question: "Nâng cấp câu ĐƠN → câu PHỨC (Band 5 → Band 7).",
      bands: [
        { band: "5.0", answer: "Cars cause pollution. Pollution is bad for health. The government should do something. People should use buses." },
        { band: "7.0", answer: "Because cars are a major source of pollution, which is harmful to public health, the government should take action by encouraging people to use buses. If more commuters switched to public transport, air quality would improve considerably." }
      ]
    },
    {
      question: "Dùng bị động + mệnh đề quan hệ để học thuật hóa.",
      bands: [
        { band: "5.0", answer: "Many people believe technology makes life easy. Technology also makes people lazy. This is a problem." },
        { band: "7.0", answer: "It is widely believed that technology, which has transformed daily life, also encourages a more sedentary lifestyle — a concern that should not be overlooked." }
      ]
    }
  ],
  homeworkQuestions: [
    "Viết 1 câu điều kiện Type 2 về môi trường (If… would…).",
    "Nối 3 câu đơn sau thành 1 câu phức dùng mệnh đề quan hệ: 'Online learning is popular. It is flexible. It suits busy workers.'",
    "Đổi sang danh từ hóa: 'The government invested in renewable energy and this reduced emissions.'"
  ]
};

export const vocabularyLesson = {
  id: 'vocab_collo',
  category: 'Foundations',
  title: 'Band 7+ Vocabulary & Collocations',
  summary: [
    "Band 7 Lexical Resource = dùng 'less common' từ vựng + có nhận thức về COLLOCATION (từ đi với từ). Học COLLOCATION & cụm, đừng học từ đơn lẻ.",
    "4 chủ đề ra nhiều nhất: Technology, Education, Environment, Society/Health. Mỗi chủ đề thủ sẵn 8–10 collocation.",
    "Ưu tiên dùng đúng & tự nhiên hơn là 'từ to'. Một collocation chuẩn (renewable energy, economic growth) ăn điểm hơn từ hiếm dùng sai.",
    "Tránh lặp 'very/big/good/important' — nâng cấp bằng từ chính xác (severe, pressing, substantial, crucial)."
  ],
  structures: [
    { id: 91, name: "Verb + Noun collocation", formula: "raise awareness · tackle a problem · pose a threat · reap benefits", example: "Campaigns can raise awareness of climate change." },
    { id: 92, name: "Adjective + Noun collocation", formula: "renewable energy · pressing issue · sedentary lifestyle · sustainable development", example: "Governments are investing in renewable energy." },
    { id: 93, name: "Nâng cấp từ yếu → từ mạnh", formula: "big problem → pressing issue · very bad → severe · a lot of → a substantial amount of", example: "Air pollution is a pressing issue in major cities." }
  ],
  vocabulary: [
    { id: 9001, word: "demonstrate", pronunciation: "/ˈdemənstreɪt/", definition: "chứng minh, cho thấy", example: "Studies demonstrate a clear link between diet and health.", type: "verb" },
    { id: 9002, word: "facilitate", pronunciation: "/fəˈsɪlɪteɪt/", definition: "tạo điều kiện, hỗ trợ", example: "Technology facilitates communication across borders.", type: "verb" },
    { id: 9003, word: "implement", pronunciation: "/ˈɪmplɪment/", definition: "triển khai, thực thi (chính sách)", example: "The city implemented a recycling scheme.", type: "verb" },
    { id: 9004, word: "mitigate", pronunciation: "/ˈmɪtɪɡeɪt/", definition: "giảm thiểu (tác hại)", example: "Planting trees can mitigate the effects of pollution.", type: "verb" },
    { id: 9005, word: "pressing issue", pronunciation: "/ˈpresɪŋ ˈɪʃuː/", definition: "vấn đề cấp bách", example: "Unemployment remains a pressing issue.", type: "collocation" },
    { id: 9006, word: "sustainable", pronunciation: "/səˈsteɪnəbl/", definition: "bền vững", example: "We need sustainable solutions to energy demand.", type: "adj" },
    { id: 9007, word: "detrimental", pronunciation: "/ˌdetrɪˈmentl/", definition: "có hại", example: "Junk food is detrimental to health.", type: "adj" },
    { id: 9008, word: "substantial", pronunciation: "/səbˈstænʃl/", definition: "đáng kể, lớn", example: "A substantial number of people commute by car.", type: "adj" },
    { id: 9009, word: "alleviate", pronunciation: "/əˈliːvieɪt/", definition: "làm dịu, giảm bớt (nghèo đói, áp lực)", example: "The policy aims to alleviate poverty.", type: "verb" },
    { id: 9010, word: "widespread", pronunciation: "/ˈwaɪdspred/", definition: "phổ biến, lan rộng", example: "Smartphone use is now widespread.", type: "adj" }
  ],
  referenceCards: {
    tabLabel: "🧠 Collocations",
    title: "🧠 Collocations theo chủ đề (Band 7+)",
    description: "Mỗi chủ đề là một 'bộ' collocation. Học cả cụm + câu ví dụ, dùng trong cả Writing và Speaking.",
    groups: [
      { label: "🌍 Environment", color: "#22c55e", items: ["carbon emissions", "renewable energy", "climate change", "biodiversity loss", "environmental degradation", "carbon footprint", "depletion of natural resources"], example: "Reducing carbon emissions is key to tackling climate change." },
      { label: "🎓 Education", color: "#4f8cff", items: ["academic achievement", "vocational training", "critical thinking", "rote learning", "tuition fees", "lifelong learning", "bridge the skills gap"], example: "Vocational training helps bridge the skills gap." },
      { label: "💻 Technology", color: "#a855f7", items: ["digital literacy", "artificial intelligence", "automation", "data privacy", "screen time", "technological advances", "the digital divide"], example: "Automation may threaten low-skilled jobs." },
      { label: "❤️ Health", color: "#ef4444", items: ["sedentary lifestyle", "balanced diet", "mental wellbeing", "public health", "chronic illness", "preventive measures", "put a strain on healthcare"], example: "A sedentary lifestyle can lead to chronic illness." },
      { label: "🏙️ Society", color: "#f59e0b", items: ["income inequality", "social cohesion", "an ageing population", "cost of living", "crime rate", "cultural diversity", "close the gap between rich and poor"], example: "Rising income inequality threatens social cohesion." },
      { label: "💼 Work", color: "#14b8a6", items: ["work-life balance", "job satisfaction", "remote working", "career prospects", "a heavy workload", "professional development"], example: "Remote working can improve work-life balance." }
    ]
  },
  commonMistakes: [
    { wrong: "make a research", right: "do/conduct research", rule: "collocation sai động từ" },
    { wrong: "very big problem", right: "a serious / pressing problem", rule: "nâng cấp từ vựng, tránh 'very + tính từ yếu'" },
    { wrong: "good for economy", right: "beneficial to the economy", rule: "đăng ký học thuật (register)" },
    { wrong: "etc. / and so on trong essay", right: "liệt kê đủ hoặc dùng 'such as'", rule: "tránh viết tắt liệt kê mơ hồ" }
  ],
  practiceExamples: [
    {
      question: "Nâng cấp từ vựng cơ bản → Band 7 (cùng ý, từ tốt hơn).",
      bands: [
        { band: "5.0", answer: "Pollution is a very big problem. It is very bad for people health. The government must do something fast because it is a big issue for everyone." },
        { band: "7.0", answer: "Pollution has become a pressing issue that is highly detrimental to public health. Governments must implement effective measures without delay, as it poses a serious threat to society as a whole." }
      ]
    }
  ],
  homeworkQuestions: [
    "Viết 1 câu cho mỗi chủ đề (Environment, Education, Technology) dùng ít nhất 1 collocation Band 7.",
    "Thay thế các từ yếu trong câu: 'Technology is very good and helps people a lot.'",
    "Học thuộc 5 collocation chủ đề Health và đặt câu ví dụ."
  ]
};

export const pronunciationLesson = {
  id: 'speak_pron',
  category: 'Speaking',
  title: 'Lesson 7 - Pronunciation & Connected Speech',
  summary: [
    "4 lỗi phát âm lớn của người Việt: (1) NUỐT phụ âm cuối, (2) âm /θ/ /ð/, (3) sai trọng âm từ, (4) nói rời từng từ (thiếu nối âm).",
    "Phụ âm cuối (-s, -ed, -t, -k, -d) PHẢI bật ra — tiếng Việt thường không có âm cuối nên hay bị nuốt, gây mất nghĩa (rice/right/ride).",
    "/θ/ (think, three) và /ð/ (this, weather): đặt lưỡi GIỮA hai hàm răng, KHÔNG thay bằng /t/ /z/ /d/.",
    "Nối âm (connected speech): phụ âm cuối + nguyên âm đầu → nối liền (an apple → 'a napple'); nói trôi chảy giúp tăng điểm Fluency & Pronunciation."
  ],
  structures: [
    { id: 9101, name: "1. Phụ âm cuối (Final consonants)", formula: "Bật rõ âm cuối: -s /s,z/ · -ed /t,d,ɪd/ · -t · -k · -d.", example: "rice /raɪs/ ≠ right /raɪt/ ≠ ride /raɪd/. 'worked' = /wɜːkt/ (bật /t/)." },
    { id: 9102, name: "2. Âm /θ/ và /ð/", formula: "Lưỡi giữa răng. /θ/ vô thanh (think) · /ð/ hữu thanh (this).", example: "think /θɪŋk/ (KHÔNG 'tink'), this /ðɪs/ (KHÔNG 'dis'/'zis')." },
    { id: 9103, name: "3. Trọng âm từ (Word stress)", formula: "Danh từ vs động từ đổi trọng âm; đuôi -tion/-ic kéo trọng âm.", example: "REcord (n) / reCORD (v) · PHOtograph / phoTOgrapher · ecoNOMic." },
    { id: 9104, name: "4. Nối âm (Linking)", formula: "Phụ âm cuối + nguyên âm đầu → nối; /j/ /w/ chèn giữa nguyên âm.", example: "an apple → /ə ˈnæpəl/ · go on → /ɡəʊ wɒn/ · 'this is a' → 'thi-si-sa'." }
  ],
  vocabulary: [
    { id: 9201, word: "three", pronunciation: "/θriː/", definition: "/θr/ cụm phụ âm khó — lưỡi giữa răng rồi cuộn /r/", example: "I have three books.", type: "drill" },
    { id: 9202, word: "clothes", pronunciation: "/kləʊðz/", definition: "/ðz/ cuối rất khó — đừng nuốt", example: "I bought new clothes.", type: "drill" },
    { id: 9203, word: "asked", pronunciation: "/ɑːskt/", definition: "cụm /skt/ cuối — bật cả 3 âm", example: "She asked a question.", type: "drill" },
    { id: 9204, word: "world", pronunciation: "/wɜːld/", definition: "/ld/ cuối — giữ âm /l/ và /d/", example: "Around the world.", type: "drill" },
    { id: 9205, word: "comfortable", pronunciation: "/ˈkʌmftəbl/", definition: "trọng âm đầu, nuốt âm giữa", example: "This chair is comfortable.", type: "drill" },
    { id: 9206, word: "develop", pronunciation: "/dɪˈveləp/", definition: "trọng âm GIỮA (de-VE-lop)", example: "Countries develop quickly.", type: "drill" },
    { id: 9207, word: "weather", pronunciation: "/ˈweðə/", definition: "/ð/ giữa — không thành 'wezza'", example: "The weather is nice.", type: "drill" },
    { id: 9208, word: "months", pronunciation: "/mʌnθs/", definition: "/nθs/ cuối cực khó", example: "Six months ago.", type: "drill" }
  ],
  referenceCards: {
    tabLabel: "🔊 Sound Fixes",
    title: "🔊 Sửa lỗi phát âm (cho người Việt)",
    description: "Bấm 🔊 ở tab Flashcards/Vocabulary để nghe mẫu. Luyện theo từng nhóm dưới đây.",
    groups: [
      { label: "🔚 Phụ âm cuối", color: "#ef4444", items: ["rice / right / ride", "back / bag", "wish / which", "hard / heart", "-ed: worked /t/, played /d/, wanted /ɪd/"], note: "Người Việt hay NUỐT âm cuối → sai nghĩa. Phải bật ra." },
      { label: "👅 /θ/ vô thanh", color: "#4f8cff", items: ["think", "three", "both", "month", "thank you"], note: "KHÔNG thay bằng /t/ ('tink')." },
      { label: "👅 /ð/ hữu thanh", color: "#22c55e", items: ["this", "that", "the", "weather", "rather", "clothes"], note: "KHÔNG thay bằng /d/ hoặc /z/." },
      { label: "🎵 Trọng âm (Stress)", color: "#a855f7", items: ["REcord (n) ↔ reCORD (v)", "PREsent ↔ preSENT", "-tion: na·tion·al", "-ic: eco·NO·mic", "PHO·to·graph ↔ pho·TOG·ra·pher"] },
      { label: "🔗 Nối âm (Linking)", color: "#f59e0b", items: ["an_apple", "this_is", "pick_it_up", "go_on (go-w-on)", "I_am (I-y-am)"], example: "'Turn it off' → 'tur-ni-toff'." }
    ]
  },
  commonMistakes: [
    { wrong: "'tink' cho think", right: "/θɪŋk/ (lưỡi giữa răng)", rule: "/θ/ ≠ /t/" },
    { wrong: "'dis'/'zis' cho this", right: "/ðɪs/", rule: "/ð/ ≠ /d/ ≠ /z/" },
    { wrong: "nuốt -ed: 'work' cho worked", right: "/wɜːkt/", rule: "phải bật âm cuối" },
    { wrong: "nói rời: 'this … is … a'", right: "nối: 'thi-si-sa'", rule: "connected speech tăng fluency" },
    { wrong: "deVElop → 'DE-velop'", right: "de-VE-lop", rule: "sai trọng âm làm khó hiểu" }
  ],
  practiceExamples: [
    {
      question: "Nói RỜI từng từ → nói NỐI ÂM (connected speech).",
      bands: [
        { band: "6.5", answer: "Word-by-word: 'I · would · like · to · turn · it · off · and · go · out.' (nghe cứng, ngắt quãng)" },
        { band: "7.0", answer: "Connected: 'I'd like to turn-it-off and go-out.' → nối /t/+/ɪ/, bật phụ âm cuối, trôi chảy tự nhiên." }
      ]
    }
  ],
  homeworkQuestions: [
    "Luyện cặp tối thiểu: rice/right/ride, think/sink/tink — thu âm và nghe lại.",
    "Đọc to: 'The weather this month is rather cold.' — chú ý mọi âm /ð/ và phụ âm cuối.",
    "Đánh dấu trọng âm 5 từ: photograph, economic, develop, comfortable, present (n/v)."
  ]
};
