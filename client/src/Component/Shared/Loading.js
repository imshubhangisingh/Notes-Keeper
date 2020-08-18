import React from 'react'
import LoadingSVG from "../../assets/loading.svg"

const Loading = () => {
  return <div className="text-center">
    <img src={LoadingSVG} alt="Loading..." />
  </div>
}

export default Loading
