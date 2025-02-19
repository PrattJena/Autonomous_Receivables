export const display = (data)=>({
    type:"MORE_DATA",
    data:data
})

export const increasePage = (data)=>({
    type:"PAGE_INCREASE",
    data:data
})

export const checkNextPage = (data)=>({
    type:"NEXT_DATA",
    data:data
})