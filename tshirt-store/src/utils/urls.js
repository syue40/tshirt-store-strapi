export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const fromImageToUrl = (image) => {
    if(!image){
        return "/vercel.svg"
    }

    if(image.data.attributes.formats.thumbnail){
        return `${API_URL}${image.data.attributes.formats.thumbnail.url}`
    }

    return image.url
}