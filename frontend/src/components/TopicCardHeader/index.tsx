import { Avatar, Typography } from "@mui/material";
import './style.css'

function TopicCardHeader(){
    return(
        <div id= "TOPIC-CARD-HEADER">
            <Avatar alt="FULANO DE TAL"/>

            <div className="card-header-text">
            <Typography variant="h6">
                FULANO DE TAL
            </Typography>
            <Typography variant="caption">
            Criado a 3 horas
            </Typography>
            </div>




        </div>
    )
}
export default TopicCardHeader;