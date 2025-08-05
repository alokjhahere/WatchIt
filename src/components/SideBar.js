

const SideBar = () => {
  return (
    <div className="p-4 w-1/8 shadow-lg">
      <ul className="m-2">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-medium">You</h1>
      <ul className="m-2">
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
        <li>your Courses</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
    </div>
  )
}

export default SideBar
