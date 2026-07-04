import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight} from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const logins = [
  {
    email: 'abc@gmail.com',
    password: 'abc',
  },
  {
    email: 'xyz@gmail.com',
    password: 'xyz',
  }
]

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === '') {
      toast.warning('Please enter your email.');
      return;
    }
    if(!emailRegex.test(email)) {
      toast.warning('Please enter a valid email.')
      return;
    }
    if(password === '') {
      toast.warning('Please enter your password.');
      return;
    }

    let user = logins.find((user) => user.email === email && user.password === password);

    if(user) {
      toast.success('Logged In Successfully!')
      navigate('/home')
    } else {
      toast.error('Wrong email/password.')
    }
  }

  return (
    <div className='w-screen h-screen bg-zinc-100 flex justify-center items-center'>
      <div className='w-[30%] bg-white rounded-2xl p-5 flex flex-col'>
        <div className='py-10 flex flex-col gap-5'>
          <h1 className='text-7xl text-center'>
            Login to your account.
          </h1>
          <p className='text-zinc-500 text-center'>Code. Ship. Repeat.</p>
        </div>
        {/* Login input section */}
        <div className='h-full w-full flex flex-col justify-center items-center gap-5 pb-7'>
          {/* Phone/Email input */}
          <div className='py-[10px] w-[70%] rounded-full border-zinc-200 border-1'>
            <input 
              className='h-full w-full outline-none py-2 px-5'
              placeholder='Phone/Email'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if(e.key === 'Enter') {
                  handleLogin();
                }
              }}
            />
          </div>

          <div className='py-[10px] w-[70%] rounded-full border-zinc-200 border-1'>
            <input 
              className='h-full w-full outline-none py-2 px-5'
              placeholder='Password'
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if(e.key === 'Enter') {
                  handleLogin();
                }
              }}
            />
          </div>

          <button 
            className='bg-black py-[16px] w-[70%] rounded-full flex justify-between items-center px-7'
            onClick={handleLogin}
          >
            <span className='text-white'>Login to Your Account</span>
            <ArrowRight color='white' size={18} />
          </button>
        </div>
        <div className='w-full flex justify-center pb-3'>
          <span className=''>Don't have an account?{" "}
            <Link to={'/signup'}> <span className='text-sky-500 underline'>Sign Up</span></Link>{" "}
            here.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login