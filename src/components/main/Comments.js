import React from 'react';
import { Container } from 'react-bootstrap';
import '../../css/comments.css';
import Jumbotron from 'react-bootstrap/Jumbotron'


function Comments () {
    
return(
<div className="comment-wrap">
<h2 className="comment-header" >Testimonials</h2>
<Jumbotron fluid>
  <Container>
    <h2 className="header-comment">Marie Claire</h2>
    <p className="p-testemonial">
    "Katya always struck me as someone who is very knowledgeable about nutrition but she is even more passionate about sharing this with others. She listens to me and encourages me all the way! she always had my health as her first priority and has also taught me how to prioritize this first in my food choices. As a result I've acquired better education and a better mindset with food. I learned that I don't need to skip meals or ristrict food to stay in calorie deficit for weight loss. I actually eat much more than I used to now and I still see good results. I'm also not scared to experiment with food because Katya's flexible approach to nutrition has taught me how to satisfy my cravings or appetite in the healthiest way.
    Milos is a great trainer and a great person. He is always flexible when it comes to my crazy schedule and always made sure to fit me in. In every session he pushes me further towards my goal and creates the perfect balance between easy and hard exercises just as I like it. His right approach kept me motivated without making me dread going to the gym. I admire his dedication to help people become better versions of themselves through his work. 
    I've managed to lose a few kilos with nutribalance, but more importantly I've lost a narrow perspective of what a healthy lifestyle should be like. I owe katya and milos a big thank you for their excellent support, education and encouragement. You are both so great at what you do!" 
    </p>
  </Container>
</Jumbotron>

<Jumbotron fluid>
  <Container>
    <h2 className="header-comment">Saviour Agius</h2>
    <p className="p-testemonial">
      "I was introduced to NutriBalance through a friend when I was seeking a healthier nutrition and lifestyle in general. NutriBalance have provided valuable insight into what my meals should constitute and why. They have supported this transitional period by offering individual attention whilst monitoring my food intake to provide adequate feedback and/or suggest healthier alternatives. The same can be said with regards to physical activity where training sessions were tailor-made to cater for my needs. Motivation played a huge role in completing difficult sessions - which were always dynamic and fun.
      I would definitely recommend NutriBalance to anyone seeking a healthier lifestyle."
    </p>
  </Container>
</Jumbotron>
</div>)
}

export default Comments;