// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ANASIFTIKHAR-07')
    //     .then(response => response.json())
    //     .then(data=> {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className="text-center m-4 text-white bg-gray-600 p-4 text-3xl">
    Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300}  />
    </div>
  )
}

export default Github;


export const githubLoaderInfo = async ()=> {
    const response = await fetch('https://api.github.com/users/ANASIFTIKHAR-07')
    return response.json()
}