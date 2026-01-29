import { CSSProperties } from "@material-ui/styles";
import { makeStyles, Theme } from "@material-ui/core";

export interface Skill {
  years: number;
  text: string;
  color?: string;
  route?: string;
}
export interface About {
  imageURL?: string;
  title: string;
  subtitle: string;
  text: string;
  seeMoreText: string[];
}
export interface Page {
  sections: Section[];
  styles: (
    props?: any
  ) => Record<
    "image" | "list" | "seeMoreButton" | "seeMoreText" | "text",
    string
  >;
}
export interface Pages {
  android: Page;
  ios: Page;
  web: Page;
}
export enum SeeMore {
  list = 1,
  text
}
export interface SeeMoreMetadata {
  type: SeeMore;
  text: string[];
  toggledText: string;
  unToggledText: string;
}
export interface Section {
  imagesType: "multiple" | "single";
  headerImage: string;
  assetsFolderName: string;
  title?: string;
  subtitle?: string;
  text?: string;
  images: string[];
  headerImageType: "wide" | "square";
  seeMoreMetadata?: SeeMoreMetadata;
  link: string;
}
export interface AppConfigInterface {
  skills: Skill[];
  about: About;
  pages: Pages;
}
const AppConfig: AppConfigInterface = {
  skills: [
    {
      years: 11,
      text: "Years",
      color: "#ff9e10"
    },
    {
      years: 10,
      text: "iOS",
      color: "#000000",
      route: "ios"
    },
    {
      years: 2,
      text: "Android",
      color: "#a9a9a9",
      route: "android"
    },
    {
      years: 5,
      text: "Web",
      color: "#a9a9a9",
      route: "web"
    }
  ],
  about: {
    imageURL: "/assets/alex.png",
    title: "Alex Cruz",
    subtitle: "Ai Engineer",
    text: `...a born-and-raised Miami programmer. `,
    seeMoreText: [
      `Bullets:`,
      `• Mentored for three years by an industry pioneer who brought to market a revolutionary product still used today.`,
      `• Overhauled the onboarding layer of the world's largest creator commerce platform with a GMV > $12 billion and tens of millions of users.`,
      `• Built from scratch, 3 iPad applications used by aviation companies such as JetBlue and Air Canada.`,
      `• Developed from scratch two crypto-wallets with a flow of value in the tens of millions. `,
      `Most recent accomplishments`, 
      `At LTK as a Senior iOS Developer. A global creator commerce platform, LTK empowers thousands of digital lifestyle influencers to achieve economic success. I LTK I overhauled our legacy onboarding and authentication technology by leveraging modern authentication best practices to simplify new-user registration with various IDPs (FB, Gmail, Apple login, etc.) while maintaining the highest standards of modern security practices.`,
      `Followed by, being the Tech Lead at Minnect. A marketplace to book 1:1 video calls with experts. In my short stint at Minnect, I successfully led an aggressive 8-week goal to redesign Minnect’s native iOS, Android, and web app and a significant change of the core Q&A functionality to a modern chat-like interface using Swift, Jetpack Compose, and REST API, which increased engagements between experts and users and overall earnings for experts by ~10x.`,
      `Currently at Wamy, I build and deploy production-grade AI systems for a claims-intelligence platform, delivering end-to-end TypeScript applications backed by Supabase and AWS, and shipping retrieval-augmented generation (RAG) pipelines and prompt orchestration that power real-world legal workflows, customer onboarding, and agent-focused automation.`
    ]
  },
  pages: {
    android: {
      styles: makeStyles((theme: Theme) => androidSectionStyles),
      sections: [
        {
          link: `https://apps.apple.com/tt/app/delyte/id1497012566?ign-mpt=uo%3D2`,
          seeMoreMetadata: {
            text: [
              "Categories",
              "Baby Items",
              "Personal Care",
              "Home Essentials",
              "OTC Medicine",
              "Eye Care",
              "Snacks",
              "Drinks",
              "And More…"
            ],
            toggledText: "COLLAPSE",
            unToggledText: "READ MORE",
            type: SeeMore.list
          },
          headerImageType: "square",
          assetsFolderName: "Android/Delyte",
          imagesType: "multiple",
          title: "Delyte",
          subtitle: "Your Daily Essentials, Delivered",
          headerImage: "logo.png",
          images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
          text: `Get on the Delyte appi It allows you to purchase personal and home products, without leaving the San,. Of Your home- Easily Pay using a credit or debt card. The magic is in our stocked vans and dedicated skivers, who once your order is placed will deliver vvehin minutes instead of hours or clays.`
        },
        {
          link: "https://www.youtube.com/watch?v=YxYjxWlELus",
          headerImageType: "square",
          assetsFolderName: "Android/Daps",
          imagesType: "multiple",
          title: "Daps",
          subtitle: "Buy & Sell with Friends and Communities",
          headerImage: "logo.png",
          images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg"
          ],
          text: `Daps is a free app that’s easy to use and an appealing way to sell stuff we no longer need or want.
                Daps connects you with your friends, neighbors, and those in other groups you’re a part of who want and need your stuff.
          `,
          seeMoreMetadata: {
            type: SeeMore.text,
            toggledText: "COLLAPSE",
            unToggledText: "READ MORE",
            text: [
              `Why should you become a Daps user?`,
              `Because Daps is an easy way to sell stuff you don’t need, buy stuff you do need, save or earn money, and help out friends.`,
              `● Does it feel awkward telling friends or connections you have goods for sale?`,
              `● Do you want to save money by not paying retail, and are happy with previously owned items from people you trust?`,
              `● Are you fearful of meeting with, and buying from, or selling to strangers?`,
              `● Do you have concerns about the authenticity or quality of items from strangers?`,
              `● Are you worried about getting paid with bogus checks or counterfeit bills?`,
              `If you answer “Yes!” to any of these – then Daps is for you.`,
              `With Daps, you always know who exactly you’re dealing with – you can easily synchronize with your Facebook friends and your phone contacts.`,
              `Also, if you belong to local groups like a Church, Homeowner’s Association, School, or many other organizations – administrators can easily create private marketplaces so that you and others in your group can connect, buy and sell.`,
              `List items in seconds.`,

              `Set custom filters and be notified when friends list items in your preferred categories.`,
              `Browse friends profile for additional stuff you might like to buy.`,
              `Message with buyers or sellers through our private messaging system.`,
              `Buy & Sell with Friends!`
            ]
          }
        },
      ]
    },
    web: {
      styles: makeStyles((theme: Theme) => webSectionStyles),
      sections: [
        {
          link: "https://delyte.co/",
          headerImageType: "wide",
          assetsFolderName: "Web/Delyte",
          imagesType: "single",
          title: "Delyte",
          subtitle: "Your Daily Essentials, Delivered",
          headerImage: "logo.png",
          images: ["1.jpg"],
          text: `Personal and home needs are delivered to you within 10 minutes of ordering on the Delyte app. Our stocked
                vans are located near you ready to deliver your order fast. You can pay through our app, or with cash or card upon delivery.`
        },
        // {
        //   link: "https://delyte.co/",
        //   headerImageType: "wide",
        //   assetsFolderName: "Web/DelyteDash",
        //   imagesType: "single",
        //   title: "Delyte’s Dashboard",
        //   subtitle: "Your Daily Essentials, Delivered",
        //   headerImage: "logo.png",
        //   images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
        //   text: `Personal and home needs are delivered to you within 10 minutes of ordering on the Delyte app. Our stocked
        //         vans are located near you ready to deliver your order fast. You can pay through our app, or with cash or card upon delivery.`
        // },
        {
          link: "https://creativecoach.live/",
          headerImageType: "wide",
          assetsFolderName: "Web/CreativeCoach",
          imagesType: "single",
          title: "Creative Coach",
          subtitle: "Expert Digital Marketers Ready To Help",
          headerImage: "logo_cc.png",
          images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"],
          text: `Facing Marketing Challenges? Get on a one on one video chat with any of our digital marketing experts, as they coach you step-by-step on how to complete the task.`
        },
        {
          link: "https://tryspiel.com/",
          headerImageType: "wide",
          assetsFolderName: "Web/Spiel",
          imagesType: "single",
          title: "Spiel",
          subtitle: "A place to help & learn",
          headerImage: "logo.png",
          images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
          text: `Do you enjoy sharing your stories as a founder? Join our Q&A app and give video answers to questions directed at the startup community.`
        },
        {
          link: "https://mphclub.biz/",
          headerImageType: "wide",
          assetsFolderName: "Web/mphclub",
          imagesType: "single",
          title: "mph club",
          subtitle: "mph club is a premium vehicle rental platform.",
          headerImage: "logo.png",
          images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
          text: `Vehicle owners can list their cars up for rent, set their own rental rates, and earn extra income.
                Browse through a large variety of pre-approved vehicles in all of Florida. mph club offers a white
                glove concierge service to assist you with all of your rental needs.From last-minute itinerary changes
                to delivery services, mph club goes the extra mile so you don't have to. Security and safety is our number
                1 priority. All hosts and guests must pass our verification process which includes.
             `,
          seeMoreMetadata: {
            type: SeeMore.list,
            toggledText: "less",
            unToggledText: "more",
            text: [
              `* Insurance verification check`,
              `* Driving history check`,
              `* Background check`,
              `Owning your dream is not only possible, but it's also profitable.`,
              `List your car. Rent a car. Earn money. Simple.`
            ]
          },
        },
      ]
    },
    ios: {
      styles: makeStyles((theme: Theme) => iosSectionStyles),
      sections: [
        {
          link: "",
          headerImageType: "square",
          assetsFolderName: "IOS/Magnus",
          imagesType: "multiple",
          title: "Magnus Poker AI (2024)",
          subtitle: "Range Construction Trainer",
          headerImage: "logo.jpg",
          images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
          text: `Magnus will help you build and refine a robust hand reading and decision making mental framework. It will help you go 
          beyond the low hanging fruits to reach the next-level of your development by helping you improve at the margins.`
        },
        {
          link:
            "https://apps.apple.com/tt/app/delyte/id1497012566?ign-mpt=uo%3D2",
          seeMoreMetadata: {
            type: SeeMore.list,
            toggledText: "less",
            unToggledText: "more",
            text: [
              "Categories",
              "Baby Items",
              "Personal Care",
              "Home Essentials",
              "OTC Medicine",
              "Eye Care",
              "Snacks",
              "Drinks",
              "Beer & Wine",
              "And More..."
            ]
          },
          headerImageType: "square",
          assetsFolderName: "IOS/Delyte Customer",
          imagesType: "multiple",
          title: "Delyte",
          subtitle: "Your Daily Essentials, Delivered",
          headerImage: "logo.png",
          images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
          text: `Personal and home needs are delivered to you within 10 minutes of ordering on the Delyte app. Our stocked
          vans are located near you ready to deliver your order fast. You can pay through our app, or with cash or card upon delivery.`
        },
        {
          link: "https://apps.apple.com/tt/app/delyte-driver/id1499659320",
          headerImageType: "square",
          assetsFolderName: "IOS/Delyte Driver",
          imagesType: "multiple",
          title: "Delyte",
          subtitle: "Delyte Driver’s App",
          headerImage: "logo.jpg",
          images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
          text: `The Delyte drivers app allows drivers to see and deliver orders requested by Delyte customers.`
        },
        {
          link: "https://apps.apple.com/tt/app/spiel-app/id1449212004",
          headerImageType: "square",
          assetsFolderName: "IOS/Spiel",
          imagesType: "multiple",
          title: "Spiel",
          subtitle: "Q&A for Professionals",
          headerImage: "logo.jpg",
          images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "5.jpg",
            "6.jpg",
            "7.jpg"
          ],
          text: `Do you enjoy sharing your stories as a founder? Join our Q&A app and give video answers to questions directed at the startup community.
          Spiel is an online founder friendly community. We look to facilitate things for founders, as they lead the way to building a better tomorrow.
          `,
          seeMoreMetadata: {
            type: SeeMore.text,
            toggledText: "less",
            unToggledText: "more",
            text: [
              `Not ready to give a Spiel? No problem`,
              `Feel free to ask questions, or watch videos from everyday founders as they answer practical questions, discuss the challenges they face, or provide explanations to questions users have. We ask that you encourage one another by participating in the assessment of the Spiels you watch, as we believe it will build a stronger community. `,
              `Spiel is that place where we can help and learn from one another. Our team is always ready to hear your feedback or suggestions. Email us at info@tryspiel.com`
            ]
          }
        },
        {
          link: "https://apps.apple.com/us/app/mph-club/id1411572568",
          headerImageType: "square",
          assetsFolderName: "IOS/CarSharing",
          imagesType: "multiple",
          title: "Car Sharing",
          subtitle: "Rent nicer cars",
          headerImage: "logo.png",
          images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg"
          ],
          text: `mph club is a premium vehicle rental platform. Vehicle owners can list their cars up for rent, set their own rental rates, and earn extra income.
          Browse through a large variety of pre-approved vehicles in all of Florida. mph club offers a white glove concierge service to assist you with all of your rental needs.
          `,
          seeMoreMetadata: {
            type: SeeMore.text,
            toggledText: "less",
            unToggledText: "more",
            text: [
              `From last-minute itinerary changes to delivery services, mph club goes the extra mile so you don't have to. `,
              `Security and safety is our number 1 priority. All hosts and guests must pass our verification process which includes. `,
              `* Insurance verification check`,
              `* Driving history check `,
              `* Background check`,
              `Owning your dream is not only possible, but it's also profitable. `,
              `List your car. Rent a car. Earn money. Simple.`
            ]
          }
        },
        {
          link: "https://www.youtube.com/watch?v=YxYjxWlELus",
          headerImageType: "square",
          assetsFolderName: "IOS/Daps",
          imagesType: "multiple",
          title: "Daps",
          subtitle: "Buy & Sell with Friends",
          headerImage: "logo.png",
          images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg"
          ],
          text: `We all have something we no longer need or use, and could use the extra cash if we could find a buyer – but without the hassles and risks of websites like Craigslist or a garage sale.
          Browse through a large variety of pre-approved vehicles in all of Florida. mph club offers a white glove concierge service to assist you with all of your rental needs.
          `,
          seeMoreMetadata: {
            type: SeeMore.text,
            toggledText: "less",
            unToggledText: "more",
            text: [
              `This is where Daps comes in`,
              `Daps is a compelling alternative to stranger-based, even scary, online classified sites like Craigslist. This is why we have created this fun & easy way for friends and connections to sell among each other.
               Doesn’t this make more sense than the risks of buying from, or selling to, people you don’t know? And doesn’t it feel good to help a friend or connection who needs what you have?
              `,
              `With Daps, you always know the buyer or seller. They’re your Facebook friends, those in your phone contact book or members you attend Church, Temple or Synagogue with, as well as neighbors – all can use Daps to list items for
               sale, and potential buyers can begin inquiring on them instantly.
              `
            ]
          }
        },
        {
          link: "https://apps.apple.com/us/app/spend-app/id1357740381",
          headerImageType: "square",
          assetsFolderName: "IOS/Spend",
          imagesType: "multiple",
          title: "Spend",
          subtitle: "Multi-Currency Digital Wallet",
          headerImage: "logo.png",
          images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg"
          ],
          text: `The Spend App gives you the ability to create a multi-currency digital wallet connected to your smart phone or web based device.
          We make it easy to securely buy, use, store, and spend your money as well as digital assets including Bitcoin, Ethereum, Litecoin and more.
          `,
          seeMoreMetadata: {
            type: SeeMore.text,
            toggledText: "less",
            unToggledText: "more",
            text: [
              `With the sleek and simple Spend App you can:`,
              `* Securely store your USD, CAD, EUR, and 22 other fiat currencies within your Spend Wallet`,
              `* Securely store Bitcoin, Ethereum, Litecoin and more within your Spend Wallet`,
              `* Sign-up for and link the Spend Visa® card directly to your Spend Wallet for real-time spending anywhere Visa® cards are accepted`,
              `* Convert digital currencies to fiat currencies instantly at point of purchase`,
              `* Send money to friends and family within your Spend Wallet`,
              `* Exchange digital assets and currencies right in your Spend Wallet instantly `,
              `* Access analytics and information on supported cryptocurrencies`,
              `Additional features include:`,
              `- Check balance, transaction history and transaction details for all your accounts in a glance`,
              `- Send USD, CAD, EUR, Bitcoin, Ethereum, Litecoin and more around the world utilizing your Spend Wallet`,
              `- Your Digital Assets and funds are safe with our bank level security `,
              `- Enable Face ID / Touch ID to protect the app`,
              `- Remotely lock your Spend Visa® card if it is lost or stolen`,
              `If you're having issues with the app, or have some feedback, please send us an email at help@spend.com`
            ]
          }
        },
        {
          link: "https://apps.apple.com/us/app/spend-app/id1357740381#?platform=messages",
          headerImageType: "square",
          assetsFolderName: "IOS/Spend iMessage",
          imagesType: "multiple",
          title: "Spend iMessage",
          subtitle: "Send friends money through text message",
          headerImage: "logo.png",
          images: [
            "1.jpg",
            "2.jpg"
          ],
          text: `The Spend App gives you the ability to create a multi-currency digital wallet connected to your smart phone or web based device.
          We make it easy to securely buy, use, store, and spend your money as well as digital assets including Bitcoin, Ethereum, Litecoin and more.
          `,
          seeMoreMetadata: {
            type: SeeMore.text,
            toggledText: "less",
            unToggledText: "more",
            text: [
              `With the sleek and simple Spend App you can:`,
              `* Securely store your USD, CAD, EUR, and 22 other fiat currencies within your Spend Wallet`,
              `* Securely store Bitcoin, Ethereum, Litecoin and more within your Spend Wallet`,
              `* Sign-up for and link the Spend Visa® card directly to your Spend Wallet for real-time spending anywhere Visa® cards are accepted`,
              `* Convert digital currencies to fiat currencies instantly at point of purchase`,
              `* Send money to friends and family within your Spend Wallet`,
              `* Exchange digital assets and currencies right in your Spend Wallet instantly `,
              `* Access analytics and information on supported cryptocurrencies`,
              `Additional features include:`,
              `- Check balance, transaction history and transaction details for all your accounts in a glance`,
              `- Send USD, CAD, EUR, Bitcoin, Ethereum, Litecoin and more around the world utilizing your Spend Wallet`,
              `- Your Digital Assets and funds are safe with our bank level security `,
              `- Enable Face ID / Touch ID to protect the app`,
              `- Remotely lock your Spend Visa® card if it is lost or stolen`,
              `If you're having issues with the app, or have some feedback, please send us an email at help@spend.com`
            ]
          }
        }
      ]
    }
  }
};

