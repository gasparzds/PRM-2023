import TopicCardBody from "../TopicCardBody";
import TopicCardHeader from "../TopicCardHeader";
import TopicCardAction from "../TopicCardActions";

type TopicCardProps ={
    topic: any
}

function TopicCard({topic}:TopicCardProps){
    return(
        <div id="topic-card">
            <TopicCardHeader/>
            <TopicCardBody/>
            <TopicCardAction/>
        </div>
    )
}
export default TopicCard;