const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
const twitter_api = require('./controllers/twit_ctrl')
const insight_api = require('./controllers/insight_ctrl')

// Server Connection
const { SERVER_PORT } = process.env
app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));


// Twitter Endpoints
app.post(`/api/sn_search`, twitter_api.retrieve_user_data);


// IBM Personality Insights Endpoints
const PersonalityInsightsV3 =require('watson-developer-cloud/personality-insights/v3');
const personality_insights = new PersonalityInsightsV3({
    version_date: process.env.PERSONALITY_INSIGHTS_VERSION_DATE,
    url: process.env.PERSONALITY_INSIGHTS_USERNAME,
    iam_apikey: process.env.PERSONALITY_INSIGHTS_PASSWORD
});

let text = `One year ago, I stood before you for the first time in this grand hall. I addressed the threats facing our world, and I presented a vision to achieve a brighter future for all of humanity.
Today, I stand before the United Nations General Assembly to share the extraordinary progress we’ve made. In less than two years, my administration has accomplished more than almost any administration in the history of our country.
America’s — so true. (Laughter.) Didn’t expect that reaction, but that’s okay. (Laughter and applause.) America’s economy is booming like never before. Since my election, we’ve added $10 trillion in wealth. The stock market is at an all-time high in history, and jobless claims are at a 50-year low. African American, Hispanic American, and Asian American unemployment have all achieved their lowest levels ever recorded. We’ve added more than 4 million new jobs, including half a million manufacturing jobs. We have passed the biggest tax cuts and reforms in American history. We’ve started the construction of a major border wall, and we have greatly strengthened border security. We have secured record funding for our military — $700 billion this year, and $716 billion next year. Our military will soon be more powerful than it has ever been before.
In other words, the United States is stronger, safer, and a richer country than it was when I assumed office less than two years ago.
We are standing up for America and for the American people. And we are also standing up for the world. This is great news for our citizens and for peace-loving people everywhere. We believe that when nations respect the rights of their neighbors, and defend the interests of their people, they can better work together to secure the blessings of safety, prosperity, and peace.
Each of us here today is the emissary of a distinct culture, a rich history, and a people bound together by ties of memory, tradition, and the values that make our homelands like nowhere else on Earth. That is why America will always choose independence and cooperation over global governance, control, and domination. I honor the right of every nation in this room to pursue its own customs, beliefs, and traditions. The United States will not tell you how to live or work or worship.
We only ask that you honor our sovereignty in return. From Warsaw to Brussels, to Tokyo to Singapore, it has been my highest honor to represent the United States abroad. I have forged close relationships and friendships and strong partnerships with the leaders of many nations in this room, and our approach has already yielded incredible change. With support from many countries here today, we have engaged with North Korea to replace the specter of conflict with a bold and new push for peace. In June, I traveled to Singapore to meet face to face with North Korea’s leader, Chairman Kim Jong Un. We had highly productive conversations and meetings, and we agreed that it was in both countries’ interest to pursue the denuclearization of the Korean Peninsula. Since that meeting, we have already seen a number of encouraging measures that few could have imagined only a short time ago. The missiles and rockets are no longer flying in every direction. Nuclear testing has stopped. Some military facilities are already being dismantled. Our hostages have been released. And as promised, the remains of our fallen heroes are being returned home to lay at rest in American soil. I would like to thank Chairman Kim for his courage and for the steps he has taken though much work remains to be done. The sanctions will stay in place until denuclearization occurs.
I also want to thank the many member states who helped us reach this moment — a moment that is actually far greater than people would understand; far greater — but for also their support and the critical support that we will all need going forward. A special thanks to President Moon of South Korea, Prime Minister Abe of Japan, and President Xi of China. In the Middle East, our new approach is also yielding great strides and very historic change. Following my trip to Saudi Arabia last year, the Gulf countries opened a new center to target terrorist financing. They are enforcing new sanctions, working with us to identify and track terrorist networks, and taking more responsibility for fighting terrorism and extremism in their own region. The UAE, Saudi Arabia, and Qatar have pledged billions of dollars to aid the people of Syria and Yemen. And they are pursuing multiple avenues to ending Yemen’s horrible, horrific civil war. Ultimately, it is up to the nations of the region to decide what kind of future they want for themselves and their children.
For that reason, the United States is working with the Gulf Cooperation Council, Jordan, and Egypt to establish a regional strategic alliance so that Middle Eastern nations can advance prosperity, stability, and security across their home region. Thanks to the United States military and our partnership with many of your nations, I am pleased to report that the bloodthirsty killers known as ISIS have been driven out from the territory they once held in Iraq and Syria. We will continue to work with friends and allies to deny radical Islamic terrorists any funding, territory or support, or any means of infiltrating our borders. The ongoing tragedy in Syria is heartbreaking. Our shared goals must be the de-escalation of military conflict, along with a political solution that honors the will of the Syrian people. In this vein, we urge the United Nations-led peace process be reinvigorated. But, rest assured, the United States will respond if chemical weapons are deployed by the Assad regime. I commend the people of Jordan and other neighboring countries for hosting refugees from this very brutal civil war. As we see in Jordan, the most compassionate policy is to place refugees as close to their homes as possible to ease their eventual return to be part of the rebuilding process. This approach also stretches finite resources to help far more people, increasing the impact of every dollar spent.`

let params = {
    content: text,
    content_type: 'text/plain',
    raw_scores: true,
    consumption_preferences: true
  };

//   personality_insights.profile(params, function (error, response) {
//     if (error)
//       console.log('Error:', error);
//     else
//       console.log(response.consumption_preferences[0].consumption_preferences);
//   });