import React from 'react'
import 'normalize.css'

import GlobalStyles from './GlobalStyles'

const Layout = ({children})=>(
	<div>
		<GlobalStyles />
		{children}
	</div>
)

export default Layout;