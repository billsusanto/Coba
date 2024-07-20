'use client';
import { useState, ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import { useSession } from 'next-auth/react';
import { createNewProject } from '../app/actions/projects';
import Autosuggest, { SuggestionSelectedEventData } from 'react-autosuggest';
import { interestsList, rolesList, usCitiesList } from '../app/constants/constants';

const getSuggestions = (list: string[], value: string) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0 ? [] : list.filter(
    item => item.toLowerCase().startsWith(inputValue)
  );
};

const getSuggestionValue = (suggestion: string) => suggestion;

const renderSuggestion = (suggestion: string) => (
  <div className="suggestion">
    {suggestion}
  </div>
);

export default function NewProjectForm() {
  const { data: session } = useSession();
  const [formState, setFormState] = useState<{ ok: boolean, message: string }>({ ok: true, message: '' });
  const [interest, setInterest] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [roleSuggestions, setRoleSuggestions] = useState<string[]>([]);
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
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

  const onLocationSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setLocationSuggestions(getSuggestions(usCitiesList, value));
  };

  const onLocationSuggestionsClearRequested = () => {
    setLocationSuggestions([]);
  };

  const onChange = (event: ChangeEvent, { newValue }: { newValue: string }) => {
    setInterest(newValue);
  };

  const onRoleChange = (event: ChangeEvent, { newValue }: { newValue: string }) => {
    setRole(newValue);
  };

  const onLocationChange = (event: ChangeEvent, { newValue }: { newValue: string }) => {
    setLocation(newValue);
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

  const onLocationSuggestionSelected = (event: FormEvent, { suggestion }: SuggestionSelectedEventData<string>) => {
    setLocation(suggestion);
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
        <Autosuggest
          suggestions={locationSuggestions}
          onSuggestionsFetchRequested={onLocationSuggestionsFetchRequested}
          onSuggestionsClearRequested={onLocationSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            value: location,
            onChange: onLocationChange,
            className: 'p-2 border-2 border-gray-100 rounded-2xl w-full',
            onKeyDown: (e: KeyboardEvent) => {
              if (e.key === 'Enter' && location) {
                setLocation(location);
                e.preventDefault();
              }
            }
          }}
          onSuggestionSelected={onLocationSuggestionSelected}
          theme={{
            suggestionsContainer: 'suggestions-container',
            suggestionsList: 'suggestions-list',
            suggestion: 'suggestion',
            suggestionHighlighted: 'suggestion-highlighted'
          }}
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
          theme={{
            suggestionsContainer: 'suggestions-container',
            suggestionsList: 'suggestions-list',
            suggestion: 'suggestion',
            suggestionHighlighted: 'suggestion-highlighted'
          }}
        />
        <div className="flex flex-wrap gap-2 mt-2 overflow-y-auto">
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
          theme={{
            suggestionsContainer: 'suggestions-container',
            suggestionsList: 'suggestions-list',
            suggestion: 'suggestion',
            suggestionHighlighted: 'suggestion-highlighted'
          }}
        />
        <div className="flex flex-wrap gap-2 mt-2 overflow-y-auto">
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
