import React, { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'

import '../styles/App.css'

function App() {
    const [markdown, setMarkdown] = useState('')
    const ref = useRef(null)
    
    useEffect(() => {
        ref.current.focus()
    }, [])

	return (
		<div className='app'>
            <textarea
                ref={ref}
				value={markdown}
				onChange={(e) => setMarkdown(e.target.value)}
				className='textarea'
			></textarea>
			<ReactMarkdown
				className='preview'
				children={markdown}
				remarkPlugins={[]}
			/>
		</div>
	)
}

export default App
