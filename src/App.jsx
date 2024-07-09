import './App.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Content } from './Content'

function App() {

  return (
    <div className= "flex min-h-screen flex-col font-mono">
      <Header/>
      <div className= "container mx-auto my-20 p-4">
      <Content/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
