import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import UseAxiosSequre from '../../Hooks/UseAxiosSequre';
import { toast, ToastContainer } from 'react-toastify';
import { FaTrashRestore } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [selectedRole, setSelectedRole] = useState("");
    const axiooSecure = UseAxiosSequre();
    const { data, refetch} = useQuery({
        queryKey: ["users", selectedRole],
        queryFn: async () => {
            const res = await axiooSecure.get(selectedRole ? `/admin-users?role=${selectedRole}` : "/admin-users");
            console.log("allUsers:", allUsers);
            return res.data;
        }
    })
    
    const allUsers = Array.isArray(data) ? data : [];

    

    // role change
    const handleUserRoleChange = async (user, role) => {
        const updateRole = {
            role: role,
        }
        await axiooSecure.patch(`/users/${user._id}`, updateRole)
            .then(res => {
                if (res.data.modifiedCount) {
                    console.log("updated user role", res.data);
                    toast(`updated ${user.displayName} role as: "${role}"`);
                    refetch();
                }
            })
    }

    // delete user
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able delete this User(${user.displayName})!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiooSecure.delete(`/admin-user/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            console.log("after delete the review:", res.data);
                            Swal.fire({
                                title: "Deleted!",
                                text: `The user(${user.displayName}) has been deleted.`,
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h3 className="text-5xl font-bold text-center text-primary my-10">Manage Users</h3>
            <div className='border-b border-gray-300 '></div>

            {/* filter */}
            <div className="dropdown dropdown-right dropdown-end my-10">
                <div tabIndex={0} role="button" className="btn m-1 btn-primary">Filter By Role ➡️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => setSelectedRole("student")}>Student</a></li>
                    <li><a onClick={() => setSelectedRole("modaretor")}>Modaretor</a></li>
                    <li><a onClick={() => setSelectedRole("admin")}>Admin</a></li>
                </ul>
            </div>

            {/* user table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                NO
                            </th>
                            <th>Users Informatios</th>
                            <th>Date</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((user, index) => <tr key={user._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photoURL}
                                                    alt="user image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.displayName}</div>
                                            <div className="text-sm opacity-50">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.createAT}
                                </td>
                                <td className={`${user.role === "student" && 'text-blue-500'} ${user.role === "modaretor" && 'text-yellow-500'} ${user.role === "admin" && 'text-green-500'}`}>{user.role}</td>
                                <td className='flex gap-3'>

                                    {/* role change */}
                                    <div className="dropdown dropdown-right">
                                        <div tabIndex={0} role="button" className="btn m-1 text-red-500">Role Change</div>
                                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                            <li><a onClick={() => handleUserRoleChange(user, "student")}>Student</a></li>
                                            <li><a onClick={() => handleUserRoleChange(user, "modaretor")}>Modaretor</a></li>
                                            <li><a onClick={() => handleUserRoleChange(user, "admin")}>Admin</a></li>
                                        </ul>
                                    </div>

                                    {/* delete */}
                                    <button onClick={() => handleDeleteUser(user)} className='btn text-red-500'><FaTrashRestore /></button>
                                </td>
                            </tr>)
                        }



                    </tbody>

                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ManageUsers;