import jsonData from '$lib/mockup/DatasetDetails.json'


export async function getDatasetDescription(id) {

  /* console.log(jsonData) */
  try {
    const selectedItem = jsonData.find(item => item.id === +id);
    
    console.log(selectedItem)

    return selectedItem;
  } catch (error) {
    console.error('Error loading data:', error);
    return null;
  }
}
