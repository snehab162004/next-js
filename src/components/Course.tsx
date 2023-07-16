import { useRouter } from "next/router"

const Course = () => {
    const router = useRouter()
    return <>
    Course id is {router?.query?.course_id}
    </>
}

export default Course