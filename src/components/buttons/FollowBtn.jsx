import './FollowBtn.css'

function FollowBtn({ title, noBackground=false, click }) {
  return (
    <button onClick={()=>click()} className={`button__follow ${noBackground && 'trans'}`}>{ title }</button>
  )
}

export default FollowBtn