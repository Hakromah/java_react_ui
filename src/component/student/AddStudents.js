import React, { useState } from "react";

export const AddStudents = () => {
	const [student, setStudent] = useState({
		firstName: "",
		lastName: "",
		email: "",
		department: "",
	});

	const { firstName, lastName, email, department } = student;
	return (
		<div className="col-sm-8 py-2 px-5">
			<form action="">
				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="firstName">
						First Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="firstName"
						id="firstName"
						required
						value={firstName}
					/>
				</div>
				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="lastName">
						Last Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="lastName"
						id="lastName"
						required
						value={lastName}
					/>
				</div>
				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="email">
						Email
					</label>
					<input
						className="form-control col-sm-6"
						type="email"
						name="email"
						id="email"
						required
						value={email}
					/>
				</div>
				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="department">
						Department
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="department"
						id="department"
						required
						value={department}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
