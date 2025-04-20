import { React, useRef, useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
const TodoItems = (props) => {
  const dialog = useRef();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(props.todo.title);

  const openModal = (isEditing) => {
    isEditing ? setEdit(true) : setEdit(false);
    dialog.current.showModal();
  };
  const closeModal = () => {
    dialog.current.close();
  };
  const clickOutSite = (e) => {
    let outsite = e.target;
    outsite === dialog.current ? closeModal() : null;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const task = {
      title: title,
      date: props.todo.date,
    };
    edit ? props.updateTask(task, props.id) : props.deleteTask(props.id);
    closeModal();
  };

  return (
    <>
      <li className="flex bg-white rounded shadow-sm p-4 mt-4 first:mt-0">
        <div className="flex gap-x-4 w-full mr-auto items-center">
          <div className="h-6 w-6 rounded-full shadow-sm text-white text-sm bg-teal-400 text-center content-center">
            <p>{props.id + 1}</p>
          </div>
          <div>
            <p className="font-semibold">{props.todo.title}</p>
            <p className="text-sm text-gray-400">{props.todo.date}</p>
          </div>
          <div className="items-center ml-auto">
            <Menu>
              <MenuButton className="text-2xl text-gray-500 cursor-pointer rotate-90 focus:outline-none">
                ...
              </MenuButton>
              <MenuItems
                transition
                anchor="bottom-end"
                className="grid gap-2 rounded-md bg-white p-2 border border-gray-200 focus:outline-none"
              >
                <MenuItem>
                  <button
                    onClick={() => openModal(true)}
                    type="button"
                    className="cursor-pointer hover:bg-blue-600 hover:text-white rounded py-1 px-4"
                  >
                    Edit
                  </button>
                </MenuItem>
                <hr className="opacity-20" />
                <MenuItem>
                  <button
                    onClick={() => openModal(false)}
                    type="button"
                    className="cursor-pointer hover:bg-blue-600 hover:text-white rounded py-1 px-4"
                  >
                    Delete
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </li>
      <dialog
        ref={dialog}
        onClick={clickOutSite}
        className="w-[480px] rounded-md"
      >
        <form className="p-6">
          <div className="font-semibold text-xl">
            {edit ? "Edit Task" : "Do you want to delete?"}
          </div>
          <div className="mt-2">
            {edit ? (
              <input
                id="title"
                className="focus:outline-none w-full border p-2 rounded-md border-gray-200"
                type="text"
                maxLength="30"
                placeholder="Type something here..."
                autoFocus
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            ) : (
              "This will permanently delete this task."
            )}
            <div className="mt-2 text-end space-x-4">
              <button
                onClick={closeModal}
                type="button"
                className="rounded cursor-pointer border border-gray-200 px-3 py-2 hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={submitForm}
                type="button"
                className={`rounded-md cursor-pointer ${
                  edit
                    ? "bg-teal-500 text-white px-3 py-2 hover:bg-teal-600"
                    : "bg-red-500 text-white px-3 py-2 hover:bg-red-600"
                }`}
              >
                {edit ? "Confirm" : "Delete"}
              </button>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default TodoItems;
