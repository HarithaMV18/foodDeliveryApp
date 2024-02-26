import { useEffect, useState } from "react"
const useNetwork=()=>{
let [stats,setStats]=useState(true)
useEffect(()=>{
    window.addEventListener("offline",(e)=>{
        setStats(false)
        })
        window.addEventListener("online",(e)=>{
            setStats(true)
            })
       
},[])

return stats
}
export default useNetwork