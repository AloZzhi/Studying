import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div className='flex items-center justify-center'>
      <button onClick={() => signIn('spotify', { callbackUrl: "/" })}>Login with spotify</button>

    </div>
  )
}

export default Login