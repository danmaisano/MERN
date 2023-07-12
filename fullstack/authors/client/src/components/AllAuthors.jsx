import React, { useEffect } from "react";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";

const AllAuthors = (props) => {
  const { authorList, setAuthorList, deleteAuthor } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthorList(res.data);
      })
      .catch((err) => res.json({ message: "Something went wrong!", error: err }));
  }, []);

  return (
    <div>
      <h1 className="text-start">Favorite Authors</h1>
      <button className="btn btn-primary d-flex justify-content-start my-3">
        <Link to={'/authors/add'} className="text-light">Add A New Author</Link>
      </button>
      <table className="table table-hover table-bordered border-secondary table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {authorList.map((author) => {
            return (
              <tr key={author._id}>
                <td>{author.firstName} {author.lastName}</td>
                <td className="d-flex justify-content-center">
								<Link to={`/authors/update/${author._id}`}> 
									<button className="btn btn-primary btn-sm">
										Edit
									</button>
								</Link>
								<DeleteButton authorId={author._id} onDelete={deleteAuthor} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllAuthors;
