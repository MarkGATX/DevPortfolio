import constellationBackground from '@/public/images/constellation_background.webp'
import softlifePitch from '@/public/images/pitch_v_final.webp'
import softlifeProfileList from '@/public/images/softlife_profileList.webp'
import softlifeProfileDash from '@/public/images/softlife_profile_dash.webp'
import luxeHome from '@/public/images/luxecavallo_home.webp'
import luxeProduct from '@/public/images/luxe_product_detail.webp'
import constellationPlay from '@/public/images/constell-play.webp'
import cssSnippet from '@/public/images/css_snippet_bg.webp'
import migrateSplash from '@/public/images/migrate-splash.webp'
import migrateSingleCountry from '@/public/images/migrate-single-country.webp'
import wheezyMain from '@/public/images/wheezy_main.webp'
import wheezyPlayer from '@/public/images/wheezy_player.webp'
import garden2Splash from '@/public/images/garden2_bg.webp'
import garden2Vege from '@/public/images/garden2_vege_shot.webp'
import weatherDash from '@/public/images/weather_dash_bg.webp'
import scriblNotes from '@/public/images/scribl_notes_home.webp'
import scriblComments from '@/public/images/scrible_notes_comments.webp'
import wordguessGame from '@/public/images/word_guess_game_screenshot.webp'
import wordguessGameLabelled from '@/public/images/word_guess_game_screenshot_labelled.webp'
import codingQuizQuestion from '@/public/images/Coding_Quiz_Question_example.webp'
import codingQuizScores from '@/public/images/Coding_Quiz_High_Scores.webp'
import playdateWithEvent from '@/public/images/Playdate_Screenshot_with_active_event.webp'
import CARYStill1 from '@/public/images/CARY_still_1.webp'
import CARYStill2 from '@/public/images/CARY_still_2.webp'
import MazuA from '@/public/images/MAZU-A.webp'
import negroni from '@/public/images/negroni_thumb.webp'
import whiskey from  '@/public/images/whiskey_thumb.webp'
import hoa from '@/public/images/hoa_bg.webp'
import wgbg from '@/public/images/weird_girls_thumb.webp'
import cellbg from '@/public/images/CELL_hqdefault.webp'



