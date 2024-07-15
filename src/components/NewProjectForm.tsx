'use client';
import { useFormState } from 'react-dom';
import { createNewProject } from '@/src/app/actions/projects';

export default function NewProjectForm() {
  const [state, action] = useFormState(createNewProject, null);

  return (
    <form
      action={action}
      className="flex flex-col gap-4 w-one-third-width mx-auto border border-gold-dark rounded-3xl bg-gold-light text-2xl p-10"
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
          className="p-2 border-2 border-gold-default rounded-3xl"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="author" className="mb-2 font-bold">
          Author:
        </label>
        <input
          type="text"
          id="author"
          name="author"
          className="p-2 border-2 border-gold-default rounded-3xl"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="location" className="mb-2 font-bold">
          Location:
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className="p-2 border-2 border-gold-default rounded-3xl"
        />
      </div>
      {/* <div className="flex flex-col">
        <label htmlFor="status" className="mb-2 font-bold">
          Status:
        </label>
        <select
          id="status"
          name="status"
          required
          className="p-2 border-2 border-gold-default rounded-3xl"
        >
          <option value="planning">Planning</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div> */}
      <div className="flex flex-col">
        <label htmlFor="openPositions" className="mb-2 font-bold">
          Open Positions:
        </label>
        <select
          id="openPositions"
          name="openPositions"
          required
          className="p-2 border-2 border-gold-default rounded-3xl"
        >
          <option value="front-end">Front End</option>
          <option value="back-end">Back End</option>
          <option value="design">Design</option>
        </select>
      </div>

      <button
          type="submit"
          className="p-3 border-none rounded-3xl bg-gradient-to-r from-maroon-light via-maroon-default to-maroon-dark text-beige-default cursor-pointer w-full"
      >
          Add Project
      </button>
      {state && !state.ok && <p className="text-red-500">{state.message}</p>}
    </form>
  );
}