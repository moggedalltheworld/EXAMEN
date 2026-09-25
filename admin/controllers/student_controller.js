export function home(req, res) {
  let students = [
    {
      "id": 1,
      "name" : "Juan",
      "apellido": "Perez",
      "carrer": "Ingeniería de Sistemas",
      "edad": "20"
    },
    {
      "id": 2,
      "name" : "Maria",
      "apellido": "Garcia",
      "carrer": "Ingeniería Civil",
      "edad": "21"
    },
    {
      "id": 3,
      "name" : "Carlos",
      "apellido": "Rodriguez",
      "carrer": "Ingeniería Industrial",
      "edad": "22"
    },
    {
      "id": 4,
      "name" : "Ana",
      "apellido": "Lopez",
      "carrer": "Arquitectura",
      "edad": "19"
    },
    {
      "id": 5,
      "name" : "Luis",
      "apellido": "Martinez",
      "carrer": "Ingeniería de Sistemas",
      "edad": "23"
    },
    
  ];

  return res.render('admin/students', {
    title: 'Admin Site)',
    students: students,
    currentPage: 'home',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}