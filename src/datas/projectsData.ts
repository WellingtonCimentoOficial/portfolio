import { ProjectType } from '../types/projectType'
import { v4 as uuidv4 } from 'uuid';

export const projectData: ProjectType[] = [
    {
        id: 0,
        title: "EcMarket",
        description: 'EcMarket é uma plataforma de e-commerce flexível e versátil, onde qualquer pessoa pode criar sua própria loja e vender produtos ou simplesmente explorar o catálogo de lojas para fazer compras.\nDesenvolvido com React e TypeScript no frontend, e Django com Django Rest Framework no backend, o EcMarket oferece uma solução completa para vendedores e compradores interagirem de maneira segura e eficiente.\nA plataforma suporta qualquer banco de dados relacional compatível com Django, oferecendo flexibilidade na escolha da infraestrutura. Além disso, integra a API do Mercado Pago para processar pagamentos e a API dos Correios para calcular automaticamente fretes e prazos de entrega.',
        images: {
            logo: {
                id: uuidv4(),
                url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726771208/ecmarket-26_gl2vra.png"
            },
            main: {
                id: uuidv4(),
                url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770113/ecmarket-1_pnln9i.png"
            },
            others: [
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770113/ecmarket-1_pnln9i.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770112/ecmarket-2_cfrute.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770113/ecmarket-3_zbwecz.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770112/ecmarket-4_um7foq.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770111/ecmarket-5_ktujeh.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770111/ecmarket-6_bo9yxy.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770113/ecmarket-7_xihduk.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770112/ecmarket-8_gnrm4c.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770111/ecmarket-9_mvfkfr.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770112/ecmarket-10_zfrmz3.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770113/ecmarket-11_qwqtgl.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770111/ecmarket-12_e97pkh.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770113/ecmarket-13_tujzqi.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770113/ecmarket-14_pxj5gj.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770114/ecmarket-15_oocelf.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770114/ecmarket-16_epg1n4.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770114/ecmarket-17_fijs90.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770115/ecmarket-18_i0qc3g.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770115/ecmarket-19_vmlbhh.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770115/ecmarket-20_r1d1j6.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770116/ecmarket-21_ecdh4z.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770116/ecmarket-22_j5atiy.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770116/ecmarket-23_nqgzom.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770117/ecmarket-24_emsadw.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726770117/ecmarket-25_vh5nrh.png"
                },

            ]
        },
        github: "https://github.com/WellingtonCimentoOficial/EcMarket",
        statistics: {
            python: 28.6,
            typescript: 58,
            javascript: 1.6,
            css: 10.6,
            html: 1.2
        },
        isFavorite: true,
        isGUI: true,
        isHighlighted: true,
        details: {
            features: [
                {
                    id: uuidv4(),
                    text: "Criação de lojas personalizadas — usuários vendedores podem configurar suas lojas e adicionar produtos facilmente."
                },
                {
                    id: uuidv4(),
                    text: "Experiência de compra intuitiva — compradores podem navegar pelas lojas, adicionar produtos ao carrinho e finalizar suas compras de forma segura."
                },
                {
                    id: uuidv4(),
                    text: "Integração com o Mercado Pago — pagamentos rápidos e seguros com suporte a diversas formas de pagamento."
                },
                {
                    id: uuidv4(),
                    text: "Cálculo de frete automático — baseado no CEP e no peso dos produtos, utilizando a API dos Correios."
                },
                {
                    id: uuidv4(),
                    text: "Painel administrativo — vendedores têm acesso a um painel para gerenciar seus produtos, pedidos e acompanhar o desempenho de suas vendas."
                },
            ],
            gettingStarted: [
                {
                    id: uuidv4(),
                    text: ""
                }
            ],
            talksAndVideos: [
                {
                    id: uuidv4(),
                    text: ""
                }
            ]
        }
    },
    {
        id: 1,
        title: "Smart Lamp Controller",
        description: "Este script permite o controle da lâmpada Yeelight Smart LED Bulb (Color) diretamente a partir de um terminal Linux ou Windows.\nCom funções básicas integradas, você poderá gerenciar sua lâmpada de forma eficiente, possibilitando o desenvolvimento de softwares mais complexos a partir deste código base.",
        images: {
            logo: {
                id: uuidv4(),
                url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726672442/smart-lamp-controller-2_wruyqq.png'
            },
            main: {
                id: uuidv4(),
                url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726672177/smart-lamp-controller-1_lyoxy4.png'
            },
            others: [
                {
                    id: uuidv4(),
                    url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726672177/smart-lamp-controller-1_lyoxy4.png'
                },
            ]
        },
        github: "https://github.com/WellingtonCimentoOficial/SmartLampController",
        statistics: {
            python: 100,
            typescript: 0,
            javascript: 0,
            css: 0,
            html: 0
        },
        isFavorite: false,
        isGUI: false,
        isHighlighted: false,
        details: {
            features: [
                {
                    id: uuidv4(),
                    text: "Ligar e desligar a lâmpada."
                },
                {
                    id: uuidv4(),
                    text: "Ajustar o brilho da luz."
                },
                {
                    id: uuidv4(),
                    text: "Modificar a saturação das cores."
                },
                {
                    id: uuidv4(),
                    text: "Controlar a temperatura da luz."
                },
                {
                    id: uuidv4(),
                    text: "Selecionar entre cores pré-definidas."
                },
            ],
            gettingStarted: [
                // {
                //     id: uuidv4(),
                //     text: ""
                // }
            ],
            talksAndVideos: [
                // {
                //     id: uuidv4(),
                //     text: ""
                // }
            ]
        }
    },
    {
        id: 2,
        title: "Magic Led V2",
        description: "Este projeto traz a possibilidade de controlar fitas de LED conectadas ao controlador Magic Home, armazenando os dispositivos registrados e seus respectivos tokens em um banco de dados SQLite.",
        images: {
            logo: {
                id: uuidv4(),
                url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726772495/magic-led-v2-2_ekjtb0.png'
            },
            main: {
                id: uuidv4(),
                url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726672176/magic-led-v2-1_ovtujh.png'
            },
            others: [
                {
                    id: uuidv4(),
                    url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726672176/magic-led-v2-1_ovtujh.png'
                },
            ]
        },
        github: "https://github.com/WellingtonCimentoOficial/magicledv2",
        statistics: {
            python: 100,
            typescript: 0,
            javascript: 0,
            css: 0,
            html: 0
        },
        isFavorite: false,
        isGUI: false,
        isHighlighted: false,
        details: {
            features: [
                // {
                //     id: uuidv4(),
                //     text: ""
                // }
            ],
            gettingStarted: [
                // {
                //     id: uuidv4(),
                //     text: ""
                // }
            ],
            talksAndVideos: [
                // {
                //     id: uuidv4(),
                //     text: ""
                // }
            ]
        }
    },
    {
        id: 3,
        title: "flask_project01",
        description: "Primeiro projeto usando o Framework Flask",
        images: {
            logo: {
                id: uuidv4(),
                url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726771761/flask-project01-6_qgmr0f.png'
            },
            main: {
                id: uuidv4(),
                url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726674467/flask-project01-1_s17h0a.png'
            },
            others: [
                {
                    id: uuidv4(),
                    url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726674467/flask-project01-1_s17h0a.png'
                },
                {
                    id: uuidv4(),
                    url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726674467/flask-project01-2_pbe9ff.png'
                },
                {
                    id: uuidv4(),
                    url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726674467/flask-project01-3_kto8sj.png'
                },
                {
                    id: uuidv4(),
                    url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726674468/flask-project01-4_oywp3q.png'
                },
                {
                    id: uuidv4(),
                    url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726674469/flask-project01-5_euz1pb.gif'
                },
            ]
        },
        github: "https://github.com/WellingtonCimentoOficial/flask_project01",
        statistics: {
            python: 36.9,
            typescript: 0,
            javascript: 7.5,
            css: 29.2,
            html: 25.5
        },
        isFavorite: false,
        isGUI: true,
        isHighlighted: true,
        details: {
            features: [
                // {
                //     id: uuidv4(),
                //     text: ""
                // }
            ],
            gettingStarted: [
                // {
                //     id: uuidv4(),
                //     text: ""
                // }
            ],
            talksAndVideos: [
                // {
                //     id: uuidv4(),
                //     text: ""
                // }
            ]
        }
    },
    {
        id: 4,
        title: "U3A BOT",
        description: "O U3A BOT pode criar uma quantidade ilimitada de contas falsas no site u3a-earn.buzz e também gerar cliques falsos no seu link para ganhar dinheiro.",
        images: {
            logo: {
                id: uuidv4(),
                url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726772673/u3a-bot-4_ovjija.png'
            },
            main: {
                id: uuidv4(),
                url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726671631/u3a-bot-1_wa0zqb.png'
            },
            others: [
                {
                    id: uuidv4(),
                    url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726671631/u3a-bot-1_wa0zqb.png'
                },
                {
                    id: uuidv4(),
                    url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726671632/u3a-bot-2_zmvptv.png'
                },
                {
                    id: uuidv4(),
                    url: 'https://res.cloudinary.com/dmkxkaumk/image/upload/v1726671631/u3a-bot-3_xwr3jc.png'
                },
            ]
        },
        github: "https://github.com/WellingtonCimentoOficial/u3abot",
        statistics: {
            python: 100,
            typescript: 0,
            javascript: 0,
            css: 0,
            html: 0
        },
        isFavorite: false,
        isGUI: false,
        isHighlighted: false,
        details: {
            features: [
                // {
                //     id: uuidv4(),
                //     text: ""
                // }
            ],
            gettingStarted: [
                // {
                //     id: uuidv4(),
                //     text: ""
                // }
            ],
            talksAndVideos: [
                // {
                //     id: uuidv4(),
                //     text: ""
                // }
            ]
        }
    },
    {
        id: 5,
        title: "Glozble",
        description: "Plataforma de ganhos de dinheiro assistindo anúncios",
        images: {
            logo: {
                id: uuidv4(),
                url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726772075/glozble-67_esjg7u.png"
            },
            main: {
                id: uuidv4(),
                url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675636/glozble-1_xhpu6l.png"
            },
            others: [
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675636/glozble-1_xhpu6l.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675645/glozble-2_n4hnyt.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675648/glozble-3_vrrxym.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675710/glozble-4_mmflhw.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675673/glozble-5_g3t635.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675639/glozble-6_dxml0k.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675636/glozble-7_pd4lwi.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675635/glozble-8_mfeff6.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675641/glozble-9_s3dtw0.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675650/glozble-10_sd6z7a.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675637/glozble-11_rhppdz.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675647/glozble-12_nos9sb.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675640/glozble-13_ixoalv.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675713/glozble-14_bhpgnj.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675716/glozble-15_wm39lf.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675711/glozble-16_pus4fn.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675646/glozble-17_havpsq.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675642/glozble-18_f1turr.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675654/glozble-19_jkfh5t.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675657/glozble-20_psiul3.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675651/glozble-21_tn0mix.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675672/glozble-22_w7kboc.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675643/glozble-23_obiwsd.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675660/glozble-24_mjltp4.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675667/glozble-25_xt5o4q.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675665/glozble-26_swejss.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675652/glozble-27_lg7pdj.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675655/glozble-28_g2thhk.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675669/glozble-29_ipeahs.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675662/glozble-30_ybt7wz.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675668/glozble-31_afelty.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675670/glozble-32_rp2srt.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675659/glozble-33_pyxed9.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675656/glozble-34_z4xehs.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675664/glozble-35_wruwll.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675663/glozble-36_otcwrm.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675718/glozble-37_utfkwm.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675712/glozble-38_hs2ais.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675715/glozble-39_bsv4ol.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675689/glozble-40_cdlqx8.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675686/glozble-41_vrkskw.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675675/glozble-42_ia3yt5.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675681/glozble-43_jzebfa.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675708/glozble-44_pql6id.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675692/glozble-45_vrbjgn.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675678/glozble-46_rtqkba.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675676/glozble-47_lbvnqm.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675682/glozble-48_nwaefm.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675703/glozble-49_tuy8ib.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675707/glozble-50_lsc0cl.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675684/glozble-51_xxxavg.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675698/glozble-52_ltss0p.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675687/glozble-53_lzhekm.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675692/glozble-54_kxhxdm.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675685/glozble-55_tjqpvg.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675680/glozble-56_xlzx3a.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675690/glozble-57_iqnnar.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675677/glozble-58_tewhva.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675697/glozble-59_roplqo.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675704/glozble-60_d2nv1x.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675702/glozble-61_lt9lu2.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675699/glozble-62_f54ktv.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675706/glozble-63_nrwdi6.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675700/glozble-64_dxaabi.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675695/glozble-65_ynbjue.png"
                },
                {
                    id: uuidv4(),
                    url: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726675694/glozble-66_g7dsif.png"
                }
            ]
        },
        github: "https://github.com/WellingtonCimentoOficial/glozble",
        statistics: {
            python: 19.7,
            typescript: 0,
            javascript: 27.3,
            css: 20.1,
            html: 32.9
        },
        isFavorite: true,
        isGUI: true,
        isHighlighted: true,
        details: {
            features: [
                // {
                //     id: uuidv4(),
                //     text: ""
                // }
            ],
            gettingStarted: [
                // {
                //     id: uuidv4(),
                //     text: ""
                // }
            ],
            talksAndVideos: [
                // {
                //     id: uuidv4(),
                //     text: ""
                // }
            ]
        }
    },
]