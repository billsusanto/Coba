// 'use client';
// import { useState } from 'react';
// import { useSession } from 'next-auth/react';
// import { createNewProject } from '../app/actions/projects';

// export default function NewProjectForm() {
//   const { data: session } = useSession();
//   const [formState, setFormState] = useState({ ok: true, message: '' });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!session || !session.user) {
//       setFormState({ ok: false, message: 'User session is not available.' });
//       return;
//     }
//     const formData = new FormData(event.target);
//     const user = {
//       name: session.user.name || '',
//       email: session.user.email || '',
//     };
//     try {
//       await createNewProject(user, formData);
//       setFormState({ ok: true, message: 'Project created successfully!' });
//     } catch (error) {
//       setFormState({ ok: false, message: error.message });
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-4 w-one-third-width mx-auto border border-gray-600 rounded-3xl bg-gray-100 text-2xl p-10"
//     >
//       <div className='flex flex-col items-center'>
//         <span className='font-bold'>New Project</span>
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="title" className="mb-2 font-bold">
//           Title:
//         </label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           required
//           className="p-2 border-2 border-gray-200 rounded-2xl"
//         />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="location" className="mb-2 font-bold">
//           Location:
//         </label>
//         <input
//           type="text"
//           id="location"
//           name="location"
//           className="p-2 border-2 border-gray-200 rounded-2xl"
//         />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="description" className="mb-2 font-bold">
//           Description:
//         </label>
//         <textarea
//           id="description"
//           name="description"
//           className="p-2 border-2 border-gray-200 rounded-2xl"
//         />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="masterplan" className="mb-2 font-bold">
//           Masterplan:
//         </label>
//         <textarea
//           id="masterplan"
//           name="masterplan"
//           className="p-2 border-2 border-gray-200 rounded-2xl"
//         />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="interests" className="mb-2 font-bold">
//           Interests:
//         </label>
//         <div className="p-2 border-2 border-gray-200 rounded-2xl">
//           <div className="flex items-center mb-2">
//             <input type="checkbox" id="computer-science" name="interests" value="computer-science" className="mr-2" />
//             <label htmlFor="computer-science" className="text-lg">Computer Science</label>
//           </div>
//           <div className="flex items-center mb-2">
//             <input type="checkbox" id="marketing" name="interests" value="marketing" className="mr-2" />
//             <label htmlFor="marketing" className="text-lg">Marketing</label>
//           </div>
//           <div className="flex items-center mb-2">
//             <input type="checkbox" id="finance" name="interests" value="finance" className="mr-2" />
//             <label htmlFor="finance" className="text-lg">Finance</label>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="openRoles" className="mb-2 font-bold">
//           Open Roles:
//         </label>
//         <div className="p-2 border-2 border-gray-200 rounded-2xl">
//           <div className="flex items-center mb-2">
//             <input type="checkbox" id="front-end" name="openRoles" value="front-end" className="mr-2" />
//             <label htmlFor="front-end" className="text-lg">Front End</label>
//           </div>
//           <div className="flex items-center mb-2">
//             <input type="checkbox" id="back-end" name="openRoles" value="back-end" className="mr-2" />
//             <label htmlFor="back-end" className="text-lg">Back End</label>
//           </div>
//           <div className="flex items-center mb-2">
//             <input type="checkbox" id="design" name="openRoles" value="design" className="mr-2" />
//             <label htmlFor="design" className="text-lg">Design</label>
//           </div>
//         </div>
//       </div>

//       <button
//           type="submit"
//           className="p-3 border-none rounded-2xl bg-gradient-to-r from-customBlue-light via-customBlue-default to-customBlue-dark text-white cursor-pointer w-full"
//       >
//           Add Project
//       </button>
//       {formState && !formState.ok && <p className="text-red-500">{formState.message}</p>}
//     </form>
//   );
// }

