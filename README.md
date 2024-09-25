# Gatsby & Ghost CMS CRUD Aplikacija

Ova aplikacija omogućuje kreiranje, prikaz, ažuriranje i brisanje objava (CRUD funkcionalnosti) koristeći **Gatsby** kao frontend te **Ghost CMS** kao backend za upravljanje sadržajem.

## Preduvjeti

- Node.js (preporučena verzija: 20.x) - Preuzmi i instaliraj Node.js s [službene stranice](https://nodejs.org/).
- Gatsby CLI 
- Ghost CMS lokalno ili udaljeno postavljen

  
1. **Pripremanje okruženja**

    ```shell
    # instalacija Gatsby-ja lokalno
    npm install 
    npm install -g gatsby-cli
    ```


     ```shell
   U direktoriju gdje će se nalaziti CMS pokreće se
    # instalacija Ghost CMS-a lokalno
    ghost install local
    ```

    ```shell
    # pokretanje Ghost CMS-a
    ghost start
    ```

1.  **Kreiranje Gatsby mrežnog mjesta.**

    

    ```shell
    
    gatsby new gatsby-starter-ghost https://github.com/TryGhost/gatsby-starter-ghost    ```

1.  **Razvoj.**

    

    ```shell
    cd gatsby-starter-ghost
    #dodavanje ovisnosti
    npm install
    #pokretanje projekta
    gatsby develop
    ```


   **Povezivanje Gatsby i Ghost CMS-a**
   ```shell
    u Ghost CMS-u u postavkama u integrations kreira se custom API key.
    u uređivaču koda otvara se datoteka .ghost.json gdje se pod apiURL i contentApiKey dodaju podaci genrirani u custom API kljucu.
    ```
   

1. **CRUD funkcionalnosti**
   kreiranje objave (create)
      Opis: Kreiranje novih objava omogućeno je putem Ghost CMS Admin sučelja ili kroz prilagođeno Admin sučelje unutar Gatsby aplikacije.

   Kako koristiti:

   Prijavi se u Ghost Admin sučelje (http://localhost:2368/ghost).
   Klikni na "New post".
   Unesi naslov i sadržaj objave.
   Objavi objavu.
   Alternativno: U Gatsby aplikaciji može se koristiti prilagođeni AdminPage gdje se mogu unositi naslov i sadržaj objava, a zatim poslati objavu na server pomoću        Ghost API-ja

 Prikaz objava (Read)
   Opis: Svi objavljeni postovi dostupni su za pregled na glavnoj stranici aplikacije putem Gatsby frontenda.

   Kako koristiti:

   Kada se kreira i objavi objava u Ghost Admin sučelju, Gatsby aplikacija automatski dohvaća i prikazuje sve postove na početnoj stranici (ili na prilagođenoj stranici za popis objava).
   Postovi se prikazuju pomoću GraphQL upita iz Ghost API-ja.

Ažuriranje objave (Update)
   Opis: Objave se ažuriraju kroz formu koja se pojavljuje klikom na gumb Ažuriraj koji je vidljiv na svakoj objavi.
   Kako koristiti:

   Pronađi post koji želiš urediti na mrežnom mjestu.
   Uredi naslov i/ili sadržaj objave.
   Klikni na "Spremi promjene" kako bi objavio ažurirane promjene.
   Napomena: Promjene se automatski odražavaju na frontendu nakon što Gatsby ponovno generira stranice s novim podacima.

Brisanje objava (Delete)
   Opis: Postovi se mogu brisati putem Ghost Admin sučelja ili pomoću prilagođene funkcije u Gatsby aplikaciji.

   Kako koristiti:

   U Ghost Admin sučelju pronađi post koji želiš obrisati.
   Klikni na opciju "Delete" i potvrdi brisanje.
   Alternativno: U Gatsby aplikaciji možeš koristiti prilagođeni gumb za brisanje u AdminPage komponenti, koji šalje zahtjev za brisanje objave putem Ghost API-ja:
    Na mrežnom mjestu odaberi objavu koju želiš ukloniti.
    Klikni na gumb "Obriši". 

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries).

    Open the `gatsby-ghost-crud` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a typical Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/docs/tutorial/getting-started/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.


