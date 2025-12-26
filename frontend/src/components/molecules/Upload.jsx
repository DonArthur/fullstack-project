import { useRef, useState } from 'react'

const Upload = ({ onUpload, existingImg = null }) => {
    const inputRef = useRef(null)
    const [preview, setPreview] = useState(existingImg)
    const [dragging, setDragging] = useState(false)

    const handleFile = (file) => {
        if (!file || !file.type.startsWith('image/')) return

        setPreview(URL.createObjectURL(file))
        console.log('File to upload:', file)
        onUpload(file)
    }
    return (
        <div className={`relative flex items-center justify-center
        w-40 h-40 my-3 text-center rounded-full border-2 border-dashed cursor-pointer
        transition ${dragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => {
            e.preventDefault()
            setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
            e.preventDefault()
            setDragging(false)
            handleFile(e.dataTransfer.files[0])
        }}
        >
            {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-full" />
            ) : (
                <span className="text-gray-400 text-sm p-3">Drag & Drop or Click to Upload</span>
            )}
            <input type="file" ref={inputRef} className="hidden" onChange={(e) => handleFile(e.target.files[0])} />
        </div>
    )
}

export default Upload