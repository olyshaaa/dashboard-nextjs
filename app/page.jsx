"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Homepage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/login")
  }, [])
  return (
    <div>Homepage</div>
  )
}

export default Homepage