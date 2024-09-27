import React from 'react'
import styles from './PrivacyPolicyPage.module.css'
import ContentLayout from '../../layouts/ContentLayout/ContentLayout'
import DefaultList from '../../components/Lists/DefaultList/DefaultList'
import DefaultItemList from '../../components/Lists/DefaultItemList/DefaultItemList'
import SubHeading from '../../components/Headings/SubHeading/SubHeading'
import { v4 as uuidv4 } from 'uuid';

type Props = {}

type DataType = {
    id: string,
    title: string
    items: {
            id: string,
            text: string
    }[]
}

const PrivacyPolicyPage = (props: Props) => {
    const appName = process.env.REACT_APP_NAME
    const data: DataType[] = [
        {
            id: uuidv4(),
            title: "⁠Informações que Coletamos",
            items: [
                {
                    id: uuidv4(),
                    text: "Coletamos informações pessoais e não pessoais quando você interage com nosso site. Isso pode incluir, mas não se limita a, seu nome, e-mail e outras informações que você decide fornecer."
                }
            ]
        },
        {
            id: uuidv4(),
            title: "Uso de Dados",
            items: [
                {
                    id: uuidv4(),
                    text: "Utilizamos as informações coletadas para melhorar nossos serviços, responder a solicitações e analisar o uso do site por meio do Google Analytics. Também podemos usar essas informações para enviar comunicações relevantes."
                }
            ]
        },
        {
            id: uuidv4(),
            title: "reCAPTCHA e Cloudflare",
            items: [
                {
                    id: uuidv4(),
                    text: "Utilizamos o reCAPTCHA do Google para proteger nosso site contra spam e abusos. Isso pode envolver a coleta de dados, como seu endereço IP e informações sobre seu dispositivo. Além disso, usamos o Cloudflare para proteção contra DDoS, que pode exibir uma página de verificação antes de permitir o acesso ao site."
                }
            ]
        },
        {
            id: uuidv4(),
            title: "Proteção de Dados",
            items: [
                {
                    id: uuidv4(),
                    text: "Implementamos medidas de segurança para proteger suas informações. No entanto, nenhum método de transmissão pela internet é 100% seguro, e não podemos garantir segurança absoluta."
                }
            ]
        },
        {
            id: uuidv4(),
            title: "Cookies",
            items: [
                {
                    id: uuidv4(),
                    text: "Utilizamos cookies para melhorar sua experiência em nosso site. Você pode controlar o uso de cookies através das configurações do seu navegador."
                }
            ]
        },
        {
            id: uuidv4(),
            title: "Compartilhamento de Informações",
            items: [
                {
                    id: uuidv4(),
                    text: "Não vendemos ou alugamos suas informações pessoais a terceiros. Podemos compartilhar suas informações com prestadores de serviços que nos ajudam a operar nosso site, desde que esses terceiros concordem em manter a confidencialidade."
                }
            ]
        },
        {
            id: uuidv4(),
            title: "Seus Direitos",
            items: [
                {
                    id: uuidv4(),
                    text: "Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco pelo e-mail [seu e-mail de contato]."
                }
            ]
        },
        {
            id: uuidv4(),
            title: "Alterações a Esta Política",
            items: [
                {
                    id: uuidv4(),
                    text: "Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas através de um aviso em nosso site."
                }
            ]
        },
        {
            id: uuidv4(),
            title: "Contato",
            items: [
                {
                    id: uuidv4(),
                    text: "Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:"
                }
            ]
        },
    ]
    return (
        <ContentLayout title='Política de Privacidade'>
            <span>Última atualização: 26/09/2024</span>
            <span>Sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao visitar nosso site {appName}.</span>
            {data.map((father, index) => (
                <div key={father.id}>
                    <SubHeading>{`${index + 1}. ${father.title}`}</SubHeading>
                    <DefaultList>
                        {father.items.map(child => (
                            <DefaultItemList key={child.id}>{child.text}</DefaultItemList>
                        ))}
                    </DefaultList>
                </div>
            ))}
        </ContentLayout>
    )
}

export default PrivacyPolicyPage