import Image from 'next/image'
import Grid from './components/grid';
const inputBox = () => {
  return(
    <div></div>
  );
}

export default async function PokePage() {
  return (
    <div>
      <div className="flex justify-center w-screen h-screen bg-gray-200">
        <div className="flex mt-32 justify-center h-96 w-2/3">
          <Grid/>
        </div>
      </div>
    </div>
  )
}
