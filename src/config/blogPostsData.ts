export interface BlogPost {
  date: string;
  title: string;
  excerpt: string;
  url: string;
  content: string;
}

export const blogPostsWithContent: BlogPost[] = [
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
