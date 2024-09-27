import React from 'react'
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

const TermsOfUsePage = (props: Props) => {
    const appName = process.env.REACT_APP_NAME
    const companyName = process.env.REACT_APP_COMPANY_NAME
    const data: DataType[] = [
        {
            id: uuidv4(),
            title: "Uso do Site",
            items: [
                {
                    id: uuidv4(),
                    text: "Você concorda em usar o site apenas para fins legais e de maneira que não infrinja os direitos de terceiros ou restrinja o uso e aproveitamento do site por outros usuários."
                }
            ]
        },
        {
            id: uuidv4(),
            title: "Propriedade Intelectual",
            items: [
                {
                    id: uuidv4(),
                    text: `Todo o conteúdo deste site, incluindo textos, gráficos, logotipos e imagens, é propriedade de ${companyName} e está protegido por direitos autorais e outras leis de propriedade intelectual.`
                }
            ]
        },
        {
            id: uuidv4(),
            title: "Interação com o Site",
            items: [
                {
                    id: uuidv4(),
                    text: "Você pode interagir com o site, enviar informações ou comentários, desde que não publique conteúdo ilegal, ofensivo ou que infrinja direitos de terceiros. Reservamo-nos o direito de remover qualquer conteúdo que consideremos inadequado."
                }
            ]
        },
        {
            id: uuidv4(),
            title: "Limitação de Responsabilidade",
            items: [
                {
                    id: uuidv4(),
                    text: `${companyName} não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais que possam resultar do uso ou da incapacidade de uso do site.`
                }
            ]
        },
        {
            id: uuidv4(),
            title: "Alterações aos Termos",
            items: [
                {
                    id: uuidv4(),
                    text: "Podemos revisar estes Termos de Uso a qualquer momento. Recomendamos que você os revise regularmente. Seu uso contínuo do site após a publicação de alterações constitui sua aceitação dos novos termos."
                }
            ]
        },
        {
            id: uuidv4(),
            title: "Contato",
            items: [
                {
                    id: uuidv4(),
                    text: "Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco: contato@wellingtoncimento.com"
                }
            ]
        },
    ]
    return (
        <ContentLayout title='Termos de Uso'>
            <span>Última atualização: 26/09/2024</span>
            <span>Bem-vindo ao {appName}.</span>
            <span>Ao acessar ou usar nosso site, você concorda em cumprir estes Termos de Uso. Se não concordar com estes termos, não utilize nosso site.</span>
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

export default TermsOfUsePage