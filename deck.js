import intro from './topics/intro.mdx'
import chatbotOverview from './topics/chatbot-overview.mdx'
import chatbotDetails from './topics/chatbot-details.mdx'
import demo from './topics/demo.mdx'
import conclusion from './topics/conclusion.mdx'

export { default as theme } from '@jakepartusch/opi-mdx-theme'
export default [
  ...intro,
  ...chatbotOverview,
  ...chatbotDetails,
  ...demo,
  ...conclusion
]
