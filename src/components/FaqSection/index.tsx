import FaqItem from 'components/FaqItem'
import Title from 'components/Title'

import { Wrapper } from './styles'

type FaqProps = {
  id?: string
}

const FaqSection = ({ id }: FaqProps) => {
  return (
    <Wrapper id={id}>
      <Title color="white" fontWeight="bold" level={2} size="medium">
        FAQ
      </Title>
      <FaqItem
        question="O evento é gratuito?"
        answer={
          <>
            Sim, o evento é totalmente <span>gratuito</span> para a comunidade.
            Fizemos com muito carinho para que o máximo de pessoas aprendam
            sobre programação e tecnologia de forma acessível e didática.
          </>
        }
        opened
      />
      <FaqItem
        question="O que será mostrado no evento?"
        answer="O evento abordará assuntos sobre diversos tipos de linguagens, frameworks e skills necessárias para desenvolver melhores práticas na área de tecnologia. Acompanhe nossas redes sociais para saber mais sobre!"
      />
      <FaqItem
        question="Quando e onde o evento ocorrerá?"
        answer={
          <>
            O evento ocorrerá nos dias 1, 2 e 3 de outubro no canal do{' '}
            <a
              href="https://twitch.tv/danielhe4rt"
              target="_blank"
              rel="noreferrer"
            >
              DanielHe4rt
            </a>{' '}
            e em nossa{' '}
            <a href="https://discord.gg/he4rt" target="_blank" rel="noreferrer">
              comunidade no Discord
            </a>
            . Acompanhe toda a programação nas redes sociais oficiais da He4rt
            Developers.
          </>
        }
      />
      <FaqItem
        question="Como faço para participar?"
        answer={
          <>
            No topo e no final da pagina terá um botão &quot;Garantir vaga com o
            Github&quot; ao clicar você será redirecionado para a plataforma do
            Github e terá que se autenticar. Caso você não tenha Github, crie e
            lembre-se que isso será usado para o resto da sua vida como
            desenvolvedor :){' '}
          </>
        }
      />
      <FaqItem
        question="Eu preciso saber programar?"
        answer="Não, o evento abordará assuntos sobre programação e tecnologia para iniciantes, ou seja, não precisa ter nenhum conhecimento prévio."
      />{' '}
      <FaqItem
        question="Como irá funcionar a gameficação e as premiações?"
        answer={
          <>
            Teremos alguns sistemas de premiação durante o evento, sendo eles:
            <ul>
              <li>
                Tracking de participantes mais ativos com a hashtag
                #He4rtConf2021 nas redes sociais;
              </li>
              <li>
                Tracking de participantes mais ativas com a hashtag
                #He4rtConf2021 nas redes sociais;
              </li>
              <li>
                Todas as mensagens enviadas durante a transmissão estará te
                bonificando com <span>pontos de experiência</span> que você
                poderá consultar em nosso{' '}
                <a
                  href="https://discord.gg/he4rt"
                  target="_blank"
                  rel="noreferrer"
                >
                  discord
                </a>{' '}
                usando o comando !heartconf. Os 3 primeiros no ranking de
                participação ganharão um Kit He4rtConf2021 e as outras 10
                próximas nesse ranking participarão de um sorteio de outro kit.
              </li>
              <li>
                Ao final cada palestra, você resgatará um emblema com o comando
                !badge e se você coletar todos os emblemas das palestras você
                estará concorrendo a uma Amazon Echo Dot.
              </li>
            </ul>
          </>
        }
      />
      <FaqItem
        question="Como habilitar o e-mail no GitHub?"
        answer={
          <>
            Para habilitar um e-mail público você precisa seguir alguns passos:
            <ul>
              <li>
                Entre em{' '}
                <a href="https://github.com/settings/emails">
                  https://github.com/settings/emails
                </a>
                ;
              </li>
              <li>Adicione seu e-mail em "add email address";</li>
              <li>
                Após adicionado, volte para{' '}
                <a href="https://github.com/settings/profile">
                  https://github.com/settings/profile
                </a>{' '}
                e escolha um "Public email".
              </li>
            </ul>
          </>
        }
      />
    </Wrapper>
  )
}

export default FaqSection
