exports.getIndexPage = (req, res) => {
    res.status(200).render('index', {
      pageName: 'index',
    });
  };

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    pageName: 'about',
  });
};