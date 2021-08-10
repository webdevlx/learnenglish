import LessonService from "../../services/LessonService";

export default {
  actions: {
    fetchLessons(context) {
      LessonService.getLessons().then((response) => {
        context.commit("SET_LESSONS", response.data)
      })
    },
    fetchLesson(context, id) {
      LessonService.getLesson(id).then((response) => {
        context.commit("SET_LESSON", response.data)
      })
    }
  },
  mutations: {
    SET_LESSONS(state, lessons) {
      state.lessons = lessons
    },
    SET_LESSON(state, lesson) {
      state.lesson = lesson;
      state.lesson.questions = state.quizzes.filter(quiz => quiz.id === lesson.id)[0].questions;
      state.lesson.speakingPracticeText = state.speakingPracticeTexts.filter(speakingPractice => speakingPractice.id === lesson.id)[0].speakingPracticeText;
      state.lesson.conversationText = state.conversations.filter(conversation => conversation.id === lesson.id)[0].conversationText;
    }
  },
  state: {
    lessons: [],
    lesson: {},
    quizzes: [
      {
        "id": 1,
        "questions": [
          {
            "id": 1,
            "titleText": [
              {
                "lang": "en",
                "text": "Play the video, then answer the question. Who is she?",
              },
              {
                "lang": "uz",
                "text": "Videoni ko'ring, so'ngra savolga javob bering. Kim u?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/5/55/55878189-5b52-44f8-a349-196dc9e18f80_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Hi, I am Mary.",
              },
              {
                "lang": "uz",
                "text": "Salom, Men Meriman."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Melissa",
                "correct": false
              },
              {
                "id": 2,
                "title": "Mary",
                "correct": true
              },
              {
                "id": 3,
                "title": "Maurice",
                "correct": false
              },
              {
                "id": 4,
                "title": "Meghan",
                "correct": false
              }
            ]
          },
          {
            "id": 2,
            "titleText": [
              {
                "lang": "en",
                "text": "Play the video, then answer the question. Who is he?",
              },
              {
                "lang": "uz",
                "text": "Videoni ko'ring, so'ngra savolga javob bering. Kim u?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/b/ba/babae245-0a4d-41c5-9214-767057c5edbd_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Hi, I am John.",
              },
              {
                "lang": "uz",
                "text": "Salom, Men Jonman."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Joseph",
                "correct": false
              },
              {
                "id": 2,
                "title": "Shawn",
                "correct": false
              },
              {
                "id": 3,
                "title": "John",
                "correct": true
              },
              {
                "id": 4,
                "title": "Josh",
                "correct": false
              }
            ]
          },
          {
            "id": 3,
            "titleText": [
              {
                "lang": "en",
                "text": "Play the video, then answer the question. What does the person say?",
              },
              {
                "lang": "uz",
                "text": "Videoni ko'ring, so'ngra savolga javob bering. Shaxs nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/c/c8/c884bee2-1ce1-4e43-926c-af7c03dfd75f_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Hi. I am Jill. Are you John?",
              },
              {
                "lang": "uz",
                "text": "Salom. Men Jilman. Siz Jonmisiz?"
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Hello. My name is Russell. Are you Sarah?",
                "correct": false
              },
              {
                "id": 2,
                "title": "What is your name?",
                "correct": false
              },
              {
                "id": 3,
                "title": "Hello. What is your name? My name is John.",
                "correct": false
              },
              {
                "id": 4,
                "title": "Hi. I am Jill. Are you John?",
                "correct": true
              }
            ]
          },
          {
            "id": 4,
            "titleText": [
              {
                "lang": "en",
                "text": "Play the video, then answer the question. What does the person say?",
              },
              {
                "lang": "uz",
                "text": "Videoni ko'ring, so'ngra savolga javob bering. Shaxs nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/4/4e/4e6954ea-323c-434b-a097-e135a60ed440_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Hi. I am Russell. Are you Anna's friend?",
              },
              {
                "lang": "uz",
                "text": "Salom. Men Rasselman. Siz Annaning do'stimisiz?"
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Hi. I am Ross. Are you Jill's friend?",
                "correct": false
              },
              {
                "id": 2,
                "title": "Hello. I am Pete. Are you Anna?",
                "correct": false
              },
              {
                "id": 3,
                "title": "Hi. I am Russell. Are you Anna's friend?",
                "correct": true
              },
              {
                "id": 4,
                "title": "Hello. I am John. Are you Mary?",
                "correct": false
              }
            ]
          },
          {
            "id": 5,
            "titleText": [
              {
                "lang": "en",
                "text": "Play the video, then answer the question. What does Anna say?",
              },
              {
                "lang": "uz",
                "text": "Videoni ko'ring, so'ngra savolga javob bering. Anna nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/0/07/077c72e4-0a04-4903-96b9-36def8b7f28b_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Yes. I am.",
              },
              {
                "lang": "uz",
                "text": "Ha. Men."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Yes, Sam.",
                "correct": false
              },
              {
                "id": 2,
                "title": "Yes ma'am.",
                "correct": false
              },
              {
                "id": 3,
                "title": "Yes. I am",
                "correct": true
              }
            ]
          },
          {
            "id": 6,
            "titleText": [
              {
                "lang": "en",
                "text": "Play the video, then answer the question. What does Anna say?",
              },
              {
                "lang": "uz",
                "text": "Videoni ko'ring, so'ngra savolga javob bering. Anna nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/f/fa/fa312f88-a759-4f0b-8335-61129e795f2a_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Nice to meet you!",
              },
              {
                "lang": "uz",
                "text": "Tanishganimdan xursandman!"
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Ice cream, please!",
                "correct": false
              },
              {
                "id": 2,
                "title": "Nice to meet you!",
                "correct": true
              },
              {
                "id": 3,
                "title": "Nice to chew food!",
                "correct": false
              },
              {
                "id": 4,
                "title": "Have a nice weekend!",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "questions": [
          {
            "id": 1,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Anna say?",
              },
              {
                "lang": "uz",
                "text": "Anna nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/5/52/5275923d-8edd-4915-adc7-db20e6c2e9bf_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Where are you from?",
              },
              {
                "lang": "uz",
                "text": "Qayerdansiz?"
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Where do you work?",
                "correct": false
              },
              {
                "id": 2,
                "title": "What do you think?",
                "correct": false
              },
              {
                "id": 3,
                "title": "Where are you from?",
                "correct": true
              },
              {
                "id": 4,
                "title": "Where are you now?",
                "correct": false
              }
            ]
          },
          {
            "id": 2,
            "titleText": [
              {
                "lang": "en",
                "text": "Where is she from?",
              },
              {
                "lang": "uz",
                "text": "U qayerdan?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/b/bd/bdb3ce6e-264d-4ba1-ba37-d1600f5801f9_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "I am from a small town.",
              },
              {
                "lang": "uz",
                "text": "Men kichkina shaharchadanman."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "I am from Austin.",
                "correct": false
              },
              {
                "id": 2,
                "title": "I am from a small town.",
                "correct": true
              },
              {
                "id": 3,
                "title": "I am from a big city.",
                "correct": false
              },
              {
                "id": 4,
                "title": "I am from Somalia.",
                "correct": false
              }
            ]
          },
          {
            "id": 3,
            "titleText": [
              {
                "lang": "en",
                "text": "What is her apartment number?",
              },
              {
                "lang": "uz",
                "text": "Uning kvartirasining raqami nima?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/4/40/4062de48-ee01-4978-a7e9-b6582af2a9cb_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "I am in apartment B4.",
              },
              {
                "lang": "uz",
                "text": "Men B4 kvartiradaman."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "I live in apartment D4.",
                "correct": false
              },
              {
                "id": 2,
                "title": "I am in apartment E4.",
                "correct": false
              },
              {
                "id": 3,
                "title": "I live in apartment G4.",
                "correct": false
              },
              {
                "id": 4,
                "title": "I am in apartment B4.",
                "correct": true
              }
            ]
          },
          {
            "id": 4,
            "titleText": [
              {
                "lang": "en",
                "text": "What is her apartment number?",
              },
              {
                "lang": "uz",
                "text": "Uning kvartirasining raqami nima?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/0/02/02aaafe5-7507-4c77-8b24-23cf2a678716_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "I am in apartment C2.",
              },
              {
                "lang": "uz",
                "text": "Men C2 kvartiradaman."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "I am in apartment C2.",
                "correct": true
              },
              {
                "id": 2,
                "title": "I am in apartment S2.",
                "correct": false
              },
              {
                "id": 3,
                "title": "I am in apartment C4.",
                "correct": false
              },
              {
                "id": 4,
                "title": "I am in apartment D4.",
                "correct": false
              }
            ]
          },
          {
            "id": 5,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Anna say?",
              },
              {
                "lang": "uz",
                "text": "Anna nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/f/fa/fa613998-ea28-4b39-b011-83649623c8ec_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "My apartment is number D7.",
              },
              {
                "lang": "uz",
                "text": "Mening kvartiramning raqami D7."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "My department is new.",
                "correct": false
              },
              {
                "id": 2,
                "title": "My apartment is number D7.",
                "correct": true
              },
              {
                "id": 3,
                "title": "My apartment is number D9.",
                "correct": false
              },
              {
                "id": 4,
                "title": "My department is in room D7.",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "questions": [
          {
            "id": 1,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Anna say about Marsha?",
              },
              {
                "lang": "uz",
                "text": "Anna Marsha haqida nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/7/70/70d903aa-6c98-490c-b036-1216d0d2a752_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "She says, \"We're roommates.\"",
              },
              {
                "lang": "uz",
                "text": "U \"Biz xonadoshmiz\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Anna says she is in Marsha's room.",
                "correct": false
              },
              {
                "id": 2,
                "title": "She says she wants to meet Marsha.",
                "correct": false
              },
              {
                "id": 3,
                "title": "Anna says Marsha is her best friend.",
                "correct": false
              },
              {
                "id": 4,
                "title": "She says she and Marsha are roommates.",
                "correct": true
              }
            ]
          },
          {
            "id": 2,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Anna want to do?",
              },
              {
                "lang": "uz",
                "text": "Anna nima qilmoqchi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/c/cd/cdf36829-94af-4ac4-8c90-34f7312b5bd6_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Anna says, \"I want to cook dinner.\"",
              },
              {
                "lang": "uz",
                "text": "Anna \"Men kechki ovqat tayyorlamoqchiman\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Anna wants to see what is in there.",
                "correct": false
              },
              {
                "id": 2,
                "title": "She wants to cook dinner.",
                "correct": true
              },
              {
                "id": 3,
                "title": "Anna wants to call Marsha.",
                "correct": false
              },
              {
                "id": 4,
                "title": "She wants to ask a friend over.",
                "correct": false
              }
            ]
          },
          {
            "id": 3,
            "titleText": [
              {
                "lang": "en",
                "text": "What is Anna asking about?",
              },
              {
                "lang": "uz",
                "text": "Anna nima haqida so'rayapti?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/6/62/62865ade-4b9a-451f-a0fc-30ce1f52bbdd_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "She says, \"Is there a supermarket near here?\"",
              },
              {
                "lang": "uz",
                "text": "U \"Yaqin atrofda supermarket bormi?\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Anna wants to find a restaurant near the apartment.",
                "correct": false
              },
              {
                "id": 2,
                "title": "She asks about the kind of food Marsha likes.",
                "correct": false
              },
              {
                "id": 3,
                "title": "Anna wants to buy food at a supermarket.",
                "correct": true
              },
              {
                "id": 4,
                "title": "She asks about where she can park her car.",
                "correct": false
              }
            ]
          },
          {
            "id": 4,
            "titleText": [
              {
                "lang": "en",
                "text": "Why does the man say he is sorry?",
              },
              {
                "lang": "uz",
                "text": "Nega erkak kechirim soradi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/6/62/62c51b19-bf53-459c-b767-b053b1e95e98_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "He says he is sorry that she has the wrong number.",
              },
              {
                "lang": "uz",
                "text": "Uning aytishicha, u noto'g'ri raqam qo'yganidan afsusdaman."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "He does not know Anna's number.",
                "correct": false
              },
              {
                "id": 2,
                "title": "The man tells Anna she has the wrong number.",
                "correct": true
              },
              {
                "id": 3,
                "title": "He has the wrong phone number.",
                "correct": false
              },
              {
                "id": 4,
                "title": "The man tells Anna that Marsha is not at work.",
                "correct": false
              }
            ]
          },
          {
            "id": 5,
            "titleText": [
              {
                "lang": "en",
                "text": "What does the man say about his phone number?",
              },
              {
                "lang": "uz",
                "text": "Erkak telefon raqami haqida nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/f/f4/f42ae756-0712-4a71-9b7a-b3f4b15cd518_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "The man says, his number is 555-8689.",
              },
              {
                "lang": "uz",
                "text": "Erkakning aytishicha, uning raqami 555-8689."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "He does not tell Anna his phone number.",
                "correct": false
              },
              {
                "id": 2,
                "title": "He says it is 555-8689.",
                "correct": true
              },
              {
                "id": 3,
                "title": "He and Marsha have the same number.",
                "correct": false
              },
              {
                "id": 4,
                "title": "His number is 555-8986.",
                "correct": false
              }
            ]
          },
          {
            "id": 6,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Marsha say to Anna?",
              },
              {
                "lang": "uz",
                "text": "Marsha Annaga nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/a/a7/a785a0fc-9bdf-4f9e-82a3-aac98beddea5_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Marsha says, \"The supermarket is at 1500 Irving Street. It is near the apartment.\"",
              },
              {
                "lang": "uz",
                "text": "Marsha \"Supermarket 1500 Irving ko'chasida. U kvatiraning yonida\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "She does not want Anna to go to the supermarket.",
                "correct": false
              },
              {
                "id": 2,
                "title": "Marsha says the supermarket is near their apartment.",
                "correct": true
              },
              {
                "id": 3,
                "title": "She says Anna is at 1500 Irving Street.",
                "correct": false
              },
              {
                "id": 4,
                "title": "Marsha says the supermarket is on another street.",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "id": 4,
        "questions": [
          {
            "id": 1,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Anna say about the city ?",
              },
              {
                "lang": "uz",
                "text": "Anna shahar haqida nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/6/69/69614628-b06f-485d-9124-cbfaf2308a12_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "She says the city is big.",
              },
              {
                "lang": "uz",
                "text": "Uning aytishicha, shahar katta."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "She likes the city.",
                "correct": false
              },
              {
                "id": 2,
                "title": "Anna says the city is great.",
                "correct": false
              },
              {
                "id": 3,
                "title": "She does not like the city.",
                "correct": false
              },
              {
                "id": 4,
                "title": "Anna says the city is big.",
                "correct": true
              }
            ]
          },
          {
            "id": 2,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Marsha want?",
              },
              {
                "lang": "uz",
                "text": "Marsha nima istaydi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/f/fb/fb2291a2-849d-4e91-9a6a-3cde8240fc88_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Marsha asks Anna for a pen.",
              },
              {
                "lang": "uz",
                "text": "Marsha Annadan ruchka so'radi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "She asks Anna where she has been.",
                "correct": false
              },
              {
                "id": 2,
                "title": "Marsha asks if Anna is going again.",
                "correct": false
              },
              {
                "id": 3,
                "title": "She asks Anna for a pen.",
                "correct": true
              },
              {
                "id": 4,
                "title": "Marsha wants to give Anna a pen.",
                "correct": false
              }
            ]
          },
          {
            "id": 3,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Pete say about the book?",
              },
              {
                "lang": "uz",
                "text": "Pit kitob haqida nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/f/f5/f58956ac-b5c6-4616-9755-93e4691f3077_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Pete says it is a big book.",
              },
              {
                "lang": "uz",
                "text": "Pit u katta kitob dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "He thanks her for the book.",
                "correct": false
              },
              {
                "id": 2,
                "title": "Pete says it is a big book.",
                "correct": true
              },
              {
                "id": 3,
                "title": "He asks why she has a book.",
                "correct": false
              },
              {
                "id": 4,
                "title": "Pete wants to look at the book.",
                "correct": false
              }
            ]
          },
          {
            "id": 4,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Marsha tell Anna?",
              },
              {
                "lang": "uz",
                "text": "Marsha Annaga nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/0/0d/0d541c35-8dd6-4905-80f3-31ddfe122894_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Marsha says the toy is not a pen.",
              },
              {
                "lang": "uz",
                "text": "Marsha o'yinchoq, ruchka emas dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Marsha tells Anna the toy is not a pen.",
                "correct": true
              },
              {
                "id": 2,
                "title": "She tells Anna that she has a pen.",
                "correct": false
              },
              {
                "id": 3,
                "title": "Marsha says it is a toy.",
                "correct": false
              },
              {
                "id": 4,
                "title": "She asks if Anna has another pen.",
                "correct": false
              }
            ]
          },
          {
            "id": 5,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Pete say about the map?",
              },
              {
                "lang": "uz",
                "text": "Pit xarita haqida nima ded?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/6/64/64c5255d-ff87-41d2-8e47-022f5ef06b2f_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "He wants to know why Anna has a map of the world.",
              },
              {
                "lang": "uz",
                "text": "U nega Anna dunyo xaritasiga ega ekanligini bilmoqchi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Pete wants to look at the map.",
                "correct": false
              },
              {
                "id": 2,
                "title": "He asks why Anna has a map.",
                "correct": true
              },
              {
                "id": 3,
                "title": "Pete asks Anna to show him the map.",
                "correct": false
              },
              {
                "id": 4,
                "title": "He wants to put the map on the wall.",
                "correct": false
              }
            ]
          },
          {
            "id": 6,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Pete say to Anna?",
              },
              {
                "lang": "uz",
                "text": "Pit Annaga nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/02/7/77/77d142f2-9690-4014-9a06-adec84e3bfc2_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "He tells her that she has a lamp.",
              },
              {
                "lang": "uz",
                "text": "U unga chiroq borligini aytdi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "I want to see your lamp.",
                "correct": false
              },
              {
                "id": 2,
                "title": "Where is my lamb?",
                "correct": false
              },
              {
                "id": 3,
                "title": "Now you have a lamp.",
                "correct": true
              },
              {
                "id": 4,
                "title": "Why do you have a lamp?",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "id": 5,
        "questions": [
          {
            "id": 1,
            "titleText": [
              {
                "lang": "en",
                "text": "Where is Marsha today? ",
              },
              {
                "lang": "uz",
                "text": "Marsha bugun qayerda?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/1/1b/1bcb1b23-1a74-4fdd-a292-037ba09c3521_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Anna says \"My friend Marsha is at her friend's house.\"",
              },
              {
                "lang": "uz",
                "text": "Anna \"Mening do'stim Marsha do'stining uyida\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Marsha is at the front of the house.",
                "correct": false
              },
              {
                "id": 2,
                "title": "Marsha is at her house.",
                "correct": false
              },
              {
                "id": 3,
                "title": "Marsha is wearing a blouse.",
                "correct": false
              },
              {
                "id": 4,
                "title": "Marsha is at her friend's house.",
                "correct": true
              }
            ]
          },
          {
            "id": 2,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Marsha say? ",
              },
              {
                "lang": "uz",
                "text": "Marsha nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/8/8e/8e89744a-3871-453d-b1f6-5ad89a47d1be_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Marsha says \"Anna, where are you?\"",
              },
              {
                "lang": "uz",
                "text": "Marsha \"Anna, qayerdasiz?\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Andy wears shoes.",
                "correct": false
              },
              {
                "id": 2,
                "title": "Anna, what are you doing?",
                "correct": false
              },
              {
                "id": 3,
                "title": "Anna, where are you?",
                "correct": true
              },
              {
                "id": 4,
                "title": "Anna, this can't be true.",
                "correct": false
              }
            ]
          },
          {
            "id": 3,
            "titleText": [
              {
                "lang": "en",
                "text": "Where is Anna?",
              },
              {
                "lang": "uz",
                "text": "Anna qayerda?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/0/03/03d83329-066f-4c78-8360-755f823e425f_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Anna says \"I am in the bathroom.\"",
              },
              {
                "lang": "uz",
                "text": "Anna \"Men yuvinish xonasidaman\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "She is in the ballroom.",
                "correct": false
              },
              {
                "id": 2,
                "title": "She is in the bathroom.",
                "correct": true
              },
              {
                "id": 3,
                "title": "She is in the restroom.",
                "correct": false
              },
              {
                "id": 4,
                "title": "She is in the bedroom.",
                "correct": false
              }
            ]
          },
          {
            "id": 4,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Anna tell Marsha?",
              },
              {
                "lang": "uz",
                "text": "Anna Marshaga nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/e/e9/e9b9f8b9-8b19-4ded-a4c2-c6056f3b8a3d_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Anna tells her, \"I am in the kitchen.\"",
              },
              {
                "lang": "uz",
                "text": "Anna unga \"Men oshxonadaman\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "I like chicken.",
                "correct": false
              },
              {
                "id": 2,
                "title": "What is in the kitchen?",
                "correct": false
              },
              {
                "id": 3,
                "title": "I am in the kitchen.",
                "correct": true
              }
            ]
          },
          {
            "id": 5,
            "titleText": [
              {
                "lang": "en",
                "text": "Where is Marsha? ",
              },
              {
                "lang": "uz",
                "text": "Marsha qayerda?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/7/7b/7b8b7cd1-4507-4cfe-a689-162c64e9fd90_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Marsha says \"I am in the bedroom.\"",
              },
              {
                "lang": "uz",
                "text": "Marsha \"Men yotoqxondaman\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "She is in the bathroom.",
                "correct": false
              },
              {
                "id": 2,
                "title": "She is in the bedroom.",
                "correct": true
              },
              {
                "id": 3,
                "title": "She is in the ballroom.",
                "correct": false
              },
              {
                "id": 4,
                "title": "She is in the kitchen.",
                "correct": false
              }
            ]
          },
          {
            "id": 6,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Anna say? ",
              },
              {
                "lang": "uz",
                "text": "Anna nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/a/a7/a7609eb8-56cf-4c8f-949e-e5ddf976e10d_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Anna says \"Let's go upstairs.\"",
              },
              {
                "lang": "uz",
                "text": "Anna \"Keling, yuqoriga chiqaylik\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Let's go upstairs.",
                "correct": true
              },
              {
                "id": 2,
                "title": "Let's sit on the chairs.",
                "correct": false
              },
              {
                "id": 3,
                "title": "Come upstairs.",
                "correct": false
              },
              {
                "id": 4,
                "title": "I am on the stairs.",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "id": 6,
        "questions": [
          {
            "id": 1,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Anna say to Pete?",
              },
              {
                "lang": "uz",
                "text": "Anna Pitga nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/4/4d/4d41147b-1fc1-4f66-970a-7437db968f2f_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Anna says “Where is the gym?”",
              },
              {
                "lang": "uz",
                "text": "Anna \"Sport zali qayerda?\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Where is the gym?",
                "correct": true
              },
              {
                "id": 2,
                "title": "Where is Tim?",
                "correct": false
              },
              {
                "id": 3,
                "title": "What are you wearing?",
                "correct": false
              },
              {
                "id": 4,
                "title": "What are you wearing?",
                "correct": false
              }
            ]
          },
          {
            "id": 2,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Pete say to Anna?",
              },
              {
                "lang": "uz",
                "text": "Pit Annaga nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/c/c8/c87dbf4b-2815-49b4-b2a2-58a8ca2278e2_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Pete says \"The gym is across from the lounge.\"",
              },
              {
                "lang": "uz",
                "text": "Pit \"Sport zali dam olish xonasining qarshisida\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "The gym is across from the lounge.",
                "correct": true
              },
              {
                "id": 2,
                "title": "Tim lives across from the lounge.",
                "correct": false
              },
              {
                "id": 3,
                "title": "The gym is near to the lounge.",
                "correct": false
              },
              {
                "id": 4,
                "title": "The gym is behind the lounge.",
                "correct": false
              }
            ]
          },
          {
            "id": 3,
            "titleText": [
              {
                "lang": "en",
                "text": "Where is the gym?",
              },
              {
                "lang": "uz",
                "text": "Sport zali qayerda?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/c/ca/cab1778c-65cb-4512-b646-492c17f50f46_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "\"It's next to the mailroom.\"",
              },
              {
                "lang": "uz",
                "text": "\"Bu pochta xonasi yonida\""
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "It's next to the mailroom.",
                "correct": true
              },
              {
                "id": 2,
                "title": "It's across from the mailroom.",
                "correct": false
              },
              {
                "id": 3,
                "title": "It's behind the mailroom.",
                "correct": false
              },
              {
                "id": 4,
                "title": "It's near the mailroom.",
                "correct": false
              }
            ]
          },
          {
            "id": 4,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Anna ask Pete?",
              },
              {
                "lang": "uz",
                "text": "Anna Pitdan nima so'radi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/04/6/69/69690c4b-ed32-4e21-b60e-7afd00b60efd_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "\"The gym is across from…. what?\"",
              },
              {
                "lang": "uz",
                "text": "\"Sport zali qarama-qarshi tomonida ...nima?\""
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "The gym is across from … what?",
                "correct": true
              },
              {
                "id": 2,
                "title": "The gym is near to …. what?",
                "correct": false
              },
              {
                "id": 3,
                "title": "Tim lives across from … what?",
                "correct": false
              },
              {
                "id": 4,
                "title": "You are the boss? What?",
                "correct": false
              }
            ]
          },
          {
            "id": 5,
            "titleText": [
              {
                "lang": "en",
                "text": "What does she say?",
              },
              {
                "lang": "uz",
                "text": "U nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/6/6b/6bb2a607-a15e-4e26-84cd-74785489ab17_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "\"Across from the lounge.\"",
              },
              {
                "lang": "uz",
                "text": "\"Dam olish xonasining narigi tomonida.\""
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Across from the lounge.",
                "correct": true
              },
              {
                "id": 2,
                "title": "Walk across the lounge.",
                "correct": false
              },
              {
                "id": 3,
                "title": "A crosswalk is near the lounge.",
                "correct": false
              },
              {
                "id": 4,
                "title": "Where are you now?",
                "correct": false
              }
            ]
          },
          {
            "id": 6,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Pete say?",
              },
              {
                "lang": "uz",
                "text": "Pit nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/5/5f/5f7a8c2e-f8d2-49c4-b695-12aa5393b316_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "\"It is behind the lobby.\"",
              },
              {
                "lang": "uz",
                "text": "\"Bu qabulxona orqasida.\""
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "It is behind the lobby.",
                "correct": true
              },
              {
                "id": 2,
                "title": "Have you seen Robbie?",
                "correct": false
              },
              {
                "id": 3,
                "title": "It is across from the lobby.",
                "correct": false
              },
              {
                "id": 4,
                "title": "I live near the lobby.",
                "correct": false
              }
            ]
          }
        ]
      }
    ],
    speakingPracticeTexts: [
      {
        id: 1,
        speakingPracticeText: [
          {
            lang: "en",
            speakingPractice: [
              "apartment - a rented room or set of rooms.",
              "meet - to see and speak to someone for the first time.",
              "new - not known before recently bought or rented.",
              "nice - good and enjoyable.",
              "street - a road in a city, town or village.",
              "try - to make an effort to do something.",
              "welcome - used as a friendly greeting to someone who arrives at a place."
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              "kvartira - ijaraga olingan xona yoki xonalar to'plami.",
              "uchrashish - kimnidir birinchi marta ko'rish va gaplashish.",
              "yangi - yaqinda sotib olingan yoki ijaraga olinishidan oldin noma'lum bo'lgan narsa.",
              "ajoyib - yaxshi va yoqimli.",
              "ko'cha - shahar, shaharcha yoki qishloqdagi yo'l.",
              "urinish - biror narsa qilishga harakat qilish.",
              "xush kelibsiz - biror joyga kelgan kishiga do'stona salom sifatida ishlatiladi."
            ]
          }
        ]
      },
      {
        id: 2,
        speakingPracticeText: [
          {
            lang: "en",
            speakingPractice: [
              "know - to have met and talked to (someone).",
              "number - a number or a set of numbers and other symbols that is used to identify a person or thing.",
              "remember - to have or keep an image or idea in your mind of something or someone from the past.",
              "roommate - a person who shares a room, apartment, or house with someone else.",
              "work - the place where you do your job."
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              "bilmoq - uchrashish va gaplashish (kimdir) bilan.",
              "raqam - raqam yoki raqamlar to'plami va boshqa belgilar, bu shaxsni yoki narsani aniqlash uchun ishlatiladi.",
              "eslamoq - o'tmishdagi biror narsa yoki kimnidur xotirangizda fikr yoki tasavvur qilib saqlamoq.",
              "xonadosh - xonani, kvartirani yoki uyni boshqa birov bilan bo'lishadigan odam.",
              "ish - siz o'z ishingizni bajaradigan joy."
            ]
          }
        ]
      },
      {
        id: 3,
        speakingPracticeText: [
          {
            lang: "en",
            speakingPractice: [
              "cook - to prepare (food) for eating especially by using heat.",
              "dinner - the main meal of the day.",
              "excuse - to forgive someone for making a mistake or doing something wrong.",
              "find - to get or discover something or someone that you are looking for.",
              "here - in this place or at this location.",
              "live - to have a home in a specified place.",
              "near - close to something or someone.",
              "sorry - feeling sorrow or regret.",
              "supermarket - a store where customers can buy a variety of foods and household items.",
              "there - in that place or at that location.",
              "want - to desire or wish for something.",
              "wrong - not suitable or appropriate for a particular purpose, situation, or person."
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              "cook - to prepare (food) for eating especially by using heat.",
              "dinner - the main meal of the day.",
              "excuse - to forgive someone for making a mistake or doing something wrong.",
              "find - to get or discover something or someone that you are looking for.",
              "here - in this place or at this location.",
              "live - to have a home in a specified place.",
              "near - close to something or someone.",
              "sorry - feeling sorrow or regret.",
              "supermarket - a store where customers can buy a variety of foods and household items.",
              "there - in that place or at that location.",
              "want - to desire or wish for something.",
              "wrong - not suitable or appropriate for a particular purpose, situation, or person."
            ]
          }
        ]
      },
      {
        id: 4,
        speakingPracticeText: [
          {
            lang: "en",
            speakingPractice: [
              "bag - a soft container used to hold money and other small things.",
              "big - large in size.",
              "book - a set of printed sheets of paper that are held together inside a cover or a long written work.",
              "coffee - a dark brown drink made from ground coffee beans and boiled water.",
              "lamp - a device that produces light.",
              "little - small in size.",
              "map - a picture or chart that shows the rivers, mountains, streets, etc. in a particular area.",
              "not - makes a word or phrase negative or gives an opposite meaning.",
              "pen - a writing instrument in uses ink",
              "pillow - a bag filled with soft material that is used as a cushion usually for the head of a person who is lying down.",
              "toy - something a child plays with.",
              "world - the earth and all the people and things on it."
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              "bag - a soft container used to hold money and other small things.",
              "big - large in size.",
              "book - a set of printed sheets of paper that are held together inside a cover or a long written work.",
              "coffee - a dark brown drink made from ground coffee beans and boiled water.",
              "lamp - a device that produces light.",
              "little - small in size.",
              "map - a picture or chart that shows the rivers, mountains, streets, etc. in a particular area.",
              "not - makes a word or phrase negative or gives an opposite meaning.",
              "pen - a writing instrument in uses ink",
              "pillow - a bag filled with soft material that is used as a cushion usually for the head of a person who is lying down.",
              "toy - something a child plays with.",
              "world - the earth and all the people and things on it."
            ]
          }
        ]
      },
      {
        id: 5,
        speakingPracticeText: [
          {
            lang: "en",
            speakingPractice: [
              "bathroom - a room with a sink and toilet and usually a bathtub or shower.",
              "beautiful - very good and pleasing; having beauty.",
              "bedroom - a room used for sleeping.",
              "eat - to take food into your mouth and swallow it.",
              "house - a building in which a family lives.",
              "kitchen - a room in which food is cooked.",
              "living room - a room in a house for general family use.",
              "relax - to spend time resting and doing something enjoyable.",
              "sleep - to rest your mind and body by closing your eyes.",
              "upstairs - on or to a higher floor of a building.",
              "wash - to clean something with water and usually soap."
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              "bathroom - a room with a sink and toilet and usually a bathtub or shower.",
              "beautiful - very good and pleasing; having beauty.",
              "bedroom - a room used for sleeping.",
              "eat - to take food into your mouth and swallow it.",
              "house - a building in which a family lives.",
              "kitchen - a room in which food is cooked.",
              "living room - a room in a house for general family use.",
              "relax - to spend time resting and doing something enjoyable.",
              "sleep - to rest your mind and body by closing your eyes.",
              "upstairs - on or to a higher floor of a building.",
              "wash - to clean something with water and usually soap."
            ]
          }
        ]
      },
      {
        id: 6,
        speakingPracticeText: [
          {
            lang: "en",
            speakingPractice: [
              "across from - on the opposite side from someone or something.",
              "behind - in or to a place at the back of or to the rear of someone or something.",
              "elevator - a machine used for carrying people or things to different level in a building.",
              "every - used to describe how often some repeated activity or event happens or is done.",
              "gym - a room or building that has equipment for sports activities or exercise.",
              "lobby - a large open area inside and near the entrance of a public building (such us a hotel or theater).",
              "lounge - a room with comfortable furniture for relaxing.",
              "mailroom - a room in which mail is processed and sorted.",
              "next to - at the side of someone or something.",
              "parking garage - a building in which people usually pay to park their cars, truck, etc.",
              "rooftop - the cover or top of a building or vehicle.",
              "work out - to perform athletic exercises in order to improve your health or physical fitness."
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              "across from - on the opposite side from someone or something.",
              "behind - in or to a place at the back of or to the rear of someone or something.",
              "elevator - a machine used for carrying people or things to different level in a building.",
              "every - used to describe how often some repeated activity or event happens or is done.",
              "gym - a room or building that has equipment for sports activities or exercise.",
              "lobby - a large open area inside and near the entrance of a public building (such us a hotel or theater).",
              "lounge - a room with comfortable furniture for relaxing.",
              "mailroom - a room in which mail is processed and sorted.",
              "next to - at the side of someone or something.",
              "parking garage - a building in which people usually pay to park their cars, truck, etc.",
              "rooftop - the cover or top of a building or vehicle.",
              "work out - to perform athletic exercises in order to improve your health or physical fitness."
            ]
          }
        ]
      }
    ],
    conversations: [
      {
        id: 1,
        conversationText: [
          {
            lang: 'en',
            conversation: [
              {
                name: "Pete",
                title: "Hi! Are you Anna?",
              },
              {
                name: "Anna",
                title: "Yes! Hi there! Are you Pete?",
              },
              {
                name: "Pete",
                title: "I am Pete.",
              },
              {
                name: "Anna",
                title: "Nice to meet you.",
              },
              {
                name: "Anna",
                title: "Let's try that again. I'm Anna. Nice to meet you.",
              },
              {
                name: "Pete",
                title: "I'm Pete. \"Anna\" Is that A-N-A?",
              },
              {
                name: "Anna",
                title: "No. A-N-N-A",
              },
              {
                name: "Pete",
                title: "Well, Anna with two \"n's\" ... Welcome to ... 1400 Irving Street!",
              },
              {
                name: "Anna",
                title: "My new apartment! Yes!",
              }
            ]
          },
          {
            lang: 'uz',
            conversation: [
              {
                name: "Pit",
                title: "Salom! Siz Annamisiz?",
              },
              {
                name: "Anna",
                title: "Ha! Salom! Siz Pitmisiz?",
              },
              {
                name: "Pit",
                title: "Men Pitman.",
              },
              {
                name: "Anna",
                title: "Tanishganimdan xursandman.",
              },
              {
                name: "Anna",
                title: "Keling, yana urinib ko'raylik. Men Annaman. Tanishganimdan xursandman.",
              },
              {
                name: "Pit",
                title: "Men Pitman. \"Anna\" Bu A-N-A emasmi?",
              },
              {
                name: "Anna",
                title: "Yo'q. A-N-N-A",
              },
              {
                name: "Pit",
                title: "Yaxshi, Anna ikkita \"n\" bilan ... 1400 Irving Ko'chasiga ... Xush kelibsiz!",
              },
              {
                name: "Anna",
                title: "Mening yangi kvartiram! Ha!",
              }
            ]
          }
        ]
      },
      {
        id: 2,
        conversationText: [
          {
            lang: 'en',
            conversation: [
              {
                name: "Jonathan",
                title: "Hey, Pete! Who’s your friend?",
              },
              {
                name: "Pete",
                title: "She is Anna. She is new to D.C.",
              },
              {
                name: "Jonathan",
                title: "Where are you from?",
              },
              {
                name: "Anna",
                title: "I am from a small town.",
              },
              {
                name: "Jonathan",
                title: "Well, welcome to D.C.",
              },
              {
                name: "Anna",
                title: "Thank you.",
              },
              {
                name: "Jonathan",
                title: "I am Jonathan. I am in apartment B4.",
              },
              {
                name: "Anna",
                title: "I am in apartment C2. Marsha is my roommate.",
              },
              {
                name: "Jonathan",
                title: "I know Marsha. She is nice.",
              },
              {
                name: "Pete",
                title: "And I am in Apartment D7. I have to go now.",
              },
              {
                name: "Anna",
                title: "Oh!",
              },
              {
                name: "Pete",
                title: "Remember to call Marsha at work. Tell her you’re here.",
              },
              {
                name: "Anna",
                title: "Right, thanks, Pete. Nice to meet you!",
              },
              {
                name: "Jonathan",
                title: "You too, Bye.",
              },
              {
                name: "Anna",
                title: "Apartment C2, here I come!",
              }
            ]
          },
          {
            lang: 'uz',
            conversation: [
              {
                name: "Jonatan",
                title: "Hey, Pit! Sizning do'stingiz kim?",
              },
              {
                name: "Pit",
                title: "U Anna. U D.C da yangi.",
              },
              {
                name: "Jonatan",
                title: "Qayerdansiz?",
              },
              {
                name: "Anna",
                title: "Men kichik shaharchadanman.",
              },
              {
                name: "Jonatan",
                title: "Yaxshi, D.C ga xush kelibsiz.",
              },
              {
                name: "Anna",
                title: "Rahmat.",
              },
              {
                name: "Jonatan",
                title: "Men Jonatanman. Men B4 kvartiradaman.",
              },
              {
                name: "Anna",
                title: "Men C2 kvartiradaman. Marsha - mening xonadoshim.",
              },
              {
                name: "Jonatan",
                title: "Men Marshani bilaman. U yaxshi.",
              },
              {
                name: "Pit",
                title: "Va men D7 kvartiradaman. Hozir ketishim kerak.",
              },
              {
                name: "Anna",
                title: "Oh!",
              },
              {
                name: "Pit",
                title: "Qo'ng'iroq qilishni unutmang, Marsha ishda. Unga bu yerda ekanligingizni ayting.",
              },
              {
                name: "Anna",
                title: "To'g'ri, rahmat, Pit. Tanishganimdan xursandman!",
              },
              {
                name: "Jonatan",
                title: "Siz ham, Xayr.",
              },
              {
                name: "Anna",
                title: "C2 kvartira, mana keldim!",
              }
            ]
          }
        ]
      },
      {
        id: 3,
        conversationText: [
          {
            lang: 'en',
            conversation: [
              {
                name: "Anna",
                title: "I am in my new apartment! Great!",
              },
              {
                name: "Anna",
                title: "I live with Marsha. We’re roommates.",
              },
              {
                name: "Anna",
                title: "I want to cook dinner. Oh! Hmmm. Is there a supermarket near here?",
              },
              {
                name: "Anna",
                title: "Marsha knows. Marsha's work number is 555-8986.",
              },
              {
                name: "Man",
                title: "Hello.",
              },
              {
                name: "Anna",
                title: "Hello. Is this Marsha? It is Anna.",
              },
              {
                name: "Man",
                title: "I am sorry. You have the wrong number.",
              },
              {
                name: "Anna",
                title: "Oh. Is this 555-8986?",
              },
              {
                name: "Man",
                title: "No. This is 555-8689.",
              },
              {
                name: "Anna",
                title: "Oh. Excuse me!",
              },
              {
                name: "Man",
                title: "Okay. 'Bye.",
              },
              {
                name: "Anna",
                title: "One more time. 555-8986. Please be Marsha.",
              },
              {
                name: "Marsha",
                title: "Hello. This is Marsha.",
              },
              {
                name: "Anna",
                title: "Yes, Marsha. I want to cook dinner.",
              },
              {
                name: "Marsha",
                title: "Excuse me? Anna? Is that you?",
              },
              {
                name: "Anna",
                title: "Oh, yes. I am here!",
              },
              {
                name: "Marsha",
                title: "Good. You are there.",
              },
              {
                name: "Anna",
                title: "I want to find a supermarket.",
              },
              {
                name: "Marsha",
                title: "Oh, okay. The supermarket is at 1500 Irving Street. It is near the apartment.",
              },
              {
                name: "Anna",
                title: "Great! Goodbye!",
              },
              {
                name: "Marsha",
                title: "Goodbye, Anna.",
              },
              {
                name: "Anna",
                title: "There is a big supermarket on our street. And Marsha says I am a good cook!"
              },
              {
                name: "Anna",
                title: "Until next time! Bye!"
              }
            ]
          },
          {
            lang: 'uz',
            conversation: [
              {
                name: "Anna",
                title: "I am in my new apartment! Great!",
              },
              {
                name: "Anna",
                title: "I live with Marsha. We’re roommates.",
              },
              {
                name: "Anna",
                title: "I want to cook dinner. Oh! Hmmm. Is there a supermarket near here?",
              },
              {
                name: "Anna",
                title: "Marsha knows. Marsha's work number is 555-8986.",
              },
              {
                name: "Man",
                title: "Hello.",
              },
              {
                name: "Anna",
                title: "Hello. Is this Marsha? It is Anna.",
              },
              {
                name: "Man",
                title: "I am sorry. You have the wrong number.",
              },
              {
                name: "Anna",
                title: "Oh. Is this 555-8986?",
              },
              {
                name: "Man",
                title: "No. This is 555-8689.",
              },
              {
                name: "Anna",
                title: "Oh. Excuse me!",
              },
              {
                name: "Man",
                title: "Okay. 'Bye.",
              },
              {
                name: "Anna",
                title: "One more time. 555-8986. Please be Marsha.",
              },
              {
                name: "Marsha",
                title: "Hello. This is Marsha.",
              },
              {
                name: "Anna",
                title: "Yes, Marsha. I want to cook dinner.",
              },
              {
                name: "Marsha",
                title: "Excuse me? Anna? Is that you?",
              },
              {
                name: "Anna",
                title: "Oh, yes. I am here!",
              },
              {
                name: "Marsha",
                title: "Good. You are there.",
              },
              {
                name: "Anna",
                title: "I want to find a supermarket.",
              },
              {
                name: "Marsha",
                title: "Oh, okay. The supermarket is at 1500 Irving Street. It is near the apartment.",
              },
              {
                name: "Anna",
                title: "Great! Goodbye!",
              },
              {
                name: "Marsha",
                title: "Goodbye, Anna.",
              },
              {
                name: "Anna",
                title: "There is a big supermarket on our street. And Marsha says I am a good cook!"
              },
              {
                name: "Anna",
                title: "Until next time! Bye!"
              }
            ]
          }
        ]
      },
      {
        id: 4,
        conversationText: [
          {
            lang: 'en',
            conversation: [
              {
                name: "Anna",
                title: "Pete, hi! Hi, we are here!",
              },
              {
                name: "Pete",
                title: "Hi, Anna! Hi, Marsha!",
              },
              {
                name: "Anna",
                title: "Hi!",
              },
              {
                name: "Pete",
                title: "How are you two?",
              },
              {
                name: "Marsha",
                title: "I am great!",
              },
              {
                name: "Anna",
                title: "You know, Pete, I am new to D.C. The city is big.",
              },
              {
                name: "Pete",
                title: "Yeah. But you learn a little more every day. How's the new apartment?",
              },
              {
                name: "Anna",
                title: "The new apartment is great! Let's get coffee!",
              },
              {
                name: "Marsha",
                title: "Anna, do you have a pen?",
              },
              {
                name: "Anna",
                title: "Yes. I have a pen in my bag.",
              },
              {
                name: "Anna",
                title: "I have a ...",
              },
              {
                name: "Pete",
                title: "It is not a pen. It is a book. It is a big book.",
              },
              {
                name: "Anna",
                title: "Yes. Yes it is, Pete. I know I have a pen, though...",
              },
              {
                name: "Anna",
                title: "I have a ....",
              },
              {
                name: "Marsha",
                title: "It is not a pen, Anna ... a toy?",
              },
              {
                name: "Anna",
                title: "I have a ....",
              },
              {
                name: "Pete",
                title: "And it is a pillow!",
              },
              {
                name: "Anna",
                title: "Pete, Marsha, I know I have a pen.",
              },
              {
                name: "Marsha",
                title: "Anna, it is a map.",
              },
              {
                name: "Pete",
                title: "Why do you have a map of the world?",
              },
              {
                name: "Anna",
                title: "Pete, Marsha. Now I know I have a pen.",
              },
              {
                name: "Pete",
                title: "And now you have a lamp."
              },
              {
                name: "Marsha",
                title: "Anna."
              },
              {
                name: "Anna",
                title: "I have a pen! Let’s get coffee!"
              }
            ]
          },
          {
            lang: 'uz',
            conversation: [
              {
                name: "Anna",
                title: "I am in my new apartment! Great!",
              },
              {
                name: "Anna",
                title: "I live with Marsha. We’re roommates.",
              },
              {
                name: "Anna",
                title: "I want to cook dinner. Oh! Hmmm. Is there a supermarket near here?",
              },
              {
                name: "Anna",
                title: "Marsha knows. Marsha's work number is 555-8986.",
              },
              {
                name: "Man",
                title: "Hello.",
              },
              {
                name: "Anna",
                title: "Hello. Is this Marsha? It is Anna.",
              },
              {
                name: "Man",
                title: "I am sorry. You have the wrong number.",
              },
              {
                name: "Anna",
                title: "Oh. Is this 555-8986?",
              },
              {
                name: "Man",
                title: "No. This is 555-8689.",
              },
              {
                name: "Anna",
                title: "Oh. Excuse me!",
              },
              {
                name: "Man",
                title: "Okay. 'Bye.",
              },
              {
                name: "Anna",
                title: "One more time. 555-8986. Please be Marsha.",
              },
              {
                name: "Marsha",
                title: "Hello. This is Marsha.",
              },
              {
                name: "Anna",
                title: "Yes, Marsha. I want to cook dinner.",
              },
              {
                name: "Marsha",
                title: "Excuse me? Anna? Is that you?",
              },
              {
                name: "Anna",
                title: "Oh, yes. I am here!",
              },
              {
                name: "Marsha",
                title: "Good. You are there.",
              },
              {
                name: "Anna",
                title: "I want to find a supermarket.",
              },
              {
                name: "Marsha",
                title: "Oh, okay. The supermarket is at 1500 Irving Street. It is near the apartment.",
              },
              {
                name: "Anna",
                title: "Great! Goodbye!",
              },
              {
                name: "Marsha",
                title: "Goodbye, Anna.",
              },
              {
                name: "Anna",
                title: "There is a big supermarket on our street. And Marsha says I am a good cook!"
              },
              {
                name: "Anna",
                title: "Until next time! Bye!"
              }
            ]
          }
        ]
      },
      {
        id: 5,
        conversationText: [
          {
            lang: 'en',
            conversation: [
              {
                name: "Anna",
                title: "Hello, everyone! Today my friend Marsha is at her friend's house. She says it is beautiful. I want to see this house! Here we are!",
              },
              {
                name: "Anna",
                title: "Marsha, I am in the kitchen! It is a beautiful kitchen!",
              },
              {
                name: "Marsha",
                title: "It is beautiful. We cook in the kitchen.",
              },
              {
                name: "Anna",
                title: "I eat in the kitchen.",
              },
              {
                name: "Marsha",
                title: "We relax in the living room.",
              },
              {
                name: "Anna",
                title: "I relax in the living room. Marsha, let’s go upstairs!",
              },
              {
                name: "Marsha",
                title: "Anna? Where are you?",
              },
              {
                name: "Anna",
                title: "Marsha, I am in the bathroom! I wash in the bathroom.",
              },
              {
                name: "Marsha",
                title: "I am in the bedroom. We sleep in the bedroom.",
              },
              {
                name: "Anna",
                title: "I sleep in the bedroom!",
              }
            ]
          },
          {
            lang: 'uz',
            conversation: [
              {
                name: "Anna",
                title: "Hello, everyone! Today my friend Marsha is at her friend's house. She says it is beautiful. I want to see this house! Here we are!",
              },
              {
                name: "Anna",
                title: "Marsha, I am in the kitchen! It is a beautiful kitchen!",
              },
              {
                name: "Marsha",
                title: "It is beautiful. We cook in the kitchen.",
              },
              {
                name: "Anna",
                title: "I eat in the kitchen.",
              },
              {
                name: "Marsha",
                title: "We relax in the living room.",
              },
              {
                name: "Anna",
                title: "I relax in the living room. Marsha, let’s go upstairs!",
              },
              {
                name: "Marsha",
                title: "Anna? Where are you?",
              },
              {
                name: "Anna",
                title: "Marsha, I am in the bathroom! I wash in the bathroom.",
              },
              {
                name: "Marsha",
                title: "I am in the bedroom. We sleep in the bedroom.",
              },
              {
                name: "Anna",
                title: "I sleep in the bedroom!",
              }
            ]
          }
        ]
      },
      {
        id: 6,
        conversationText: [
          {
            lang: 'en',
            conversation: [
              {
                name: "Anna",
                title: "Hi there! I’m Anna and I live in Washington, D.C. Every day I learn more about this great city. People in Washington like to work out! Oh, hi, Pete. How’s it going?",
              },
              {
                name: "Pete",
                title: "Hi, Anna. It’s going great. How’s it going with you?",
              },
              {
                name: "Anna",
                title: "Things are awesome! Pete, I want to work out. Where is the gym?",
              },
              {
                name: "Pete",
                title: "The gym is across from the lounge. It’s next to the mailroom. Go that way.",
              },
              {
                name: "Anna",
                title: "Thanks, Pete!",
              },
              {
                name: "Pete",
                title: "No, Anna! Not that way! Go that way!",
              },
              {
                name: "Anna",
                title: "Oh, Pete. This is not the gym.",
              },
              {
                name: "Pete",
                title: "That’s right, Anna. This is the mailroom.",
              },
              {
                name: "Anna",
                title: "The gym is across from … what?",
              },
              {
                name: "Pete",
                title: "The gym is across from the lounge.",
              },
              {
                name: "Anna",
                title: "Across from the lounge. Right. Thanks!",
              },
              {
                name: "Anna",
                title: "Pete! This is not the gym!",
              },
              {
                name: "Pete",
                title: "The gym is across from the lounge. It is behind the lobby.",
              },
              {
                name: "Anna",
                title: "Right. Right. See you.",
              },
              {
                name: "Pete",
                title: "See you, Anna!",
              },
              {
                name: "Anna",
                title: "See you.",
              },
              {
                name: "Pete",
                title: "See you, Anna.",
              },
              {
                name: "Anna",
                title: "This is not the gym. This is a parking garage.",
              },
              {
                name: "Anna",
                title: "Hello? Pete?",
              },
              {
                name: "Anna",
                title: "This is not a gym. This is a rooftop.",
              },
              {
                name: "Anna",
                title: "Pete! Pete?",
              },
              {
                name: "Pete",
                title: "I want to work out too! Join me!",
              },
              {
                name: "Anna",
                title: "I’m good.",
              },
            ]
          },
          {
            lang: 'uz',
            conversation: [
              {
                name: "Anna",
                title: "Hi there! I’m Anna and I live in Washington, D.C. Every day I learn more about this great city. People in Washington like to work out! Oh, hi, Pete. How’s it going?",
              },
              {
                name: "Pete",
                title: "Hi, Anna. It’s going great. How’s it going with you?",
              },
              {
                name: "Anna",
                title: "Things are awesome! Pete, I want to work out. Where is the gym?",
              },
              {
                name: "Pete",
                title: "The gym is across from the lounge. It’s next to the mailroom. Go that way.",
              },
              {
                name: "Anna",
                title: "Thanks, Pete!",
              },
              {
                name: "Pete",
                title: "No, Anna! Not that way! Go that way!",
              },
              {
                name: "Anna",
                title: "Oh, Pete. This is not the gym.",
              },
              {
                name: "Pete",
                title: "That’s right, Anna. This is the mailroom.",
              },
              {
                name: "Anna",
                title: "The gym is across from … what?",
              },
              {
                name: "Pete",
                title: "The gym is across from the lounge.",
              },
              {
                name: "Anna",
                title: "Across from the lounge. Right. Thanks!",
              },
              {
                name: "Anna",
                title: "Pete! This is not the gym!",
              },
              {
                name: "Pete",
                title: "The gym is across from the lounge. It is behind the lobby.",
              },
              {
                name: "Anna",
                title: "Right. Right. See you.",
              },
              {
                name: "Pete",
                title: "See you, Anna!",
              },
              {
                name: "Anna",
                title: "See you.",
              },
              {
                name: "Pete",
                title: "See you, Anna.",
              },
              {
                name: "Anna",
                title: "This is not the gym. This is a parking garage.",
              },
              {
                name: "Anna",
                title: "Hello? Pete?",
              },
              {
                name: "Anna",
                title: "This is not a gym. This is a rooftop.",
              },
              {
                name: "Anna",
                title: "Pete! Pete?",
              },
              {
                name: "Pete",
                title: "I want to work out too! Join me!",
              },
              {
                name: "Anna",
                title: "I’m good.",
              },
            ]
          }
        ]
      }
    ],

  },
  getters: {
  }
}