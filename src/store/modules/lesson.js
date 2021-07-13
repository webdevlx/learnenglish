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
      state.lesson.conversation = state.conversations.filter(conversation => conversation.id === lesson.id)[0].conversation
    }
  },
  state: {
    lessons: [],
    lesson: {},
    conversations: [
      {
        id: 1,
        conversation: [
          "Pete: Hi! Are you Anna?",
          "Anna: Yes! Hi there! Are you Pete?",
          "Pete: I am Pete.",
          "Anna: Nice to meet you.",
          "Anna: Let's try that again. I'm Anna. Nice to meet you.",
          "Pete: I'm Pete. \"Anna\" Is that A-N-A?",
          "Anna: No. A-N-N-A",
          "Pete: Well, Anna with two \"n's\" ... Welcome to ... 1400 Irving Street!",
          "Anna: My new apartment! Yes!"
        ]
      },
      {
        id: 2,
        conversation: [
          "Jonathan: Hey, Pete! Who’s your friend?",
          "Pete: She is Anna. She is new to D.C.",
          "Jonathan: Where are you from?",
          "Anna: I am from a small town.",
          "Jonathan: Well, welcome to D.C.",
          "Anna: Thank you.",
          "Jonathan: I am Jonathan. I am in apartment B4.",
          "Anna: I am in apartment C2. Marsha is my roommate.",
          "Jonathan: I know Marsha. She is nice.",
          "Pete: And I am in Apartment D7. I have to go now.",
          "Anna: Oh!",
          "Pete: Remember to call Marsha at work. Tell her you’re here.",
          "Anna: Right, thanks, Pete. Nice to meet you!",
          "Jonathan: You too, Bye.",
          "Anna: Apartment C2, here I come!"
        ]
      },
      {
        id: 3,
        conversation: [
          "Anna: I am in my new apartment! Great!",
          "I live with Marsha. We’re roommates.",
          "I want to cook dinner. Oh! Hmmm. Is there a supermarket near here?",
          "Marsha knows. Marsha's work number is 555-8986.",
          "Man: Hello.",
          "Anna: Hello. Is this Marsha? It is Anna.",
          "Man: I am sorry. You have the wrong number.",
          "Anna: Oh. Is this 555-8986?",
          "Man: No. This is 555-8689.",
          "Anna: Oh. Excuse me!",
          "Man: Okay. 'Bye.",
          "Anna: One more time. 555-8986. Please be Marsha.",
          "Marsha: Hello. This is Marsha.",
          "Anna: Yes, Marsha. I want to cook dinner.",
          "Marsha: Excuse me? Anna? Is that you?",
          "Anna: Oh, yes. I am here!",
          "Marsha: Good. You are there.",
          "Anna: I want to find a supermarket.",
          "Marsha: Oh, okay. The supermarket is at 1500 Irving Street. It is near the apartment.",
          "Anna: Great! Goodbye!",
          "Marsha: Goodbye, Anna.",
          "(Later)",
          "Anna: There is a big supermarket on our street. And Marsha says I am a good cook! Until next time! Bye!"
        ]
      },
      {
        id: 4,
        conversation: [
          "Anna: Pete, hi! Hi, we are here!",
          "Pete: Hi, Anna! Hi, Marsha!",
          "Anna: Hi!",
          "Pete: How are you two?",
          "Marsha: I am great!",
          "Anna: You know, Pete, I am new to D.C. The city is big.",
          "Pete: Yeah. But you learn a little more every day. How's the new apartment?",
          "Anna: The new apartment is great! Let's get coffee!",
          "Marsha: Anna, do you have a pen?",
          "Anna: Yes. I have a pen in my bag.",
          "Anna: I have a …",
          "Pete: It is not a pen. It is a book. It is a big book.",
          "Anna: Yes. Yes it is, Pete. I know I have a pen, though…",
          "Anna: I have a ....",
          "Marsha: It is not a pen, Anna ... a toy?",
          "Anna: I have a ....",
          "Pete: And it is a pillow!",
          "Anna: Pete, Marsha, I know I have a pen.",
          "Marsha: Anna, it is a map.",
          "Pete: Why do you have a map of the world?",
          "Anna: Pete, Marsha. Now I know I have a pen.",
          "Pete: And now you have a lamp.",
          "Marsha: Anna.",
          "Anna: I have a pen! Let’s get coffee!"
        ]
      },
      {
        id: 5,
        conversation: [
          "Anna: Hello, everyone! Today my friend Marsha is at her friend's house. She says it is beautiful. I want to see this house! Here we are!",
          "Anna: Marsha, I am in the kitchen! It is a beautiful kitchen!",
          "Marsha: It is beautiful. We cook in the kitchen.",
          "Anna: I eat in the kitchen.",
          "Marsha: We relax in the living room.",
          "Anna: I relax in the living room. Marsha, let’s go upstairs!",
          "Marsha: Anna? Where are you?",
          "Anna: Marsha, I am in the bathroom! I wash in the bathroom.",
          "Marsha: I am in the bedroom. We sleep in the bedroom.",
          "Anna: I sleep in the bedroom!"
        ]
      },
      {
        id: 6,
        conversation: [
          "Anna: Hi there! I’m Anna and I live in Washington, D.C. Every day I learn more about this great city. People in Washington like to work out! Oh, hi, Pete. How’s it going?",
          "Pete: Hi, Anna. It’s going great. How’s it going with you?",
          "Anna: Things are awesome! Pete, I want to work out. Where is the gym?",
          "Pete: The gym is across from the lounge. It’s next to the mailroom. Go that way.",
          "Anna: Thanks, Pete!",
          "(Anna walks away)",
          "Pete: No, Anna! Not that way! Go that way!",
          "(In the mailroom)",
          "Anna: Oh, Pete. This is not the gym.",
          "Pete: That’s right, Anna. This is the mailroom.",
          "Anna: The gym is across from … what?",
          "Pete: The gym is across from the lounge.",
          "Anna: Across from the lounge. Right. Thanks!",
          "(In the lounge)",
          "Anna: Pete! This is not the gym!",
          "Pete: The gym is across from the lounge. It is behind the lobby.",
          "Anna: Right. Right. See you.",
          "Pete: See you, Anna!",
          "Anna: See you.",
          "Pete: See you, Anna.",
          "(In the garage)",
          "Anna: This is not the gym. This is a parking garage.",
          "Anna: Hello? Pete?",
          "(On the rooftop)",
          "Anna: This is not a gym. This is a rooftop.",
          "(In the gym)",
          "Anna: Pete! Pete?",
          "Pete: I want to work out too! Join me!",
          "Anna: I’m good."
        ]
      },
      {
        id: 7,
        conversation: [
          "Caty: Come in.",
          "Caty: Well, Anna, welcome.",
          "Anna: Thank you.",
          "Caty: I am your boss, Caty Weaver. But, please call me Caty.",
          "Anna: Thank you, Ms. Weaver.",
          "Caty: Just Caty.",
          "Anna: Sure thing, Ms. Weaver.",
          "Caty: Okay then. Are you excited?",
          "Anna: Yes, I am excited!",
          "Caty: So sorry, but I am busy. Please meet your co-workers. But remember, they are busy working.",
          "Anna: Sure. Thanks, Ms. Weaver.",
          "Anna: Hi there! I’m Anna.",
          "Anne: Hi, Anna. I’m Anne.",
          "Anna: Nice to meet you. What are you doing?",
          "Anne: Um, I’m writing.",
          "Anna: You are writing! You are writing a lot!",
          "Anna: (Spills papers) Oh! Oh dear.",
          "Anne: No! No! That's okay.",
          "Anna: I am sorry!",
          "Anne: That’s okay. Really.",
          "Anna: I am sorry!",
          "Anne: Please. Please. Please stop. Please.",
          "Anna: Sorry. Sorry.",
          "Jonathan: (in the studio) “and people all around the world are waiting to hear news about the next president…”",
          "Anna: Jonathan, hi! Remember me? I live in your building.",
          "Jonathan: Oh. Uh. Hi, Anna.",
          "Anna: What are you doing?",
          "Jonathan: I am doing my show!",
          "Anna: Oh, sorry. Are you recording?",
          "Jonathan: Yes! And, now I have to record again!",
          "Anna: Sorry. Have a good show.",
          "Jonathan: Thank you.",
          "Anna: Sorry.",
          "Amelia: The word of the day is social. Social -",
          "Anna: Oh! Hi!",
          "Amelia: - is an adjective.",
          "Anna: Hi! I’m Anna!",
          "Amelia: Hi. I’m Amelia.",
          "Anna: Nice to meet you!",
          "Anna: What are you doing?",
          "Amelia: I’m reading.",
          "Anna: Are you reading the news? Hi!",
          "Amelia: No, I’m reading for my show.",
          "Amelia: (to camera person) Can I read again?",
          "Anna: Sorry.",
          "Anna: This day is not going well.",
          "Caty: Anna! Hi! What’re you doing?",
          "Anna: I am bothering people, Ms. Weaver.",
          "Caty: Let’s go to my office and talk.",
          "Anna: I like to talk with you, Ms. Weaver.",
          "Caty: It’s Caty.",
          "Anna: Right. Thanks ... Ms. Weaver"
        ]
      },
      {
        id: 8,
        conversation: [
          "Anna: Hello, everyone. Here I am at my new job! Yesterday at my first day of work … Well, let’s not talk about yesterday. Today is a new day! Today I want to apologize to my co-workers.",
          "Anna: Hi, Anne. Are you busy?",
          "Anna: Hi, Anna. Yes. At 10 a.m. I am writing. Every day I do my morning show. Sorry!",
          "Anna: Okay. See you later, maybe.",
          "Anne: Maybe I’ll see you later.",
          "Anna: Hi, Jonathan. Are you busy?",
          "Jonathan: Yes, I’m busy. When the studio light is on, I am recording my evening show.",
          "Anna: Right. Sorry about yesterday.",
          "Jonathan: No worries.",
          "Anna: May I see the studio?",
          "Jonathan: Um, maybe another time? Right now I am busy.",
          "Anna: Sure. Okay, ’bye.",
          "Jonathan: ‘Bye.",
          "Anna: Hi, Amelia! Are you busy?",
          "Amelia: I’m a little busy.",
          "Anna: I want to say I’m sorry for yesterday.",
          "Amelia: It’s okay, Anna.",
          "Anna: Well, I am sorry.",
          "Amelia: It’s okay, Anna. Come by this afternoon.",
          "Anna: Okay.",
          "Caty: Anna.",
          "Anna: Yes, Ms. Weaver.",
          "Caty: Are you busy?",
          "Anna: Yes, Ms. Weaver. I am busy.",
          "Caty: My office. 5:00 p.m.",
          "Anna: 5:00 p.m.",
          "Caty: Come in.",
          "Co-Workers: Surprise!",
          "Anna: A party! Awesome! And I still have my job! Phew!* Until next time!"
        ]
      },
      {
        id: 9,
        conversation: [
          "Anna: Oh, hi, everyone! Here in Washington, DC, the weather changes often. One day is cold and windy. But the next day is warm and sunny! So, every day I check the forecast. Hello, Phone? What is today’s temperature?",
          "Phone: Today it is 18 degrees ...",
          "Anna: Eighteen degrees! That is cold!",
          "Phone: … eighteen degrees Celsius.",
          "Anna: Oh, Celsius. That is 65 degrees Fahrenheit. That’s warm.",
          "Phone: Yes, Anna. It is warm.",
          "Anna: Excuse me, Phone. Is it windy today?",
          "Phone: No, it is not windy today.",
          "Anna: Is it sunny today?",
          "Phone: Yes, Anna. It is sunny.",
          "Anna: Excuse me, Phone?",
          "Phone: Yes, Anna.",
          "Anna: Is it snowy today?",
          "Phone: No, Anna. It is not snowy.",
          "Anna: Thank you, Phone!",
          "Anna: Today the weather is warm and sunny -- great for seeing Washington, D.C.",
          "Anna: Phone! It is not warm and sunny! It is cold and windy and snowy!",
          "Phone: Anna, it is not cold, windy, or snowy. It is warm and sunny … in Mexico City, Mexico.",
          "Anna: Oh. I see. Mexico.",
          "Anna: Washington weather changes often. Remember to check the forecast -- the right forecast.",
          "Phone: Yes, Anna. Next time remember to check the right fore…",
          "Anna: Okay, thank you Phone. Goodbye, Phone.",
          "Anna: Until next time!"
        ]
      },
      {
        id: 10,
        conversation: [
          "Anna: Hi! Today, my friend Ashley, is coming over. I am showing her my new apartment! Oh! That’s Ashley calling.",
          "Anna: Hi Ashley!",
          "Ashley: Hi Anna! I’m coming to your apartment. Where is your apartment?",
          "Anna: My apartment is near the Columbia Heights Metro.",
          "Ashley: It is near the Columbia Heights Metro?",
          "Anna: Yes. Exit the Metro and turn right. Then at the bus station turn left. Then walk straight ahead.",
          "Ashley: Okay. Exit Metro, turn right, turn left, then go straight ahead?",
          "Anna: Yes. My apartment is near a coffee shop.",
          "Ashley: Okay. See you soon!",
          "Anna: Hi, Ashley.",
          "Ashley: Anna, Which coffee shop? There are three coffee shops.",
          "Anna: Okay, my apartment is across from a big department store.",
          "Ashley: A big department store? Ah, I see it!",
          "Anna: Okay! Bye, Ashley. See you soon!",
          "Ashley: Okay. See you soon.",
          "Anna: Ashley! Ashley! Ashley! Over here! It’s Anna! It’s Anna! Hi!",
          "Anna: I love having my friends over. Come on!",
          "Ashley: Great!"
        ]
      }
    ]
  },
  getters: {
  }
}