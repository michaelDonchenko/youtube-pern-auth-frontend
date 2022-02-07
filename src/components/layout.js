import Navbar from './navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='container'>{children}</div>
    </div>
  )
}

export default Layout
