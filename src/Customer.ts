import axios from "axios";

async function getAllHotels(){
    try {
        const response = await axios.get('http://localhost:8081/hotelmgmt/api/v1/hotel/getallhotel')
        return response.data
    }catch (error) {
        console.error('Error fetching hotels:', error);
        throw error;
    }
}
export { getAllHotels };
