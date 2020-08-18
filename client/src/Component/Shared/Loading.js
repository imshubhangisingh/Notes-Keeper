import React from 'react'
import LoadingSVG from "../../assets/loading.svg"

const Loading = () => {
  return <div className="text-center pt-5">
    <img src={LoadingSVG} alt="Loading..." />
  </div>
}

export default Loading
