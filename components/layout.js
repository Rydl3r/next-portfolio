import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
        
        html,
        body {
            
        font-family: 'Poppins', sans-serif;
        }

        * {
            box-sizing: border-box;
        }
    `}</style>
    </>
  )
}