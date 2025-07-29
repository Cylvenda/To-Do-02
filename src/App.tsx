import { CheckSquare, Edit, PlusSquare, Trash2 } from 'lucide-react'


const App = () => {
  return (
    <div className='container bg-white dark:bg-white h-full p-9 pt-2 m-auto'>
      <h2 className="bg-sky-500 text-center rounded-tr-0xl rounded-br-md rounded-tl-md rounded-bl-3xl font-bold text-3xl p-3">To Do App List</h2>

      <div className="container bg-sky-500 p-3.5 h-96 mt-4 rounded-3xl">
        <div className='flex justify-center mb-4'><span className='flex justify-between gap-1.5'><input type="text" className='border-2 border-gray-300 text-black bg-white outline-none  rounded-md p-2' placeholder='add new task' /> <PlusSquare color='black' size={35} className='mt-1' /></span></div>
        <div className="flex justify-between gap-3">
          <div className="bg-white w-full max-h-full p-3.5 rounded-tr-3xl rounded-br-0 rounded-tl-0 rounded-bl-3xl font-bold">
            <h2 className='text-white text-center bg-sky-500 p-2 rounded-tr-3xl rounded-br-md rounded-tl-md rounded-bl-3xl font-bold mb-2.5'>Task List</h2>
            <div className="flex justify-between gap-2 p-2"><input title='Active Task' type="text" className='border-2 w-full border-gray-300 text-black outline-none  rounded-md p-2' value='This is My First Task' /> <span className='mt-2 flex justify-between gap-1.5 sudo'><Edit color='yellow' /> <Trash2 color='red' />  <CheckSquare color='blue' /></span> </div>
          </div>


          <div className="bg-white w-full max-h-full p-3.5 rounded-tr-3xl rounded-br-0 rounded-tl-0 rounded-bl-3xl font-bold">
            <h2 className='text-white text-center bg-sky-500 p-2 rounded-tr-3xl rounded-br-md rounded-tl-md rounded-bl-3xl font-bold mb-2.5'>Completed Task</h2>
            <div className="flex justify-between gap-2 p-2"><input title='Completede Task' type="text" className='border-2 w-full border-gray-300 text-black outline-none  rounded-md p-2' value='This is My First Task to be completed' disabled /> <span className='mt-2 flex justify-between gap-1.5 sudo'><Trash2 color='red' /> </span> </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
