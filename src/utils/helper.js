export function filterData(searchText,restaurants){
    return restaurants.filter((value) => 
    value?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    )

    return filterData;
 }

