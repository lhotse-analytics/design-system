import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "ivoflow",
    description: "A Brand and UI Guide",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Product Guidelines', link: '/product/'},
            {text: 'Brand Guidelines', link: '/corporate/'},
        ],

        sidebar: {
            '/product/': [
                {
                    text: 'Introduction',
                    link: 'product/introduction',
                },
                {
                    text: 'Getting Started',
                    link: '/product/getting-started',
                },
                {
                    text: 'Folder Structure',
                    link: '/product/file-structure',
                },
                {
                    text: 'Naming conventions',
                    link: '/product/naming-conventions',
                },
                {
                    text: 'Writing classes',
                    link: '/product/writing-classes',
                },
                {
                    text: 'Design Tokens',
                    items: [
                        {text: 'Colors', link: '/product/tokens/colors'},
                        {text: 'Typography', link: '/product/tokens/typography'},
                        {text: 'Layout', link: '/product/tokens/layout'},
                        {text: 'Spacing', link: '/product/tokens/spacing'},
                        {text: 'Shadows', link: '/product/tokens/box-shadows'},
                        {text: 'Border Radius', link: '/product/tokens/border-radius'},
                        {text: 'Mixins', link: '/product/tokens/mixins'}
                    ]
                },
                {
                    text: 'Atoms',
                    items: [
                        {text: 'Buttons', link: '/product/atoms/button'},
                        {text: 'Inputs', link: '/product/atoms/input'}
                    ]
                }
            ],
            '/corporate/': [
                {
                    text: 'Corporate Identity',
                    items: [
                        {text: 'Identity', link: '/corporate/identity'}
                    ]
                },
                {
                    text: 'Corporate Design',
                    items: [
                        {text: 'Logo', link: '/corporate/logo'},
                        {text: 'Colors', link: '/corporate/colors'},
                        {text: 'Typography', link: '/corporate/typography'}
                    ]
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
