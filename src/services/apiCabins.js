import axios from 'axios';

export async function getCabins() {
  try {
    const response = await axios.get(
      'http://localhost:3000/api/v1/user/cabins'
    );
    const data = response.data.cabins;
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching cabins:', error);
    throw error;
  }
}

export async function deleteCabins(id) {
  try {
    await axios.delete(`http://localhost:3000/api/v1/user/cabin/${id}
  `);
  } catch (error) {
    console.error('Error deleting cabin:', error);
    throw error;
  }
}
