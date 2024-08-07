import RegisterForm from '@/components/forms/RegisterForm'
import { getUser } from '@/lib/actions/patient.actions'
import Image from 'next/image'
import Link from 'next/link'

const Registers = async({params:{userId}}:SearchParamProps) => {

const user = await getUser(userId)

  return (
    <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">
        <Image
          src="/assets/icons/logo.svg"
          alt="logo"
          height={1000}
          width={1000}
          className="mb-12 h-10 w-fit"
        />

        <RegisterForm user={user}/>

        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 HealthBridge. All rights reserved.
          </p>
          <Link href="/?admin=true" className="text-green-500">
            Admin
          </Link>
        </div>
      </div>
    </section>
    <Image
      src="/assets/images/register-img.png"
      height={1000}
      width={1000}
      alt="Patient"
      className="side-img max-w-[390px]"
    />
  </div>
  )
}

export default Registers