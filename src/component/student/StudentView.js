import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";

const StudentsView = () => {
	const [students, setStudents] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		loadStudents();
	}, [students]);

	//load students from database
	const loadStudents = async () => {
		const result = await axios.get("http://localhost:1002/students", {
			validateStatus: () => {
				return true;
			},
		});

		if (result.status === 302) {
			setStudents(result.data);
		}
	};

	// let implement the actions
	const handledelete = async (id) => {
		await axios.delete(`http://localhost:1002/students/delete/${id}`);
		loadStudents();
	};

	return (
		<section>
			<search>
				<Search search={search} setSearch={setSearch} />
			</search>
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Department</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-start">
					{students
						.filter((st) => st.firstName.toLowerCase().includes(search))
						.map((student) => (
							<tr key={student.id}>
								<th scope="row" key={student.id}>
									{student.id}
								</th>
								<td>{student.firstName}</td>
								<td>{student.lastName}</td>
								<td>{student.email}</td>
								<td>{student.department}</td>
								<td className="mx-2">
									<Link
										to={`/student-profile/${student.id}`}
										className="btn btn-info"
									>
										<FaEye />
									</Link>
								</td>
								<td className="mx-2">
									<Link
										to={`/edit-students/${student.id}`}
										className="btn btn-warning"
									>
										<FaEdit />
									</Link>
								</td>
								<td className="mx-2">
									<button
										className="btn btn-danger"
										onClick={() => handledelete(student.id)}
									>
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</section>
	);
};

export default StudentsView;
