import Chats from "../../screens/Dashboard/Chats/Chats";
import Feed from "../../screens/Dashboard/Feed/Feed";
import Groups from "../../screens/Dashboard/Groups/Groups";

export const routesTab = [
  {
    name: 'FeedScreen',
    component: Feed,
  },
  {
    name: 'GroupsScreen',
    component: Groups,
  },
  {
    name: 'ChatScreen',
    component: Chats,
  },
]

