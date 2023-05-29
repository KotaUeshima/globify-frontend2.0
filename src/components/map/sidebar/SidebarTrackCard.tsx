import { Dispatch } from 'react'

interface SidebarTrackCardProps {
  userSong: Song
  selectedUserSong: Song | null
  setSelectedUserSong: Dispatch<Song>
}

function SidebarTrackCard({
  userSong,
  selectedUserSong,
  setSelectedUserSong,
}: SidebarTrackCardProps) {
  return (
    <div
      className={`${
        selectedUserSong && selectedUserSong.id === userSong.id
          ? 'bg-gray-700'
          : 'bg-transparent hover:bg-gray-500'
      } mt-2 p-1 flex flex-row globalRounded  globalTransition`}
      onClick={() => {
        setSelectedUserSong(userSong)
      }}
    >
      <img
        src={userSong.image_url}
        alt='album-cover'
        className='w-20 globalRounded'
      />
      <div className='ml-4 flex flex-col mr-4'>
        <h2 className='text-base font-thin'>{userSong.title}</h2>
        <p className='text-sm text-gray-400'>by {userSong.artist}</p>
      </div>
    </div>
  )
}

export default SidebarTrackCard
