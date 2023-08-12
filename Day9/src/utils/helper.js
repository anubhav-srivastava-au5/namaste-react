export function filterData(filter, restaurentData){
    try {
        const filteredData = restaurentData.filter((restaurent) =>
            restaurent.info.name.toLowerCase().includes(filter)
        )
        return filteredData
    }
    catch (err) {
        console.error("Error while filtering data", err);
        return []
    }
}