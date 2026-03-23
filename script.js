/* I mean this is an extremely simple script. What it does is just go through an array and at each index of the array there is 
a random quote, I used a global num variable to store the array index, didn't have to assign a variable because it was already done
don't have to clear the num variable because whenever the button is clicked num is assigned a different value*/
const button = document.getElementById("THE-btn");
let num;

//Took these from the goodread, I just googled computer science quotes and it was the first thing that popped up.
const quotes = [
  "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.",
  "The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly. A programmer is ideally an essayist who works with traditional aesthetic and literary forms as well as mathematical concepts, to communicate the way that an algorithm works and to convince a reader that the results will be correct.",
  "Seemingly innocuous language like 'Oh, I'm flexible' or 'What do you want to do tonight?' has a dark computational underbelly that should make you think twice. It has the veneer of kindness about it, but it does two deeply alarming things. First, it passes the cognitive buck: 'Here's a problem, you handle it.' Second, by not stating your preferences, it invites the others to simulate or imagine them. And as we have seen, the simulation of the minds of others is one of the biggest computational challenges a mind (or machine) can ever face.",
  "Well, writing novels is incredibly simple: an author sits down…and writes. Granted, most writers I know are a bit strange. Some, downright weird. But then again, you’d have to be. To spend hundreds and hundreds of hours sitting in front of a computer screen staring at lines of information is pretty tedious. More like a computer programmer. And no matter how cool the Matrix made looking at code seem, computer programmers are even weirder than authors.",
  "The most important property of a program is whether it accomplishes the intention of its user.",
  "...if you aren't, at any given time, scandalized by code you wrote five or even three years ago, you're not learning anywhere near enough",
  "I don't know how many of you have ever met Dijkstra, but you probably know that arrogance in computer science is measured in nano-Dijkstras.",
  "C is quirky, flawed, and an enormous success.",
  "Code is not like other how-computers-work books. It doesn't have big color illustrations of disk drives with arrows showing how the data sweeps into the computer. Code has no drawings of trains carrying a cargo of zeros and ones. Metaphors and similes are wonderful literary devices but they do nothing but obscure the beauty of technology.",
  "I think that it’s extraordinarily important that we in computer science keep fun in computing. When it started out it was an awful lot of fun. Of course the paying customers got shafted every now and then and after a while we began to take their complaints seriously. We began to feel as if we really were responsible for the successful error-free perfect use of these machines. I don’t think we are. I think we’re responsible for stretching them setting them off in new directions and keeping fun in the house. I hope the ﬁeld of computer science never loses its sense of fun.",
  "Is it possible that software is not like anything else, that it is meant to be discarded: that the whole point is to always see it as a soap bubble?",
  "Unix is not so much a product as it is a painstakingly compiled oral history of the hacker subculture. It is our Gilgamesh epic: a living body of narrative that many people know by heart, and tell over and over again—making their own personal embellishments whenever it strikes their fancy.",
  "You are not reading this book because a teacher assigned it to you, you are reading it because you have a desire to learn, and wanting to learn is the biggest advantage you can have.",
  "While functions being unable to change state is good because it helps us reason about our programs, there's one problem with that. If a function can't change anything in the world, how is it supposed to tell us what it calculated?",
  "What's in your hands I think and hope is intelligence: the ability to see the machine as more than when you were ﬁrst led up to it that you can make it more.",
  "Let me tell you as a brain scientist and a computer engineering dropout - transhumanism is to brain computer interface, what nuclear weapons are to nuclear physics.",
  "That's the best definition of success: if a new system comes out and everyone says, 'Wow, I can't believe we put up with that old thing because it was so primitive and limited compared to this.'",
  "We do not have to accept that if AI tools have been adopted we cannot reverse course. We do not have to accept that if companies have already created a product it is a forgone conclusion that the product will be used.",
  "The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler. Now there are ten thousand languages. But do not program in COBOL if you can avoid it.",
  "Biologists often diss the potential of machine, just like gadgeteers are oblivious to life. Life is a cosmic miracle, machines are a human one, and with added purpose, machines could be the mightiest defense of life.",
  "You don’t train a neural network. You let it struggle, fail, adapt, and repeat—until its failures look like intelligence.",
  "It is unfortunate that REST is widely considered as the default Microservice communication protocol.",
  "Cryptography creates artificial scarcity in a universe that defaults to abundance",
  "A machine will never have the creativity, the feelings, or the soul of a human being.",
  "Programs expand to fill the memory available to hold them.",
  "Boolean Logic deals only in concrete absolutes (0 for False and 1 for True); Fuzzy Logic deals in a continuous, flexible spectrum of truth, spanning from 0 to 1 and the decimals in between.",
  "AI is to the mind, what nuclear fusion is to energy",
  "There are several conflicting explanations of exactly where the word 'byte' came from, but since it sounds just like the word 'bite,' you can just think of it as a whole mouthful compared with a smaller unit, a bit. Just to show you that computer designers do have a sense of humor, when they use four bits as a unit, they call it a nibble."
];

//Really simple just uses an alert to display the quote
function displayQuote(num){
    alert(quotes[num]);
}

//Simple rand number thing
function randNum(){
    num = Math.floor(Math.random() * quotes.length);
}

//Even listener so that when button is clicked the two previous functions are called
button.addEventListener("click", () => {
    randNum();
    displayQuote(num);
})