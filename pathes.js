const directories = {
  src: './assets/src/',
  dev: `./assets/dev/`,
  public: `./public/`,
  css: 'styles/',
  fonts: 'fonts/',
  images: 'images/'
};
const path = {
  css: {
    src: `${directories.src + directories.css}*.scss`,
    watcher: `${directories.src + directories.css}**/*.scss`,
    dev: `${directories.dev + directories.css}`,
    public: `${directories.public + directories.css}`
  },
  images: {
    src: `${directories.src + directories.images}**/*.*`,
    watcher: `${directories.src + directories.images}**/*.*`,
    dev: `${directories.dev + directories.images}`,
    public: `${directories.public + directories.images}`
  },
  fonts: {
    src: `${directories.src + directories.fonts}**/*.*`,
    watcher: `${directories.src + directories.fonts}**/*.*`,
    dev: `${directories.dev + directories.fonts}`,
    public: `${directories.public + directories.fonts}`
  },
  html: {
    src: `${directories.src}*.html`,
    watcher: `${directories.src}*.html`,
    dev: directories.dev,
    public: directories.public
  }
};

module.exports = { path, directories };
