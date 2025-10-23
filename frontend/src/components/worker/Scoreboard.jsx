import { useState, useEffect, useContext } from 'react';
import { getWorkers } from '../../services/workerService';
import appContext from '../../context/AppContext';
import Card from '../common/Card';
import Spinner from '../common/Spinner';

const Scoreboard = ({ department }) => {
  const [workers, setWorkers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { subdomain } = useContext(appContext);

  useEffect(() => {
    const loadWorkers = async () => {
      if (!subdomain || subdomain == 'main') {
        return;
      }

      setIsLoading(true);
      try {
        // Get all workers
        const workersData = await getWorkers({ subdomain });
        
        // Filter workers by department and sort by total points
        const filteredWorkers = workersData
          .filter(worker => worker.department === department)
          .sort((a, b) => (b.totalPoints || 0) - (a.totalPoints || 0));
        
        setWorkers(filteredWorkers);
      } catch (error) {
        console.error('Failed to load scoreboard:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadWorkers();
  }, [department]);
  
  if (isLoading) {
    return (
      <Card
      title={
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
          </svg>
          Department Scoreboard
        </div>
      }
    >
        <div className="flex justify-center py-8">
          <Spinner />
        </div>
      </Card>
    );
  }
  
  if (workers.length === 0) {
    return (
      <Card
      title={
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
          </svg>
          Department Scoreboard
        </div>
      }
    >
        <p className="text-center py-6 text-gray-500">
          No workers found in this department.
        </p>
      </Card>
    );
  }
  
  return (
    <Card
    title={
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
        Department Scoreboard
      </div>
    }
  >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Points
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {workers.map((worker, index) => (
              <tr key={worker._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img 
                        className="h-10 w-10 rounded-full object-cover" 
                        src={worker.photo ? worker.photo : `https://ui-avatars.com/api/?name=${encodeURIComponent(worker.name)}`}

                        alt={worker.name} 
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {worker.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {worker.totalPoints || 0}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Scoreboard;