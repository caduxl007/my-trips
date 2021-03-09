import { NextSeo } from 'next-seo'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <>
    <NextSeo
      title="My Trips - About"
      description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
      canonical="https://my-trips.com.br"
      openGraph={{
        url: 'https://my-trips.com.br',
        title: 'My Trips',
        description:
          'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
        site_name: 'My Trips'
      }}
    />
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
      </S.Body>
    </S.Content>
  </>
)

export default PageTemplate
