import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { getAllHotels } from './Customer'
import './App.css'

type Hotel = Record<string, string | number>

function App() {
  const theads = ["id", "Hotel Name", "Address", "Rating", "Phone", "Location"]

  const [hotels, setHotels] = useState<Hotel[]>([])

  useEffect(() => {
    getAllHotels()
      .then((data: Hotel[]) => {
        setHotels(data)
        console.log('Fetched hotels:', data)
      })
      .catch((error) => {
        console.error('Error fetching hotels:', error)
      })
  }, [])

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          {theads.map((thead) => (
            <th key={thead}>{thead}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {hotels.map((hotel, index) => (
          <tr key={index}>
            {Object.keys(hotel).map((key) => (
              <td key={key}>{hotel[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default App