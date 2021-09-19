import Title from 'components/Title'
import Image from 'next/image'
import about from 'assets/about.png'
import Text from 'components/Text'

import { Wrapper, ImageBox, Info } from './styles'

const AboutSection = ({ ...props }) => (
  <Wrapper {...props}>
    <ImageBox>
      <Image src={about} layout="fill" objectFit="cover" />
    </ImageBox>
    <Info>
      <Title color="white" fontWeight="bold" level={2} size="medium">
        Sobre o evento
      </Title>
      <Text>
        Muito mais que um evento, a He4rt Conf é uma iniciativa que visa
        democratizar e facilitar o acesso a conteúdos de alta qualidade
        produzidos pela comunidade, para a comunidade.
      </Text>
      <Text>
        O evento será 100% gratu ito e disponibilizara de forma pública todos os
        materiais produzidos para a conf através do Github e redes sociais da
        He4rt Developers.
      </Text>
      <Text>
        Contaremos com um sistema de gameficação onde todos que participarem
        terão chances de resgatar brindes que serão disponibilizados pelo evento
        e seus patrocinadores.
      </Text>
    </Info>
  </Wrapper>
)

export default AboutSection
