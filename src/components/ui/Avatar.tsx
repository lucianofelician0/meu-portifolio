interface AvatarProps{
  img:string
}

export const Avatar = ({img}:AvatarProps) => {
  return (
    <img className="border-4 rounded-full border-red-950 w-35 h-35 "  src={img} alt="Avatar" />
  )
}
