import { CheckSquare, Edit, PlusSquare, Trash2 } from 'lucide-react'


const App = () => {

  const task = [
    {
      id: 1,
      name: 'Going to school form today to tomorow',
      status: true
    },
    {
      id: 2,
      name: 'Keeping everthing from others',
      status: true
    },
    {
      id: 3,
      name: 'Breaking the regulation from nowhere',
      status: false
    },
    {
      id: 4,
      name: 'Loving nothing to the extremely',
      status: true
    },
    {
      id: 5,
      name: 'Staying where your until your death',
      status: false
    },
    {
      id: 6,
      name: 'Eating Food from now to yesterday',
      status: false
    }
  ]
  return (
    <div className='container bg-white dark:bg-white h-full p-9 pt-2 m-auto'>
      <h2 className="bg-sky-500 text-center rounded-tr-0xl rounded-br-md rounded-tl-md rounded-bl-3xl font-bold text-3xl p-3">To Do App List</h2>

      <div className="container bg-sky-500 p-3.5 max-h-full mt-4 rounded-3xl">
        <div className='flex justify-center mb-4'><span className='flex justify-between gap-1.5'><input type="text" className='border-2 border-gray-300 text-black bg-white outline-none  rounded-md p-2' placeholder='add new task' /> <PlusSquare color='white' size={35} className='mt-1' /></span></div>
        <div className="flex justify-between gap-3">
          <div className="bg-white w-full max-h-full p-3.5 rounded-tr-3xl rounded-br-0 rounded-tl-0 rounded-bl-3xl font-bold">
            <h2 className='text-white text-center bg-sky-500 p-2 rounded-tr-3xl rounded-br-md rounded-tl-md rounded-bl-3xl font-bold mb-2.5'>Task List</h2>
            {
              task.map((items) => (
                items.status === false ?
                  <div className="flex justify-between gap-2 p-2" key={items.id}>
                    <input title='Active Task' type="text" className='border-2 w-full border-gray-300 text-black outline-none  rounded-md p-2' value={items.name} /> <span className='mt-2 flex justify-between gap-1.5 sudo'>
                      <Edit color='green' /> <Trash2 color='red' />  <CheckSquare color='blue' />
                    </span>
                  </div> : ''
              ))
            }

          </div>


          <div className="bg-white w-full max-h-full p-3.5 rounded-tr-3xl rounded-br-0 rounded-tl-0 rounded-bl-3xl font-bold">
            <h2 className='text-white text-center bg-sky-500 p-2 rounded-tr-3xl rounded-br-md rounded-tl-md rounded-bl-3xl font-bold mb-2.5'>Completed Task</h2>

            {
              task.map((items) => (
                items.status === true ?
                  <div className="flex justify-between gap-2 p-2" key={items.id}>
                    <input title='Active Task' type="text" className='border-2 w-full border-gray-300 text-gray-400 outline-none  rounded-md p-2' value={items.name} disabled /> <span className='mt-2 flex justify-between gap-1.5 sudo'>
                      <Trash2 color='red' />
                    </span>
                  </div> : ''
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
