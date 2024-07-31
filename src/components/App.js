import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'

import '../styles/App.css'

function App() {
	const [markdown, setMarkdown] = useState('')
	return (
		<div className='app'>
			<textarea
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
