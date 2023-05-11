import Products from "./Practice-Set-5/Products"
import UserProfile from "./Practice-Set-5/UserProfile"
import { UserFeed } from "./Practice-Set-5/UserFeed"
import Chats from "./Practice-Set-5/Chats"
import Comments from "./Practice-Set-5/Comments"
import RenderButtons from "./Practice-set-6/RenderButtons"
import Todos from "./Practice-set-6/Todos"
import HabitTracker from "./Practice-set-6/HabitTracker"
import PlayList from "./Practice-set-6/PlayList"


Comments
const App=()=> {
  const PracticeSet5 = () =>{
    return(
      <>
      <Products />
      <UserProfile heading={"User Profile"} height={'200px'} width={"300px"}/>
      <UserFeed />
      <Chats />
      <Comments />
      </>
    )
  }

  const PracticeSet6 = () => {
    return(
      <>
      {/* <RenderButtons /> */}
      {/* <Todos /> */}
      {/* <HabitTracker /> */}
      <PlayList />
      </>
    )
  }
  
  return (
    <>
      {/* <PracticeSet5 /> */}
      <PracticeSet6 />
    </>
  )
}

export default App
