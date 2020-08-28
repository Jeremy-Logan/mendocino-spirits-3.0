import React, { ComponentType } from 'react'
import { customTheme } from './customTheme'
import { ObjectLiteral } from '../type'

interface GridTheme {
	[k: string]: ObjectLiteral<string | number>
}

export const ThemeContext = React.createContext(customTheme)
export const withTheme = (Component: ComponentType<ObjectLiteral>) => {
	const ThemedComponent = (props: ObjectLiteral) => (
		<ThemeContext.Consumer>
			{(value) => <Component {...props} customTheme={value} />}
		</ThemeContext.Consumer>
	)

	return ThemedComponent
}
