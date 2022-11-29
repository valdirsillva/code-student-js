import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }, [])


  return (
    <h1>OLa mundo</h1>

  )
}
