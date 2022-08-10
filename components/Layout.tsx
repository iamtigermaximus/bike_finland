import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import colors from '../utils/colors'

const Container = styled.div`
  background: ${colors.gray};
  height: 100%;
  width: 100%;
`
const Layout = ({ children }: any) => {
  return (
    <Container>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </Container>
  )
}

export default Layout
