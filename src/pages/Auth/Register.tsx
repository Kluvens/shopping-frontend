import {
  Button,
  Checkbox,
  Label,
  TextInput,
} from 'flowbite-react';
import { GoogleLogin } from '@react-oauth/google';

const Register = () => {
  return (
    <section className='flex flex-col items-center w-full min-h-[100vh]'>
      <div className='flex flex-col min-h-[100vh] sm:w-[36vw] md:[24vw] lg:w-[18vw] justify-center'>
        <div className='flex items-start w-full mb-4'>
          <p className='text-cyan-600 text-xl font-bold'>Register</p>
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
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Confirm your password" />
            </div>
            <TextInput id="password2" type="password" required />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <div className='mt-2'>
              <a href="/login" className='text-cyan-600 text-sm hover:underline'>I already had My LV account</a>
            </div>
          </div>
          <GoogleLogin onSuccess={() => console.log('success')} onError={() => console.log('failed')} />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  )
}

export default Register;
