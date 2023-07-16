import Course from "@/components/Course"
import dynamic from "next/dynamic"


// const Course = dynamic(() => import("@/components/Course"), {ssr: false})

const CourseId = () => {
   return <>
   <Course />
   </>
}

export default CourseId