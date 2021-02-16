module.exports = {
  stories: [
    //'../src/stories/*.stories.mdx',
    //'../src/stories/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/stories.tsx'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, '@babel/plugin-transform-react-jsx']
  }),
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
