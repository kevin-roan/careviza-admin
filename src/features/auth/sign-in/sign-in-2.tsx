import careVizaLogo from '@/assets/logo-careviza.png'
import { UserAuthForm } from './components/user-auth-form'

export default function SignIn2() {
  return (
    <div className='relative container grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r'>
        <div className='absolute inset-0 bg-blue-900' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          CareViza
        </div>

        <img
          src={careVizaLogo}
          className='relative m-auto'
          width={301}
          height={60}
          alt='Careviza Logo'
        />
      </div>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-left'>
            <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
            <p className='text-muted-foreground text-sm'>
              Enter your email and password below <br />
              to log into your account
            </p>
          </div>
          <UserAuthForm />
          <p className='text-muted-foreground px-8 text-center text-sm'>
            If you have shared the login credentials to someone by mistake{' '}
            <a
              href='https://kevinroan.vercel.app/contact'
              className='hover:text-primary underline underline-offset-4'
            >
              Contact Developer
            </a>{' '}
            asap.
          </p>
        </div>
      </div>
    </div>
  )
}
