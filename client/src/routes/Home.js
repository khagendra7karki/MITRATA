import Login from "./Login"

const Home = ({wsObject, setUser, socket}) =>{
    return (<>
      <Login wsObject = { wsObject } setUser = { setUser } socket={socket}/>
    </>
    )
}

export default Home