'use client';
import { useState, ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import { useSession } from 'next-auth/react';
import { createNewProject } from '../app/actions/projects';
import Autosuggest, { SuggestionSelectedEventData } from 'react-autosuggest';

const interestsList = [
  "Computer Science", "Engineering", "Mathematics", "Biology", "Chemistry",
  "Physics", "Environmental Science", "Economics", "Business Administration",
  "Marketing", "Finance", "Psychology", "Sociology", "Political Science",
  "Anthropology", "Linguistics", "History", "Philosophy", "Literature",
  "Art History", "Web Development", "Mobile App Development", "Game Development",
  "AI and Machine Learning", "Data Science", "Cybersecurity", "Blockchain",
  "Virtual Reality", "Augmented Reality", "Internet of Things (IoT)", "Robotics",
  "Music Production", "Filmmaking", "Graphic Design", "Animation", "Photography",
  "Writing and Poetry", "Theater and Drama", "Fashion Design", "Visual Arts",
  "Interior Design", "Medicine", "Public Health", "Nutrition", "Sports Science",
  "Mental Health", "Fitness and Exercise", "Nursing", "Education", "Social Work",
  "Human Rights", "Environmental Conservation", "Community Service", "Gender Studies",
  "International Relations", "Public Policy", "Urban Planning", "Startups", "E-commerce",
  "Marketing Strategies", "Business Analytics", "Leadership", "Project Management",
  "Product Management", "Sales Strategies", "Cooking and Baking", "Gardening",
  "Travel and Tourism", "Languages and Culture", "Reading and Book Clubs", "DIY Projects",
  "Video Games", "Board Games", "Astronomy", "Coding Challenges", "Debate and Public Speaking",
  "Hackathons", "Case Competitions", "Science Fairs", "Art Exhibitions", "Cultural Festivals",
  "Research Projects", "Innovation and Creativity", "Sustainability Projects", "Open Source Contributions"
];

const rolesList = [
  "Project Manager", "Software Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Mobile App Developer", "Data Scientist", "Data Analyst", "Database Administrator", "DevOps Engineer",
  "System Architect", "QA Engineer", "UI/UX Designer", "Cybersecurity Specialist", "Machine Learning Engineer",
  "Blockchain Developer", "Embedded Systems Engineer", "Network Engineer", "IT Support Specialist", "Game Developer",
  "Graphic Designer", "Web Designer", "Animation Artist", "Illustrator", "Video Editor", "Sound Designer",
  "Music Composer", "Content Creator", "Copywriter", "Photographer", "Videographer", "Art Director", "Fashion Designer",
  "Interior Designer", "Business Analyst", "Marketing Manager", "Sales Manager", "Product Manager", "Operations Manager",
  "Financial Analyst", "Accountant", "Human Resources Manager", "Customer Service Representative", "Supply Chain Manager",
  "Brand Strategist", "Market Research Analyst", "Research Scientist", "Lab Technician", "Clinical Research Coordinator",
  "Environmental Scientist", "Medical Researcher", "Biologist", "Chemist", "Physicist", "Research Assistant", "Tutor",
  "Educational Content Developer", "Curriculum Designer", "Teacher", "Instructional Designer", "Community Manager",
  "Social Media Manager", "Event Coordinator", "Volunteer Coordinator", "Public Relations Specialist", "Fundraising Coordinator",
  "Advocacy Specialist", "Community Outreach Specialist", "Legal Advisor", "Medical Consultant", "Technical Writer",
  "Ethics Advisor", "Policy Analyst", "Logistics Coordinator", "Quality Assurance Specialist", "Patent Specialist", "Translator",
  "Cultural Consultant", "Innovator", "Strategist", "Mentor", "Facilitator", "Coordinator", "Consultant", "Advisor", "Specialist"
];

const getSuggestions = (list: string[], value: string) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0 ? [] : list.filter(
    item => item.toLowerCase().includes(inputValue)
  );
};

const getSuggestionValue = (suggestion: string) => suggestion;

const renderSuggestion = (suggestion: string) => (
  <div>
    {suggestion}
  </div>
);

