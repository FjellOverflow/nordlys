import config from '@/theme.config'
import satori from 'satori'
import extractThemeColors from './extractColorTheme'

const {
  title: siteTitle,
  description: siteDescription,
  defaultTheme,
  colorTheme
} = config

const { accent, bg } = extractThemeColors(colorTheme)[defaultTheme]

const fetchFont = async (weight: string) =>
  (
    await fetch(
      `https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-sans@latest/latin-${weight}-normal.ttf`
    )
  ).arrayBuffer()

async function satoriRender(template: unknown) {
  return satori(template, {
    width: 1200,
    height: 630,
    embedFont: true,
    fonts: [
      {
        name: 'IBM Plex Sans',
        data: await fetchFont('400'),
        weight: 400,
        style: 'normal'
      },
      {
        name: 'IBM Plex Sans',
        data: await fetchFont('600'),
        weight: 600,
        style: 'normal'
      },
      {
        name: 'IBM Plex Sans',
        data: await fetchFont('700'),
        weight: 700,
        style: 'normal'
      }
    ]
  })
}

export const renderPostOG = (
  title: string,
  description: string,
  author: string
) =>
  satoriRender({
    type: 'div',
    props: {
      tw: `flex flex-col w-full h-full p-8 bg-${bg} text-${accent} border-8 border-${accent}/50`,
      children: [
        {
          type: 'div',
          props: {
            tw: 'flex',
            children: [
              {
                type: 'img',
                props: {
                  src: 'https://nordlys.fjelloverflow.dev/favicon.svg',
                  height: 48
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

export const renderOG = () =>
  satoriRender({
    type: 'div',
    props: {
      tw: `flex flex-col w-full h-full p-8 bg-${bg} text-${accent} border-8 border-${accent}/50`,
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
                              src: 'https://nordlys.fjelloverflow.dev/favicon.svg',
                              height: 128
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
