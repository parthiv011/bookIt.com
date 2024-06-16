import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_API_URL;
export async function getCabins() {
  try {
    const response = await axios.get(`${BACKEND_URL}user/cabins`);
    const data = response.data.cabins;
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching cabins:', error);
    throw error;
  }
}

export async function deleteCabins(id) {
  try {
    await axios.delete(`${BACKEND_URL}user/cabin/${id}
  `);
  } catch (error) {
    console.error('Error deleting cabin:', error);
    throw error;
  }
}

export async function createCabin(newCabin, id) {
  console.log(newCabin, id);
  try {
    const hasImagePath = newCabin.image.startsWith?.(BACKEND_URL);
    let response;
    // 1. Create Cabin
    if (!id) {
      response = await axios.post(
        `${BACKEND_URL}user/cabins`,
        {
          name: newCabin.name,
          regularPrice: newCabin.regularPrice,
          discount: newCabin.discount,
          maxCapacity: newCabin.maxCapacity,
          description: newCabin.description,
          image: newCabin.image,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
    } else {
      let newImage;
      if (newCabin.image && !hasImagePath) {
        newImage = newCabin.image;
      }

      response = await axios.put(
        `${BACKEND_URL}user/cabins`,
        {
          id: id,
          name: newCabin.name,
          regularPrice: newCabin.regularPrice,
          discount: newCabin.discount,
          maxCapacity: newCabin.maxCapacity,
          description: newCabin.description,
          image: newCabin.image,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
    }
  } catch (error) {
    console.error('Cabin cannot be created:', error);
    throw error;
  }
}
