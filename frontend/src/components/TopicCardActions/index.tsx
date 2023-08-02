import { ChatBubble } from "@mui/icons-material";
import {Button} from "@mui/material";
import { RepeatOn } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import './style.css'


function TopicCardAction(){
    return(
        <div id="TOPIC-CARD-ACTION">
            <Button variant="text"size="small" startIcon={<ChatBubble />}>3</Button>
            <Button variant="text"size="small" startIcon={<RepeatOn />}>23</Button>
            <Button variant="text"size="small" startIcon={<Favorite />}>33</Button>
        </div>
    )

}
export default TopicCardAction