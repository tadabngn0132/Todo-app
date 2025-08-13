import './App.css'
import { Button, Form, Input } from 'antd'
import { useState } from 'react'

interface FormValues {
  taskName: string
}

function App() {
  const [taskList, setTaskList] = useState<string[]>([])

  const handleSubmit = (values: FormValues) => {
    console.log('Form values:', values.taskName);
    setTaskList(prev => [...prev, values.taskName])
  }
  const listItems = taskList.map((task, index) => 
    <li key={index}>{task}</li>
  );

  return (
    <>
      <div className='flex flex-col gap-10'>
        <h1 className='flex self-baseline'>To do app</h1>
        <div className='flex gap-10'>
          {/* form */}
          <Form
            className='flex flex-col w-full'
            onFinish={handleSubmit}
            >
            <Form.Item
              name='taskName'
              rules={[
                {
                  required: true,
                  message: "Title cannot be empty"
                },
                {
                  min: 10,
                  message: "Title must be at least 20 characters."
                },
                {
                  max: 255,
                  message: "Title must be maximum 255 characters."
                }
              ]}  
            >
              <Input
                className='rounded-full p-3'
                placeholder='Task name'
              >
              </Input>
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='basis-full bg-black rounded-full text-white font-bold text-lg w-full pt-2 pb-2 h-fit'
                style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
              >
                Add
              </Button>
            </Form.Item>
          </Form>
          
          {/* task list */}
          <div className='w-100 h-auto'>
            <h2 className='text-4xl'>Task:</h2>
            <ul>
              {listItems.length > 0 ? listItems : <li>No tasks yet</li>}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
