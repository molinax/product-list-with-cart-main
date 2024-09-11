import { useEffect, useState } from 'react'
import Desserts from './components/sections/Desserts'
import YourCart from './components/sections/YourCart'
import OrderConfirmation from './components/ui/OrderConfirmation'

const App = () => {
  const [hasOrder, setHasOrder] = useState(false)
  const showOrder = () => setHasOrder(true)
  const hiddenOrder = () => setHasOrder(false)

  useEffect(() => {
    hasOrder ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  }, [hasOrder])

  return (
    <main className="bg-rose_50">
      <div className="grid gap-8 auto-rows-max w-[90%] max-w-7xl m-auto py-4 md:py-8 md:grid-cols-6 xl:py-12">
        <Desserts />
        <YourCart showOrder={showOrder}/>
      </div>
      {hasOrder && <OrderConfirmation hiddenOrder={hiddenOrder}/>}
    </main>
  )
}

export default App
