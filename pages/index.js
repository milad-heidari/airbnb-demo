import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'


export default function Home({exploreData, cardData}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {exploreData?.map((item,index) => (
              <SmallCard key={index} img={item.img} location={item.location} distance={item.distance} />
            ))}
            </div>
        </section>
        <section className=''>
          <h2 className='text-4xl font-semibold py-8'>Live anywhere</h2> 
          <div className='flex p-3 -ml-3 overflow-scroll space-x-3 scrollbar-hide'>

          {cardData?.map((item,index)=> (
            <MediumCard key={index} img={item.img} title={item.title} />
            ))}   
            </div>
        </section>
        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='WishLists created by Airbnb'
          buttonText='Get Inspired'
        />
      </main>
      <Footer/>
    </div>
  )
}

export async function getStaticProps (){
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G')
  .then(res => res.json())

  const cardData = await fetch('https://www.jsonkeeper.com/b/VHHT')
  .then(res => res.json())
  return {
    props:{
      exploreData,
      cardData
    }
  }
}