export default function NewProjectForm() {
  const { data: session } = useSession();
  const [formState, setFormState] = useState<{ ok: boolean, message: string }>({ ok: true, message: '' });
  const [interest, setInterest] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [roleSuggestions, setRoleSuggestions] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!session || !session.user) {
      setFormState({ ok: false, message: 'User session is not available.' });
      return;
    }
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append('interests', selectedInterests.join(', '));
    formData.append('openRoles', selectedRoles.join(', '));
    const user = {
      name: session.user.name || '',
      email: session.user.email || '',
    };
    try {
      await createNewProject(user, formData);
      setFormState({ ok: true, message: 'Project created successfully!' });
    } catch (error: any) {
      setFormState({ ok: false, message: error.message });
    }
  };

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setSuggestions(getSuggestions(interestsList, value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onRoleSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setRoleSuggestions(getSuggestions(rolesList, value));
  };

  const onRoleSuggestionsClearRequested = () => {
    setRoleSuggestions([]);
  };

  const onChange = (event: ChangeEvent, { newValue }: { newValue: string }) => {
    setInterest(newValue);
  };

  const onRoleChange = (event: ChangeEvent, { newValue }: { newValue: string }) => {
    setRole(newValue);
  };

  const onSuggestionSelected = (event: FormEvent, { suggestion }: SuggestionSelectedEventData<string>) => {
    if (!selectedInterests.includes(suggestion)) {
      setSelectedInterests([...selectedInterests, suggestion]);
      setInterest('');
    }
    event.preventDefault();
  };

  const onRoleSuggestionSelected = (event: FormEvent, { suggestion }: SuggestionSelectedEventData<string>) => {
    if (!selectedRoles.includes(suggestion)) {
      setSelectedRoles([...selectedRoles, suggestion]);
      setRole('');
    }
    event.preventDefault();
  };

  const removeInterest = (interestToRemove: string) => {
    setSelectedInterests(selectedInterests.filter(interest => interest !== interestToRemove));
  };

  const removeRole = (roleToRemove: string) => {
    setSelectedRoles(selectedRoles.filter(role => role !== roleToRemove));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-one-third-width mx-auto border border-gray-600 rounded-3xl bg-gray-100 text-2xl p-10"
    >
      <div className='flex flex-col items-center'>
        <span className='font-bold'>New Project</span>
      </div>
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-2 font-bold">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="p-2 border-2 border-gray-200 rounded-2xl"
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
          className="p-2 border-2 border-gray-200 rounded-2xl"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="mb-2 font-bold">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          className="p-2 border-2 border-gray-200 rounded-2xl"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="masterplan" className="mb-2 font-bold">
          Masterplan:
        </label>
        <textarea
          id="masterplan"
          name="masterplan"
          className="p-2 border-2 border-gray-200 rounded-2xl"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="interests" className="mb-2 font-bold">
          Interests:
        </label>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            value: interest,
            onChange: onChange,
            className: 'p-2 border-2 border-gray-100 rounded-2xl w-full',
            onKeyDown: (e: KeyboardEvent) => {
              if (e.key === 'Enter' && interest && !selectedInterests.includes(interest)) {
                setSelectedInterests([...selectedInterests, interest]);
                setInterest('');
                e.preventDefault();
              }
            }
          }}
          onSuggestionSelected={onSuggestionSelected}
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedInterests.map(interest => (
            <div key={interest} className="flex items-center bg-gray-200 p-2 rounded-2xl">
              {interest}
              <button
                type="button"
                className="ml-2 text-red-500"
                onClick={() => removeInterest(interest)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="openRoles" className="mb-2 font-bold">
          Open Roles:
        </label>
        <Autosuggest
          suggestions={roleSuggestions}
          onSuggestionsFetchRequested={onRoleSuggestionsFetchRequested}
          onSuggestionsClearRequested={onRoleSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            value: role,
            onChange: onRoleChange,
            className: 'p-2 border-2 border-gray-100 rounded-2xl w-full',
            onKeyDown: (e: KeyboardEvent) => {
              if (e.key === 'Enter' && role && !selectedRoles.includes(role)) {
                setSelectedRoles([...selectedRoles, role]);
                setRole('');
                e.preventDefault();
              }
            }
          }}
          onSuggestionSelected={onRoleSuggestionSelected}
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedRoles.map(role => (
            <div key={role} className="flex items-center bg-gray-200 p-2 rounded-2xl">
              {role}
              <button
                type="button"
                className="ml-2 text-red-500"
                onClick={() => removeRole(role)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
          type="submit"
          className="p-3 border-none rounded-2xl bg-gradient-to-r from-customBlue-light via-customBlue-default to-customBlue-dark text-white cursor-pointer w-full"
      >
          Add Project
      </button>
      {formState && !formState.ok && <p className="text-red-500">{formState.message}</p>}
    </form>
  );
}
