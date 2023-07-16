import Link from "next/link"

const Course = () => {
    return <>
       Hey this is course home Page
       <Link href={'/course/1'}>
        Course 1
       </Link>

       <Link href={'/course/2'}>
        Course 2
       </Link>

       <Link href={'/course/3'}>
        Course 3
       </Link>

       <Link href={'/course/4'}>
        Course 4
       </Link>
    </>
}

export default Course