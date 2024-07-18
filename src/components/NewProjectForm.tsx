'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { createNewProject } from '../app/actions/projects';

export default function NewProjectForm() {
  const { data: session } = useSession();
  const [formState, setFormState] = useState({ ok: true, message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!session || !session.user) {
      setFormState({ ok: false, message: 'User session is not available.' });
      return;
    }
    const formData = new FormData(event.target);
    const user = {
      name: session.user.name || '',
      email: session.user.email || '',
    };
    try {
      await createNewProject(user, formData);
      setFormState({ ok: true, message: 'Project created successfully!' });
    } catch (error) {
      setFormState({ ok: false, message: error.message });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
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
      {/* <div className="flex flex-col">
        <label htmlFor="author" className="mb-2 font-bold">
          Author:
        </label>
        <input
          type="text"
          id="author"
          name="author"
          className="p-2 border-2 border-gold-default rounded-3xl"
        />
      </div> */}
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
      <div className="flex flex-col">
        <label htmlFor="openPositions" className="mb-2 font-bold">
          Open Positions:
        </label>
        <div className="p-2 border-2 border-gold-default rounded-3xl">
          <div className="flex items-center mb-2">
            <input type="checkbox" id="front-end" name="openPositions" value="front-end" className="mr-2" />
            <label htmlFor="front-end" className="text-lg">Front End</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="back-end" name="openPositions" value="back-end" className="mr-2" />
            <label htmlFor="back-end" className="text-lg">Back End</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="design" name="openPositions" value="design" className="mr-2" />
            <label htmlFor="design" className="text-lg">Design</label>
          </div>
        </div>
      </div>

      <button
          type="submit"
          className="p-3 border-none rounded-3xl bg-gradient-to-r from-maroon-light via-maroon-default to-maroon-dark text-beige-default cursor-pointer w-full"
      >
          Add Project
      </button>
      {formState && !formState.ok && <p className="text-red-500">{formState.message}</p>}
    </form>
  );
}
