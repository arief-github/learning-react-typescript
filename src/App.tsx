import './App.css'
import { useState } from 'react';
import { CheckList } from './components/Checklist';
import { IdValue } from './types/props';

function App() {
  const [checkedId, setCheckedId] = useState<IdValue | null>(null)

  const handleCheckedIsChange = (newCheckedIds: IdValue[]) => {
    const newCheckedIdArr = newCheckedIds.filter((id) => id !== checkedId)

    if (newCheckedIdArr.length === 1) {
      setCheckedId(newCheckedIdArr[0])
    } else {
      setCheckedId(null)
    }
  }

  return (
    <div className="App">
      <CheckList
        id='id'
        primary='name'
        secondary='role'
        data={[
          { id: 1, name: 'Lucy', role: 'Manager'},
          { id: 2, name: 'Bob', role: 'Developer'},
          { id: 3, name: 'Jane', role: 'Designer'},
          { id: 4, name: 'John', role: 'Developer'},
          { id: 5, name: 'Doe', role: 'Manager'},
        ]}
        style={{ width: '300px', maxHeight: '380px', overflowY: 'auto' }}
        // renderItem={(item) => (
        //   <li key={item.id} className="bg-white p-4 border-b-2">
        //     <div className='text-xl text-slate-800 pb-1'>
        //       {item.name}
        //     </div>
        //     <div className='text-slate-500'>{item.role}</div>
        //   </li>
        // )}
        checkedIds={checkedId === null ? [] : [checkedId]}
        onCheckedIdsChange={handleCheckedIsChange} 
      />
    </div>
  )

}

export default App;