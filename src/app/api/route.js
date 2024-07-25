import { NextResponse } from "next/server";

export const listaDeRoupa = [
    {
        id: 1,
        titulo: "Pulôver Dior Oblique",
        descricao: "Este pulôver revisita os códigos icônicos da Dior de uma perspectiva moderna. Confeccionado em jacquard branco com mescla de algodão e lã virgem, ele é valorizado por uma versão em relevo do exclusivo motivo Dior Oblique verde-claro em toda a extensão. O fechamento com zíper adorna as mangas conferindo um toque moderno, enquanto a gola redonda canelada cria contraste. O pulôver completa looks gráficos e casuais quando combinado com jeans.",
        a:"Jacquard Dior Oblique em toda a extensão.",
        b:"Fechamento com zíper nas mangas." ,
        c:"Gola redonda canelada contrastante." ,
        d:"69% lã virgem, 28% algodão, 3% poliéster (trama 7)*." ,
        e:"Fabricado na Itália." ,
        img: "https://i.pinimg.com/564x/26/46/14/2646142227920756821094170883d5b6.jpg",
        img2: "https://i.pinimg.com/236x/9c/87/fc/9c87fc2e7e60068cbf63c89ca8b42333.jpg",
        img3: "https://i.pinimg.com/564x/95/37/11/95371152b9d8c4b31f482210d4e0e756.jpg"
    },
    {
        id: 2,
        titulo: "Colete com capuz",
        descricao: "Este colete exibe o icônico motivo Toile de Jouy Sauvage. Confeccionado em jacquard de tafetá técnico azul e branco, ele tem uma silhueta casual e uma faixa com a inscrição Christian Dior nas costas. Finalizado com bolsos com zíper visível e bolsos em patch internos, o colete com capuz valoriza qualquer look casual.",
        a: "Inscrição CD e abelha emblemática bordadas",
        b: "Faixa com inscrição Christian Dior nas costas",
        c: "Fechamento frontal com zíper",
        d: "Cordão interno na bainha e na gola",
        e: "Fabricado na Itália",
        img: "https://i.pinimg.com/236x/71/32/c3/7132c34972fd6b30cd3a0156f68864db.jpg",
        img2: "https://i.pinimg.com/236x/58/d0/0b/58d00b4071675240146d3fc57b9afcd9.jpg",
        img3: "https://i.pinimg.com/236x/20/72/75/207275329629a9a07bbe72dc64710068.jpg"
    },
    {
        id: 3,
        titulo: "Casaco cropped",
        descricao: "Este casaco curto oferece uma nova versão dos códigos de elegância da Dior. Confeccionado em buclê de algodão e lã virgem brancos, ele tem uma silhueta cropped com corte normal adornada com botões Dior Tribales, que exibem uma pérola de resina com uma inscrição CD inspirada no icônico brinco da Maison. Com bolsos em patch e detalhes em gorgorão no mesmo tom, o casaco pode ser combinado com a saia do conjunto para compor um look completo.",
        a: "Fechamento frontal com botões Dior Tribales",
        b: "Detalhes em gorgorão no mesmo tom",
        c: "Forro no mesmo tom",
        d: "70% lã virgem, 23% algodão, 7% poliamida",
        e: "Fabricado na Itália",
        img: "https://i.pinimg.com/236x/61/30/e9/6130e911dd853b5b16b8049decb09249.jpg",
        img2: "https://i.pinimg.com/236x/7f/3c/16/7f3c16cfbf6a9c105e2a2bd47dfff56c.jpg",
        img3: "https://i.pinimg.com/236x/18/53/5a/18535a74b4e09679920d99a60891577e.jpg"
        },
        {
            id: 4,
            titulo: "Jaqueta Dioriviera cropped com gola alta tipo marinheiro",
            descricao: "Parte da coleção cápsula Dioriviera, esta jaqueta cropped destaca-se por uma gola alta tipo marinheiro com a inscrição Christian Dior na parte de trás. Confeccionada em malha técnica branca, ela exibe detalhes com zíper nos punhos. A jaqueta combina com outras criações Dioriviera para compor um look completo.",
            a: "Gola e punhos com zíper",
            b: "Inscrição Christian Dior na parte de trás",
            c: "83% viscose, 17% poliéster (trama 12)*",
            d: "Tratar com cuidado extra e lavar a seco delicadamente",
            e: "Fabricado na Itália",
            img: "https://i.pinimg.com/236x/f8/37/2b/f8372b46f0bb1fe7a962c93d5990450e.jpg",
            img2: "https://i.pinimg.com/236x/d2/d5/97/d2d59750229285e5b26a72b5cb8e7793.jpg",
            img3:"https://i.pinimg.com/236x/a0/ab/75/a0ab752fa557e13a69eaf6d7525fb8e8.jpg"
            },
            {
                id: 5,
                titulo: "Vestido chemise curto Dioriviera",
                descricao: "Parte da coleção cápsula Dioriviera, este vestido chemise exibe o motivo Toile de Jouy Sauvage, uma nova versão do padrão exclusivo da Maison. Confeccionado em denim de algodão branco e verde-água leve, ele é valorizado pela abelha emblemática da Maison e pela inscrição CD bordadas na frente. Sua silhueta curta tem gola italiana, bolsos chapados e bolsos com aba com botões Christian Dior Paris em metal. Ele exibe pregas e um cinto no mesmo tom que realça a cintura. Este modelo combina com outras criações Dioriviera para compor um look completo.",
                a: "Cinto no mesmo tom com fivela de metal",
                b: "Fechamento frontal com botões",
                c: "Botões de metal com inscrição Christian Dior Paris",
                d: "100% algodão",
                e: "Fabricado na Itália",
                img: "https://i.pinimg.com/736x/44/91/6b/44916b8ad73e60b636ea9e86e2517736.jpg",
                img2: "https://i.pinimg.com/236x/46/29/25/462925a8b54266e230ea3bbc211b2fdb.jpg",
                img3:"https://i.pinimg.com/236x/40/33/9b/40339b83402cadbde80bd499dbf9a530.jpg"
                },
                {
                    id: 6,
                    titulo: "Calça flare",
                    descricao: "Esta calça exibe o motivo Dior Oblique, um símbolo da Maison desde sua criação em 1969, em uma versão azul e cru. Confeccionada em jacquard de tafetá técnico, ela apresenta corte flare solto complementado por uma faixa com a inscrição Christian Dior ao longo da perna. Finalizada com bolsos faca laterais e um bolso posterior com zíper, a calça pode ser combinada com o anoraque do conjunto para compor um look exclusivo.",
                    a: "Faixa lateral com inscrição Christian Dior",
                    b: "Cós com elastano e cordão",
                    c: "Abertura nas pernas com zíper e cordão",
                    d: "100% poliéster",
                    e: "Fabricado na Itália",
                    img: "https://i.pinimg.com/236x/ef/38/02/ef380218a8f08dbf4d102096dfe482c4.jpg",
                    img2: "https://i.pinimg.com/236x/e4/dc/df/e4dcdf181a1f3b4255f713b398fcf2ee.jpg",
                    img3: "https://i.pinimg.com/564x/5d/14/30/5d14303bee130762fbc6525430fb9f37.jpg"
                    },
                    {
                        id: 7,
                        titulo: "Short-saia com fivela CD",
                        descricao: " Este short-saia é moderno e atemporal. Confeccionado em pele de cordeiro lisa preta, ele tem corte corola adornado com uma fivela CD com acabamento dourado no quadril e um bolso em patch na parte de trás. O modelo agrega o toque final a uma blusa lisa ou estampada.",
                        a: "Cós fino com fivela CD com acabamento dourado",
                        b: "Fechamento lateral com zíper, botão e colchete de gancho duplo",
                        c: "Forro preto",
                        d: "100% couro",
                        e: "Fabricado na Itália",
                        img: "https://i.pinimg.com/236x/40/28/94/4028949aba8eeea5f792bed1e4c001ca.jpg",
                        img2: "https://i.pinimg.com/236x/2c/d7/c7/2cd7c7f7802b5d3de656efc07ec5ddd0.jpg",
                        img3:"https://i.pinimg.com/236x/14/d4/51/14d451c88db6cc62cd78245939fad129.jpg"
                        },
                        {
                            id: 8,
                            titulo: "Short-saia Dioriviera",
                            descricao: "Parte da coleção cápsula Dioriviera, este short-saia exibe o motivo Toile de Jouy Sauvage, uma nova versão do padrão exclusivo da Maison. Confeccionado em jacquard de tafetá técnico branco e azul, ele é valorizado por fendas duplas laterais que criam um contraste elegante, além de dois bolsos com zíper na frente. A inscrição Christian Dior adorna a faixa lateral vertical e a abertura do bolso. Leve e refinado, este short-saia pode ser combinado com outras criações Dioriviera para compor um look completo.",
                            a: "Fendas laterais",
                            b: "Cós elástico",
                            c: "Sem forro",
                            d: "100% poliéster",
                            e: "Fabricado na Itália",
                            img: "https://i.pinimg.com/236x/6d/ee/8f/6dee8f9282b49222bc82401400549c23.jpg",
                            img2: "https://i.pinimg.com/564x/fe/a4/cf/fea4cf7281d827615a9e716e6e2c970a.jpg",
                            img3:"https://i.pinimg.com/236x/c0/cc/f3/c0ccf393099b25da643ae7dd89504d2b.jpg"
                            },
                            {
                                id: 9,
                                titulo: "Short-saia",
                                descricao: "Este short-saia exibe o icônico motivo Dior Oblique azul e cru. Confeccionado em jacquard de tafetá técnico, ele exibe um corte levemente flare valorizado por uma fivela Christian Dior com inspiração utilitária na cintura. O short-saia pode ser combinado com a jaqueta bomber do conjunto para compor um look completo.",
                                a: "Fivela de inspiração utilitária com inscrição Christian Dior",
                                b: "Sem forro",
                                c: "100% poliéster",
                                d: "Fivela de ferro",
                                e: "Fabricado na Itália",
                                img: "https://i.pinimg.com/736x/42/e6/64/42e664622f8e819cf29676d87134e4a2.jpg",
                                img2: "https://i.pinimg.com/236x/f8/dc/69/f8dc69778693aa28c5a93f7fac558fb6.jpg",
                                img3:"https://i.pinimg.com/236x/c6/dd/10/c6dd10cb734242e4ef00bfae582499c0.jpg"
                                },
                                {
                                    id: 10,
                                    titulo: "Calça cropped",
                                    descricao: "Esta calça preta é uma peça elegante e minimalista, fiel aos códigos da Maison. Confeccionada em lã e seda, ela apresenta um corte cropped valorizado por um plissado delicado e uma faixa fina que destaca a cintura, podendo ser combinada com uma malha de cashmere, uma camiseta estampada ou o tailleur Bar.",
                                    a: "Cós fino",
                                    b: "Fechamento com zíper oculto na frente",
                                    c: "Estilo plissado",
                                    d: "Forro no mesmo tom",
                                    e: "Fabricado na Itália",
                                    img: "https://i.pinimg.com/236x/21/f9/11/21f9110696ef53430dd1f250a48f78e8.jpg",
                                    img2: "https://i.pinimg.com/236x/8a/7a/7b/8a7a7b53b5b75da8294d081b8e2d2bac.jpg",
                                    img3:"https://i.pinimg.com/236x/b3/a9/02/b3a9028c791df8e6e05483e9adf5bcee.jpg"
                                    },
                                    {
                                        id: 11,
                                        titulo: "Blusa Dioriviera com mangas curtas",
                                        descricao: "Parte da coleção cápsula Dioriviera, este pulôver reúne modernidade e elegância. Confeccionado em malha de cashmere verde-cobalto, o modelo exibe a estrela da Maison e a inscrição Christian Dior. As mangas curtas levemente bufantes e o acabamento canelado completam a blusa, que pode ser combinada com outras criações Dioriviera",
                                        a: "Estrela e inscrição Christian Dior bordadas na frente",
                                        b: "Gola, bainha e barra das mangas caneladas",
                                        c: "100% cashmere (trama 5)*",
                                        d: "Tratar com cuidado extra e lavar a seco delicadamente",
                                        e: "Fabricado na Itália",
                                        img: "https://i.pinimg.com/236x/a4/0b/e9/a40be9a8c625a02767a30c0825e3132f.jpg",
                                        img2: "https://i.pinimg.com/236x/76/8f/c7/768fc735df21ba2bd5f1f6beb6422bc0.jpg",
                                        img3:"https://i.pinimg.com/564x/4b/db/55/4bdb55078901445dd777c99c5eb0ccd3.jpg"
                                        },
                                        {
                                            id: 12,
                                            titulo: "Jeans flare Dioriviera",
                                            descricao: "Parte da coleção cápsula Dioriviera, esta calça em denim destaca-se por uma silhueta flare elegante com bolsos em patch. Confeccionada em denim de algodão branco, ela exibe uma silhueta solta e minimalista adornada com uma etiqueta jacron com a inscrição Christian Dior Paris na parte de trás. A calça jeans completa facilmente qualquer look casual.",
                                            a: "Etiqueta jacron Christian Dior Paris na parte de trás",
                                            b: "Com passantes",
                                            c: "Fechamento com zíper e colchete de gancho oculto",
                                            d: "100% algodão",
                                            e: "Fabricado na Itália",
                                            img: "https://i.pinimg.com/736x/29/31/21/293121006af60b7b4321d947e1050b61.jpg",
                                            img2: "https://i.pinimg.com/236x/22/b7/52/22b752c67320e93fe4dc1dd689d14ec7.jpg",
                                            img3:"https://i.pinimg.com/236x/17/c4/75/17c4753188aaa806ee1ebe723fd4d567.jpg"
                                            }
];

export async function GET(){
    return NextResponse.json(listaDeRoupa)
}