import { Oval } from 'react-loader-spinner'

export default function Loading() {
  return (
    <div>
      <Oval
  visible={true}
  height="80"
  width="80"
  color="#F5385D"
  background-color="white"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}
