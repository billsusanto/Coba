'use client';

import { useFormState } from 'react-dom';
import { createNewProject } from '../actions/projects';

export default function NewProjectForm() {
  const [state, action] = useFormState(createNewProject, null);

  return (
    <form
      action={action}
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border border-gray-300 rounded-lg bg-gray-50"
    >
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-2 font-bold">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="subheading" className="mb-2 font-bold">
          Subheading:
        </label>
        <input
          type="text"
          id="subheading"
          name="subheading"
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="mb-2 font-bold">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          required
          className="p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label htmlFor="status" className="mb-2 font-bold">
          Status:
        </label>
        <select
          id="status"
          name="status"
          required
          className="p-2 border border-gray-300 rounded"
        >
          <option value="planning">Planning</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button
        type="submit"
        className="p-3 border-none rounded bg-blue-500 text-white cursor-pointer"
      >
        Add Project
      </button>
      {state && !state.ok && <p className="text-red-500">{state.message}</p>}
    </form>
  );
}
