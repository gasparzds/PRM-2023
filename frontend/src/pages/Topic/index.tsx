import { Box } from "@mui/material"
import HeaderProfile from "../../components/HeaderProfile"
import TopicList from "../../components/TopicList"

function TopicPage(){
    const profile = {
        fullname: 'Paulo Roberto Gaspar',
        username:'paulogaspar',
        description: "Sou FODA, tudo o que faço é FODA!",
        createdAt:"2022-12-22",
    }

    const topics = [
        {
            owner: {fullname: 'Pedro da Silva'},
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quae quis magnam necessitatibus nobis commodi consequuntur eum, voluptate modi animi rerum qui amet doloribus voluptates incidunt! Nostrum perferendis quibusdam dolorem.',
            comments:1,
            reposts:1,
            likes:350,
            createdAt: '2023-08-01 19:23:00'
        }, {
            owner: {fullname: 'João Pedro'},
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quae quis magnam necessitatibus nobis commodi consequuntur eum, voluptate modi animi rerum qui amet doloribus voluptates incidunt! Nostrum perferendis quibusdam dolorem.',
            comments:1,
            reposts:1,
            likes:15,
            createdAt: '2023-08-01 19:23:00'
        },{
            owner: {fullname: 'Vitinho'},
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quae quis magnam necessitatibus nobis commodi consequuntur eum, voluptate modi animi rerum qui amet doloribus voluptates incidunt! Nostrum perferendis quibusdam dolorem.',
            comments:1,
            reposts:1,
            likes:150,
            createdAt: '2020-08-01 19:23:00'
        },{
            owner: {fullname: 'Neymar'},
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quae quis magnam necessitatibus nobis commodi consequuntur eum, voluptate modi animi rerum qui amet doloribus voluptates incidunt! Nostrum perferendis quibusdam dolorem.',
            comments:1,
            reposts:1,
            likes:3000,
            createdAt: '2022-08-01 19:23:00'
        }
    ]

    return(
        <Box id="topic-page" display="flex" flexDirection="column" alignItems="center" gap={3}>
            <HeaderProfile user={profile} />

            <TopicList items={topics}/>
        

        </Box>
    )

}

export default TopicPage