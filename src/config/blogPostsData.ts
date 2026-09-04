export type NoteTrack = "commerce" | "poker" | "startups" | "engineering";

export const noteTrackLabels: Record<NoteTrack, string> = {
  commerce: "E-commerce",
  poker: "Poker",
  startups: "Startups",
  engineering: "Engineering",
};

export interface BlogPost {
  id?: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
  content: string;
  track?: NoteTrack;
}

export const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);

export const ensurePostId = (post: BlogPost): BlogPost => ({
  ...post,
  id: post.id || slugify(post.title),
});

export const getPostTrack = (post: BlogPost): NoteTrack =>
  post.track || "engineering";

export const blogPostsWithContent: BlogPost[] = [
  {
    date: "Sep 1, 2022",
    id: "the-ultimate-resource-guide-to-discovering-and-selecting-great-startup-ideas",
    title:
      "The Ultimate Resource Guide to Discovering and Selecting Great Startup Ideas",
    excerpt:
      "Do you have a strong desire to launch a startup, especially one with the potential of generating billions of dollars in value? If you answered “Hell yeah,” like me, then keep reading. I’ll share my personal experience with startup ideas and the counterintuitive concepts I wish I had known when I created my startup.",
    url:
      "https://alexknows.biz/startup/2022/09/01/the-ultimate-resource-guide-to-discovering-and-selecting-great-startup-ideas",
    track: "startups",
    content: `Do you have a strong desire to launch a startup, especially one with the potential of generating billions of dollars in value? If you answered “Hell yeah,” like me, then keep reading. I’ll share my personal experience with startup ideas and the counterintuitive concepts I wish I had known when I created my startup. Within this guide, I’ll also provide you with key ideas, insights, and resources (links included) from the world's most exceptional founders on how to discover your next big idea.

I put this guide together shortly after shutting down my second startup, Delyte. Delyte delivered essential supplies on demand to residential and commercial customers. I bootstrapped my startup from scratch and catapulted it to generate ~$1M in revenue in under a year. We also got the opportunity to pitch several notable investors, such as Y Combinator, Techstars, Dreamit Ventures, Ashton Kutcher, and many more. Despite having the momentum that every early startup hopes for, Delyte’s growth slowed because we didn’t find product market fit. Eventually, I realized that Delyte’s differentiator wasn’t meaningful enough to thrive, and I decided that the best course of action was to stop and restart. “Why do you think your startup failed?” you may ask, and my answer would simply be, “The idea I selected was flawed.”

Founders like you, who are enthusiastic to build their first startup, need to be aware of the opportunity cost of pursuing greater opportunities in your chosen market. As simple as it may sound, you have to resign yourself to starting off on the right foot, even if it means choosing a less appealing but more worthy challenge. That’s the formula for success.

In hindsight, I paid a high price, because I started with an appealing but unprofitable idea. Instead, I should have taken time to evaluate the problem space in depth. If you make an effort, you can evaluate all your ideas before setting off on your journey, but if you run with the first idea that appeals to you, your end result will usually be bad. Imagine a farmer named Carlos spending all his time and energy cropping wheat merely because it seemed appealing at a glance. He ran with his wheat cropping business idea without much thought. If Carlos had instead taken n weeks or months of preparation to hone in on the right opportunities in his market, he could’ve been cropping and selling high-demand tomatoes in his local market and yielding himself 10x more returns. But he didn’t. When Carlos started his cropping business, do you think he properly weighed out all his options or noticed what the successful farmers were doing? If you said “no,” I would agree with you. Don’t be Carlos.

Starting a startup with a bad idea is like riding a bike down hill with bad brakes. You might figure out how to come to a complete stop without good brakes, but you’re better off avoiding the danger all together. You might have fallen prey to the misconception that "It's all about the execution" or "It's all about hard work," and you’re not alone, because many entrepreneurs share those beliefs, but the overwhelming reality is that no matter how hard you work or how well you execute, if you don't start with a good idea you're likely doomed. Do you want lack of patience and preparation to lead you to years of wasted effort on an idea that won't yield any worthwhile returns? I learned this the hard way, but fortunately for us, many of the world's most admired founders write at length about how to discover or uncover great ideas laying right under our noses.

Delyte’s setback motivated me to learn everything I could about how entrepreneurs like you and me discover great ideas, and during my research, I decided to put this guide together and publish it online to help you avoid the mistakes I made. In addition to my thoughts, this guide will give you an organized collection of the absolute best online resources around idea generation and idea selection from well-known, world-class founders, and I encourage you to absorb their principles, because they will guide you in the right direction just like the wind guides a sailor to shore. The insights I share in this guide will change your thinking about ideation for good and for good reason, because you need to understand what makes an idea great before you start a startup. You should use this guide as a starting point for further study. Review the resources here to familiarize yourself (as I’ve done) with the counterintuitive concepts that nurture great startup ideas so you can recognize one when you find it.

But it takes time to absorb these counterintuitive concepts and then to turn them into tools in our toolshed. Don’t rush it! You need to have a firm grasp on all the characteristics that make an idea great so you can become the sort of person who notices them subconsciously. Since the governing principles are counterintuitive, it makes this process all the more challenging. For example, we should notice great ideas, not come up with them; counterintuitive, right? Our intuition tells us that great entrepreneurs bend the world to their vision, but that's not entirely true, and our intuition can lead us astray if we're not aware of this phenomenon.

The same is true in Poker. When I first learned Poker, I thought the objective was to win as many pots as I could—but it’s not, and this counterintuitive concept contradicted my intuition. This fallacy cost me money, lots of it. To win at poker in the long run, your focus has to be in making quality decisions, and this means forfeiting most pots. It also means practicing away from the table to get better. Many players also don’t realize that reraising or overbetting actually gives them worse odds than they would’ve had by just calling. Your odds are better when you call $100 to win $300 because you’re getting 3:1 than when you decide to reraise to $500 to win $300 or even $800 if your opponent calls, but bad players do this all the time with no valid reason. In the second example, you’re getting ~1:1 or ~50% or less return on your investment, so when you do decide to make this play, you better have a valid reason. It might seem like a lot of work to evaluate those odds, but that’s what’s necessary to notice the best spots to maximize your profits.

The same kind of effort is necessary when you’re evaluating startup ideas. At a Y Combinator [conference](https://www.youtube.com/watch?v=akOazwgDiSI) Chris Dixon made an illuminating and counterintuitive point when he said, "All the good ideas that actually look like good ideas are already taken by big companies, and that we founders and investors compete in the business of the leftovers.” So, how do we aspiring founders become good at discovering the leftovers that are actually worth pursuing? There’s no easy answer to that question, but a good starting point would be becoming skillful at the hard work of evaluating ideas and familiarizing yourself with the counterintuitive principles of discovery.

Here’s a few thought-provoking and counterintuitive questions you should be asking yourself early in the idea discovery process. How do I know when an idea that looks like a toy is actually good? How could I live in the future and build what seems interesting? How can I discover something valuable vs. coming up with a “[made-up](http://paulgraham.com/startupideas.html)” idea? How should I navigate through the [idea maze](https://spark-public.s3.amazonaws.com/startup/lecture_slides/lecture5-market-wireframing-design.pdf) (the idea maze was coined by [Balaji Srinivasan](https://balajis.com/))? You’ll find the answers to those questions along your journey.

“A good founder is capable of anticipating which turns lead to treasure and which lead to certain death. A bad founder is just running to the entrance of (say) the “movies/music/filesharing/P2P” maze or the “photosharing” maze without any sense for the history of the industry, the players in the maze, the casualties of the past, and the technologies that are likely to move walls and change assumptions.”

“The first time Peter Thiel spoke at YC he drew a Venn diagram that illustrates the situation perfectly. He drew two intersecting circles, one labelled ‘seems like a bad idea’ and the other ‘is a good idea.’ The intersection is the sweet spot for startups.” - [Paul Graham](http://www.paulgraham.com/swan.html?viewfullsite=1)

[IMAGE]/startup-ideas-venn.png

90% of startups fail, and the number one reason they fail is misreading the market demand. To avoid this, closely observe and become intimately familiar with the market, and talk to users. [Learn more](https://www.embroker.com/blog/startup-statistics/)

Pro tip: When you’re reading through the materials of these exceptional founders, pay close attention to the questions they ask themselves when evaluating ideas.

Here’s the list of founders that I’ve found that write the most eloquently on these counterintuitive concepts.

---

**Paul Graham**

First on my list is Paul Graham. Paul writes in-depth about how ideas organically form and tricks for generating ideas on-demand. Paul recommends choosing the former when possible because those ideas almost always change the world. Think about Mark Zuckerberg, who changed how we connect with friends and relatives around the world, but initially, Mark just wanted to learn more about his fellow students through an online campus directory. Steve Wozniak revolutionized the personal computer, but Steve just wanted to build his own personal computer. See the pattern? Paul wrote a piece about his first startup failure called “[The Artix Phase](http://www.paulgraham.com/bronze.html?viewfullsite=1),” where he empirically learned all the wrong ways to go about startup ideas. And his writing has helped me tremendously in identifying the mistakes I made in the ideation phase that ultimately led to my startup failing despite having significant traction initially.

[Ideas for Startups](http://www.paulgraham.com/ideas.html) essay
[Why Smart People Have Bad Ideas](http://www.paulgraham.com/bronze.html) essay
[How to Start a Startup](http://www.paulgraham.com/start.html) essay
[Organic Startup Ideas](http://www.paulgraham.com/organic.html) essay
[Frighteningly Ambitious Startup Ideas](http://www.paulgraham.com/ambitious.html) essay
[How to Get Startup Ideas](http://www.paulgraham.com/startupideas.html) essay
[Crazy New Ideas](http://www.paulgraham.com/newideas.html) essay
[Six Principles For Making New Things](http://www.paulgraham.com/newthings.html?viewfullsite=1) essay
[What are some common mistakes founders make?](https://www.youtube.com/watch?v=845O4RE1XDM) Video

**Sam Altman**

Sam Altman blogs, codes, and invests through Y Combinator which he led as President for several years. Sam Altman once pointed out that taking your time to come up with an idea is not merely a better strategy in an absolute sense, but also like an undervalued stock in that so few founders do it. I couldn’t agree more with this statement. In my first two startups I just jumped in without deeply understanding the idea maze. It’s imperative that you drill deep and find those undervalued stocks instead of following trends.

[https://blog.samaltman.com/idea-generation](https://blog.samaltman.com/idea-generation) essay
[https://blog.samaltman.com/projects-and-companies](https://blog.samaltman.com/projects-and-companies) essay

**Balaji Srinivasan**

Balaji Srinivasan coined the phrase “idea maze,” as I mentioned above, to describe the headwinds and tailwinds and ideas one faces when entering the market. Besides coining phrases, Balaji is well known for starting, investing, operating, and selling impactful technology companies. The “idea maze” resonated with me because I took our startup down an idea maze without truly understanding the intricacies of the space. For example, Delyte’s model required that we operate a warehouse where we stored our inventory; more than the overhead, the most challenging part was the labor of dealing with physical space and inventory, and a low-margin business with intensive overhead and physical labor is not a good formula for business. If I had looked deeper into the maze of the idea, and learned about webvan or Pets.com, I would have realized that I was taking our company down a fatal idea maze. The next founder on this guide, Chris Dixon, also wrote an article on [The idea maze](https://cdixon.org/2013/08/04/the-idea-maze) from his perspective that I highly recommend reading.

[Startup engineering course](https://github.com/ladamalina/coursera-startup)

**Chris Dixon**

Chris made the creative and insightful statement I mentioned above. "All the good ideas that actually look like good ideas are already taken by big companies, and us founders and investors compete in the business of the leftovers.” Chris invests in technology startups through a16z venture firm where he has been a partner since 2012. He’s now leading the firm's a16z crypto division which invests in web3 technologies where he oversees a $3B fund. Chris has also had two successful startup exits as a founder. His blog post [Developing new startup ideas](https://cdixon.org/2010/03/14/developing-new-startup-ideas) will provide you with a practical and simple framework to work through a list of ideas. Which is exactly the method I use to treat my ideas like a stock portfolio, and you should too.

[Chris Dixon at Startup School 2013](https://www.youtube.com/watch?v=akOazwgDiSI) video
[The idea maze](https://cdixon.org/2013/08/04/the-idea-maze) post
[The great ideas have come from people who weren’t paid to have great ideas](https://cdixon.org/2014/10/20/for-every-new-good-idea-you-have-there-ten-thousand-foolish-ones) post
[Developing new startup ideas](https://cdixon.org/2010/03/14/developing-new-startup-ideas) post
[When should you give up on an idea?](https://cdixon.org/2012/05/24/when-should-you-give-up-on-an-idea) post
[A lot of the best tech startups are ideas that have been around for years](https://cdixon.org/2014/10/15/a-lot-of-the-best-tech-startups-are-ideas-that-have-been-around-for-years) post
[There's just a tremendous amount of craftsmanship in between a great idea and a great product](https://cdixon.org/2014/03/16/theres-just-a-tremendous-amount-of-craftsmanship-in-between-a-great-idea-and-a-great-product) post
[Why you shouldn’t keep your startup idea secret](https://cdixon.org/2009/08/22/why-you-shouldnt-keep-your-startup-idea-secret) post
[And then, suddenly, it works](https://cdixon.org/2012/02/11/and-then-suddenly-it-works) post
[“Meaningful” startups](https://cdixon.org/2012/04/18/meaningful-startups) post
[The next big thing will start out looking like a toy](https://cdixon.org/2010/01/03/the-next-big-thing-will-start-out-looking-like-a-toy) post

**Brad Feld**

Brad writes and speaks on the topics of venture capital investing and entrepreneurship. He’s written a number of books as part of the [Startup Revolution](https://www.startuprev.com/) series and writes the blog [Feld Thoughts](https://www.feld.com/). Brad also co-founded the second most recognizable accelerator in the world (behind YC) Techstars. Brad’s view is that startups should be a continuum of ideas, but in my opinion, he forgot to include that there are also ideas you should avoid.

[Startup is a continuum of ideas](https://feld.com/archives/tag/ideas)

**Fred Wilson**

Fred Wilson co-founded Union Square Ventures, a New York City-based venture capital firm with investments in Web 2.0 companies such as Twitter, Tumblr, Foursquare, Zynga, Kickstarter, Etsy and MongoDB. Fred also blogs quite frequently at [https://avc.com/](https://avc.com/).

[Draw Your Ideas (Jack Dorsey)](https://avc.com/2010/05/draw-your-ideas/) video
[Is This A Good Startup Idea?](https://avc.com/2015/02/is-this-a-good-startup-idea/) post
[Where Good Ideas Come From](https://avc.com/2010/09/where-good-ideas-come-from/) post
[Execution Matters, Ideas Don't](https://avc.com/2004/06/execution_matte-2/) post
[Cloning Successful Startups](https://avc.com/2012/04/cloning-successful-startups/) post

**Courtland Allan**

Courtland Allan founded [IndieHackers.com](http://indiehackers.com) August 2016, Indie Hacker is a community where the founders of profitable businesses and side projects share their stories, and sold it to Stripe in April 2017. Courtland now runs the Indie Hackers team at Stripe. Indie Hacker is a great network to connect, share, and learn from other tech entrepreneurs.

[How to brainstorm great business ideas](https://www.indiehackers.com/post/how-to-brainstorm-great-business-ideas-ab51c3d51c) post

**Daniel Gross**

Daniel Gross co-founded Cue in 2013 and later sold it to Apple where he led machine learning efforts until joining Y Combinator as a partner in January 2017. Gross also invests in tech startups and contributes to the technology news site TechCrunch. He also co-founded [Pioneer](https://pioneer.app/), an online gamified accelerator for early-stage startups.

[How To Go From Idea To Series A](https://dcgross.com/how-to-go-from-idea-to-a/) video
[How To Decide What To Build](https://dcgross.com/decide-what-to-build/) post
[10X: Metrics for Early Stage Startups](https://dcgross.com/10X/) post
[Finding the right idea](https://pioneer.app/codex/idea) post

**Peter Thiel**

Peter Thiel founded PayPal, a global payment service which he later sold for 1.5 billion. He also invested early in Facebook when many other savvy investors thought it was a bad idea. He authored the book [Zero to One](https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296), a must read for all founders. Peter also came up with the Venn diagram you saw above.

[Competition is for Losers with Peter Thiel](https://www.youtube.com/watch?v=3Fx5Q8xGU8k) video

**Aaron Harris**

Aaron Harris co-founded Tutorspree, which was funded by Y Combinator in 2011. Aaron invests in and advises founders and startups. He also was a partner at Y Combinator for 7.5 years where he funded over 1000 companies, and during that time he built the Series A program which helped founders raise 200+ Series As. And maybe he’s willing to provide feedback on your [deck](https://www.aaronkharris.com/deck-review). Make sure to do your homework before you reach out.

[Why Build Toys](https://blog.aaronkharris.com/why-build-toys) post

**Paul Buchheit**

Paul T. Buchheit created the world’s most popular email client, Gmail. He developed the original prototype of Google AdSense as part of his work on Gmail. He also suggested Google’s former company motto “Don’t be evil” in a 2000 meeting on company values. He also came up with the famous quote “Live in the future, then build what's missing.”

[Three types of ideas - bad ones are often the best](http://paulbuchheit.blogspot.com/2007/06/three-types-of-ideas.html) post
[Ideas vs Judgment and Execution: Climbing the Mountain](http://paulbuchheit.blogspot.com/2008/03/ideas-vs-judgment-and-execution_9197.html) post

**Garry Tan**

Garry Tan co-founded Initialized Capital with Alexis Ohanian in 20. He previously co-founded Posterous and Posthaven. He was also a partner at Y Combinator from 2011 to 2015. Garry creates and publishes insightful videos on his [Youtube channel](https://www.youtube.com/channel/UCIBgYfDjtWlbJhg--Z4sOgQ) you should checkout.

[Billion dollar startup ideas](https://www.youtube.com/watch?v=3YKNr-LiblI) post
[Should you work on that startup idea? Ask why me, why now](https://blog.garrytan.com/should-you-work-on-that-startup-idea-ask-why-me-why-now) post
[One exception to the solve your own problem approach to startup ideas](https://blog.garrytan.com/one-exception-to-the-solve-your-own-problem-approach-to-startup-ideas) post
[The most common startup ideas](https://blog.garrytan.com/tag/startup%20ideas) post

**Y Combinator**

[Y Combinator](https://www.ycombinator.com/) invests in early-stage startups around the world and provides them with the resources, knowledge, and tools they need to grow into thriving companies. They’re the bedrock of some of the world's most recognized technology companies. Their flagship seed investment was in a company we all know today as Airbnb. Paul Graham founded and launched Y Combinator in 2005. Read the story of their early days [here](http://www.paulgraham.com/ycstart.html).

[Kevin Hale - How to Evaluate Startup Ideas](https://www.youtube.com/watch?v=DOtCl5PU8F0) video
[How to Get and Test Startup Ideas - Michael Seibel](https://www.youtube.com/watch?v=vDXkpJw16os) video
[Developing Ideas for Startups by President of Y Combinator & Cofounder of Facebook](https://www.youtube.com/watch?v=O_40XFbsM80) video
[How to Get Startup Ideas](https://www.ycombinator.com/library/8g-how-to-get-startup-ideas) video

**Additional helpful articles**

[Painkillers vs. Vitamins](https://medium.com/strategy-dynamics/painkillers-vs-vitamins-d3bcdc76ddd31) post
[Know Your Customers’ “Jobs to Be Done”](https://hbr.org/2016/09/know-your-customers-jobs-to-be-done) post
[How to Write Jobs to Be Done Example Statements](https://brianrhea.com/jobs-to-be-done-examples/) post
[Fundamentals of Jobs-To-Be-Done Theory](https://strategyn.com/jobs-to-be-done/jobs-to-be-done-theory/) post
[Founder Market Fit: How to Create Painkillers Not Vitamins](https://medium.com/swlh/founder-market-fit-how-to-create-painkillers-not-vitamins-8994bb838a21) post
[How to Choose Your Startup Idea](https://www.sequoiacap.com/article/how-to-choose-your-startup-idea/) post

There’s so much more I could say about the amazing founders in this guide, but that’s a good starting point for you to get to know them (if you don’t already).

Noticing great ideas is a skill you can develop over time. When you deliberately think about problems and the occasional shifts occurring in the world around us, you’ll find that noticing situations that unlock opportunities will start to feel natural to you.

Best of luck!`,
  },
  {
    date: "Feb 13, 2024",
    title: "Write Less Convoluted ViewModels with Subscripts",
    excerpt:
      "The Swift programming language provides many convenient language features to access data immediately—for instance, the built-in subscripts for arrays and dictionaries. But what about custom Swift objects? Today, you'll learn how to access any property without relying on dot notation.",
    url: "https://alexknows.biz/swift/2024/02/13/write-less-convoluted-business-logic-with-subscripts",
    content: `The Swift programming language provides many convenient language features to access data immediately—for instance, the built-in subscripts for arrays and dictionaries. But what about custom Swift objects? Today, you'll learn how to access any property without relying on dot notation.

**Why Subscripts**

Subscripts can be particularly useful when working with multidimensional arrays or other complex data structures, as they provide you with a clean approach to accessing elements at specific indices or by key, exactly how you would access a value from an array or dictionary.

**Visualizing the Problem**

Let's assume a scenario where you have a view that switches between four states. For each state, the requirements states (no pun intended) that the corresponding data should be fetched and presented to the end user. But, the corresponding objects are encapsulated within a parent object.

You immediately reach for your switch statement:

\`\`\`
switch state {
case .state1:    
    var object = object.correspondingObject
case .state2:
    var object = object.correspondingObject
case .state3:
    var object = object.correspondingObject
case .state4:
    var object = object.correspondingObject
}
\`\`\`

And you did it; you got the job done.

But you could have just done:

\`\`\`
object[state]
\`\`\`

And you're done.

**Important note**

The return type of your subscript method should be a protocol that the encapsulated objects conform to.

**Understanding Subscripts**

Subscripts can make the code more readable and concise when accessing elements in a custom data structure, such as arrays, dictionaries, or custom classes. And like in the example above, they can be used to define custom access patterns for your types, allowing you to interact with your data in a natural and intuitive way.

**Summary**

In this exploration, we've dived into subscripts, a powerful feature in Swift that allows you to provide custom access to elements in your types, improving the clarity and usability of your code.

That's all for now, fellow developers! I hope this post has shed light on the beauty of subscripts in Swift. If you have any questions or insights to share, feel free to leave a comment below. And don't forget to connect with me on LinkedIn and Twitter for more insights and future posts. Happy coding!`,
  },
  {
    date: "Feb 13, 2024",
    title: "Generics Beyond Ints and Strings in Swift",
    excerpt:
      "In the Swift programming language, certain concepts may appear daunting at first but hold immense power once understood. Generics is one of those concepts. Today, we will simplify their purpose and explore the elegance and versatility of generics.",
    url: "https://alexknows.biz/swift/2024/02/13/generics-beyond-ints-and-strings-in-swift",
    content: `In the Swift programming language, certain concepts may appear daunting at first but hold immense power once understood. Generics is one of those concepts. Today, we will simplify their purpose and explore the elegance and versatility of generics. By the end, you'll have a better understanding of generics and how to squeeze the most out of them.

**The Overlooked Potential of Generics**

Generics are often underutilized or misunderstood by developers. However, they offer a powerful way to write flexible and reusable code. Whether you're working with collections, algorithms, or network services, generics can streamline your code and make it more adaptable to different types.

**The Essence of Generics**

At its core, generics allow us to write functions, classes, and structures that can work with any type (known as polymorphism). Rather than specifying the type of data a function or data structure will take in as part of the signature, we use placeholders, or type parameters, to indicate that the code should operate on any type. Or any type that conforms to a protocol. Multiple protocols are also allowed: func printDescriptions<T: Printable & LargeShape>(items: [T], minArea: Double) {}. This flexibility enables us to write more generic, yet still type-safe, code because Swift generics provide stronger type safety because the compiler enforces type constraints at compile time. This helps catch type-related errors early in the development.

**Visualizing the Problem**

Let's consider a scenario where you have four identical types that represent the rounds in a poker hand: preflop, flop, turn, and river. The behavior is identical for each, so we create a protocol which each will conform to.

\`\`\`
protocol Round {
  var openingPot: Int { get }
  var closingPot: Int { get }
  var players: [Players] { get }
  var round: String { get }
}
\`\`\`

Now, our types will conform as such:

\`\`\`
struct Preflop: Round {}
struct Flop: Round {}
struct Turn: Round {}
struct River: Round {}
\`\`\`

**The Generic Approach**

Here's a concise implementation of a generic function that accepts any of the 4 types:

\`\`\`
func prepareTablePositions<T: Round>(_ round: T) {}
\`\`\`

You could have just used the protocol:

\`\`\`
func prepareTablePositions(_ round: Round) {}
\`\`\`

But, you'll miss out on:

Flexibility: With generics, you can specify a specific type when calling the function (printDescriptions(items: shapes2)), allowing you to work with arrays of specific types rather than generic protocols.
Type Safety: Generics provide stronger type safety because the compiler enforces type constraints at compile time. This helps catch type-related errors early in the development process.
Code Reusability: Generics promotes code reusability by allowing functions and types to work with a wide range of types, reducing the need for duplication or specialized implementations.

**Understanding Flexibility**

With generics, we can write functions, structures, and classes that operate on a wide range of types while still ensuring type safety at compile time. This enables us to write cleaner, more concise code that is less prone to errors.

**Summary**

In this exploration, we've delved into some of the nuances of generics in Swift. By understanding the essence of generics, visualizing the problem, and embracing the generic approach, you now have the tools to harness the power of generics in your own code.

That's all for now, fellow developers! I hope this post has shed light on the beauty of generics in Swift. If you have any questions or insights to share, feel free to leave a comment below. And don't forget to connect with me on LinkedIn and Twitter for more insights and future posts. Happy coding!`,
  },
  {
    date: "Jan 27, 2024",
    title: "Visualize Reversing Linked Lists in Swift Differently",
    excerpt:
      "In the realm of algorithmic problem-solving, one challenge that often perplexes developers is the task of reversing a linked list. Today, we'll aim to unravel the intricacies of this problem and equip you with the insights needed to master this common algorithm.",
    url: "https://alexknows.biz/algorithm/2024/01/27/visualize-reversing-linked-lists-in-swift-differently",
    content: `In the realm of algorithmic problem-solving, one challenge that often perplexes developers is the task of reversing a linked list. Today, we'll aim to unravel the intricacies of this problem and equip you with the insights needed to master this common algorithm.

**The Overlooked Power of Linked List Reversal**

Linked lists are a fundamental data structure, and understanding how to reverse them is a crucial skill. Yet, many developers may find themselves overlooking the elegance and power hidden within this seemingly straightforward problem. Let's dive in and explore why mastering linked list reversal is more valuable than it might initially seem.

**The Essence of Linked List Reversal**

At its core, reversing a linked list involves altering the direction of its elements, turning the tail into the new head. The challenge lies not only in achieving this reversal but also in doing so efficiently (O(n) time complexity) and with a clear understanding of the underlying principles.

**Visualizing the Problem**

Most examples you'll find online will give an example like this: a linked list: 1 -> 2 -> 3 -> 4 -> 5. The goal is to reverse it to 5 -> 4 -> 3 -> 2 -> 1. But I think a better way to simulate what actually happens is to only reverse the arrows: 1 <- 2 <- 3 <- 4 <- 5. Visualizing the problem in this manner provides a clear target and helps lay the foundation for an effective solution.

**The Iterative Approach**

One common approach to solving this problem is through iteration. Here's a concise Swift implementation:

\`\`\`
class ListNode {
    var val: Int
    var next: ListNode?
    init(_ val: Int) {
        self.val = val
    }
}

func reverseList(_ head: ListNode?) -> ListNode? {
    var prev: ListNode? = nil
    var current = head
    var next: ListNode? = nil

    while current != nil {
        next = current?.next
        current?.next = prev
        prev = current
        current = next
    }

    return prev
}
\`\`\`

Here's our network service class or the decorate in this case:

**Understanding Time Complexity**

The iterative approach boasts a time complexity of O(n), where n is the number of elements in the linked list. This makes it an efficient solution for lists of varying lengths.

**Summary**

In this exploration, we've demystified the process of reversing linked lists in Swift. By visualizing the problem by simply reversing the arrows, understanding the iterative approach, and considering time complexity, you now possess the tools to tackle linked list reversal with confidence.

That's all for now, my friends! I hope this post helps you conquer the challenge of reversing linked lists. If you have questions, share them in the comments below. For more insights and future posts, connect with me on on LinkedIn and Twitter, where I share all my new posts.`,
  },
  {
    date: "Mar 23, 2023",
    title: "How to Make Technical Concepts Easier to Recall",
    excerpt:
      "Recalling abstract concepts can feel hopelessly challenging unless you have a framework to turn the abstract into something tangible. I overcome this challenge by using intellectual construct to identify situations that are familiar to me.",
    url: "https://alexknows.biz/learning/2023/03/23/how-to-make-technical-concepts-easier-to-recall",
    content: `Recalling abstract concepts can feel hopelessly challenging unless you have a framework to turn the abstract into something tangible. I overcome this challenge by using intellectual construct to identify situations that are familiar to me. You cannot learn these concepts in a vacuum; you must associate them with tangible situations or objects you can recall.

In the example of when you should use unowned vs. weak, you have to frame it as such: in what situation is it unequivocally better to establish a dependent relationship vs an independent relationship? By categorizing it into situational understanding, we are all familiar with dependent vs dependent. I can now ask myself: is a credit card dependent on a customer, yes or no? Obviously, yes, so a credit card must depend on a customer; therefore, the relationship is unowned.

Now, let's exchange the credit card object for an apartment object. I ask myself again: is an apartment dependent on a customer/resident, yes or no? The answer is no, an apartment is an independent or standalone entity; it can exist without a customer.

Now, let's exchange the credit card for an iPhone. This one is a bit trickier. The phone can have two different states: on sale or owned. As I finished writing the last word of the previous sentence, I realized that the word choice made it self-explanatory.

**Summary**

In this article, I just wanted to introduce something that has helped me better understand the nuances of abstract concepts. But understanding is not enough; you need to be able to recall and apply this knowledge in situations you'll inevitably encounter. Don't fall prey to the 'law of the instrument,' which means if the only tool you know is a hammer, you tend to see every problem as a nail. Expand your knowledge of tools, so instead of always relying on a hammer, you seek out the best tool for the job.

That's all, my friends. I hope this post unblocks you from any ongoing challenge you may be facing. If you have any questions or edge cases you'd like to discuss, just leave a comment below. If you want to support this blog you can Buy Me a Coffee. You can also connect with me on LinkedIn and Twitter, where I share all my new posts.`,
  },
  {
    date: "Feb 28, 2023",
    title: "Why You Should Use Async/Await Over Closures Moving Forward",
    excerpt:
      "Since Apple released Async/await in 2021, it has made writing asynchronous code amazingly pleasant for iOS developers. Writing straightline code rather than nested closures allows us to better express our intent to others.",
    url: "https://alexknows.biz/swift/2023/02/28/why-you-should-use-async-await-over-closures-moving-forward",
    content: `Since Apple released Async/await in 2021, it has made writing asynchronous code amazingly pleasant for iOS developers. In addition to the out-of-the-box performance and safety benefits, writing asynchronous code with async/await feels like you're writing synchronous code, which we write most of the time. Writing straightline code rather than nested closures allows us to better express our intent to others. Using the combination of async/await and throws also makes handling errors straightforward.

Async/await was designed to resemble code we write everyday. It removed many of the frictions that came with writing and maintaining closures. For example, rather than capturing the return values on the right (like with closures), the return value of an async/await function is assigned to a variable on the left. This makes it just like your most basic function. You also no longer need to concern yourself with capturing the outer scope to access those values from within the closure. Which, if you had simply forgotten to add the weak keyword in front of your variables or self, you would have had a memory leak in your app, which is never a good thing.

Being able to write code that's idiomatic and easy to parse is beneficial in many facets. For instance, you'll write less lines of code which means it'll be easier to maintain. You'll also find the intent of your logic easier to maintain in your head. And it'll ultimately feel like the style of code you write the most often.

One of the features I find most useful is how easy it makes handling errors. Errors seamlessly propagate downstream and could be parsed by individual catch blocks that will execute additional code, such as triggering events and handling any unhappy path. Unlike with closures where you can accidentally leave out an vital completion call, using try await, Swift warns you if you leave out a throw, which makes our code safer.

**Summary**

This article introduces the core advancements that Swift has made in writing asynchronous code using Async/await. Async/await is here to stay, and iOS Developers should begin using it and advocating for its adoption in their organization if they aren't already.

That's all, my friends. I hope this post unblocks you from any ongoing challenge you may be facing. If you have any questions or edge cases you'd like to discuss, just leave a comment below. If you want to support this blog you can Buy Me a Coffee. You can also connect with me on LinkedIn and Twitter, where I share all my new posts.`,
  },
  {
    date: "Aug 31, 2022",
    title: "The Decorator Pattern Saved the Day",
    excerpt:
      "I recently encountered a challenging problem at work when given the task of integrating into our iOS codebase a new authentication service called Auth0. It's crucial to think; use UML diagrams to help you think; learn from others.",
    url: "https://alexknows.biz/swift/2022/08/31/the-decorator-pattern-saved-the-day",
    content: `I recently encountered a challenging problem at work when given the task of integrating into our iOS codebase a new authentication service called Auth0. While Auth0 reduces many of the complexities around authentication and authorization, our architecture wasn't designed to handle token rotation prior to the app making its network requests. As with many problems, the ideal solution wasn't obvious. In this case, I first took a step back and thought about different approaches. It's crucial to think; use UML diagrams to help you think; learn from others. It's important for iOS developers to be familiar with the structural tools at their disposal to solve architectural bottlenecks in a modular and extensible way as advocated by the popular book "Design Patterns," written by Erich Gamma.

When architecting our codebase, we should adhere to the Single Responsibility Principle which states: "That each class should have one responsibility and one single purpose." When feature requirements include cross-cutting concerns such as event logging, event tracking, and user authentication, the decorator pattern is the recommended structural tool over the misuse of singletons, which pollutes our client code and hinders our architecture flexibility.

**The Problem**

How can we add the ad hoc refresh token operation to our network service without introducing dangerous changes to our network service class while rotating the refresh token without producing race conditions?

**The Solution**

If you're not familiar with various structural patterns, your first inclination might be to change the class' implementation, but that means every instance will now have new behavior; we don't want that.

Instead, we'll use the decorator design pattern, defined here as:

… a structural design pattern that lets developers attach new behaviors to objects by placing them inside a special wrapper that contains the behaviors.

Utilizing the decorator, we are only changing the behavior of an instance (the decoratee) rather than altering the whole class, and this idea is powerful.

Every time possible, avoid adding behavior to an established class. Instead, a better approach is to wrap an instance with just the behavior it needs. The decorator not only gives us the powerful ability to add behavior non-intrusively, but also makes it easier to unit test our decorator in isolation, because it shares the same interface as the decoratee.

Image: Here's how we would like our architecture to look:

[IMAGE]/architecture-decorator-pattern.png

**Decision tree – (Happy Path)**

The decorator will decorate the instance of our network service, and be responsible for executing our token refresh and signature operation. The operation should execute in the following order:

Check if the access token is valid.
If valid, proceed as usual.
If invalid, execute a token refresh.
Be careful of possible race conditions.
Once the token is refreshed, proceed with the network requests.

**Boilerplate Code**

Here is a boilerplate setup of the decorator pattern written in Swift. You can use it as a starting point for your own custom implementation.

Here's our protocol:

\`\`\`
protocol HttpClient {
    // methods signature
    func fetch(token: String)
}
\`\`\`

Here's our network service class or the decorate in this case:

\`\`\`
final class NetworkService: HttpClient {
	// Behavior
      func fetch(token: String) {}
}
\`\`\`

Here's our decorator:

\`\`\`
final class NetworkServiceDecorator {
   private let networkService: NetworkService 
   init(networkService: NetworkService) {
      self.networkService = networkService
   } 
   // Apply your new behavior
   // Call the decoratee
   func handleRefreshToken() {
      // Handle any operations here 
      // Then call the decoratee
      networkService.fetch()
   }
}
\`\`\`

Here's how we compose the decorator and wrap the decoratee:

\`\`\`
let networkService = NetworkService()
let networkServiceDecorator = NetworkServiceDecorator (networkService: networkService)
\`\`\`

**Summary**

Today we explored how to tackle a common problem you will undoubtedly run into when introducing new behavior into an existing codebase. The good news is that senior developers have already created elegant solutions to many of the problems you'll face in your career. You can learn many more of these elegant solutions in the popular book "Design Patterns," written by Erich Gamma. Overall, this problem demonstrated the importance of thinking through structural enhancement rather than solving problems locally.

That's all, my friends. I hope this post unblocks you from any ongoing challenge you may be facing. If you have any questions or edge cases you'd like to discuss, just leave a comment below. If you want to support this blog you can Buy Me a Coffee. You can also connect with me on LinkedIn and Twitter, where I share all my new posts.`,
  },
  {
    date: "May 30, 2022",
    title: "Make Learning your Secret Weapon to a Stress-free Life",
    excerpt:
      "Learning about anything, especially anything nontrivial, will greatly improve your mental state. Learning how to learn makes learning even more enjoyable. Adopt these two ideas into your daily habits, and I guarantee you a boost in happiness and morale.",
    url: "https://alexknows.biz/learning/2022/05/30/make-learning-your-secret-weapon-to-a-stress-free-life",
    content: `Learning about anything, especially anything nontrivial, will greatly improve your mental state. Learning how to learn makes learning even more enjoyable. Adopt these two ideas into your daily habits, and I guarantee you a boost in happiness and morale.

Did you know active learning can improve your mental state? Try recalling a time you weren't actively learning and you'll notice you had a decrease in your mood, correct? And when you rekindle your learning habits, I assure you you'll also notice an increase in mood. If you haven't experienced this dilemma, you either are too young or have inherited outstanding learning habits. All humans share this hidden, untapped benefit lying dormant for us to leverage and this unseen, unnamed benefit might be the key that unlocks the gates to a stress-free life.

I realize I just made an ambitious claim to you, and while I'm not certain that you'll feel the same euphoric mood-enhancing sensation I get out of learning, I am certain about one thing: without a lifelong learning habit, you'll find yourself stuck in "rut thinking." When you're not learning, you're not growing. Take it as a sign that you've become fixed in your thinking and you've lost motivation. Beware this can increasingly become more difficult to change, making it more likely to become stressed overtime. Don't ignore the signs. Rather use it to your advantage to engage with new topics that you're naturally curious about. Scout new topics consistently to enhance your career, and ideally have a part-time hobby that challenges you intellectually. In my case, I'm a Senior iOS Developer who is striving to become an engineering manager, and my part-time hobby is poker which I take very seriously to play well.

But learning anything new is difficult without knowing how to learn in the first place. Even learning about something you know well usually shows you that you didn't know it as well as you thought. But don't get discouraged. To make learning enjoyable you need to be: (1) curious to learn new things, (2) feel comfortable with the unknown, and (3) have an appetite to go down infinite rabbit holes. Over time as we expand our experiences, we're building deeper and deeper associations between the new concepts we're learning and concepts we know well. Every once in a while, all the rules, concepts, and ideas we are devoting our time to learn connect in unification, and it turns out what once looked daunting now looks simpler than it was before. And that's when the magic happens.

If you haven't yet, you should adopt learning as a daily habit. It really doesn't matter what you learn, as long as it's challenging and you enjoy it. There you have it, the secret weapon to a stress-free life.

That's all, my friends. I hope this post unblocks you from any ongoing challenge you may be facing. If you have any questions or edge cases you'd like to discuss, just leave a comment below. If you want to support this blog you can Buy Me a Coffee. You can also connect with me on LinkedIn and Twitter, where I share all my new posts.`,
  },
  {
    date: "Feb 28, 2022",
    title: "Why iOS Developers Overlook the Usefulness of Unowned",
    excerpt:
      "Most iOS Developers I've talked to about unowned variables disregard its specific usefulness. If you spend some time digging into Swift's own documentation and doing your own hands-on tinkering, you'll quickly notice what makes unowned important.",
    url: "https://alexknows.biz/swift/2022/02/28/why-ios-developers-overlook-the-usefulness-of-unowned",
    content: `Most iOS Developers I've talked to about unowned variables disregard its specific usefulness. Even worse, they just default to weak without a justified reason. I think this is because it's not commonly used in our day-to-day development. But if you spend some time digging into Swift's own documentation around the topic and doing your own hands-on tinkering, you'll quickly notice what makes unowned important and realize the distinction between weak and owned.

What makes unowned important is that unlike weak variables, unowned variables can be declared as non-optionals. That means we are responsible for assigning them a value during initialization. Which tells us precisely their usefulness, that we must use unowned when we need to establish a tightly coupled relationship between two objects. For instance, when establishing relationships between a customer and a credit card object, we instinctively know that a customer may or may not own a credit card, but a credit card must always be tied to a customer. If it doesn't have a customer, well, it's not a credit card, is it? It's just a piece of plastic.

Since all weak properties are optional, you can create a credit card without a customer, and this is precisely what you want to avoid. The way to avoid it is by using a non-optional unowned property that enforces the relationship safely.

Here's an example to demonstrate visually unowned's usefulness:

**Weak:**

As you can see, if we use weak, we can initialize a credit card with or without a customer. While this would still work, it's not explicit and we should aim to be explicit when possible. I assume that is why the Swift creators included unowned in the first place.

\`\`\`
class Customer {
    let name: String
    var card: CreditCard?
    init(name: String) {
        self.name = name
    }
    deinit { print("\\(name) is being deinitialized") }
}
class CreditCard {
    let number: UInt64
    weak var customer: Customer?
    init(number: UInt64, customer: Customer) {
        self.number = number
        self.customer = customer
    }
    deinit { print("Card #\\(number) is being deinitialized") }
}
var john: Customer?
john = Customer(name: "John Appleseed")
john!.card = CreditCard(number: 1234_5678_9012_3456, customer: john!)
\`\`\`

**Unowned:**

Here, on the other hand, since we're using a non-optional unowned, we are required to include the credit card in the initialization. Now by simply looking at this class init method, it's clear that a credit card must always have a customer, since it's not possible to create a credit card without one. That's a level of clarity we can't achieve if we use a weak variable.

\`\`\`
class Customer {
    let name: String
    var card: CreditCard?
    init(name: String) {
        self.name = name
    }
    deinit { print("\\(name) is being deinitialized") }
}
class CreditCard {
    let number: UInt64
    unowned var customer: Customer
    init(number: UInt64, customer: Customer) {
        self.number = number
        self.customer = customer
    }
    deinit { print("Card #\\(number) is being deinitialized") }
}
var john: Customer?
john = Customer(name: "John Appleseed")
john!.card = CreditCard(number: 1234_5678_9012_3456, customer: john!)
\`\`\`

Here's a framework I use that helps me remember the functionality of each keyword, and helps me identify in which situations they're most applicable.

How to make technical concepts easier to recall

**Summary**

Today we explored the specific difference between unowned and weak. We highlighted the usefulness of using unowned as "clarity" in establishing a reference back to the parent object while avoiding a strong reference cycle, which is the primary purpose of both weak and unowned.

That's all, my friends. I hope this post unblocks you from any ongoing challenge you may be facing. If you have any questions or edge cases you'd like to discuss, just leave a comment below. If you want to support this blog you can Buy Me a Coffee. You can also connect with me on LinkedIn and Twitter, where I share all my new posts.`,
  },
];
