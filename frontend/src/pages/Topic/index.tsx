import { Box } from "@mui/material";
import HeaderProfile from "../../components/HeaderProfile";
import TopicList from "../../components/TopicsList";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../../hook/useAuth";
import { getProfileByUsername } from "../../services";
import {Snackbar, Alert} from "@mui/material";

function TopicPage() {
    const {user} = useAuth();
    const params = useParams();
    const [profile, setProfile] = useState({});
    const [messageError, setMessageError] = useState('');

    useEffect(() => {
        const username = params.username ? params.username : user?.username;
        if (username){
            getProfileByUsername(username)
                .then(result=> {setProfile(result.data);
                })
                .catch(error => {
                    setMessageError(String(error.message))
                })
        }
    }, [])

    const topics = [

        {
            owner: { fullname: "Pedro" },
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dignissimos officiis adipisci provident aut, vero vel mollitia commodi necessitatibus tempore unde dicta deleniti eius, ab excepturi ducimus quas. Minima, consequuntur.",
            comments: 115,
            reposts: 198,
            likes: 3,
            creatAt: "2023-08-01 19:23:00"
        },
        {
            owner: { fullname: "Pedro da Silva" },
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dignissimos officiis adipisci provident aut, vero vel mollitia commodi necessitatibus tempore unde dicta deleniti eius, ab excepturi ducimus quas. Minima, consequuntur.",
            comments: 178,
            reposts: 44,
            likes: 780,
            creatAt: "2023-08-01 19:23:00"
        },
        {
            owner: { fullname: "Pedro de Souza" },
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dignissimos officiis adipisci provident aut, vero vel mollitia commodi necessitatibus tempore unde dicta deleniti eius ab excepturi ducimus quas. Minima, consequuntur.",
            comments: 15648,
            reposts: 78,
            likes: 0,
            creatAt: "2023-08-01 19:23:00"
        },
        {
            owner: { fullname: "João da Silva" },
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dignissimos officiis adipisci provident aut, vero vel mollitia commodi necessitatibus tempore unde dicta deleniti eius, ab excepturi ducimus quas. Minima, consequuntur.",
            comments: 15,
            reposts: 19,
            likes: 38,
            creatAt: "2023-08-01 19:23:00"
        }
    ]

    return (
        <Box id="topic-page" display="flex" flexDirection="column" alignItems="center" gap={3}>
            <HeaderProfile user={profile} />

            <TopicList items={topics} />

            <Snackbar
                open={Boolean(messageError)}
                autoHideDuration = {6000}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}>

                <Alert severity="error" variant="filled" onClose={()=>setMessageError('')}>
                    {messageError}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default TopicPage; 