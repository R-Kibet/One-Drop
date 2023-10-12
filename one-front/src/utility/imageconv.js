export async function ImagetoBase64(f){
    /* read file */
    const reader = new FileReader()

    /**convert to dataUrl */
    reader.readAsDataURL(f)

    const data = new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result)
        reader.onerror = err => reject(err)
    })

    return data
}
