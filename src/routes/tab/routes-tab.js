import Chats from "../../screens/Dashboard/Chats/Chats";
import Feed from "../../screens/Dashboard/Feed/Feed";
import Groups from "../../screens/Dashboard/Groups/Groups";
import Profile from "../../screens/Dashboard/Profile/Profile";

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
    name: 'ProfileScreen',
    component: Profile,
  },
  // {
  //   name: 'ChatScreen',
  //   component: Chats,
  // },
]

