
const Type = ({
  name
}: {
  name: string
}) => {
  return (
    <div className={`px-4 py-1 rounded-lg bg-${name.toLowerCase()}`}>
      { name }
    </div>
  )
}

export default Type
