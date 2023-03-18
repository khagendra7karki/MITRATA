import Login from "./Login"

const Home = ({wsObject, setUser}) =>{
    return (<>
      <Login wsObject = { wsObject } setUser = { setUser } />
    </>
    )
}

export default Home