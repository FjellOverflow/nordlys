import config from '@/theme.config'
import urlEncodedLogo from './urlEncodedLogo'

const { title: siteTitle, description: siteDescription } = config

export default (accent: string, bg: string) => () => ({
  type: 'div',
  props: {
    tw: `flex flex-col w-full h-full p-8 bg-${bg} text-${accent}`,
    children: [
      {
        type: 'div',
        props: {
          tw: 'flex flex-col w-full h-full justify-center items-center p-12',
          children: [
            {
              type: 'div',
              props: {
                tw: `flex flex-col`,
                children: [
                  {
                    type: 'div',
                    props: {
                      tw: 'flex',
                      children: [
                        {
                          type: 'img',
                          props: {
                            src: urlEncodedLogo,
                            height: 128,
                            width: 128
                          }
                        },
                        {
                          type: 'span',
                          props: {
                            tw: 'ml-8 text-9xl font-bold',
                            children: [siteTitle]
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: 'span',
                    props: {
                      tw: 'text-6xl mt-8 font-semibold',
                      children: [siteDescription]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
})
