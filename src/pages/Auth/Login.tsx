import {
  Button,
  Checkbox,
  Label,
  TextInput,
} from 'flowbite-react';

const Login = () => {
  return (
    <section className='flex flex-col items-center w-full min-h-[100vh]'>
      <div className='flex flex-col min-h-[100vh] sm:w-[36vw] md:[24vw] lg:w-[18vw] justify-center'>
        <div className='flex items-start w-full mb-4'>
          <p className='text-cyan-600 text-xl font-bold'>Log in</p>
        </div>
        <form className="flex flex-col gap-4 w-full">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" color="gray" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className='flex justify-between'>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <div className='my-2'>
              <a href="" className='text-cyan-600 hover:underline text-sm'>Forgot your password?</a>
            </div>
          </div>
          <Button type="submit">Submit</Button>
          <div className='flex'>
            <p className='text-sm'>Don't have an account? <a href='register' className='text-cyan-600 font-bold'>Sign up</a></p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login;
