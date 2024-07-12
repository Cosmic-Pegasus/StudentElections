import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'flowbite-react';

const Results = () => {
  const [results, setResults] = useState({ boys: {}, girls: {} });
  const [highestVotesCandidates, setHighestVotesCandidates] = useState({ boys: {}, girls: {} });

  useEffect(() => {
    const fetchResults = async () => {
      const response = await axios.get('http://localhost:5000/results');
      const data = response.data;
      setResults(data);
      findHighestVotesCandidates(data);
    };
    fetchResults();
  }, []);

  const findHighestVotesCandidates = (data) => {
    let highestBoys = {};
    let highestGirls = {};
    
    // Find highest votes for boys
    Object.keys(data.boys).forEach(position => {
      let highest = { candidate: '', count: 0 };
      data.boys[position].forEach(candidate => {
        if (candidate.count > highest.count) {
          highest = candidate;
        }
      });
      highestBoys[position] = highest;
    });

    // Find highest votes for girls
    Object.keys(data.girls).forEach(position => {
      let highest = { candidate: '', count: 0 };
      data.girls[position].forEach(candidate => {
        if (candidate.count > highest.count) {
          highest = candidate;
        }
      });
      highestGirls[position] = highest;
    });

    setHighestVotesCandidates({ boys: highestBoys, girls: highestGirls });
  };

  const renderTable = (sectionResults, sectionName, highestVotes) => (
    <div className='my-10'>
      <h2 className='quicksand-bold text-4xl my-4 text-white'>{sectionName} Results</h2>
      {Object.keys(sectionResults).map((position, index) => (
        <div key={index} className='my-16'>
          <h3 className='quicksand-bold text-2xl my-2 text-amber-400'>{position}</h3>
          <Table className="dark:bg-gray-800 py-8">
            <Table.Head className="bg-gray-900">
              <Table.HeadCell className="bg-gray-700 text-white">Candidate</Table.HeadCell>
              <Table.HeadCell className="bg-gray-700 text-white">Votes</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-gray-700">
              {sectionResults[position].map((candidate, idx) => (
                <Table.Row key={idx} className={candidate.candidate === highestVotes[position].candidate ? 'bg-yellow-500' : 'bg-gray-800'}>
                  <Table.Cell className="bg-gray-900 text-white">{candidate.candidate}</Table.Cell>
                  <Table.Cell className="bg-gray-900 text-white">{candidate.count}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <div className="text-white text-lg mt-6 urbanist-bold">
            Highest Votes: {highestVotes[position].candidate} ({highestVotes[position].count} votes)
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4">
      <h1 className="raleway-bold text-7xl text-center my-8 text-amber-400">Election Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderTable(results.boys, "Boys", highestVotesCandidates.boys)}
        {renderTable(results.girls, "Girls", highestVotesCandidates.girls)}
      </div>
    </div>
  );
};

export default Results;
