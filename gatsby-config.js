module.exports = {
    siteMetadata: {
        title: 'Gatsby + Contentstack',
    },
    plugins: [{
            resolve: 'gatsby-source-contentstack',
            options: {
                'api_key': 'blt551008fa5284beea',
                'access_token': 'cs0aee2cb1381a2215a86a4bfe',
                'environment': 'development'
            },
        },
        'gatsby-plugin-react-helmet'
    ],
}