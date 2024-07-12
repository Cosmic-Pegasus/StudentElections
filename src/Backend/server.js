import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// File path for the JSON file
const filePath = './votes.json';

// Initialize the JSON file with candidates if it doesn't exist
if (!fs.existsSync(filePath)) {
  const initialVotes = {
    boys: {
      "Head Boy/Girl": [
        { "candidate": "Bharat", "count": 0, "image": "/images/bharat.jpg" },
        { "candidate": "Logan Walker", "count": 0, "image": "/images/logan_walker.jpg" },
        { "candidate": "Captain Price", "count": 0, "image": "/images/captain_price.jpg" }
      ],
      "Sports Incharge": [
        { "candidate": "LeBron James", "count": 0, "image": "/images/lebron_james.jpg" },
        { "candidate": "Cristiano Ronaldo", "count": 0, "image": "/images/cristiano_ronaldo.jpg" },
        { "candidate": "Roger Federer", "count": 0, "image": "/images/roger_federer.jpg" }
      ],
      "Co-Curricular Incharge": [
        { "candidate": "Travis Scott", "count": 0, "image": "/images/travis_scott.jpg" },
        { "candidate": "The Weeknd", "count": 0, "image": "/images/the_weeknd.jpg" },
        { "candidate": "RIP Juice WRLD", "count": 0, "image": "/images/juice_wrld.jpg" }
      ],
      "Discipline Incharge": [
        { "candidate": "MS Dhoni", "count": 0, "image": "/images/ms_dhoni.jpg" },
        { "candidate": "Narendra Modi", "count": 0, "image": "/images/narendra_modi.jpg" },
        { "candidate": "Akshay Kumar", "count": 0, "image": "/images/akshay_kumar.jpg" }
      ]
    },
    girls: {
      "Head Boy/Girl": [
        { "candidate": "Princess Rapunzel", "count": 0, "image": "/images/princess_rapunzel.jpeg" },
        { "candidate": "Princess Belle", "count": 0, "image": "/images/princess_belle.jpeg" },
        { "candidate": "Princess Mulan", "count": 0, "image": "/images/princess_mulan.jpeg" }
      ],
      "Sports Incharge": [
        { "candidate": "Sania Nehwal", "count": 0, "image": "/images/sania_nehwal.jpg" },
        { "candidate": "Mithali Raj", "count": 0, "image": "/images/mithali_raj.jpg" },
        { "candidate": "Sabrina Ionescu", "count": 0, "image": "/images/sabrina_ionescu.jpg" }
      ],
      "Co-Curricular Incharge": [
        { "candidate": "Akshan", "count": 0, "image": "/images/akshan.jpg" },
        { "candidate": "Loretta Lynch", "count": 0, "image": "/images/loretta_lynch.jpg" },
        { "candidate": "Jennet Yellen", "count": 0, "image": "/images/janet_yellen.jpg" }
      ],
      "Discipline Incharge": [
        { "candidate": "Indira Gandhi", "count": 0, "image": "/images/indira_gandhi.jpg" },
        { "candidate": "Sonia Gandhi", "count": 0, "image": "/images/sonia_gandhi.jpg" },
        { "candidate": "Angella Markei", "count": 0, "image": "/images/angella_markei.jpg" }
      ]
    }
  };

  fs.writeFileSync(filePath, JSON.stringify(initialVotes, null, 2));
}

// Read votes from the JSON file
const readVotes = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Write votes to the JSON file
const writeVotes = (votes) => {
  fs.writeFileSync(filePath, JSON.stringify(votes, null, 2));
};

// Routes
app.post('/vote', (req, res) => {
  const { section, position, candidate } = req.body;
  const votes = readVotes();

  if (!votes[section] || !votes[section][position]) {
    return res.status(400).json({ error: 'Invalid section or position' });
  }

  const positionVotes = votes[section][position];
  const candidateVote = positionVotes.find(v => v.candidate === candidate);

  if (candidateVote) {
    candidateVote.count += 1;
    writeVotes(votes);
    res.status(200).json(candidateVote);
  } else {
    res.status(400).json({ error: 'Candidate not found' });
  }
});

app.get('/results', (req, res) => {
  const votes = readVotes();
  res.status(200).json(votes);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
