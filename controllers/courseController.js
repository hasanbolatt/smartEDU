const Course = require('../models/Course');
const Category = require('../models/Category');

//Ekleme
exports.createCourse = async (req, res) => {
  try {
  const course = await Course.create(req.body);
  
    res.status(201).json({
      status: 'succes',
      course,
    });
  } catch(error) {
    res.status(400).json({
      status: 'fail',
      error,
     });
  }
}

//Kurlsarı listeleme
exports.getAllCourses = async (req, res) => {
  try {

  const categorySlug = req.query.categories;
  const category = await Category.findOne({slug:categorySlug});

  let filter = {};

  if(categorySlug)
  {
    filter = {category:category._id}
  }

  const courses = await Course.find(filter);
  
  const categories = await Category.find();  

    res.status(200).render('courses',{
      courses,
      categories,
      pageName: 'courses',
    })
  } catch(error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

//Tek kurs için ayrı sayfada açma
exports.getCourse = async (req, res) => {
  try {
  const courses = await Course.findOne({slug:req.params.slug});
  
    res.status(200).render('course',{
      courses,
      pageName: 'course',
    })
  } catch(error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
