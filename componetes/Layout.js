import Head from "next/head"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import styles from '../styles/Home.module.css'


const Layout = ({children}) => {
  return (
   
    <div className={styles.container}>
     <Head>
        <title>Lorena Rodriguez Dev</title>
        <meta name="description" content="my porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Navbar/>
    <Sidebar/>
    {children}
    </div>
    
  )
}

export default Layout