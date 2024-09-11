import data from '../../../data.json'
import DessertCard from '../ui/DessertCard'

const Desserts = () => {
  return (
    <section className="md:col-span-4">
      <h1 className="font-bold text-3xl mb-6">Desserts</h1>
      <div className="grid sm:grid-cols-auto-fill gap-8">
        {data.map(data => {
          const id = crypto.randomUUID()
          return <DessertCard key={id} data={data} id={id} />
          }
        )}
      </div>
    </section>
  )
}

export default Desserts