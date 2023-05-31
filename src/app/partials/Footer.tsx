import { useSite } from "../Context/Context"
import { SwitchTheme } from "../Context/SwitchTheme"

export default function Footer(props: any) {
  const { theme } = useSite()
  return (
    <footer className={`hidden md:block p-4 mt-10 rounded-lg shadow md:px-6 md:py-8 ${theme === 'light' ? "bg-white" : "bg-gray-900"}`}>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className='flex flex-1 pl-8 '>
          <span className={`font-bold ${theme === "light" ? " text-[#CE0E2D]" : "text-white"}`}> &lt;</span>
          <span className='pt-0.5 px-1'> HDG </span>
          <span className={`font-bold ${theme === "light" ? " text-[#CE0E2D]" : "text-white"}`}> &gt;</span>
          <span className='pt-0.5 px-5'> Huawei Developer Group </span>

        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" className="hover:underline">HDG</a>. All Rights Reserved.
      </span>
    </footer>

  )
}
