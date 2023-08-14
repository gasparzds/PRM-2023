import { Margin } from "@mui/icons-material";
import { Skeleton, Box } from "@mui/material";

function TopicCardSkeleton(){
    return(
        <div id="topic-card-skeleton">
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                <Skeleton variant="circular" width={40} height={40}/>
                <Skeleton width={150}/>
                <Skeleton width={150}/>
            </Box>
            <Skeleton style={{marginLeft:'3rm', marginRight: '1rm'}}/>
            <Skeleton style={{marginLeft:'3rm', marginRight: '1rm'}}/>
            <Skeleton style={{marginLeft:'3rm', marginRight: '1rm'}}/>

            <Box display="flex" flexDirection="row" gap={1} style={{marginTop: '1rem', marginLeft: '3rem'}}>
            <Skeleton width={60}/>
            <Skeleton width={60}/>
            <Skeleton width={60}/>
            </Box>





        </div>
    )
}

export default TopicCardSkeleton;

