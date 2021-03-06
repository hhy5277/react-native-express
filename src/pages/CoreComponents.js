import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'

const content = markdown(markdownOptions)`
React Native includes a few dozen core components which can be used out-of-the-box. More complex components can be built by combining the core components in interesting ways.

Nearly all the core components extend the \`View\` component, and can be passed an optional \`style\` prop. The style can include visual properties like colors and borders, as well as layout properties. Components use the flexbox algorithm to specify the layout of their children.

Let's now take a look at the flexbox algorithm and some of the most common core components. If you want to dive deeper, I cover these topics in great detail in the "Core Components" chapter of my [book](https://www.fullstackreact.com/react-native/).
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
