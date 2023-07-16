import { useRouter } from "next/router"

const CustomParam = () => {
    const router = useRouter();
      return <>
       Hey, this is id: {router?.query?.id}
      </>
}

export default CustomParam