export default AppConfig;
export const PagesConfig = {
  android: {
    rootStyles: {
      backgroundColor: "#ededed"
    },
    containerStyles: {
      boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.5)",
      backgroundColor: "white"
    }
  },
  ios: {
    rootStyles: {},
    containerStyles: {}
  },
  web: {
    rootStyles: {},
    containerStyles: {}
  }
};
interface GenericSectionStyles {
  image: CSSProperties;
  list: CSSProperties;
  seeMoreButton: CSSProperties;
  seeMoreText: CSSProperties;
  text: CSSProperties;
}
const androidSectionStyles: GenericSectionStyles = {
  image: {},
  list: {
    paddingLeft: 13,
    textAlign: "left",
    margin: 0,
    listStyle: "none",
    "& li": {
      "& p": {
        "&::before": {
          content: "'-'",
          textIndent: "-1em",
          display: "inline-block"
        }
      }
    }
  },
  seeMoreButton: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "rgb(51, 105, 30)",
    fontWeight: 500,
    alignSelf: "center"
  },
  seeMoreText: {},
  text: { lineHeight: "24px", fontSize: 14, color: "#333" }
};
const iosSectionStyles: GenericSectionStyles = {
  image: { border: "1px #80808038 solid", borderRadius: "10%" },
  list: {
    paddingLeft: 13,
    textAlign: "left",
    margin: 0
  },
  seeMoreButton: {
    fontSize: 11,
    fontFamily: "Roboto",
    color: "blue",
    fontWeight: 500,
    alignSelf: "flex-end"
  },
  seeMoreText: {},
  text: {}
};
const webSectionStyles: GenericSectionStyles = {
  image: { border: "1px #80808038 solid", borderRadius: "2%" },
  list: { paddingLeft: 13, textAlign: "left", margin: 0 },
  seeMoreButton: {
    fontSize: 12,
    fontFamily: "Roboto",
    color: "blue",
    fontWeight: 500,
    alignSelf: "flex-end"
  },
  seeMoreText: {},
  text: {}
};
