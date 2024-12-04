import config from '@/theme.config'
import urlEncodedLogo from './urlEncodedLogo'

const { title: siteTitle } = config

export default (accent: string, bg: string) =>
  (title: string, description: string, author: string) => ({
    type: 'div',
    props: {
      tw: `flex flex-col w-full h-full p-8 bg-${bg} text-${accent}`,
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
                  height: 48,
                  width: 48
                }
              },
              {
                type: 'span',
                props: {
                  tw: 'ml-4 text-5xl font-bold',
                  children: [siteTitle]
                }
              }
            ]
          }
        },
        {
          type: 'div',
          props: {
            tw: 'flex flex-col w-full h-full justify-center items-center p-12',
            children: [
              {
                type: 'div',
                props: {
                  tw: `flex flex-col border-4 p-8 rounded-lg border-${accent}/50`,
                  children: [
                    {
                      type: 'span',
                      props: {
                        tw: 'text-7xl font-bold',
                        children: [title]
                      }
                    },
                    {
                      type: 'span',
                      props: {
                        tw: 'text-4xl mt-8 font-semibold',
                        children: [description]
                      }
                    },
                    {
                      type: 'div',
                      props: {
                        tw: 'flex justify-end text-3xl mt-8',
                        children: [`by ${author}`]
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
