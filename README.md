<h1 align="center">
  Ocean Data Foundation Website
</h1>

## π Quick start

1.  **Download site dependencies.**

    Use Yarn to install packages from the NPM package manager.

    ```shell
    # add packages with yarn
    yarn
    ```

    If you don't have Yarn installed on your machine, follow installation
    instructions from [yarnpkg.org](https://yarnpkg.com/en/docs/install)

1)  **Start developing.**

    Navigate into the siteβs directory and start it up.

    ```shell
    cd ODF-Landingpage/
    yarn develop
    ```

    NB: Make sure you are on the development- or a feature branch before
    committing changes in your code.

1)  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_.
    This is a tool you can use to experiment with querying data from contentful.
    Learn more about using this tool in the
    [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## π§ What's inside?

A quick look at the top-level files and directories you'll see in the project.

    .
    βββ node_modules
    βββ src
    βββ .gitignore
    βββ .prettierrc
    βββ gatsby-browser.js
    βββ gatsby-config.js
    βββ gatsby-node.js
    βββ gatsby-ssr.js
    βββ LICENSE
    βββ package-lock.json
    βββ package.json
    βββ README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that
    your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you
    will see on the front-end of the site such as the site header or a page
    template. `src` is a convention for βsource codeβ.

3.  **`.gitignore`**: This file tells git which files it should not track / not
    maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for
    [Prettier](https://prettier.io/). Prettier is a tool to help keep the
    formatting of the code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage
    of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/)
    (if any). These allow customization/extension of default Gatsby settings
    affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby
    site. This is where you can specify information about the site (metadata)
    like the title and description, which Gatsby plugins youβd like to include,
    etc. (Check out the
    [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more
    detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of
    the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any).
    These allow customization/extension of default Gatsby settings affecting
    pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of
    the
    [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/)
    (if any). These allow customization of default Gatsby settings affecting
    server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`yarn.lock`** (See `package.json` below, first). This is an automatically
    generated file based on the exact versions of your npm dependencies that
    were installed for your project. **(You wonβt change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes
    things like metadata. This manifest is how npm knows which packages to
    install for your project.

## π« Deploy

This site is linked to a
[github](https://github.com/OceanDataFoundation/ODF-Landingpage) repository to
make continuous deployment fast and easy.

Each time you push to the master- or stage branch on GitHub, Netlify runs a
build and deploys the result to their CDN.

**`master`** branch deploys the production build at
[oceandata.earth](https://www.oceandata.earth/)

**`stage`** branch deploys a test/preview build at
[oceandata-preview.netlify.com](https://oceandata-preview.netlify.com/). This
build is password protected with the following password: odfp@ssw0rd1#
