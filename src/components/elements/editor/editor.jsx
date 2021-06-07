import React, { useEffect, useMemo, useState } from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

const TextEditor = ({onChange}) => {
    const [convertedText, setConvertedText] = useState("");
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            ['link']
        ]
    };

    const formats = [
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
    ];

    return (
        <ReactQuill
            modules={modules}
            formats={formats}
            theme='snow'
            value={convertedText}
            placeholder="Write message here"
            onChange={(text) => {
                setConvertedText(text);
                onChange(text);
            }}
            style={{width: '100%', maxHeight: '150px', overflow: 'scroll'}}
        />
    )
}

export default TextEditor;