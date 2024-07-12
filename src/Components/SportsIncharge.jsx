import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { StudentCard } from './StudentCard';

const SportsIncharge = () => {
  const [boysCandidates, setBoysCandidates] = useState([]);
  const [girlsCandidates, setGirlsCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [message, setMessage] = useState('');
  const [hasVotedBoys, setHasVotedBoys] = useState(false);
  const [hasVotedGirls, setHasVotedGirls] = useState(false);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/results');
        setBoysCandidates(response.data.boys['Sports Incharge']);
        setGirlsCandidates(response.data.girls['Sports Incharge']);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };
    fetchCandidates();
  }, []);

  const handleVote = async () => {
    if (selectedCandidate && selectedSection) {
      try {
        await axios.post('http://localhost:5000/vote', {
          section: selectedSection,
          position: 'Sports Incharge',
          candidate: selectedCandidate,
        });
        setMessage(`Last Voted for ${selectedCandidate}`);
        setConfirmation(false);
        if (selectedSection === 'boys') {
          setHasVotedBoys(true);
        } else if (selectedSection === 'girls') {
          setHasVotedGirls(true);
        }
        setSelectedCandidate('');
        setSelectedSection('');
      } catch (error) {
        setMessage('Voting failed');
      }
    } else {
      setMessage('Please select a candidate');
    }
  };

  const handleCandidateSelect = (candidate, section) => {
    if ((section === 'boys' && !hasVotedBoys) || (section === 'girls' && !hasVotedGirls)) {
      setSelectedCandidate(candidate);
      setSelectedSection(section);
      setConfirmation(true);
    }
  };

  const handleCancelVote = () => {
    setSelectedCandidate('');
    setSelectedSection('');
    setConfirmation(false);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <h2 className='raleway-bold text-5xl section-heading text-animation'>Sports Incharge</h2>
      {!confirmation && (
        <>
          <div className='w-screen container flex flex-col gap-10 justify-center items-center'>
            <h3 className='quicksand text-2xl section-sub-heading'>Boy Candidates</h3>
            <div className='w-screen container flex gap-10 justify-center items-center flex-row'>
              {boysCandidates.map((candidate, index) => (
                <StudentCard
                  key={index}
                  name={candidate.candidate}
                  image={candidate.image}
                  pressVote={() => handleCandidateSelect(candidate.candidate, 'boys')}
                  disabled={hasVotedBoys}
                />
              ))}
            </div>
          </div>
          <div className='w-screen container flex flex-col gap-10 justify-center items-center'>
            <h3 className='quicksand text-2xl section-sub-heading'>Girl Candidates</h3>
            <div className='w-screen container flex gap-10 justify-center items-center flex-row'>
              {girlsCandidates.map((candidate, index) => (
                <StudentCard
                  key={index}
                  name={candidate.candidate}
                  image={candidate.image}
                  pressVote={() => handleCandidateSelect(candidate.candidate, 'girls')}
                  disabled={hasVotedGirls}
                />
              ))}
            </div>
          </div>
        </>
      )}
      {message && <p className='text-2xl bottom-animation quicksand-bold text-gray-100'>{message}</p>}
      <Modal show={confirmation} size="md" onClose={handleCancelVote} popup className='bg-transparent tab-glass fadeq-animation'>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 quicksand">
              Are you sure to vote for: {selectedCandidate}
            </h3>
            <div className="flex justify-center gap-4">
              <Button className='raleway' color="success" onClick={handleVote}>Confirm</Button>
              <Button className='raleway' color="failure" onClick={handleCancelVote}>Cancel</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SportsIncharge;
