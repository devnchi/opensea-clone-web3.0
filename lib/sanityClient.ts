import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'u59vpezn',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skjAntEOsWKE7PJvCxYfjskcLuCDvIAj1cap4NSwNIyCmGfillMvO7cIYZg84yQtTCUX3HDD6xbGE4UvxMUkvROlsmubmVqxVtpXw9q7AB2h1eW7vtbsXTXYnk2IPZS0uW7UFzD1kCTwkloLdFT2jk1lQAYwAzodjfz475RSAZnK9CAGeh2v',
  useCdn: false,
})