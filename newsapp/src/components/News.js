import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  aticles = [
    {
        "source": {
            "id": null,
            "name": "CNET"
        },
        "author": null,
        "title": "Discover Amazing Anti-Prime Day Deals at Target, Walmart and Other Stores - CNET",
        "description": "If you'd rather not take advantage of the last few hours of Amazon's October Prime Day, here are some other deals to consider.",
        "url": "https://www.cnet.com/deals/discover-amazing-anti-prime-day-deals-target-walmart-other-stores/",
        "urlToImage": "https://www.cnet.com/a/img/resize/e792f8c5867905d414f3b4562f7ad38e8493160d/hub/2023/10/09/bbe3382e-660f-4607-a7b2-97bd5c108b0d/cnet-prime-big-deal-day-38.png?auto=webp&fit=crop&height=675&width=1200",
        "publishedAt": "2023-10-12T00:55:00Z",
        "content": "Amazon's October Prime Day sale is coming to an end, but other retailers are still going strong with their deals and discounts. This is good news if you prefer not to invest in Prime or if you have m… [+14687 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Patriots.com"
        },
        "author": null,
        "title": "Patriots Offensive Coordinator Bill O'Brien Lays Out Plan to Improve the Offense - Patriots.com",
        "description": "The Patriots offensive coordinator spoke to reporters on Tuesday where, among other things, O'Brien confirmed that QB Mac Jones will start vs. Raiders.",
        "url": "https://www.patriots.com/news/patriots-offensive-coordinator-bill-o-brien-lays-out-plan-to-improve-the-offense",
        "urlToImage": "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/patriots/sp1jrachwecwg1rcvzub",
        "publishedAt": "2023-10-12T00:42:59Z",
        "content": "O'Brien also balked at the notion that Jones would benefit from taking a week off for a mental break, saying, \"there's no time for mental breaks.\"\r\nBefore speaking to the media on Tuesday, O'Brien sa… [+1866 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "",
        "title": "Diamondbacks vs. Dodgers live stream: TV channel, prediction, pick, watch NLDS online, time, odds - CBS Sports",
        "description": "The NLDS shifts to Chase Field in Arizona on Wednesday",
        "url": "https://www.cbssports.com/mlb/news/diamondbacks-vs-dodgers-live-stream-tv-channel-prediction-pick-watch-nlds-online-time-odds/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/10/10/ca64b6cb-9f1a-46c5-b439-5c3ace7517ea/thumbnail/1200x675/455088dc73cb4c858651d5c134458c02/freddie-freeman-getty-1.png",
        "publishedAt": "2023-10-12T00:33:00Z",
        "content": "The Arizona Diamondbacks took both games from the Los Angeles Dodgers in Los Angeles. Now, the series will resume in Arizona with the D-backs a victory away from advancing to the National League Cham… [+1309 chars]"
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "William Harwood",
        "title": "NASA's recovered Bennu asteroid samples show evidence of carbon, water - Yahoo News",
        "description": "Water-bearing clays found in rocks from the asteroid Bennu support theories about how water may have made it to Earth in the distant past.",
        "url": "https://www.cbsnews.com/news/nasa-bennu-asteroid-samples-reveal-carbon-water-scientists-say/?ftag=YHF4eb9d17",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/FY.oicnDFbOyTWqzc3mz6w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/cbs_news_897/901f10970d78ae49b6d6927c95bbdfe1",
        "publishedAt": "2023-10-12T00:02:00Z",
        "content": "Rocks and soil collected from the asteroid Bennu and brought back to Earth last month by NASA's OSIRIS-REx probe are rich in carbon and contain water-bearing clay minerals that date back to the birth… [+5873 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "KOAT New Mexico"
        },
        "author": "Vince Rodriguez",
        "title": "\"Ring of Fire\" Eclipse: Best places to see it in New Mexico - KOAT New Mexico",
        "description": "Many parts of New Mexico and the country will have all eyes on the skies during this weekend's \"ring of fire\" annular eclipse. Here's where you can catch the eclipse in New Mexico",
        "url": "https://www.koat.com/article/new-mexico-ring-of-fire-eclipse-viewing-locations/45493860",
        "urlToImage": "https://kubrick.htvapps.com/htv-prod/ibmig/cms/image/koat/13497238-13497238.jpg?crop=1.00xw:0.752xh;0,0&resize=1200:*",
        "publishedAt": "2023-10-11T22:55:00Z",
        "content": "ALBUQUERQUE, N.M. —Many parts of New Mexico and the country will have all eyes on the skies during this weekend's \"ring of fire\" annular eclipse.\r\nThe eclipse is happening during the Albuquerque Inte… [+4826 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Florida Today"
        },
        "author": "Jamie Groh",
        "title": "NASA, SpaceX reschedule Falcon Heavy launch for Friday morning because of bad weather - Florida Today",
        "description": "NASA and SpaceX target Friday morning for Falcon Heavy Psyche launch after standing down due to unfavorable weather conditions on Thursday.",
        "url": "https://www.floridatoday.com/story/tech/science/space/2023/10/11/spacex-falcon-heavy-rocket-sonic-boom-launch-kennedy-space-center-florida-nasa-psyche/71110678007/",
        "urlToImage": "https://www.floridatoday.com/gcdn/authoring/authoring-images/2023/10/11/PBRE/71147204007-nasa-space-x-psyche-falcon-heavy-on-pad-6.jpg?crop=1919,1081,x0,y99&width=1919&height=1081&format=pjpg&auto=webp",
        "publishedAt": "2023-10-11T22:52:30Z",
        "content": "Update: (Wednesday night) NASA and SpaceX are standing down from the Oct. 12 launch of the agencys Psyche mission due to unfavorable weather conditions. NASA and SpaceX are now targeting launch at 10… [+4615 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Outdoor Life"
        },
        "author": "Dac Collins",
        "title": "Watch: Is This the Best Bigfoot Sighting Yet or Just a Bowhunter in a Ghillie Suit? - Outdoor Life",
        "description": "A woman in Colorado said that \"seeing was believing\" after she and her husband spotted the big, hairy creature from inside a tourist train.",
        "url": "https://www.outdoorlife.com/conservation/colorado-bigfoot-train-video/",
        "urlToImage": "https://www.outdoorlife.com/uploads/2023/10/11/colorado_bigfoot_train_video_1.jpg?auto=webp",
        "publishedAt": "2023-10-11T22:39:49Z",
        "content": "Bigfoot believers are fired up about a video, shared by OutThere Colorado on Oct. 10, that was recorded from inside a tourist train in southwestern Colorado. The footage shows a large, hairy biped wa… [+3363 chars]"
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "Christopher Brito",
        "title": "\"Luminescent\" photo of horseshoe crab wins Wildlife Photographer of the Year prize - CBS News",
        "description": "A photo of golden horseshoe crab –one of the world's most ancient animals – earned a marine photographer the grand title in the Wildlife Photographer of the Year contest.",
        "url": "https://www.cbsnews.com/news/wildlife-photographer-of-the-year-2023-horseshoe-crab-laurent-ballesta/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/10/11/9ddf6207-696c-49ec-a294-db3fadc03002/thumbnail/1200x630/5b0ded067db187635a52ccaab359d577/laurent-ballesta-1-wildlife-photographer-of-the-year.jpg?v=69c515fc2d8624858c50a235751c5acf",
        "publishedAt": "2023-10-11T22:17:08Z",
        "content": "A photo of a golden horseshoe crab —one of the world's most ancient and highly endangered animals— earned a marine photographer the grand title in the prestigious Wildlife Photographer of the Year co… [+3154 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Cut"
        },
        "author": "Danielle Cohen",
        "title": "Jeremy Allen White Must Do Alcohol Testing to See His Kids - The Cut",
        "description": "According to court documents reviewed by several news outlets, White’s custody arrangement with his estranged wife Addison Timlin  requires him to be tested for alcohol anytime he’s with his daughters.",
        "url": "http://www.thecut.com/2023/10/jeremy-allen-white-alcohol-testing-custody-agreement.html",
        "urlToImage": "https://pyxis.nymag.com/v1/imgs/f7b/254/42500fc647a1e0a79b2a24067e182fa4e1-GettyImages-1456255342.1x.rsocial.w1200.jpg",
        "publishedAt": "2023-10-11T22:09:06Z",
        "content": "Six months after Addison Timlin filed for divorce from her husband of three years, The Bear star Jeremy Allen White, the former couple has reportedly arrived at a custody agreement for their two chil… [+1373 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": "Manya Saini, Niket Nishant, Chibuike Oguh",
        "title": "Birkenstock stumbles in underwhelming US market debut - Reuters",
        "description": "Birkenstock's <a href=\"https://www.reuters.com/markets/companies/BIRK.N\" target=\"_blank\">(BIRK.N)</a> stock ended more than 12% below its initial public offering (IPO) price on Wednesday in an underwhelming Wall Street debut that signaled investors remain cau…",
        "url": "https://www.reuters.com/markets/deals/birkenstock-set-new-york-listing-after-15-bln-ipo-2023-10-11/",
        "urlToImage": "https://www.reuters.com/resizer/UJ8bM1kaOMw-Gbe2Y8Fn2L8Lgvs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3S5VI2ENQVLBJPD67DBRPWAMSA.jpg",
        "publishedAt": "2023-10-11T21:30:00Z",
        "content": "Oct 11 (Reuters) - Birkenstock's (BIRK.N) stock ended more than 12% below its initial public offering (IPO) price on Wednesday in an underwhelming Wall Street debut that signaled investors remain cau… [+4217 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "PEOPLE"
        },
        "author": "https://www.facebook.com/peoplemag",
        "title": "A Black Church Deacon Died After Being Tasered — His Arresting Officer Was Just Fired - PEOPLE",
        "description": "Johnny Hollman, Sr., 62, died in August. His arresting officer was fired this week.",
        "url": "https://people.com/black-church-deacon-died-being-tasered-arresting-officer-fired-8350917",
        "urlToImage": "https://people.com/thmb/q9Ru-lDzN9li1X121X-F6-CrU1c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(603x0:605x2)/johnny-hollman-sr-death-tout-101123-3577c23d8c3347fa8d10b3d5f47a6118.jpg",
        "publishedAt": "2023-10-11T21:19:24Z",
        "content": "Johnny Hollman, Sr. was reportedly driving home from Bible study with fried chicken and an apple pie to share with his wife for dinner when he took a sharp turn. His white Chevrolet Silverado careene… [+4358 chars]"
    },
    {
        "source": {
            "id": "abc-news",
            "name": "ABC News"
        },
        "author": "Alexandra Hutzler",
        "title": "Biden says he's doing 'a lot' to free American hostages, hasn't given up hope - ABC News",
        "description": "But he provided no details on efforts to rescue U.S. citizens held by Hamas.",
        "url": "https://abcnews.go.com/Politics/specific-proof-life-american-hostages-held-hamas-white/story?id=103896105",
        "urlToImage": "https://i.abcnewsfe.com/a/fa9e39c7-e0b2-4dec-bfb7-587e845f1f37/biden-israel-jewish-moe-abc-231011-021_1697057266781_hpMain_16x9.jpg?w=992",
        "publishedAt": "2023-10-11T21:11:15Z",
        "content": "President Joe Biden on Wednesday said he was doing \"a lot\" to free hostages held by Hamas, including Americans, and that he hasn't given up hope, but he revealed no details.\r\n\"We're working on every … [+3719 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "PBS"
        },
        "author": null,
        "title": "Trump’s fraudulent financial statements were key to getting loans, former bank official says - PBS NewsHour",
        "description": "The former president obtained hundreds of millions of dollars in loans using financial statements that a court has since deemed fraudulent, a retired bank official testified at the New York civil fraud trial.",
        "url": "https://www.pbs.org/newshour/politics/donald-trumps-fraudulent-financial-statements-were-key-to-getting-loans-former-bank-official-says",
        "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2023/04/FullEpisode-1-1024x683.jpg",
        "publishedAt": "2023-10-11T20:57:15Z",
        "content": "NEW YORK (AP) Donald Trump obtained hundreds of millions of dollars in loans using financial statements that a court has since deemed fraudulent, a retired bank official testified Wednesday at the fo… [+4117 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": null,
        "title": "The scene as the Israel-Hamas war continues - The Washington Post",
        "description": "Israel is massing troops near the Gaza Strip and calling up reservists ahead of an offensive against Hamas militants in the densely populated Palestinian territory.",
        "url": "https://www.washingtonpost.com/world/interactive/2023/photos-israel-hamas-war/",
        "urlToImage": "https://img.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HYRMVE6XVVBCJ4QHKA5JSU7Z2U.jpg&w=1200",
        "publishedAt": "2023-10-11T20:45:13Z",
        "content": "Oct. 11 | Kibbutz Be'eri, Israel\r\nMembers of the Israeli armys Home Front Command inspect Kibbutz Be'eri, the scene of some of the deadliest fighting in the Hamas incursion that began Saturday.\r\nBaz … [+29 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Matt Egan",
        "title": "Harvard student groups issued an anti-Israel statement. CEOs want them blacklisted - CNN",
        "description": "Billionaire hedge fund CEO Bill Ackman and several other business leaders are demanding Harvard University release the names of students whose organizations signed on to a letter blaming solely Israel for the deadly attacks by Hamas.",
        "url": "https://www.cnn.com/2023/10/11/business/harvard-israel-hamas-ceos-students/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230713114520-harvard-campus-0706.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-10-11T20:16:00Z",
        "content": "Billionaire hedge fund CEO Bill Ackman and several other business leaders are demanding Harvard University release the names of students whose organizations signed on to a letter blaming solely Israe… [+8098 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Variety"
        },
        "author": "Michael Schneider",
        "title": "How ‘Frasier’ Was Finally Revived After Two Decades — And Why It’s With a Mostly New Cast - Variety",
        "description": "'Frasier' director Jimmy Burrows and showrunners Joe Cristalli and Chris Harris on the path toward bringing Kelsey Grammer's character back to life.",
        "url": "https://variety.com/2023/tv/news/frasier-kelsey-grammer-reboot-james-burrows-paramount-plus-1235751310/",
        "urlToImage": "https://variety.com/wp-content/uploads/2023/10/Frasier_Enviro_Freddy_0032_RT-e1696982513974.jpg?w=1000&h=563&crop=1",
        "publishedAt": "2023-10-11T20:05:42Z",
        "content": "Joe Cristalli and Chris Harris, the showrunners behind Paramount+’s “Frasier” revival, have been bracing for how audiences react to the return of the beloved sitcom character. But they weren’t expect… [+9670 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "Brent D. Griffiths",
        "title": "New York Republicans are finally ready to expel George Santos - Business Insider",
        "description": "All six of Santos' fellow freshmen New York Republicans now support an effort to kick him out of Congress.",
        "url": "https://www.businessinsider.com/new-york-republicans-are-finally-ready-to-expel-george-santos-2023-10",
        "urlToImage": "https://i.insider.com/6526fbd655f52b01b35cf6a5?width=1200&format=jpeg",
        "publishedAt": "2023-10-11T20:04:00Z",
        "content": "Rep. George Santos' fellow New York Republicans have had enough. \r\nAll six of Santos' fellow New York freshmen GOP lawmakers said on Wednesday that would support an effort to expel Santos from the Ho… [+3089 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Conversation Africa"
        },
        "author": "Javed Ali",
        "title": "How did Israeli intelligence miss Hamas' preparations to attack? A US counterterrorism expert explains how Israeli intelligence works - The Conversation",
        "description": "Israel’s intelligence capacities are considered some of the best in the world – but unlike the US, it does not have a central organization coordinating all intelligence.",
        "url": "https://theconversation.com/how-did-israeli-intelligence-miss-hamas-preparations-to-attack-a-us-counterterrorism-expert-explains-how-israeli-intelligence-works-215410",
        "urlToImage": "https://images.theconversation.com/files/553317/original/file-20231011-21-3o0xk2.jpg?ixlib=rb-1.1.0&rect=43%2C301%2C4800%2C2400&q=45&auto=format&w=1356&h=668&fit=crop",
        "publishedAt": "2023-10-11T20:01:27Z",
        "content": "Israel is widely recognized as having highly sophisticated intelligence capabilities, both in terms of its ability to collect information about potential threats within its own country and outside of… [+6209 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "The Iron Claw - Official Trailer (2023) Zac Efron, Jeremy Allen White - IGN",
        "description": "Check out the trailer for The Iron Claw, an upcoming movie starring Zac Efron, Jeremy Allen White, Harris Dickinson, Stanley Simons, Maura Tierney, with Holt...",
        "url": "https://www.youtube.com/watch?v=eQZQ4saansc",
        "urlToImage": "https://i.ytimg.com/vi/eQZQ4saansc/maxresdefault.jpg",
        "publishedAt": "2023-10-11T20:00:10Z",
        "content": null
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "Natalie Brand, Sara Moniuszko",
        "title": "RSV antibody shot for babies hits obstacles in rollout: \"As pediatricians, we're angry\" - CBS News",
        "description": "RSV season​ is ramping up, but some doctors are facing challenges getting ahold of a shot that can help protect young children.",
        "url": "https://www.cbsnews.com/news/rsv-antibody-shot-babies-beyfortus-supply-cost/",
        "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/18/6570d6f2-85e6-426f-8188-1045315b0130/thumbnail/1200x630/cd7019b98bd43ce47e99a124fe2b9422/rsv-drug-approved-10pkg-frame-1621.jpg?v=69c515fc2d8624858c50a235751c5acf",
        "publishedAt": "2023-10-11T19:23:24Z",
        "content": "RSV season is ramping up, and doctors are hoping a new shot to prevent the virus in young children will ease the caseload this year. However, some pediatricians are facing challenges getting supply. … [+3312 chars]"
    }
]
  constructor(){
    super()
    this.state= {
      articles: this.aticles,
      loading: false 

    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2> Bharat - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imgUrl={element.urlToImage}  newsUrl= {element.url}/>
        </div>
        })}
          
          
        </div>

      </div>
    )
  }
}

export default News