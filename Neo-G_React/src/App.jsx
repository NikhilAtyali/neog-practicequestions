import Products from "./Practice-Set-5/Products"
import UserProfile from "./Practice-Set-5/UserProfile"
import { UserFeed } from "./Practice-Set-5/UserFeed"
import Chats from "./Practice-Set-5/Chats"
import Comments from "./Practice-Set-5/Comments"
import RenderButtons from "./Practice-set-6/RenderButtons"
import Todos from "./Practice-set-6/Todos"
import HabitTracker from "./Practice-set-6/HabitTracker"
import PlayList from "./Practice-set-6/PlayList"
import Archives from "./Practice-set-6/Archives"
import Projects from "./Practice-set-6/Projects"
import UserProfile6 from "./Practice-set-6/userProfile"
import Video from "./Practice-set-6/Video"
import Follow from "./Practice-set-6/Follow"
import Weather from "./Practice-Set-7/Weather"


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
      {/* <PlayList /> */}
      {/* <Archives /> */}
      {/* <Projects /> */}
      {/* <UserProfile6 /> */}
      {/* <Video /> */}
      <Follow />
      </>
    )
  }
  
  const PracticeSet7 =()=>{
    return(
      <>
      <Weather />
      </>
    )
  }
  return (
    <>
      {/* <PracticeSet5 /> */}
      {/* <PracticeSet6 /> */}
      <PracticeSet7 />
    </>
  )
}

export default App
