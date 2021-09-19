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
      },
      {
        "id": 7,
        "questions": [
          {
            "id": 1,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Caty say?",
              },
              {
                "lang": "uz",
                "text": "Keti nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/3/3d/3da3f1f4-42cb-468e-81dc-c53643c0c2bd_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Caty says \"What are you doing?\"",
              },
              {
                "lang": "uz",
                "text": "Keti \"Nima qilayapsiz?\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Where are you going?",
                "correct": false
              },
              {
                "id": 2,
                "title": "Who are you?",
                "correct": false
              },
              {
                "id": 3,
                "title": "What are you doing?",
                "correct": true
              },
              {
                "id": 4,
                "title": "What do you want?",
                "correct": false
              }
            ]
          },
          {
            "id": 2,
            "titleText": [
              {
                "lang": "en",
                "text": "What is Amelia doing?",
              },
              {
                "lang": "uz",
                "text": "Ameliya nima qilayapti?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/d/d8/d8220123-c870-4b10-92b7-962bdaaf8ae6_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Amelia says \"I am reading for my show.\"",
              },
              {
                "lang": "uz",
                "text": "Ameliya \"Men o'z ko'rsatuvimni o'qiyapman\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "She doesn't know.",
                "correct": false
              },
              {
                "id": 2,
                "title": "She's pleading to save her show.",
                "correct": false
              },
              {
                "id": 3,
                "title": "She is reading for her show.",
                "correct": true
              }
            ]
          },
          {
            "id": 3,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Amelia say?",
              },
              {
                "lang": "uz",
                "text": "Ameliya nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/8/87/8738a676-bfc9-41ea-8641-92cd703cc780_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Amelia says \"I am reading.\"",
              },
              {
                "lang": "uz",
                "text": "Ameliya \"Men o'qiyapman\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "She is recording.",
                "correct": false
              },
              {
                "id": 2,
                "title": "She is reading.",
                "correct": true
              },
              {
                "id": 3,
                "title": "She is bleeding.",
                "correct": false
              },
              {
                "id": 4,
                "title": "She is feeding.",
                "correct": false
              }
            ]
          },
          {
            "id": 4,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Anna ask?",
              },
              {
                "lang": "uz",
                "text": "Anna nima so'radi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/0/0b/0bb3355e-0985-4139-abf5-8f3d4623bcd0_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Anna asks \"Are you recording?\"",
              },
              {
                "lang": "uz",
                "text": "Anna \"Ovoz yozayapsizmi?\" deb so'radi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Are you reading?",
                "correct": false
              },
              {
                "id": 2,
                "title": "Are you roaring?",
                "correct": false
              },
              {
                "id": 3,
                "title": "Are you recording?",
                "correct": true
              }
            ]
          },
          {
            "id": 5,
            "titleText": [
              {
                "lang": "en",
                "text": "What is he doing?",
              },
              {
                "lang": "uz",
                "text": "U nima qilayapti?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/c/cf/cf97de6d-668f-4443-a5d1-39757e29d8d4_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Jonathan says \"I am doing my show.\"",
              },
              {
                "lang": "uz",
                "text": "Jonatan \"Men o'z ko'rsatuvimni bajarayapman\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "He is doing his shopping.",
                "correct": false
              },
              {
                "id": 2,
                "title": "He is reading.",
                "correct": false
              },
              {
                "id": 3,
                "title": "He is doing his show.",
                "correct": true
              },
              {
                "id": 4,
                "title": "He is writing.",
                "correct": false
              }
            ]
          },
          {
            "id": 6,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Anna ask?",
              },
              {
                "lang": "uz",
                "text": "Anna nima so'radi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/04/b/b6/b6d93ff4-1585-4bae-ae73-93c5fe4ba899_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Anna asks \"What are you doing?\"",
              },
              {
                "lang": "uz",
                "text": "Anna \"Nima qilayapsiz?\" deb so'radi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Water? Are you drinking?",
                "correct": false
              },
              {
                "id": 2,
                "title": "What are you doing?",
                "correct": true
              },
              {
                "id": 3,
                "title": "Are you recording?",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "id": 8,
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
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/a/a6/a655d369-023a-48b2-a97e-e5a37b96b249_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Anna says \"Yes, Ms. Weaver. I am busy.\"",
              },
              {
                "lang": "uz",
                "text": "Anna \"Ha, Uiver xonim. Men bandman\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "She says that she is busy.",
                "correct": true
              },
              {
                "id": 2,
                "title": "She says that she sees bees.",
                "correct": false
              },
              {
                "id": 3,
                "title": "She says that she is not busy.",
                "correct": false
              },
              {
                "id": 4,
                "title": "She says that she wants to meet at 5pm.",
                "correct": false
              }
            ]
          },
          {
            "id": 2,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Amelia say?",
              },
              {
                "lang": "uz",
                "text": "Ameliya nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/e/ec/ec3871f8-927f-4973-8ed1-07393dcfe804_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Amelia says \"I'm a little busy.\"",
              },
              {
                "lang": "uz",
                "text": "Ameliya \"Men biroz bandman\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Amelia says she is busy.",
                "correct": false
              },
              {
                "id": 2,
                "title": "Amelia says she is not busy.",
                "correct": false
              },
              {
                "id": 3,
                "title": "Amelia says she is a little busy.",
                "correct": true
              }
            ]
          },
          {
            "id": 3,
            "titleText": [
              {
                "lang": "en",
                "text": "What is Jonathan doing when he turns the studio light on?",
              },
              {
                "lang": "uz",
                "text": "Jonatan studiya chiroqlari yonganda nima qilayapti?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/04/8/80/80f1041f-4dc9-4ddb-8751-55bcf2caa95e_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Jonathan says \"I am busy. When the studio light is on, I am recording my evening show.\"",
              },
              {
                "lang": "uz",
                "text": "Jonatan \"Men bandman. Studiya chiroqlari yonganda, men kechki ko'rsatuvimni yozayapman\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "He is calling his friends.",
                "correct": false
              },
              {
                "id": 2,
                "title": "He is recording his show.",
                "correct": true
              },
              {
                "id": 3,
                "title": "He is watching a show.",
                "correct": false
              },
              {
                "id": 4,
                "title": "He is taking a nap.",
                "correct": false
              }
            ]
          },
          {
            "id": 4,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Anne do at 10 am?",
              },
              {
                "lang": "uz",
                "text": "Ertalab soat 10 da Anne nima qiladi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/04/b/b0/b05d18d8-3f89-4c83-a33e-c58d9e350d6a_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Anne says \"Yes. At 10 a.m., I am writing.\"",
              },
              {
                "lang": "uz",
                "text": "Anne \"Ha. Men ertalab 10 da yozayapman\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Anne talks about human rights.",
                "correct": false
              },
              {
                "id": 2,
                "title": "Anne writes at 10 am.",
                "correct": true
              },
              {
                "id": 3,
                "title": "Anne is recording at 10 am.",
                "correct": false
              },
              {
                "id": 4,
                "title": "Anne is running at 10 am.",
                "correct": false
              }
            ]
          },
          {
            "id": 5,
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
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/1/11/11faf605-5ff4-4653-a197-eafae05cd63e_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Anna says \"May I see the studio?\"",
              },
              {
                "lang": "uz",
                "text": "Anna \"Men studiyani ko'rsam bo'ladimi?\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "She wants to see the studio.",
                "correct": true
              },
              {
                "id": 2,
                "title": "She wants to record a show.",
                "correct": false
              },
              {
                "id": 3,
                "title": "She wants to listen to music.",
                "correct": false
              }
            ]
          }
        ]
      },
      {
        "id": 9,
        "questions": [
          {
            "id": 1,
            "titleText": [
              {
                "lang": "en",
                "text": "What does Anna want to know?",
              },
              {
                "lang": "uz",
                "text": "Anna nimani bilishni xohladi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/8/8c/8c55c5b7-8dc7-4b45-944b-cc174db989c0_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Anna asks, \"What is today's temperature?\"",
              },
              {
                "lang": "uz",
                "text": "Anna \"Bugun harorat qanday?\" deb so'radi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Anna wants to know what time it is.",
                "correct": false
              },
              {
                "id": 2,
                "title": "Anna wants to learn about today's news.",
                "correct": false
              },
              {
                "id": 3,
                "title": "Anna wants to know the temperature.",
                "correct": true
              },
              {
                "id": 4,
                "title": "Anna wants to know how to make tea.",
                "correct": false
              }
            ]
          },
          {
            "id": 2,
            "titleText": [
              {
                "lang": "en",
                "text": "What does the phone say?",
              },
              {
                "lang": "uz",
                "text": "Telefon nima dedi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/1/12/12d0f239-8e90-4d9d-baff-0229fc2f49cc_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "The phone says \"Yes, Anna, it is warm.\"",
              },
              {
                "lang": "uz",
                "text": "Telefon \"Ha, Anna, havo iliq\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "\"Yes, Anna, it is a farm.\"",
                "correct": false
              },
              {
                "id": 2,
                "title": "\"Yes, Anna, it is warm.\"",
                "correct": true
              },
              {
                "id": 3,
                "title": "\"Yes, Anna, I have no charm.\"",
                "correct": false
              },
              {
                "id": 4,
                "title": "\"Yes, Anna, I have no charm.\"",
                "correct": false
              }
            ]
          },
          {
            "id": 3,
            "titleText": [
              {
                "lang": "en",
                "text": "What is the weather like today?",
              },
              {
                "lang": "uz",
                "text": "Bugun ob-havo qanday?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/c/cf/cf4dd4c4-a6c5-46f5-88c7-a913e1ed542e_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "The phone says \"No, it is not windy today.\"",
              },
              {
                "lang": "uz",
                "text": "Telefon \"Yo'q, bugun shamolli emas.\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "It is windy today.",
                "correct": false
              },
              {
                "id": 2,
                "title": "It is just like Wednesday.",
                "correct": false
              },
              {
                "id": 3,
                "title": "It is just like Wednesday.",
                "correct": true
              },
              {
                "id": 4,
                "title": "It is warm today.",
                "correct": false
              }
            ]
          },
          {
            "id": 4,
            "titleText": [
              {
                "lang": "en",
                "text": "What does she ask?",
              },
              {
                "lang": "uz",
                "text": "U nima so'radi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/5/58/582d3899-28b3-407e-ab76-255215cdbdb3_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Anna says \"Is it sunny today?\"",
              },
              {
                "lang": "uz",
                "text": "Anna \"Bugun havo issiqmi?\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "She asks if it is sunny.",
                "correct": true
              },
              {
                "id": 2,
                "title": "She asks if it is windy.",
                "correct": false
              },
              {
                "id": 3,
                "title": "She asks if it is snowy.",
                "correct": false
              },
              {
                "id": 4,
                "title": "She asks if it is rainy.",
                "correct": false
              }
            ]
          },
          {
            "id": 5,
            "titleText": [
              {
                "lang": "en",
                "text": "What do you learn about the weather in Washington, DC?",
              },
              {
                "lang": "uz",
                "text": "Vashingtondagi ob-havo haqida nimani bilib oldingiz?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/03/a/a3/a3f4f335-6dcd-4946-9b65-08cc46aeac4c_hq.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Anna says \"It is cold and windy and snowy.\"",
              },
              {
                "lang": "uz",
                "text": "Anna \"Sovuq, shamolli va qorli\" dedi."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "It is warm today.",
                "correct": false
              },
              {
                "id": 2,
                "title": "It is sunny today.",
                "correct": false
              },
              {
                "id": 3,
                "title": "It is rainy.",
                "correct": false
              },
              {
                "id": 4,
                "title": "It is cold today.",
                "correct": true
              }
            ]
          }
        ]
      },
      {
        "id": 10,
        "questions": [
          {
            "id": 1,
            "titleText": [
              {
                "lang": "en",
                "text": "What do you do after you exit the metro?",
              },
              {
                "lang": "uz",
                "text": "Metrodan chiqqandan keyin nima qilasiz?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/04/0/0b/0bf4f2fe-d1f5-4306-af99-c680613442c6_fullhd.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Exit the Metro and turn right.",
              },
              {
                "lang": "uz",
                "text": "Metrodan chiqib, o'ngga buriling."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Turn right after you exit.",
                "correct": true
              },
              {
                "id": 2,
                "title": "Turn at the light.",
                "correct": false
              },
              {
                "id": 3,
                "title": "Turn and exit.",
                "correct": false
              },
              {
                "id": 4,
                "title": "Turn into the bus station.",
                "correct": false
              }
            ]
          },
          {
            "id": 2,
            "titleText": [
              {
                "lang": "en",
                "text": "Where do you turn?",
              },
              {
                "lang": "uz",
                "text": "Qayerga burilasiz?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/04/2/2b/2bf1b964-917a-4e66-911e-97657866db4e_fullhd.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Turn left at the light.",
              },
              {
                "lang": "uz",
                "text": "Chiroq yonganida chapga buriling."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Turn off the light.",
                "correct": false
              },
              {
                "id": 2,
                "title": "Make a right turn.",
                "correct": false
              },
              {
                "id": 3,
                "title": "Turn left at the light.",
                "correct": true
              },
              {
                "id": 4,
                "title": "After the right.",
                "correct": false
              }
            ]
          },
          {
            "id": 3,
            "titleText": [
              {
                "lang": "en",
                "text": "Where do you turn after the bus station?",
              },
              {
                "lang": "uz",
                "text": "Avtobus stansiyasidan keyin qayerga burilasiz?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/04/3/30/30c7d2ed-2a89-4359-b287-ba94cca6e657_fullhd.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Exit the bus station and turn right.",
              },
              {
                "lang": "uz",
                "text": "Avtobus stansiyasidan chiqib, o'ngga buriling."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Exit the bus station and turn right.",
                "correct": true
              },
              {
                "id": 2,
                "title": "When you go into the bus station.",
                "correct": false
              },
              {
                "id": 3,
                "title": "Pass the bus station and turn left.",
                "correct": false
              },
              {
                "id": 4,
                "title": "Before you get to the bus station.",
                "correct": false
              }
            ]
          },
          {
            "id": 4,
            "titleText": [
              {
                "lang": "en",
                "text": "Then where do you go?",
              },
              {
                "lang": "uz",
                "text": "Keyin qayerga borasiz?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/04/3/34/34154bd6-ee9c-42f9-9e25-49d83d57378c_fullhd.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Then walk to the coffee shop.",
              },
              {
                "lang": "uz",
                "text": "Keyin qahva do'koniga boring."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "Then you exit the coffee shop.",
                "correct": false
              },
              {
                "id": 2,
                "title": "Stay out of the coffee shop.",
                "correct": false
              },
              {
                "id": 3,
                "title": "Then you go to the copy shop.",
                "correct": false
              },
              {
                "id": 4,
                "title": "You walk to the coffee shop.",
                "correct": true
              }
            ]
          },
          {
            "id": 5,
            "titleText": [
              {
                "lang": "en",
                "text": "Where is Anna's apartment?",
              },
              {
                "lang": "uz",
                "text": "Annaning kvartirasi qayerda?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/04/6/6e/6e59ae37-117e-4fc2-a4be-d36670d7e8b7_fullhd.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "It is across from the department store.",
              },
              {
                "lang": "uz",
                "text": "U universal do'konning qarshisida."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "It is next to the department store",
                "correct": false
              },
              {
                "id": 2,
                "title": "It is on the corner by the department store.",
                "correct": false
              },
              {
                "id": 3,
                "title": "It is across from the department store.",
                "correct": true
              },
              {
                "id": 4,
                "title": "It is above the department store.",
                "correct": false
              }
            ]
          },
          {
            "id": 6,
            "titleText": [
              {
                "lang": "en",
                "text": "Why does Ashley ask about the coffee shops?",
              },
              {
                "lang": "uz",
                "text": "Nega Eshli qahva do'konlari haqida so'radi?"
              }
            ],
            "questionVideo": "https://av.voanews.com/Videoroot/Pangeavideo/2016/04/3/36/36d6a39d-e03e-4bf8-879b-e0c3508b53d4_fullhd.mp4",
            "questionVideoText": [
              {
                "lang": "en",
                "text": "Which coffee shop? There are three coffee shops.",
              },
              {
                "lang": "uz",
                "text": "Qaysi qahva do'koni? Uchta qahva do'koni bor."
              }
            ],
            "answers": [
              {
                "id": 1,
                "title": "She does not see a coffee shop.",
                "correct": false
              },
              {
                "id": 2,
                "title": "Ashley sees three coffee shops.",
                "correct": true
              },
              {
                "id": 3,
                "title": "There are no coffee shops on the street.",
                "correct": false
              },
              {
                "id": 4,
                "title": "She will meet Anna in the coffee shop.",
                "correct": false
              }
            ]
          },
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
              {
                word: "apartment",
                definition: "a rented room or set of rooms."
              },
              {
                word: "meet",
                definition: "to see and speak to someone for the first time."
              },
              {
                word: "new",
                definition: "not known before recently bought or rented."
              },
              {
                word: "nice",
                definition: "good and enjoyable."
              },
              {
                word: "street",
                definition: "a road in a city, town or village."
              },
              {
                word: "try",
                definition: "to make an effort to do something."
              },
              {
                word: "welcome",
                definition: "used as a friendly greeting to someone who arrives at a place."
              }
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              {
                word: "kvartira",
                definition: "ijaraga olingan xona yoki xonalar to'plami."
              },
              {
                word: "uchrashish",
                definition: "kimnidir birinchi marta ko'rish va gaplashish."
              },
              {
                word: "yangi",
                definition: "yaqinda sotib olingan yoki ijaraga olinishidan oldin noma'lum bo'lgan narsa."
              },
              {
                word: "ajoyib",
                definition: "yaxshi va yoqimli."
              },
              {
                word: "ko'cha",
                definition: "shahar, shaharcha yoki qishloqdagi yo'l."
              },
              {
                word: "urinish",
                definition: "biror narsa qilishga harakat qilish."
              },
              {
                word: "xush kelibsiz",
                definition: "biror joyga kelgan kishiga do'stona salom sifatida ishlatiladi."
              }
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
              {
                word: "know",
                definition: "to have met and talked to (someone)."
              },
              {
                word: "number",
                definition: "a number or a set of numbers and other symbols that is used to identify a person or thing."
              },
              {
                word: "remember",
                definition: "to have or keep an image or idea in your mind of something or someone from the past."
              },
              {
                word: "roommate",
                definition: "a person who shares a room, apartment, or house with someone else."
              },
              {
                word: "work",
                definition: "the place where you do your job."
              }
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              {
                word: "bilmoq",
                definition: "uchrashish va gaplashish (kimdir) bilan."
              },
              {
                word: "raqam",
                definition: "raqam yoki raqamlar to'plami va boshqa belgilar, bu shaxsni yoki narsani aniqlash uchun ishlatiladi."
              },
              {
                word: "eslamoq",
                definition: "o'tmishdagi biror narsa yoki kimnidur xotirangizda fikr yoki tasavvur qilib saqlamoq."
              },
              {
                word: "xonadosh",
                definition: "xonani, kvartirani yoki uyni boshqa birov bilan bo'lishadigan odam."
              },
              {
                word: "ish",
                definition: "siz o'z ishingizni bajaradigan joy."
              },
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
              {
                word: "cook",
                definition: "to prepare (food) for eating especially by using heat.",
              },
              {
                word: "dinner",
                definition: "the main meal of the day.",
              },
              {
                word: "excuse",
                definition: "to forgive someone for making a mistake or doing something wrong.",
              },
              {
                word: "find",
                definition: "to get or discover something or someone that you are looking for.",
              },
              {
                word: "here",
                definition: "in this place or at this location.",
              },
              {
                word: "live",
                definition: "to have a home in a specified place.",
              },
              {
                word: "near",
                definition: "close to something or someone.",
              },
              {
                word: "sorry",
                definition: "feeling sorrow or regret.",
              },
              {
                word: "supermarket",
                definition: "a store where customers can buy a variety of foods and household items.",
              },
              {
                word: "there",
                definition: "in that place or at that location.",
              },
              {
                word: "want",
                definition: "to desire or wish for something.",
              },
              {
                word: "wrong",
                definition: "not suitable or appropriate for a particular purpose, situation, or person."
              },
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              {
                word: "cook",
                definition: "to prepare (food) for eating especially by using heat.",
              },
              {
                word: "dinner",
                definition: "the main meal of the day.",
              },
              {
                word: "excuse",
                definition: "to forgive someone for making a mistake or doing something wrong.",
              },
              {
                word: "find",
                definition: "to get or discover something or someone that you are looking for.",
              },
              {
                word: "here",
                definition: "in this place or at this location.",
              },
              {
                word: "live",
                definition: "to have a home in a specified place.",
              },
              {
                word: "near",
                definition: "close to something or someone.",
              },
              {
                word: "sorry",
                definition: "feeling sorrow or regret.",
              },
              {
                word: "supermarket",
                definition: "a store where customers can buy a variety of foods and household items.",
              },
              {
                word: "there",
                definition: "in that place or at that location.",
              },
              {
                word: "want",
                definition: "to desire or wish for something.",
              },
              {
                word: "wrong",
                definition: "not suitable or appropriate for a particular purpose, situation, or person."
              }
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
              {
                word: "bag",
                definition: "a soft container used to hold money and other small things."
              },
              {
                word: "big",
                definition: "large in size."
              },
              {
                word: "book",
                definition: "a set of printed sheets of paper that are held together inside a cover or a long written work."
              },
              {
                word: "coffee",
                definition: "a dark brown drink made from ground coffee beans and boiled water."
              },
              {
                word: "lamp",
                definition: "a device that produces light."
              },
              {
                word: "little",
                definition: "small in size."
              },
              {
                word: "map",
                definition: "a picture or chart that shows the rivers, mountains, streets, etc. in a particular area."
              },
              {
                word: "not",
                definition: "makes a word or phrase negative or gives an opposite meaning."
              },
              {
                word: "pen",
                definition: "a writing instrument in uses ink"
              },
              {
                word: "pillow",
                definition: "a bag filled with soft material that is used as a cushion usually for the head of a person who is lying down."
              },
              {
                word: "toy",
                definition: "something a child plays with."
              },
              {
                word: "world",
                definition: "the earth and all the people and things on it."
              },
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              {
                word: "bag",
                definition: "a soft container used to hold money and other small things."
              },
              {
                word: "big",
                definition: "large in size."
              },
              {
                word: "book",
                definition: "a set of printed sheets of paper that are held together inside a cover or a long written work."
              },
              {
                word: "coffee",
                definition: "a dark brown drink made from ground coffee beans and boiled water."
              },
              {
                word: "lamp",
                definition: "a device that produces light."
              },
              {
                word: "little",
                definition: "small in size."
              },
              {
                word: "map",
                definition: "a picture or chart that shows the rivers, mountains, streets, etc. in a particular area."
              },
              {
                word: "not",
                definition: "makes a word or phrase negative or gives an opposite meaning."
              },
              {
                word: "pen",
                definition: "a writing instrument in uses ink"
              },
              {
                word: "pillow",
                definition: "a bag filled with soft material that is used as a cushion usually for the head of a person who is lying down."
              },
              {
                word: "toy",
                definition: "something a child plays with."
              },
              {
                word: "world",
                definition: "the earth and all the people and things on it."
              },
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
              {
                word: "bathroom",
                definition: "a room with a sink and toilet and usually a bathtub or shower."
              },
              {
                word: "beautiful",
                definition: "very good and pleasing; having beauty."
              },
              {
                word: "bedroom",
                definition: "a room used for sleeping."
              },
              {
                word: "eat",
                definition: "to take food into your mouth and swallow it."
              },
              {
                word: "house",
                definition: "a building in which a family lives."
              },
              {
                word: "kitchen",
                definition: "a room in which food is cooked."
              },
              {
                word: "livingroom",
                definition: "a room in a house for general family use."
              },
              {
                word: "relax",
                definition: "to spend time resting and doing something enjoyable."
              },
              {
                word: "sleep",
                definition: "to rest your mind and body by closing your eyes."
              },
              {
                word: "upstairs",
                definition: "on or to a higher floor of a building."
              },
              {
                word: "wash",
                definition: "to clean something with water and usually soap."
              }
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              {
                word: "bathroom",
                definition: "a room with a sink and toilet and usually a bathtub or shower."
              },
              {
                word: "beautiful",
                definition: "very good and pleasing; having beauty."
              },
              {
                word: "bedroom",
                definition: "a room used for sleeping."
              },
              {
                word: "eat",
                definition: "to take food into your mouth and swallow it."
              },
              {
                word: "house",
                definition: "a building in which a family lives."
              },
              {
                word: "kitchen",
                definition: "a room in which food is cooked."
              },
              {
                word: "livingroom",
                definition: "a room in a house for general family use."
              },
              {
                word: "relax",
                definition: "to spend time resting and doing something enjoyable."
              },
              {
                word: "sleep",
                definition: "to rest your mind and body by closing your eyes."
              },
              {
                word: "upstairs",
                definition: "on or to a higher floor of a building."
              },
              {
                word: "wash",
                definition: "to clean something with water and usually soap."
              }
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
              {
                word: "across from", 
                definition: "on the opposite side from someone or something.",
              },
              {
                word: "behind", 
                definition: "in or to a place at the back of or to the rear of someone or something.",
              },
              {
                word: "elevator", 
                definition: "a machine used for carrying people or things to different level in a building.",
              },
              {
                word: "every", 
                definition: "used to describe how often some repeated activity or event happens or is done.",
              },
              {
                word: "gym", 
                definition: "a room or building that has equipment for sports activities or exercise.",
              },
              {
                word: "lobby", 
                definition: "a large open area inside and near the entrance of a public building (such us a hotel or theater).",
              },
              {
                word: "lounge", 
                definition: "a room with comfortable furniture for relaxing.",
              },
              {
                word: "mailroom", 
                definition: "a room in which mail is processed and sorted.",
              },
              {
                word: "next to", 
                definition: "at the side of someone or something.",
              },
              {
                word: "parking garage", 
                definition: "a building in which people usually pay to park their cars, truck, etc.",
              },
              {
                word: "rooftop", 
                definition: "the cover or top of a building or vehicle.",
              },
              {
                word: "work out", 
                definition: "to perform athletic exercises in order to improve your health or physical fitness."
              }
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              {
                word: "across from", 
                definition: "on the opposite side from someone or something.",
              },
              {
                word: "behind", 
                definition: "in or to a place at the back of or to the rear of someone or something.",
              },
              {
                word: "elevator", 
                definition: "a machine used for carrying people or things to different level in a building.",
              },
              {
                word: "every", 
                definition: "used to describe how often some repeated activity or event happens or is done.",
              },
              {
                word: "gym", 
                definition: "a room or building that has equipment for sports activities or exercise.",
              },
              {
                word: "lobby", 
                definition: "a large open area inside and near the entrance of a public building (such us a hotel or theater).",
              },
              {
                word: "lounge", 
                definition: "a room with comfortable furniture for relaxing.",
              },
              {
                word: "mailroom", 
                definition: "a room in which mail is processed and sorted.",
              },
              {
                word: "next to", 
                definition: "at the side of someone or something.",
              },
              {
                word: "parking garage", 
                definition: "a building in which people usually pay to park their cars, truck, etc.",
              },
              {
                word: "rooftop", 
                definition: "the cover or top of a building or vehicle.",
              },
              {
                word: "work out", 
                definition: "to perform athletic exercises in order to improve your health or physical fitness."
              }
            ]
          }
        ]
      },
      {
        id: 7,
        speakingPracticeText: [
          {
            lang: "en",
            speakingPractice: [
              {
                word: "both",
                definition: "the person whose job is to tell other workers what to do."
              },
              {
                word: "bother",
                definition: "to annoy someone or to cause someone to feel annoyed."
              },
              {
                word: "busy",
                definition: "actively doing something."
              },
              {
                word: "excited",
                definition: "very enthusiastic and eager about something."
              },
              {
                word: "nervous",
                definition: "having or showing feelings of being worried and afraid about what might happen."
              },
              {
                word: "news",
                definition: "information that is reported in a newspaper, magazine, television news program, or website."
              },
              {
                word: "office",
                definition: "a building or room in which people work at desks doing business or professional activities."
              },
              {
                word: "read",
                definition: "to look at and understand the meaning of letters, words, symbols, etc."
              },
              {
                word: "record",
                definition: "to store something, such as sounds, music, images, etc. on tape or on a disk so that it can be heard or seen later."
              },
              {
                word: "show",
                definition: "a television or radio program"
              },
              {
                word: "work",
                definition: "to do things as part of your job."
              },
              {
                word: "write",
                definition: "to create a book, poem, story, etc. by writing words on paper or on a computer."
              }
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              {
                word: "both",
                definition: "the person whose job is to tell other workers what to do."
              },
              {
                word: "bother",
                definition: "to annoy someone or to cause someone to feel annoyed."
              },
              {
                word: "busy",
                definition: "actively doing something."
              },
              {
                word: "excited",
                definition: "very enthusiastic and eager about something."
              },
              {
                word: "nervous",
                definition: "having or showing feelings of being worried and afraid about what might happen."
              },
              {
                word: "news",
                definition: "information that is reported in a newspaper, magazine, television news program, or website."
              },
              {
                word: "office",
                definition: "a building or room in which people work at desks doing business or professional activities."
              },
              {
                word: "read",
                definition: "to look at and understand the meaning of letters, words, symbols, etc."
              },
              {
                word: "record",
                definition: "to store something, such as sounds, music, images, etc. on tape or on a disk so that it can be heard or seen later."
              },
              {
                word: "show",
                definition: "a television or radio program"
              },
              {
                word: "work",
                definition: "to do things as part of your job."
              },
              {
                word: "write",
                definition: "to create a book, poem, story, etc. by writing words on paper or on a computer."
              }
            ]
          }
        ]
      },
      {
        id: 8,
        speakingPracticeText: [
          {
            lang: "en",
            speakingPractice: [
              {
                word: "afternoon",
                definition: "the middle part of the day; the part of the day between noon and evening."
              },
              {
                word: "apologize",
                definition: "to express regret for doing or saying something wrong."
              },
              {
                word: "before",
                definition: "at an earlier time."
              },
              {
                word: "evening",
                definition: "the last part of the day and early part of the night."
              },
              {
                word: "job",
                definition: "the work that a person does regularly in order to earn money."
              },
              {
                word: "later",
                definition: "happening near the end of a process, activity, series, life, etc."
              },
              {
                word: "light",
                definition: "a source of light (such as an electric lamp)"
              },
              {
                word: "morning",
                definition: "the early part of the day; the time of day from sunrise until noon."
              },
              {
                word: "now",
                definition: "at the present time."
              },
              {
                word: "studio",
                definition: "the building or room where an artist works."
              },
              {
                word: "surprise",
                definition: "an unexpected event or piece of information."
              },
              {
                word: "yesterday",
                definition: "the day before today."
              }
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              {
                word: "afternoon",
                definition: "the middle part of the day; the part of the day between noon and evening."
              },
              {
                word: "apologize",
                definition: "to express regret for doing or saying something wrong."
              },
              {
                word: "before",
                definition: "at an earlier time."
              },
              {
                word: "evening",
                definition: "the last part of the day and early part of the night."
              },
              {
                word: "job",
                definition: "the work that a person does regularly in order to earn money."
              },
              {
                word: "later",
                definition: "happening near the end of a process, activity, series, life, etc."
              },
              {
                word: "light",
                definition: "a source of light (such as an electric lamp)"
              },
              {
                word: "morning",
                definition: "the early part of the day; the time of day from sunrise until noon."
              },
              {
                word: "now",
                definition: "at the present time."
              },
              {
                word: "studio",
                definition: "the building or room where an artist works."
              },
              {
                word: "surprise",
                definition: "an unexpected event or piece of information."
              },
              {
                word: "yesterday",
                definition: "the day before today."
              }
            ]
          }
        ]
      },
      {
        id: 9,
        speakingPracticeText: [
          {
            lang: "en",
            speakingPractice: [
              {
                word: "celsius",
                definition: "relating to or having a scale for measuring temperature on which the boiling point of water is at 100 degrees and the freezing point of water is at 0 degrees."
              },
              {
                word: "change",
                definition: "to become different."
              },
              {
                word: "check",
                definition: "to get information by looking at something, asking about something, etc."
              },
              {
                word: "cold",
                definition: "having a very low temperature."
              },
              {
                word: "degree",
                definition: "a unit for measuring temperature."
              },
              {
                word: "fahrenheit",
                definition: "relating to or having a scale for measuring temperature on which the boiling point of water is at 212 degrees above zero and the freezing point is at 32 degrees above zero."
              },
              {
                word: "forecast",
                definition: "a statement about what you think is going to happen in the future."
              },
              {
                word: "phone",
                definition: "a device that is connected to a telephone system and that you use to listen or speak to someone who is somewhere else."
              },
              {
                word: "snowy",
                definition: "having falling snow or covered with snow."
              },
              {
                word: "sunny",
                definition: "having plenty of bright sunlight."
              },
              {
                word: "temperature",
                definition: "a measurement that indicates how hot or cold something is; a measurement in degrees showing the heat of something (such as air or water)"
              },
              {
                word: "warm",
                definition: "somewhat hot; not cool or cold."
              },
              {
                word: "weather",
                definition: "the temperature and other outside conditions (such as rain, cloudiness, etc.) at a particular time and place."
              },
              {
                word: "windy",
                definition: "having a lot of wind"
              }
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              {
                word: "celsius",
                definition: "relating to or having a scale for measuring temperature on which the boiling point of water is at 100 degrees and the freezing point of water is at 0 degrees."
              },
              {
                word: "change",
                definition: "to become different."
              },
              {
                word: "check",
                definition: "to get information by looking at something, asking about something, etc."
              },
              {
                word: "cold",
                definition: "having a very low temperature."
              },
              {
                word: "degree",
                definition: "a unit for measuring temperature."
              },
              {
                word: "fahrenheit",
                definition: "relating to or having a scale for measuring temperature on which the boiling point of water is at 212 degrees above zero and the freezing point is at 32 degrees above zero."
              },
              {
                word: "forecast",
                definition: "a statement about what you think is going to happen in the future."
              },
              {
                word: "phone",
                definition: "a device that is connected to a telephone system and that you use to listen or speak to someone who is somewhere else."
              },
              {
                word: "snowy",
                definition: "having falling snow or covered with snow."
              },
              {
                word: "sunny",
                definition: "having plenty of bright sunlight."
              },
              {
                word: "temperature",
                definition: "a measurement that indicates how hot or cold something is; a measurement in degrees showing the heat of something (such as air or water)"
              },
              {
                word: "warm",
                definition: "somewhat hot; not cool or cold."
              },
              {
                word: "weather",
                definition: "the temperature and other outside conditions (such as rain, cloudiness, etc.) at a particular time and place."
              },
              {
                word: "windy",
                definition: "having a lot of wind"
              }
            ]
          }
        ]
      },
      {
        id: 10,
        speakingPracticeText: [
          {
            lang: "en",
            speakingPractice: [
              {
                word: "ahead",
                definition: "to or toward the place where someone is going."
              },
              {
                word: "bus",
                definition: "a large vehicle that is used for carrying passengers especially along a particular route at particular times."
              },
              {
                word: "coffee",
                definition: "op - a small restaurant that serves coffee and other drinks as well as simple foods."
              },
              {
                word: "department store",
                definition: "a large store that has separated areas in which different kinds of products are sold."
              },
              {
                word: "exit",
                definition: "to go out of a place."
              },
              {
                word: "left",
                definition: "located on the same side of your body as your heart."
              },
              {
                word: "metro",
                definition: "an underground railway system in some cities (also called subway)."
              },
              {
                word: "right",
                definition: "located on the side of your body that is away from your heart."
              },
              {
                word: "station",
                definition: "place where buses, trains, etc., regularly stop so that passengers can get on and off."
              },
              {
                word: "straight",
                definition: "in a straight or direct way."
              },
              {
                word: "then",
                definition: "used to indicate what happened or happens next."
              },
              {
                word: "turn",
                definition: "to cause your body or a part of your body to face a different direction."
              },
              {
                word: "walk",
                definition: "to move with your legs at a speed that is slower than running."
              }
            ]
          },
          {
            lang: "uz",
            speakingPractice: [
              {
                word: "ahead",
                definition: "to or toward the place where someone is going."
              },
              {
                word: "bus",
                definition: "a large vehicle that is used for carrying passengers especially along a particular route at particular times."
              },
              {
                word: "coffee",
                definition: "op - a small restaurant that serves coffee and other drinks as well as simple foods."
              },
              {
                word: "department store",
                definition: "a large store that has separated areas in which different kinds of products are sold."
              },
              {
                word: "exit",
                definition: "to go out of a place."
              },
              {
                word: "left",
                definition: "located on the same side of your body as your heart."
              },
              {
                word: "metro",
                definition: "an underground railway system in some cities (also called subway)."
              },
              {
                word: "right",
                definition: "located on the side of your body that is away from your heart."
              },
              {
                word: "station",
                definition: "place where buses, trains, etc., regularly stop so that passengers can get on and off."
              },
              {
                word: "straight",
                definition: "in a straight or direct way."
              },
              {
                word: "then",
                definition: "used to indicate what happened or happens next."
              },
              {
                word: "turn",
                definition: "to cause your body or a part of your body to face a different direction."
              },
              {
                word: "walk",
                definition: "to move with your legs at a speed that is slower than running."
              }
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
      },
      {
        id: 7,
        conversationText: [
          {
            lang: 'en',
            conversation: [
              {
                name: "Caty",
                title: "Come in.",
              },
              {
                name: "Caty",
                title: "Well, Anna, welcome.",
              },
              {
                name: "Anna",
                title: "Thank you.",
              },
              {
                name: "Caty",
                title: "I am your boss, Caty Weaver. But, please call me Caty.",
              },
              {
                name: "Anna",
                title: "Thank you, Ms. Weaver.",
              },
              {
                name: "Caty",
                title: "Just Caty.",
              },
              {
                name: "Anna",
                title: "Sure thing, Ms. Weaver.",
              },
              {
                name: "Caty",
                title: "Okay then. Are you excited?",
              },
              {
                name: "Anna",
                title: "Yes, I am excited!",
              },
              {
                name: "Caty",
                title: "So sorry, but I am busy. Please meet your co-workers. But remember, they are busy working.",
              },
              {
                name: "Anna",
                title: "Sure. Thanks, Ms. Weaver.",
              },
              {
                name: "Anna",
                title: "Hi there! I’m Anna.",
              },
              {
                name: "Anne",
                title: "Hi, Anna. I’m Anne.",
              },
              {
                name: "Anna",
                title: "Nice to meet you. What are you doing?",
              },
              {
                name: "Anne",
                title: "Um, I’m writing.",
              },
              {
                name: "Anna",
                title: "You are writing! You are writing a lot!",
              },
              {
                name: "Anna",
                title: "Oh! Oh dear.",
              },
              {
                name: "Anne",
                title: "No! No! That's okay.",
              },
              {
                name: "Anna",
                title: "I am sorry!",
              },
              {
                name: "Anne",
                title: "That’s okay. Really.",
              },
              {
                name: "Anna",
                title: "I am sorry!",
              },
              {
                name: "Anne",
                title: "Please. Please. Please stop. Please.",
              },
              {
                name: "Anna",
                title: "Sorry. Sorry.",
              },
              {
                name: "Jonathan",
                title: "\"and people all around the world are waiting to hear news about the next president...\"",
              },
              {
                name: "Anna",
                title: "Jonathan, hi! Remember me? I live in your building.",
              },
              {
                name: "Jonathan",
                title: "Oh. Uh. Hi, Anna.",
              },
              {
                name: "Anna",
                title: "What are you doing?",
              },
              {
                name: "Jonathan",
                title: "I am doing my show!",
              },
              {
                name: "Anna",
                title: "Oh, sorry. Are you recording?",
              },
              {
                name: "Jonathan",
                title: "Yes! And, now I have to record again!",
              },
              {
                name: "Anna",
                title: "Sorry. Have a good show.",
              },
              {
                name: "Jonathan",
                title: "Thank you.",
              },
              {
                name: "Anna",
                title: "Sorry.",
              },
              {
                name: "Amelia",
                title: "The word of the day is social. Social -",
              },
              {
                name: "Anna",
                title: "Oh! Hi!",
              },
              {
                name: "Amelia",
                title: "- is an adjective.",
              },
              {
                name: "Anna",
                title: "Hi! I’m Anna!",
              },
              {
                name: "Amelia",
                title: "Hi. I’m Amelia.",
              },
              {
                name: "Anna",
                title: "Nice to meet you!",
              },
              {
                name: "Anna",
                title: "What are you doing?",
              },
              {
                name: "Amelia",
                title: "I’m reading.",
              },
              {
                name: "Anna",
                title: "Are you reading the news? Hi!",
              },
              {
                name: "Amelia",
                title: "No, I’m reading for my show.",
              },
              {
                name: "Amelia",
                title: "Can I read again?",
              },
              {
                name: "Anna",
                title: "Sorry.",
              },
              {
                name: "Anna",
                title: "This day is not going well.",
              },
              {
                name: "Caty",
                title: "Anna! Hi! What’re you doing?",
              },
              {
                name: "Anna",
                title: "I am bothering people, Ms. Weaver.",
              },
              {
                name: "Caty",
                title: "Let’s go to my office and talk.",
              },
              {
                name: "Anna",
                title: "I like to talk with you, Ms. Weaver.",
              },
              {
                name: "Caty",
                title: "It’s Caty.",
              },
              {
                name: "Anna",
                title: "Right. Thanks ... Ms. Weaver",
              }
            ]
          },
          {
            lang: 'uz',
            conversation: [
              {
                name: "Caty",
                title: "Come in.",
              },
              {
                name: "Caty",
                title: "Well, Anna, welcome.",
              },
              {
                name: "Anna",
                title: "Thank you.",
              },
              {
                name: "Caty",
                title: "I am your boss, Caty Weaver. But, please call me Caty.",
              },
              {
                name: "Anna",
                title: "Thank you, Ms. Weaver.",
              },
              {
                name: "Caty",
                title: "Just Caty.",
              },
              {
                name: "Anna",
                title: "Sure thing, Ms. Weaver.",
              },
              {
                name: "Caty",
                title: "Okay then. Are you excited?",
              },
              {
                name: "Anna",
                title: "Yes, I am excited!",
              },
              {
                name: "Caty",
                title: "So sorry, but I am busy. Please meet your co-workers. But remember, they are busy working.",
              },
              {
                name: "Anna",
                title: "Sure. Thanks, Ms. Weaver.",
              },
              {
                name: "Anna",
                title: "Hi there! I’m Anna.",
              },
              {
                name: "Anne",
                title: "Hi, Anna. I’m Anne.",
              },
              {
                name: "Anna",
                title: "Nice to meet you. What are you doing?",
              },
              {
                name: "Anne",
                title: "Um, I’m writing.",
              },
              {
                name: "Anna",
                title: "You are writing! You are writing a lot!",
              },
              {
                name: "Anna",
                title: "Oh! Oh dear.",
              },
              {
                name: "Anne",
                title: "No! No! That's okay.",
              },
              {
                name: "Anna",
                title: "I am sorry!",
              },
              {
                name: "Anne",
                title: "That’s okay. Really.",
              },
              {
                name: "Anna",
                title: "I am sorry!",
              },
              {
                name: "Anne",
                title: "Please. Please. Please stop. Please.",
              },
              {
                name: "Anna",
                title: "Sorry. Sorry.",
              },
              {
                name: "Jonathan",
                title: "\"and people all around the world are waiting to hear news about the next president...\"",
              },
              {
                name: "Anna",
                title: "Jonathan, hi! Remember me? I live in your building.",
              },
              {
                name: "Jonathan",
                title: "Oh. Uh. Hi, Anna.",
              },
              {
                name: "Anna",
                title: "What are you doing?",
              },
              {
                name: "Jonathan",
                title: "I am doing my show!",
              },
              {
                name: "Anna",
                title: "Oh, sorry. Are you recording?",
              },
              {
                name: "Jonathan",
                title: "Yes! And, now I have to record again!",
              },
              {
                name: "Anna",
                title: "Sorry. Have a good show.",
              },
              {
                name: "Jonathan",
                title: "Thank you.",
              },
              {
                name: "Anna",
                title: "Sorry.",
              },
              {
                name: "Amelia",
                title: "The word of the day is social. Social -",
              },
              {
                name: "Anna",
                title: "Oh! Hi!",
              },
              {
                name: "Amelia",
                title: "- is an adjective.",
              },
              {
                name: "Anna",
                title: "Hi! I’m Anna!",
              },
              {
                name: "Amelia",
                title: "Hi. I’m Amelia.",
              },
              {
                name: "Anna",
                title: "Nice to meet you!",
              },
              {
                name: "Anna",
                title: "What are you doing?",
              },
              {
                name: "Amelia",
                title: "I’m reading.",
              },
              {
                name: "Anna",
                title: "Are you reading the news? Hi!",
              },
              {
                name: "Amelia",
                title: "No, I’m reading for my show.",
              },
              {
                name: "Amelia",
                title: "Can I read again?",
              },
              {
                name: "Anna",
                title: "Sorry.",
              },
              {
                name: "Anna",
                title: "This day is not going well.",
              },
              {
                name: "Caty",
                title: "Anna! Hi! What’re you doing?",
              },
              {
                name: "Anna",
                title: "I am bothering people, Ms. Weaver.",
              },
              {
                name: "Caty",
                title: "Let’s go to my office and talk.",
              },
              {
                name: "Anna",
                title: "I like to talk with you, Ms. Weaver.",
              },
              {
                name: "Caty",
                title: "It’s Caty.",
              },
              {
                name: "Anna",
                title: "Right. Thanks ... Ms. Weaver",
              }
            ]
          }
        ]
      },
      {
        id: 8,
        conversationText: [
          {
            lang: 'en',
            conversation: [
              {
                name: "Anna",
                title: "Hello, everyone. Here I am at my new job! Yesterday at my first day of work … Well, let’s not talk about yesterday. Today is a new day! Today I want to apologize to my co-workers.",
              },
              {
                name: "Anna",
                title: "Hi, Anne. Are you busy?",
              },
              {
                name: "Anne",
                title: "Hi, Anna. Yes. At 10 a.m. I am writing. Every day I do my morning show. Sorry!",
              },
              {
                name: "Anna",
                title: "Okay. See you later, maybe.",
              },
              {
                name: "Anne",
                title: "Maybe I’ll see you later.",
              },
              {
                name: "Anna",
                title: "Hi, Jonathan. Are you busy?",
              },
              {
                name: "Jonathan",
                title: "Yes, I’m busy. When the studio light is on, I am recording my evening show.",
              },
              {
                name: "Anna",
                title: "Right. Sorry about yesterday.",
              },
              {
                name: "Jonathan",
                title: "No worries.",
              },
              {
                name: "Anna",
                title: "May I see the studio?",
              },
              {
                name: "Jonathan",
                title: "Um, maybe another time? Right now I am busy.",
              },
              {
                name: "Anna",
                title: "Sure. Okay, ’bye.",
              },
              {
                name: "Jonathan",
                title: "‘Bye.",
              },
              {
                name: "Anna",
                title: "Hi, Amelia! Are you busy?",
              },
              {
                name: "Amelia",
                title: "I’m a little busy.",
              },
              {
                name: "Anna",
                title: "I want to say I’m sorry for yesterday.",
              },
              {
                name: "Amelia",
                title: "It’s okay, Anna.",
              },
              {
                name: "Anna",
                title: "Well, I am sorry.",
              },
              {
                name: "Amelia",
                title: "It’s okay, Anna. Come by this afternoon.",
              },
              {
                name: "Anna",
                title: "Okay.",
              },
              {
                name: "Caty",
                title: "Anna.",
              },
              {
                name: "Anna",
                title: "Yes, Ms. Weaver.",
              },
              {
                name: "Caty",
                title: "Are you busy?",
              },
              {
                name: "Anna",
                title: "Yes, Ms. Weaver. I am busy.",
              },
              {
                name: "Caty",
                title: "My office. 5:00 p.m.",
              },
              {
                name: "Anna",
                title: "5:00 p.m.",
              },
              {
                name: "Caty",
                title: "Come in.",
              },
              {
                name: "Co-Workers",
                title: "Surprise!",
              },
              {
                name: "Anna",
                title: "A party! Awesome! And I still have my job! Phew!* Until next time!",
              }
            ]
          },
          {
            lang: 'uz',
            conversation: [
              {
                name: "Anna",
                title: "Hello, everyone. Here I am at my new job! Yesterday at my first day of work … Well, let’s not talk about yesterday. Today is a new day! Today I want to apologize to my co-workers.",
              },
              {
                name: "Anna",
                title: "Hi, Anne. Are you busy?",
              },
              {
                name: "Anne",
                title: "Hi, Anna. Yes. At 10 a.m. I am writing. Every day I do my morning show. Sorry!",
              },
              {
                name: "Anna",
                title: "Okay. See you later, maybe.",
              },
              {
                name: "Anne",
                title: "Maybe I’ll see you later.",
              },
              {
                name: "Anna",
                title: "Hi, Jonathan. Are you busy?",
              },
              {
                name: "Jonathan",
                title: "Yes, I’m busy. When the studio light is on, I am recording my evening show.",
              },
              {
                name: "Anna",
                title: "Right. Sorry about yesterday.",
              },
              {
                name: "Jonathan",
                title: "No worries.",
              },
              {
                name: "Anna",
                title: "May I see the studio?",
              },
              {
                name: "Jonathan",
                title: "Um, maybe another time? Right now I am busy.",
              },
              {
                name: "Anna",
                title: "Sure. Okay, ’bye.",
              },
              {
                name: "Jonathan",
                title: "‘Bye.",
              },
              {
                name: "Anna",
                title: "Hi, Amelia! Are you busy?",
              },
              {
                name: "Amelia",
                title: "I’m a little busy.",
              },
              {
                name: "Anna",
                title: "I want to say I’m sorry for yesterday.",
              },
              {
                name: "Amelia",
                title: "It’s okay, Anna.",
              },
              {
                name: "Anna",
                title: "Well, I am sorry.",
              },
              {
                name: "Amelia",
                title: "It’s okay, Anna. Come by this afternoon.",
              },
              {
                name: "Anna",
                title: "Okay.",
              },
              {
                name: "Caty",
                title: "Anna.",
              },
              {
                name: "Anna",
                title: "Yes, Ms. Weaver.",
              },
              {
                name: "Caty",
                title: "Are you busy?",
              },
              {
                name: "Anna",
                title: "Yes, Ms. Weaver. I am busy.",
              },
              {
                name: "Caty",
                title: "My office. 5:00 p.m.",
              },
              {
                name: "Anna",
                title: "5:00 p.m.",
              },
              {
                name: "Caty",
                title: "Come in.",
              },
              {
                name: "Co-Workers",
                title: "Surprise!",
              },
              {
                name: "Anna",
                title: "A party! Awesome! And I still have my job! Phew!* Until next time!",
              }
            ]
          }
        ]
      },
      {
        id: 9,
        conversationText: [
          {
            lang: 'en',
            conversation: [
              {
                name: "Anna",
                title: "Oh, hi, everyone! Here in Washington, DC, the weather changes often. One day is cold and windy. But the next day is warm and sunny! So, every day I check the forecast. Hello, Phone? What is today’s temperature?",
              },
              {
                name: "Phone",
                title: "Today it is 18 degrees ...",
              },
              {
                name: "Anna",
                title: "Eighteen degrees! That is cold!",
              },
              {
                name: "Phone",
                title: "... eighteen degrees Celsius.",
              },
              {
                name: "Anna",
                title: "Oh, Celsius. That is 65 degrees Fahrenheit. That’s warm.",
              },
              {
                name: "Phone",
                title: "Yes, Anna. It is warm.",
              },
              {
                name: "Anna",
                title: "Excuse me, Phone. Is it windy today?",
              },
              {
                name: "Phone",
                title: "No, it is not windy today.",
              },
              {
                name: "Anna",
                title: "Is it sunny today?",
              },
              {
                name: "Phone",
                title: "Yes, Anna. It is sunny.",
              },
              {
                name: "Anna",
                title: "Excuse me, Phone?",
              },
              {
                name: "Phone",
                title: "Yes, Anna.",
              },
              {
                name: "Anna",
                title: "Is it snowy today?",
              },
              {
                name: "Phone",
                title: "No, Anna. It is not snowy.",
              },
              {
                name: "Anna",
                title: "Thank you, Phone!",
              },
              {
                name: "Anna",
                title: "Today the weather is warm and sunny -- great for seeing Washington, D.C.",
              },
              {
                name: "Anna",
                title: "Phone! It is not warm and sunny! It is cold and windy and snowy!",
              },
              {
                name: "Phone",
                title: "Anna, it is not cold, windy, or snowy. It is warm and sunny … in Mexico City, Mexico.",
              },
              {
                name: "Anna",
                title: "Oh. I see. Mexico.",
              },
              {
                name: "Anna",
                title: "Washington weather changes often. Remember to check the forecast -- the right forecast.",
              },
              {
                name: "Phone",
                title: "Yes, Anna. Next time remember to check the right fore...",
              },
              {
                name: "Anna",
                title: "Okay, thank you Phone. Goodbye, Phone.",
              },
              {
                name: "Anna",
                title: "Until next time!",
              }
            ]
          },
          {
            lang: 'uz',
            conversation: [
              {
                name: "Anna",
                title: "Oh, hi, everyone! Here in Washington, DC, the weather changes often. One day is cold and windy. But the next day is warm and sunny! So, every day I check the forecast. Hello, Phone? What is today’s temperature?",
              },
              {
                name: "Phone",
                title: "Today it is 18 degrees ...",
              },
              {
                name: "Anna",
                title: "Eighteen degrees! That is cold!",
              },
              {
                name: "Phone",
                title: "... eighteen degrees Celsius.",
              },
              {
                name: "Anna",
                title: "Oh, Celsius. That is 65 degrees Fahrenheit. That’s warm.",
              },
              {
                name: "Phone",
                title: "Yes, Anna. It is warm.",
              },
              {
                name: "Anna",
                title: "Excuse me, Phone. Is it windy today?",
              },
              {
                name: "Phone",
                title: "No, it is not windy today.",
              },
              {
                name: "Anna",
                title: "Is it sunny today?",
              },
              {
                name: "Phone",
                title: "Yes, Anna. It is sunny.",
              },
              {
                name: "Anna",
                title: "Excuse me, Phone?",
              },
              {
                name: "Phone",
                title: "Yes, Anna.",
              },
              {
                name: "Anna",
                title: "Is it snowy today?",
              },
              {
                name: "Phone",
                title: "No, Anna. It is not snowy.",
              },
              {
                name: "Anna",
                title: "Thank you, Phone!",
              },
              {
                name: "Anna",
                title: "Today the weather is warm and sunny -- great for seeing Washington, D.C.",
              },
              {
                name: "Anna",
                title: "Phone! It is not warm and sunny! It is cold and windy and snowy!",
              },
              {
                name: "Phone",
                title: "Anna, it is not cold, windy, or snowy. It is warm and sunny … in Mexico City, Mexico.",
              },
              {
                name: "Anna",
                title: "Oh. I see. Mexico.",
              },
              {
                name: "Anna",
                title: "Washington weather changes often. Remember to check the forecast -- the right forecast.",
              },
              {
                name: "Phone",
                title: "Yes, Anna. Next time remember to check the right fore...",
              },
              {
                name: "Anna",
                title: "Okay, thank you Phone. Goodbye, Phone.",
              },
              {
                name: "Anna",
                title: "Until next time!",
              }
            ]
          }
        ]
      },
      {
        id: 10,
        conversationText: [
          {
            lang: 'en',
            conversation: [
              {
                name: "Anna",
                title: "Hi! Today, my friend Ashley, is coming over. I am showing her my new apartment! Oh! That’s Ashley calling.",
              },
              {
                name: "Anna",
                title: "Hi Ashley!",
              },
              {
                name: "Ashley",
                title: "Hi Anna! I’m coming to your apartment. Where is your apartment?",
              },
              {
                name: "Anna",
                title: "My apartment is near the Columbia Heights Metro.",
              },
              {
                name: "Ashley",
                title: "It is near the Columbia Heights Metro?",
              },
              {
                name: "Anna",
                title: "Yes. Exit the Metro and turn right. Then at the bus station turn left. Then walk straight ahead.",
              },
              {
                name: "Ashley",
                title: "Okay. Exit Metro, turn right, turn left, then go straight ahead?",
              },
              {
                name: "Anna",
                title: "Yes. My apartment is near a coffee shop.",
              },
              {
                name: "Ashley",
                title: "Okay. See you soon!",
              },
              {
                name: "Anna",
                title: "Hi, Ashley.",
              },
              {
                name: "Ashley",
                title: "Anna, Which coffee shop? There are three coffee shops.",
              },
              {
                name: "Anna",
                title: "Okay, my apartment is across from a big department store.",
              },
              {
                name: "Ashley",
                title: "A big department store? Ah, I see it!",
              },
              {
                name: "Anna",
                title: "Okay! Bye, Ashley. See you soon!",
              },
              {
                name: "Ashley",
                title: "Okay. See you soon.",
              },
              {
                name: "Anna",
                title: "Ashley! Ashley! Ashley! Over here! It’s Anna! It’s Anna! Hi!",
              },
              {
                name: "Anna",
                title: "I love having my friends over. Come on!",
              },
              {
                name: "Ashley",
                title: "Great!",
              }
            ]
          },
          {
            lang: 'uz',
            conversation: [
              {
                name: "Anna",
                title: "Hi! Today, my friend Ashley, is coming over. I am showing her my new apartment! Oh! That’s Ashley calling.",
              },
              {
                name: "Anna",
                title: "Hi Ashley!",
              },
              {
                name: "Ashley",
                title: "Hi Anna! I’m coming to your apartment. Where is your apartment?",
              },
              {
                name: "Anna",
                title: "My apartment is near the Columbia Heights Metro.",
              },
              {
                name: "Ashley",
                title: "It is near the Columbia Heights Metro?",
              },
              {
                name: "Anna",
                title: "Yes. Exit the Metro and turn right. Then at the bus station turn left. Then walk straight ahead.",
              },
              {
                name: "Ashley",
                title: "Okay. Exit Metro, turn right, turn left, then go straight ahead?",
              },
              {
                name: "Anna",
                title: "Yes. My apartment is near a coffee shop.",
              },
              {
                name: "Ashley",
                title: "Okay. See you soon!",
              },
              {
                name: "Anna",
                title: "Hi, Ashley.",
              },
              {
                name: "Ashley",
                title: "Anna, Which coffee shop? There are three coffee shops.",
              },
              {
                name: "Anna",
                title: "Okay, my apartment is across from a big department store.",
              },
              {
                name: "Ashley",
                title: "A big department store? Ah, I see it!",
              },
              {
                name: "Anna",
                title: "Okay! Bye, Ashley. See you soon!",
              },
              {
                name: "Ashley",
                title: "Okay. See you soon.",
              },
              {
                name: "Anna",
                title: "Ashley! Ashley! Ashley! Over here! It’s Anna! It’s Anna! Hi!",
              },
              {
                name: "Anna",
                title: "I love having my friends over. Come on!",
              },
              {
                name: "Ashley",
                title: "Great!",
              }
            ]
          }
        ]
      }
    ],
  },
  getters: {
  }
}