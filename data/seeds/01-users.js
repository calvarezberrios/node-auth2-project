
exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: "calvarez",
      password: "$2a$10$hlAMW3FvxA3GrJgJeJ1r/ed2ml9nvE8V9qAtF/pSeStFyR.lDcnk2",
      department: "WEB"
    },
    {
        username: "sjohnson",
        password: "$2a$10$becX1OFHFuF3F7hjGe/deOpFx0GzoMV1j.Vx7D2RmyK1TqxMK1jBS",
        department: "SALES"
    },
    {
        username: "ralvarez",
        password: "$2a$10$Z4N48fnie0G37zmnA/2L5O5WbkPa1smC1vHb/83GjBL0YNOI6oM86",
        department: "WEB"
    },
    {
        username: "aalvarez",
        password: "$2a$10$gUwdzTI.JrQW65b4dRR54uD6iciZv3H5a1QVbojrkyCbNX1xhef7m",
        department: "MARKETING"
    },
    {
        username: "malvarez",
        password: "$2a$10$0rCfswEhT5j.UmT6L2pVQugI8WHE/jjN7KmYqZVLmhg/D4J9TDtfu",
        department: "SALES"
    },
  ])
  .then(() => console.log("** All seeds added to database **"));
};
