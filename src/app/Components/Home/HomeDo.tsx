
import { Grid, Typography } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

export default function WhatWeDo(value: any) {
    return (
        <div className=' flex space-x-4 my-5 mx-24 p-10 bg-orange-900 '>
            <div className='' >
                
                <h2 className='text-xl text-left my-3 '>What We Do?</h2>
                <p className='text-left'>Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.</p>
                <br></br>
                <p className='text-left '>About different Google technologies</p>
            </div>
            <div className=''>
            <Grid>
                <ChatBubbleIcon></ChatBubbleIcon>
                </Grid>
                <h5 className='text-xl my-3'>Talks</h5>
                <p className='mt-5'>Get updated with the latest news and announcements</p>
            </div>
            <div className=''>
            <Grid>
                <CodeIcon></CodeIcon>
                </Grid>
                <h5 className='text-xl my-3	' >Codelabs</h5>
                <p className='mt-5'>Get hands-on experience and guidance from the community members</p>

            </div>
            <div className=''>
            <Grid>
                <SchoolIcon></SchoolIcon>
                </Grid>
                <h5 className='text-xl my-3	'>Campus Roadshows</h5>
                <p className='mt-5'>Share knowledge in different Companies, colleges and universities</p>
            </div>
            <div className=''>
            <Grid>
                <BubbleChartIcon></BubbleChartIcon>
                </Grid>
                <h5 className='text-xl my-3	'>Live Viewing Parties</h5>
                <p className='mt-5'>Share knowledge in different Companies, colleges and universities</p>
            </div>
        </div>
    )
}
