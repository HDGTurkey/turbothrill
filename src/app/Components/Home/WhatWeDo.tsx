import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';


;
export default function FullWidthGrid(props: any) {
    return (
        <div className='  mx-auto p-5 m-3 mb-5 max-w-6xl grid lg:grid-cols-6 gap-4 sm:auto-rows-min md:grid-cols-1'>
            <div className='col-span-2 '>
                <h1 className='mx-5 mt-4 mb-2 text-2xl text-left sm:text-center  '>What we do ?</h1>
                <p className='px-5 text-left sm:text-center'>
                    Huawei Developer Groups (HDG) are for developers who are interested in Huawei's developer technology.
                </p>
                <p className='p-5 text-left sm:text-center'>
                    At the same time, special events and raffles for developers are held here.                </p>
            </div>
            <div className=' '>
                <div className='item-center m-5'>
                    <ChatBubbleIcon style={{color:'#ec373c'}} fontSize='large' className="backgroundColor:' #f5f5f5'" />
                    <h5 className='text-xl my-3'>Talks</h5>
                    <p className='mt-5 text-sm'>Get updated with the latest news and announcements</p>
                </div>
            </div>
            <div className=' '>
                <div className='item-center m-5'>
                    <CodeIcon style={{color:'#ec373c'}} fontSize='large' />
                    <h5 className='text-xl my-3'>Codelabs</h5>
                    <p className='mt-5 text-sm'>Start working together by contacting our university ambassadors</p>
                </div>
            </div>
            <div className=' '>
                <div className='item-center m-5'>
                    <SchoolIcon style={{color:'#ec373c'}} fontSize='large' />
                    <h5 className='text-xl my-3'>Campus Roadshows</h5>
                    <p className='mt-5 text-sm'>Share knowledge in different Companies, colleges and universities</p>
                </div>
            </div>
            <div className=' '>
                <div className='item-center m-5'>
                    <BubbleChartIcon style={{color:'#ec373c'}}  fontSize='large' />
                    <h5 className='text-xl my-3'>Live Viewing Parties</h5>
                    <p className='mt-5 text-sm'>Share knowledge in different Companies, colleges and universities</p>
                </div>
            </div>
        </div>
    );
}
