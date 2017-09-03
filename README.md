OpenCMISS Website
=================

Source for the new OpenCMISS website.
License TBD.

Dependencies
------------
* Python 2.7.
* nodejs
* npm
* bower (installed through npm)
* grunt-cli (installed through npm)
* virtualenv
* make
* doxygen

The project also depends on packages from npm, bower, pip, as well as projects from GitHub.

Building the website
--------------------

1. Install dependencies from your system's packaging manager. In Ubuntu 16.04 or Debian jessie, run this:

   ```
   sudo apt-get install git python nodejs npm virtualenv make doxygen
   sudo npm -g install bower
   sudo npm -g install grunt-cli
   ```
   If you are using Ubuntu, please also install nodejs-legacy:
   
   ```
   sudo apt-get install nodejs-legacy
   ```
   
   These commands require superuser privilege. Please ask your local IT administrator for help if necessary.
   In the future a Guix package script may be provided to take care of the installation.
   

2. Clone this repository:

   ```
   git clone https://github.com/OpenCMISS/website
   ```

3. Download projects the website depends on:

   ```
   cd website/
   git submodule update --init
   git clone -b master https://github.com/OpenCMISS/documentation doc/latest/
   ```

4. Do a build:

   Run the following. Replace [URL] with the root of where this site will be hosted, e.g. "next.opencmiss.org". This is used for generating a sitemap for the website. 

   ```
   SITE_URL=[URL] make
   ```
5. The built website is now available in `build/dist/`. Serve with your favourite web server.

Editing the website interactively
--------------------

The build script also supports an interactive editing mode, which allows you to edit the source of the website and see the changes in a browser. To run the build script in this way, do steps 1 to 3 outlined in Building the website section above. Then, run 

   ```
   SITE_URL=[URL] make debug
   ```
   
After building, the build script will automatically launch a Web browser window showing the built website. It's also available by visiting http://localhost:9000 in any Web browser. When you change the source code and save it to disk, the script will rebuild the website, and the browser window will be automatically reloaded to reflect the changes.
