/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '@mui/material/Button'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'

export const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-[#ec373c] py-10 px-5 ">
        <div className="text-left text-white">
          <h1 className="text-2xl">About HDG Istanbul</h1>
          <p className="text-md my-3">
            HDG Istanbul is a community of people who are interested in Huawei
            technologies, want to develop something and share information. You
            can participate in our meetings and share your own experiences with
            us and benefit from the experiences of others. Although the popular
            topics of our events are Android and GWT, we are open to any topic
            you want to share with us.
          </p>
          <Button color="secondary" variant="outlined">
            Meetup Page
          </Button>
          <br></br>
          <div className="mt-3">
            <a href="#"></a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ffff',
    },
    error: {
      main: '#737373',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
})
