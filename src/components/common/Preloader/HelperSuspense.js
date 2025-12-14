import React from "react"
import Preloader from "./Prelooader"

const HelperSuspense = ({Component}) => {
    return (
    <React.Suspense fallback={<Preloader />}>
    <Component />
  </React.Suspense>
    )
}
export default HelperSuspense