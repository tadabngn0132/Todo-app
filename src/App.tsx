import './App.css'
import { Button, Form, Input } from 'antd'

function App() {

  return (
    <>
      <div className='flex flex-col gap-10'>
        <h1>To do app</h1>
        <div>
          <Form
            className='flex flex-col w-full'>
            <Form.Item
              name='task-name'
              rules={[
                {
                  required: true,
                  message: "Title cannot be empty"
                },
                {
                  min: 20,
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
        </div>
      </div>
    </>
  )
}

export default App
