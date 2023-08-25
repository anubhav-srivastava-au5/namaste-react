export function filterData(filter, restaurentData){
    try {
        console.log("here------",filter,restaurentData)
        const filteredData = restaurentData.filter((restaurent) =>
            restaurent.info.name.toLowerCase().includes(filter)
        )
        console.log(filteredData,"---------this")
        return filteredData

    }
    catch (err) {
        console.error("Error while filtering data", err);
        return []
    }
}