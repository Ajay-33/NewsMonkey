import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT News Desk",
      "title": "Farmers' protest: Who was Shubhkaran Singh? How did he die at Khanauri border? - Hindustan Times",
      "description": "The Haryana police said the farmers attacked security personnel with stones and sticks. | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/farmers-protest-who-was-shubhkaran-singh-how-did-he-die-during-khanauri-protest-101708569236478.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/22/1600x900/Screenshot_2024-02-22_083519_1708571204735_1708571208996.png",
      "publishedAt": "2024-02-22T02:41:54Z",
      "content": "Patiala: Shubhkaran Singh, a 21-year-old farmer from Bhatinda, was killed on Wednesday in clashes between security personnel and protesting farmers at the Khanauri border. 12 police personnel were al… [+3609 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TOI News Desk",
      "title": "Jaahnavi Kandula's death: Family says 'devastated and outraged' as Seattle officer who struck and killed - The Times of India",
      "description": "US & Canada News News: Read about the outrage and devastation caused by the decision of the King County Prosecutor's Office to not file charges against the Seattle police officer who struck and killed Jaahnavi Kandula. Learn why this case raises questions abo…",
      "url": "https://timesofindia.indiatimes.com/nri/us-canada-news/seattle-officer-who-struck-and-killed-jaahnavi-kandula-will-not-face-charges/articleshow/107897146.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-107897177,width-1070,height-580,imgsize-176936,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2024-02-22T02:31:00Z",
      "content": "Jaahnavi Kandula's shocking death in US: Farhan Akhtar expresses grief, says 'Your potential was limitless'"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Byju's Billionaire Founder Gets Court Relief In Fight Against Shareholders - NDTV",
      "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
      "url": "https://www.ndtv.com",
      "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
      "publishedAt": "2024-02-22T01:32:47Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT News Desk",
      "title": "'Anti-Hindu': BJP slams Karnataka government for 10 percent tax on temples - Hindustan Times",
      "description": "Karnataka BJP president Vijayendra Yediyurappa said the Congress government wanted to fill its depleted coffers by adopting anti-Hindu policies. | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/antihindu-bjp-slams-karnataka-government-for-10-percent-tax-on-temples-101708564447593.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/22/1600x900/ANI-20231115482-0_1700451774786_1708564805666.jpg",
      "publishedAt": "2024-02-22T01:22:53Z",
      "content": "Bengaluru: The Bharatiya Janata Party called the Congress government in Karnataka \"anti-Hindu\" after the latter passed the 'Karnataka Hindu Religious Institutions and Charitable Endowments Bill 2024'… [+2263 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Samir Jain",
      "title": "Horoscope Today, February 22, 2024: Read your daily astrological predictions - The Times of India",
      "description": "Horoscope(Old) News: Read daily horoscope predictions for February 22, 2024: Know all about the astrological events and influences that will be affecting each of the 12 zo",
      "url": "https://timesofindia.indiatimes.com/astrology/horoscope/horoscope-today-february-22-2024-read-your-daily-astrological-predictions/articleshow/107882329.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-107882249,width-1070,height-580,imgsize-81848,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2024-02-21T23:30:00Z",
      "content": "Read Your Weekly Horoscope: February 18 to February 24, 2024"
    },
    {
      "source": {
        "id": null,
        "name": "News9live.com"
      },
      "author": "Aditya Madanapalle",
      "title": "Jumbo Jet sized asteroid 2024 DJ1 to zip past Earth on 22 Feb, 2024 - News9 LIVE",
      "description": "A cluster of four asteroids are scheduled to make a close approach to the Earth on 22 February, 2024.",
      "url": "https://www.news9live.com/science/jumbo-jet-sized-asteroid-2024-dj1-to-zip-past-earth-on-22-feb-2024-2445411",
      "urlToImage": "https://images.news9live.com/wp-content/uploads/2024/02/Asteroid-Close-Approach-Alert-1.jpg",
      "publishedAt": "2024-02-21T22:44:14Z",
      "content": "Most of the asteroids in the Solar System occupy the main belt between Mars and Jupiter. However, there are populations of asteroids distributed throughout the Solar System. Among Earth’s closest nei… [+2872 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "India TV News"
      },
      "author": "Written by Om Gupta",
      "title": "Realme 12+ 5G India launch set for March 6: Here's everything you need to know - India TV News",
      "description": "The Realme 12+ 5G is set to launch in India on March 6 at 12PM IST. Realme has announced that their new smartphone will be the first in India's price range to feature a 50-megapixel Sony LYT-600 sensor with optical image stabilization (OIS) on the rear camera.",
      "url": "https://www.indiatvnews.com/technology/news/realme-12-5g-india-launch-set-for-march-6-here-s-everything-you-need-to-know-2024-02-21-917966",
      "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/02/realme-12-5g-1708521860.jpg",
      "publishedAt": "2024-02-21T13:30:20Z",
      "content": "Realme is all set to launch its new smartphone in India. The Realme 12+ 5G will arrive in India on March 6 at 12PM IST. The company has also revealed that its upcoming smartphone will be the first sm… [+1854 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "WHO: Measles cases rose 79% globally last year | Latest News | WION - WION",
      "description": "The World Health Organization (WHO) voiced alarm on Tuesday (Feb 20), about the measles cases that have been rising so quickly. Last year, there were over 30...",
      "url": "https://www.youtube.com/watch?v=Qb8eOyfGKEQ",
      "urlToImage": "https://i.ytimg.com/vi/Qb8eOyfGKEQ/maxresdefault.jpg",
      "publishedAt": "2024-02-21T13:02:13Z",
      "content": null
    }
  ]

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}

        </div>
      </div>
    )
  }
}

export default News
