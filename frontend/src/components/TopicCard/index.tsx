import TopicCardBody from "../TopicCardBody";
import TopicCardHeader from "../TopicCardHeader";
import TopicCardAction from "../TopicCardActions";

function TopicCard(){
    return(
        <div id="topic-card">
            <TopicCardHeader/>
            <TopicCardBody/>
            <TopicCardAction/>
        </div>
    )
}
export default TopicCard;