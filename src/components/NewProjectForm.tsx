"use client";
import { useState, FormEvent, KeyboardEvent } from "react";
import { useSession } from "next-auth/react";
import { createNewProject } from "../app/actions/projects";
import Autosuggest, { SuggestionSelectedEventData } from "react-autosuggest";
import {
  interestsList,
  rolesList,
  usCitiesList,
} from "../app/constants/constants";

const getSuggestions = (list: string[], value: string) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0
    ? []
    : list.filter((item) => item.toLowerCase().startsWith(inputValue));
};

const getSuggestionValue = (suggestion: string) => suggestion;

const renderSuggestion = (suggestion: string) => (
  <div className="suggestion">{suggestion}</div>
);

export default function NewProjectForm() {
  const { data: session } = useSession();
  const [formState, setFormState] = useState<{ ok: boolean; message: string }>({
    ok: true,
    message: "",
  });
  const [interest, setInterest] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [roleSuggestions, setRoleSuggestions] = useState<string[]>([]);
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!session || !session.user) {
      setFormState({ ok: false, message: "User session is not available." });
      return;
    }
    if (selectedInterests.length === 0) {
      setFormState({
        ok: false,
        message: "Please add at least one interest tag.",
      });
      return;
    }
    if (selectedRoles.length === 0) {
      setFormState({
        ok: false,
        message: "Please add at least one open role.",
      });
      return;
    }
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("interests", selectedInterests.join(", "));
    formData.append("openRoles", selectedRoles.join(", "));
    formData.append("location", location);
    const user = {
      name: session.user.name || "",
      email: session.user.email || "",
    };
    try {
      await createNewProject(user, formData);
      setFormState({ ok: true, message: "Project created successfully!" });
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

  const onLocationSuggestionsFetchRequested = ({
    value,
  }: {
    value: string;
  }) => {
    setLocationSuggestions(getSuggestions(usCitiesList, value));
  };

  const onLocationSuggestionsClearRequested = () => {
    setLocationSuggestions([]);
  };

  const onChange = (
    event: React.FormEvent<HTMLElement>,
    { newValue }: { newValue: string }
  ) => {
    setInterest(newValue);
  };

  const onRoleChange = (
    event: React.FormEvent<HTMLElement>,
    { newValue }: { newValue: string }
  ) => {
    setRole(newValue);
  };

  const onLocationChange = (
    event: React.FormEvent<HTMLElement>,
    { newValue }: { newValue: string }
  ) => {
    setLocation(newValue);
  };

  const onSuggestionSelected = (
    event: FormEvent,
    { suggestion }: SuggestionSelectedEventData<string>
  ) => {
    if (!selectedInterests.includes(suggestion) && selectedInterests.length < 3) {
      setSelectedInterests([...selectedInterests, suggestion]);
      setInterest("");
    }
    event.preventDefault();
  };

  const onRoleSuggestionSelected = (
    event: FormEvent,
    { suggestion }: SuggestionSelectedEventData<string>
  ) => {
    if (!selectedRoles.includes(suggestion) && selectedRoles.length < 3) {
      setSelectedRoles([...selectedRoles, suggestion]);
      setRole("");
    }
    event.preventDefault();
  };

  const onLocationSuggestionSelected = (
    event: FormEvent,
    { suggestion }: SuggestionSelectedEventData<string>
  ) => {
    setLocation(suggestion);
    event.preventDefault();
  };

  const removeInterest = (interestToRemove: string) => {
    setSelectedInterests(
      selectedInterests.filter((interest) => interest !== interestToRemove)
    );
  };

  const removeRole = (roleToRemove: string) => {
    setSelectedRoles(selectedRoles.filter((role) => role !== roleToRemove));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-half-screen-width mx-auto bg-white text-2xl p-10"
    >
      <div className="flex flex-col items-center">
        <span className="font-bold text-5xl">Create Project</span>
      </div>
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-2 font-bold">
          Project Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Your Project Title..."
          required
          className="p-3 border-2 border-gray-200 rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="mb-2 font-bold">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Description your project..."
          required
          className="p-3 border-2 border-gray-200 rounded-lg"
          rows={3}
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
            className: "p-3 border-2 border-gray-100 rounded-lg w-full",
            placeholder: "City, State, Country",
            onKeyDown: (e: KeyboardEvent) => {
              if (e.key === "Enter" && location) {
                setLocation(location);
                e.preventDefault();
              }
            },
          }}
          onSuggestionSelected={onLocationSuggestionSelected}
          theme={{
            suggestionsContainer: "suggestions-container",
            suggestionsList: "suggestions-list",
            suggestion: "suggestion",
            suggestionHighlighted: "suggestion-highlighted",
          }}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="masterplan" className="mb-2 font-bold">
          Masterplan:
        </label>
        <textarea
          id="masterplan"
          name="masterplan"
          placeholder="Only members of your project can see this..."
          required
          className="p-2 border-2 border-gray-200 rounded-lg"
          rows={3}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="interests" className="mb-2 font-bold">
          Tags:
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
            className: "p-2 border-2 border-gray-100 rounded-lg w-full",
            placeholder: "Tags to categorize your projects...",
            onKeyDown: (e: KeyboardEvent) => {
              if (
                e.key === "Enter" &&
                interest &&
                !selectedInterests.includes(interest) &&
                selectedInterests.length < 3
              ) {
                setSelectedInterests([...selectedInterests, interest]);
                setInterest("");
                e.preventDefault();
              }
            },
          }}
          onSuggestionSelected={onSuggestionSelected}
          theme={{
            suggestionsContainer: "suggestions-container",
            suggestionsList: "suggestions-list",
            suggestion: "suggestion",
            suggestionHighlighted: "suggestion-highlighted",
          }}
        />
        <div className="flex flex-wrap gap-2 mt-2 overflow-y-auto">
          {selectedInterests.map((interest) => (
            <div
              key={interest}
              className="flex items-center bg-white border border-black p-4 rounded-full"
            >
              {interest}
              <button
                type="button"
                className="ml-2 text-black"
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
            className: "p-2 border-2 border-gray-100 rounded-lg w-full",
            placeholder: "Open roles for your project...",
            onKeyDown: (e: KeyboardEvent) => {
              if (
                e.key === "Enter" &&
                role &&
                !selectedRoles.includes(role) &&
                selectedRoles.length < 3
              ) {
                setSelectedRoles([...selectedRoles, role]);
                setRole("");
                e.preventDefault();
              }
            },
          }}
          onSuggestionSelected={onRoleSuggestionSelected}
          theme={{
            suggestionsContainer: "suggestions-container",
            suggestionsList: "suggestions-list",
            suggestion: "suggestion",
            suggestionHighlighted: "suggestion-highlighted",
          }}
        />
        <div className="flex flex-wrap gap-2 mt-2 overflow-y-auto">
          {selectedRoles.map((role) => (
            <div
              key={role}
              className="flex items-center bg-white border border-black p-4 rounded-full"
            >
              {role}
              <button
                type="button"
                className="ml-2 text-black"
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
        className="p-3 border-none rounded-lg bg-gray-800 text-white cursor-pointer w-full"
      >
        Add Project
      </button>
      {formState && (
        <p className={formState.ok ? "text-green-500" : "text-red-500"}>
          {formState.message}
        </p>
      )}
    </form>
  );
}
