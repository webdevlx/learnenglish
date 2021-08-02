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
              "know - to have met and talked to (someone).",
              "number - a number or a set of numbers and other symbols that is used to identify a person or thing.",
              "remember - to have or keep an image or idea in your mind of something or someone from the past.",
              "roommate - a person who shares a room, apartment, or house with someone else.",
              "work - the place where you do your job."
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
          }
        ]
      }
    ],

  },
  getters: {
  }
}