export const projectData = [
    {
        "title": "The Softlife",
        "displayClass": "softlife",
        "type": "dev",
        "livePath": "https://thesoftlife.xyz/",
        "desc": "Next.js freelance project for clients wanting a wishlist application",
        "longDesc": "This is a full-stack social media wish-list application developed with Next.js. I developed for my clients. Users can create their own accounts to make and populate wish-lists. They can follow other users as well as create private Families.  Users and visitors can contribute financially to wishes with a PayPal integration. The look and feel of the site went through many iterations and revisions after my initial pitch. We worked together extensively to move the application from an initial pitch of a 'soft-grunge' design into their final decision to lean into a minimalist site with an almost mid-century modern feel.",
        "role": "Sole Full-Stack Developer",
        "imgs": [
            '/images/softlife_home.webp',
            softlifePitch,
            softlifeProfileList,
            softlifeProfileDash
        ],
        "tech": [
            "react",
            "nextJS",
            "firebase",
            "vercel",
            "graphQL",
            "sass",
            "javascript",
            "mongoDB",
            "paypal",
            "nodeJS",                     
            "css3",
            "googleFonts",
            "html5",            
            "vscode",         
        ],
        "link": "Softlife"
    },
    {
        "title": "Luxe Cavallo",
        "displayClass": "luxe",
        "type": "dev",
        "livePath": "https://luxecavallo.vercel.app/",
        "gitPath": "https://github.com/markgatx/luxecavallo",
        "desc": "MERN stack project for fictional luxury boutique",
        "longDesc": "This project started with me wanting to develope an animated vertical navbar on a desktop application. From there it evolved into a Full-stack project that pushed my knowledge and understanding of app development using a MERN stack and graphL. The layouts between mobile and desktop versions are drastically different, which presented several unique challenges. I've learned a lot about the structure of code and making sure unique layouts stay responsive at various screen resolutions and not just screen width. I'm happy with the overall look and feel and overtime I'll flesh out more of the functionality.",
        "role": "Sole Full-stack developer",
        "imgs": [
            luxeHome,
            luxeProduct          
        ],
        "tech": [
            "react",
            "graphQL",
            "javascript",
            "nodeJS",
            "express",           
            "mongoDB",
            "GSAP",
            "css3",
            "adobeFonts",
            "heroku",
            "html5",            
            "vscode",         
        ],
        "link": "luxecavallo"
    },
    {
        "title": "Migrate",
        "displayClass": "migrate",
        "type": "dev",
        "livePath": "https://migrate-abroad.herokuapp.com/",
        "gitPath": "https://github.com/richardjhong/migrate",
        "desc": "An app to help potential expats make decisions on their future.",
        "longDesc": " The world is a big place and with the growing acceptance of remote work and the desire to experience different parts of the world, finding good information on what life could be like can be hard. Migrate takes data from the Social Progress Imperative and displays it in a format that's easy to understand.This was a final group project in the UT-Austin Full-Stack Development Bootcamp. We were given a one-week deadline to develop a MERN stack applicaton. We also use GSAP, SASS, and Victory Charts to make a solid and smooth user experience.",
        "role": "Front-End and Full-Stack Development",
        "imgs": [
            migrateSplash,
            migrateSingleCountry
        ],
        "tech": [
            "react",
            "css3",
            "express",
            "graphQL",
            "heroku",
            "html5",
            "sass",
            "mongoDB",
            "adobeFonts",
            "vscode",
            "javascript",
            "nodeJS",
            "GSAP",
            "victoryCharts",
            
        ],
        "link": "migrate"
    },
    {
        "title": "Wheezy Waiter",
        "displayClass": "wheezy",
        "type": "dev",
        "livePath": "https://markgatx.github.io/wheezywaiter/",
        "gitPath": "https://github.com/MarkGATX/wheezywaiter",
        "desc": "A demo site for an established YouTube creator",
        "longDesc": "I developed this unofficial site for my friend Craig to help keep my coding sharp while teaching myself another front-end framework, namely Material UI. Using his current official site and feedback he gave as a starting point, I developed a custom color theme using Material Design concepts and theme generators and also implemented a dark-mode toggle. The YouTube API also provides videos with a simple one-line query for my custom video sections. With the creator economy still booming and with the constant rise of fall of social media outlets, having an evergreen home on the internet is vital for content creators. ",
        "role": "Sole-Developer",
        "imgs": [
     wheezyMain,
     wheezyPlayer
        ],
        "tech": [
            "react",
            "MaterialUI",
            "css3",
            "html5",
            "vscode",
            "javascript",
            "nodeJS",
            "googleFonts"
        ],
        "link": "wheezywaiter"
    },

    {
        "title": "Garden2",
        "displayClass": "garden2",
        "desc":"An app to help you plan and maintain your garden.",
        "type": "dev", 
        "livePath": "https://garden2ed.herokuapp.com/",
        "gitPath": "https://github.com/MarkGATX/Garden2",
        "longDesc": "This was a mid-class group project in the Full-Stack Development Bootcamp. We were given one week to develop an app to help gardeners of all experience levels to start and maintain a garden.  Users can select where they live and be presented with a list of crops that grow well in that area. Then they can use that information to develop a plan for a square foot garden by dragging and dropping plants in their virtual garden. It's a simple to use but powerful app that can help home gardeners everywhere.",
        "role": "Front-End and Full-Stack Developer",
        "imgs": [
            garden2Splash,
            garden2Vege
        ],
        "tech": [
            "css3",
            "Sequelize",
            "Bootstrap",
            "Handlebars",
            "Heroku",
            "html5",
            "JQuery",
            "MySQL",
            "vscode",
            "javascript",
            "nodeJS",
           
        ],
        "link": "garden2"
    },
    {
        "title": "Weather Dashboard",
        "displayClass": "weatherDash",
        "desc": "A simple app to give you weather forecasts for... anywhere.",
        "type": "dev",
        "livePath": "https://markgatx.github.io/Weather-Dashboard-Full-Stack-Bootcamp/",
        "gitPath": "https://github.com/MarkGATX/Weather-Dashboard-Full-Stack-Bootcamp",
        "longDesc": "This is a solo project for the UT-Austin Full-Stack Bootcamp that aims to create a simple yet powerful weather dashboard. This app uses two separate weather APIs to pinpoint locations and to return five day weather forecasts. The logic behind the app will even help you pinpoint exactly which city you want to search for by providing you with options from all over the world. Your last five searches are also saved in local storage for ease of use.",
        "role": "Sole-Developer",
        "imgs": [
            weatherDash
        ],
        "tech": [
            "Bootstrap",
            "JQuery",
            "CSS3",
            "html5",
            "vscode",
            "javascript",
        ],
        "link": "weatherDash"
    },
    {
        "title": "Scribl Notes",
        "displayClass": "scribl",
        "desc":"A full-stack CMS platform.",
        "type": "dev",
        "livePath": "https://scribl-notes.herokuapp.com/",
        "gitPath": "https://github.com/MarkGATX/Scrible_Notes_CMS",
        "longDesc": "This solo project for the UT-Austin Full-Stack Bootcamp is meant to be one of our first exposures to CMS systems. It has a basic user-login that will allow users to create Thoughts and also post replies to other user Thoughts. This is one of the earliest uses of Bootstrap for me as a developer and I've definitely learned a lot since then. In the end, I wanted to try and slightly different look and feel to the expected tech blog and I think I achieved that while maintaining good function on the back end.",
        "role": "Sole-Developer",
        "imgs": [
            scriblNotes,
            scriblComments
        ],
        "tech": [
            "css3",
            "Express",
            "Sequelize",
            "mySQL",
            "Heroku",
            "html5",
            "vscode",
            "javascript",
            "nodeJS",
            "Handlebars",
            "Bootstrap",
        ],
        "link": "scriblNotes"
    },
    {
        "title": "The Word Guess Game",
        "displayClass": "wordguess",
        "desc": "A simple wordguess game.",
        "type": "dev",
        "livePath": "https://markgatx.github.io/The-Word-Guess-Game/",
        "gitPath": "https://github.com/MarkGATX/The-Word-Guess-Game",
        "longDesc": "The idea for this game was inspired by a Mini-Project meant to be done during one hour of our UT-Austin Full Stack Bootcamp. I really liked the idea and wanted to try and liven it up a bit. While the basic function of a high-score system has been used before in camp, I wanted to add some extra flair. I made a few modifications, including changing the score system to increase scores based on perceived difficulty, adding animations for slecting letters and winning the game, and including an API call to a dictionary to show the final word's definition after the game. In the end, I'm really proud of this simple application and one day I may even increase the size of the word array.",
        "role": "Sole-Developer",
        "imgs": [
            wordguessGame,
            wordguessGameLabelled
        ],
        "tech": [
            "css3",
            "html5",
            "vscode",
            "javascript",
            "Bootstrap",
        ],
        "link": "wordguessgame"
    },
    {
        "title": "The Coding Quiz",
        "displayClass": "codeQuiz",
        "desc": "A quick quiz testing your knowledge of coding.",
        "type": "dev",
        "livePath": "https://markgatx.github.io/The-Coding-Quiz-Challenge/",
        "gitPath": "https://github.com/MarkGATX/The-Coding-Quiz-Challenge",
        "longDesc": "This coding quiz game is a project from the UT-Austin Full-Stack Bootcamp that challenged students early on with web APIs and all of our HTML and CSS knowledge to that point. I added a few more bells and whistles to my final project by randomizing the questions and the answers to each question. I also added some very basic :hover effects and some additional CSS stylings to give it a little more effect. I'm pround of the final result. In fact, the grader for the Bootcamp said, 'This is one of the most put-together, well-designed, and intuitive quizzes I've seen!' ",
        "role": "Sole-Developer",
        "imgs": [
            codingQuizQuestion,
            codingQuizScores
        ],
        "tech": [
            "css3",
            "html5",
            "vscode",
            "javascript",
        ],
        "link": "codingquiz"
    },
    {
        "title": "Playdate",
        "displayClass": "playdate",
        "desc":"An app to help busy parents keep their kids entertained.",
        "type": "dev",
        "livePath": "https://markgatx.github.io/Playdate-The-App-for-Exhausted-Parents/",
        "gitPath": "https://github.com/MarkGATX/Playdate-The-App-for-Exhausted-Parents",
        "longDesc": "This is the very first group project that was assigned at the UT-Austin Boot Camp. This was meant to be our first introduction to collaborative coding using GitHub while pushing our use of third-party APIs. My role was primarily to use the MapBox API to render map locations. I also helped as needed on other aspects of the backend by helping to troubleshoot when called on.",
        "role": "MapBox API, Back-end code",
        "imgs": [
            playdateWithEvent
        ],
        "tech": [
            "materialize",
            "css3",
            "html5",
            "JQuery",
            "vscode",
            "javascript",
        ],
        "link": "playdate"
    },
    {
        "title": "Voices in the Hallways",
        "displayClass": "CARY",
        "desc":"12 minute promotional film for CARY",
        "type": "vid",
        "vidlink": "https://youtu.be/c8Z8P9Cec5Q",
        "longDesc": "This is a video project I took on to help out a local non-profit called CARY, the Center for At-Risk Youth. With a very small budget I went into the school and shot video for one school day with the permission of everyone involved. While the original intent was for a 2-3 minute video, the footage I had and the story that needed to be told was much bigger than that. I finally finished it at around 12 minutes long and the results made everyone involved happy and helped increase engagement with their donors. ",
        "role": "DP, Editor, Producer",
        "imgs": [
            CARYStill1,
            CARYStill2
        ],
        "tech": [
            "adobePhotoshop",
            "adobePremiere",
            "adobeAfterEffects",
        ],
        "link": "voicesinthehallway"
    },
    {
        "title": "Constellation",
        "displayClass": "constell",
        "desc":"Star Trek Adventures",
        "type": "vid",
        "vidlink": "https://www.youtube.com/playlist?list=PLtk51oTcFVK-t97eTz0cJXYqTu9zrxZx7",
        "longDesc": "This is one of my online streaming projects with The Heroes of Awesome that streamed live plays of the Star Trek Adventures Role-Playing Game. This was one of my most ambitiuous streaming projects since it entailed multiple cameras as well as seven people with mics and an interactive overlay during gameplay. I also used this as a reason to learn some basic Blender skills. I'm actually very proud of one of the starships I rendered. The Sovereign-class USS Mazu was based off another model but as I was trying to use it, I ended up completely remaking the vast majority of it into a fairly successful render. I still wish I could see that ship in action.",
        "role": "Creator, Developer, Game Master",
        "imgs": [
            constellationBackground,
            MazuA,
            constellationPlay
        ],
        "tech": [
            "blender",
            "adobePhotoshop",
            "adobePremiere",
            "adobeAfterEffects",
        ],
        "link": "constellation"
    },
    {
        "title": "This Doesn't Suck (TDS)",
        "displayClass": "tds",
        "desc": "Food, drinks, and lifestyle.",
        "type": "vid",
        "vidlink": "https://thisdoesntsuck.tv/",
        "longDesc": "This is another of my video production projects that turned into an even more exciting live-stream. It started as a simple food blog, and then after the members of our fan community asked for it, it turned into a cocktail stream. I invited bartenders, restauranteurs, food bloggers, and even a few YouTube celebrities on to a talk-show format where we also created brand new cocktails from scratch. Some were great. Some were... not. But it was always a good time. ",
        "role": "Creator, Producer, Host",
        "imgs": [
            negroni, 
                whiskey
        ],
        "tech": [
            "wordpress",
            "adobePhotoshop",
            "adobePremiere",
        ],
        "link": "tds"
    },
    {
        "title": "The Heroes of Awesome",
        "displayClass": "hoa",
        "desc":"Dungeons and Dragons for everyone.",
        "type": "vid",
        "vidlink": "https://www.youtube.com/playlist?list=PLtk51oTcFVK9U1QfOj18dAWu80QXEN9sG",
        "longDesc": "This was the show that started a campaign that lasted for years. I created and produced the episodes that consisted of a group of new players learning how to play Dungeons and Dragons. It's still one of my most popular shows and even predates some of the more well-known role-playing groups online. I still have people recognize myself and some of the other players from our games and it's still one of my best memories as a video creator.",
        "role": "Creator, Producer, Player",
        "imgs": [
            hoa
        ],
        "tech": [
            "adobePhotoshop",
            "adobePremiere",
            "adobeAfterEffects",
        ],
        "link": "heroesofawesome"
    },
    {
        "title": "Weird Girls",
        "displayClass": "wg",
        "type": "vid",
        "desc": "Five friends are the only ones who can save the world.",
        "vidlink": "https://youtu.be/MRzQGe8m_4A",
        "longDesc": "This is a feature-length, series project that I wrote several years ago. At one point an online network wanted to see a proof of concept to make decisions about moving ahead with projects. So I wrote a quick proof of concept pilot to introduce the world and characters and shot it over one weekend. I then edited the final footage and applied all the effects, except our limited creature effects that were done by an animation studio in Austin. In the end I love that we were able to accomplish what we did in such a short time. There are still some things that make me cringe that I wish I had time to reshoot, but all things considered I'm very proud of what we did. The network did pass on the full season, so if anyone wants to fund a great series, have I got a deal for you.",
        "role": "Writer, Director, Editor",
        "imgs": [
            wgbg
        ],
        "tech": [
            "adobePhotoshop",
            "adobePremiere",
            "adobeAfterEffects",
        ],
        "link": "weirdgirls"
    },
    {
        "title": "CSS Snippets",
        "displayClass": "csssnips",
        "type": "dev",
        "desc":"Quick page from bootcamp to store neat CSS tricks.",
        "gitPath": "https://github.com/MarkGATX/CSS-Cheat-Sheet",
        "livePath": "https://markgatx.github.io/CSS-Cheat-Sheet/",
        "longDesc": "This is a very simple HTML page that was done as a mini-project for one of our first tests of using CSS in the UT-Austin Full-Stack Boot Camp. I was able to get the page completed in the one-hour given and decided that I wanted to keep it around to use. So on occassion I will still post some trick or use of CSS to the Snippet page just in case I want an easy resource later.",
        "role": "Sole-Developer",
        "imgs": [
            cssSnippet
        ],
        "tech": [
            "css3",
            "html5",
            "vscode",
        ],
        "link": "csssnippets"
    },
    {
        "title": "CELL: The Web Series",
        "displayClass": "CELL",
        "desc": "Psychological thriller about a man who finds himself trapped in a mysterious cell.",
        "type": "vid",
        "vidlink": "https://www.youtube.com/playlist?list=PLC88580FE5AC3A473",
        "longDesc": "This is a 13-episode web series with a running time well over 2 hours that debuted on the now defunct channel KoldcastTV. This was my first ever writing on this scale as well as my first effort Producing and Directing for film. It was very successful on Koldcast with millions of views and garnered well over 25 award nominations, including Best Drama, Best Writing, and Best Cinematography. I learned a lot on this project and even with its evident flaws 10 years after the fact, I'm still immensely proud of what our team accomplished together.",
        "role": "Writer, Director, Producer",
        "imgs": [
            cellbg
        ],
        "tech": [
            "adobePhotoshop",
            "adobeAfterEffects",
        ],
        "link": "CELL"
    },
]