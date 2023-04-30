 

const LoadingIcon = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      margin: "auto",
      background: "rgba(255, 255, 255, 0)",
      display: "block",
      shapeRendering: "auto",
    }}
    width="32px"
    height="32px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      fill="none"
      stroke="#1d9bf0"
      strokeWidth={10}
      r={35}
      strokeDasharray="164.93361431346415 56.97787143782138"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="0.9174311926605504s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </circle>
  </svg>
  )
}
 export default LoadingIcon