"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const [conflict, setConflict] = useState(false);
  const [priority, setPriority] = useState("Low");
  const [tags, setTags] = useState([]);
  const [workspace, setWorkspace] = useState("");
  const [filters, setFilters] = useState({
    status: "",
    conflict: false,
    priority: "",
    workspace: "",
    tags: "",
    date: "", // Añadir campo de fecha
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get("/api/tasks");
    setTasks(response.data.data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      status,
      workspace,
      conflict,
      priority,
      tags,
      date: new Date(),
    }; // Añadir fecha actual
    try {
      await axios.post("/api/tasks", newTask);
      fetchTasks();
      setTitle("");
      setDescription("");
      setStatus("To Do");
      setConflict(false);
      setPriority("Low");
      setTags([]);
      setWorkspace("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete("/api/tasks", { data: { id } });
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const updateTask = async (id, updates) => {
    try {
      const response = await axios.put("/api/tasks", { id, ...updates }); // Enviar el ID en el cuerpo de la solicitud
      if (response.status === 200) {
        fetchTasks();
      } else {
        console.error("Error updating task:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const toggleTag = (tag) => {
    setTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      (filters.status ? task.status === filters.status : true) &&
      (filters.conflict ? task.conflict === filters.conflict : true) &&
      (filters.priority ? task.priority === filters.priority : true) &&
      (filters.tags ? task.tags.includes(filters.tags) : true) &&
      (filters.date
        ? new Date(task.date).toLocaleDateString() ===
          new Date(filters.date).toLocaleDateString()
        : true) &&
      (filters.workspace ? task.workspace === filters.workspace : true)
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <form onSubmit={addTask} className="mb-4">
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
            <option value="Discard">Discard</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Workspace
          </label>
          <select
            value={workspace}
            onChange={(e) => setWorkspace(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="Trabajo">Trabajo</option>
            <option value="Task manager">Task manager</option>
            <option value="Trading App">Trading App</option>
            <option value="Personal">Personal</option>
          </select>
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Conflict
          </label>
          <input
            type="checkbox"
            checked={conflict}
            onChange={(e) => setConflict(e.target.checked)}
            className="mt-1 block"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          {["WebApp", "Blockchain", "Design", "Experimental", "Improve"].map(
            (tag) => (
              <div key={tag} className="inline-block mr-2">
                <input
                  type="checkbox"
                  checked={tags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                  className="mr-1"
                />
                <label>{tag}</label>
              </div>
            )
          )}
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Task
        </button>
      </form>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold  flex">Filters</h2>
        <div className=" flex justify-center items-center space-x-2">
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">All</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
            <option value="Discard">Discard</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <label className="block text-sm font-medium text-gray-700">
            Conflict
          </label>
          <input
            type="checkbox"
            checked={filters.conflict}
            onChange={(e) =>
              setFilters({ ...filters, conflict: e.target.checked })
            }
            className="block"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label className="block text-sm font-medium text-gray-700">
            Priority
          </label>
          <select
            value={filters.priority}
            onChange={(e) =>
              setFilters({ ...filters, priority: e.target.value })
            }
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <label className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <input
            type="text"
            value={filters.tags}
            onChange={(e) => setFilters({ ...filters, tags: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter tag"
          />
        </div>

        <div className="flex items-center space-x-2">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Conflict
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Priority
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tags
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredTasks.map((task) => (
            <tr key={task._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {task.title}
              </td>
              <td className="px-6 py-4 text-sm max-w-[630px] break-words h-auto text-gray-500">
                {task.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm w-[170px] text-gray-500">
                <select
                  value={task.status}
                  onChange={async (e) => {
                    await updateTask(task._id, { status: e.target.value });
                  }}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Discard">Discard</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm w-[170px] text-gray-500">
                <select
                  value={task.workspace}
                  onChange={async (e) => {
                    await updateTask(task._id, { workspace: e.target.value });
                  }}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="Trabajo">Trabajo</option>
                  <option value="Task manager">Task manager</option>
                  <option value="Trading App">Trading App</option>
                  <option value="Personal">Personal</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex justify-center">
                  <input
                    type="checkbox"
                    checked={task.conflict}
                    onChange={async (e) => {
                      await updateTask(task._id, {
                        conflict: e.target.checked,
                      });
                    }}
                  />
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm w-[150px] text-gray-500">
                <select
                  value={task.priority}
                  onChange={async (e) => {
                    await updateTask(task._id, { priority: e.target.value });
                  }}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {task.tags.join(", ")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(task.date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
