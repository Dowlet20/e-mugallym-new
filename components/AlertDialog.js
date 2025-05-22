// import React, { useState } from 'react';
// import { AlertDialog } from './components/AlertDialog';

// function App() {
//   const [isAlertOpen, setIsAlertOpen] = useState(false);

//   const handleConfirm = () => {
//     console.log('Confirmed!');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="space-y-4">
//         <button
//           onClick={() => setIsAlertOpen(true)}
//           className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
//         >
//           Open Alert Dialog
//         </button>

        // <AlertDialog
        //   isOpen={isAlertOpen}
        //   onClose={() => setIsAlertOpen(false)}
        //   title="Confirm Action"
        //   message="Are you sure you want to perform this action? This cannot be undone."
        //   confirmLabel="Yes, Continue"
        //   cancelLabel="No, Cancel"
        //   onConfirm={handleConfirm}
        // />
//       </div>
//     </div>
//   );
// }

// export default App;
// interface AlertDialogProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   message: string;
//   confirmLabel?: string;
//   cancelLabel?: string;
//   onConfirm?: () => void;
// }

import React from 'react';
// title="Confirm Action"
// message="Are you sure you want to perform this action? This cannot be undone."
// confirmLabel="Yes, Continue"
// cancelLabel="No, Cancel"
export default function AlertDialog({
  isOpen,
  onClose,
  onConfirm,
  result
}) {

    if (!isOpen) return null;

  const backdropStyle = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(4px)',
    zIndex: 50
  };

  const containerStyle = {
    position: 'fixed',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    zIndex: 100,
    padding: '1rem',
  };

  const dialogStyle = {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    width: '100%',
    maxWidth: '40rem',
    margin: '0 1rem',
    overflow: 'hidden',
    transform: 'scale(1)',
    zIndex: 200,
    transition: 'transform 0.2s'
  };

  const messageStyle = {
    padding: '1.5rem',
    paddingTop: '1rem',
    color: '#4b5563',
    lineHeight: '1.5'
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.75rem',
    padding: '1.5rem',
    paddingTop: '0'
  };

  const confirmButtonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#3b82f6',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.3rem',
    transition: 'all 0.2s'
  };

  console.log(result);

  return (
    <div style={containerStyle}>
      <div 
        style={backdropStyle}
        onClick={onClose}
      />
      

      <div style={dialogStyle}>
        <div>
          
          <div style={messageStyle}>
            {Object.keys(result).length !==0 && (
                <div>
                    <p>
                        {result?.is_passed ? 
                            "Siz bu testi üstünlikli tabşyrdyňyz! 🎉" : 
                            result==="Bosh" ? "Siz testiň hiç bir soragyny saýlamadyňyz! Testi täzeden tabşyryp bilersiňiz!" :
                            result==="Confirm" ? "Siz bu testi tabşyrmakçymy?":"Siziň balyňyz testi geçmeklige ýetmedi! 😒 Siz bu testi administratoryň rugsady bilen täzeden tabşyryp bilersiňiz!"
                        }
                    </p>
                    <p>
                        {result?.pass_score ? "Geçmeli ball: "+result?.pass_score: ""}
                    </p>
                    <p>
                        {result?.score ? "Siziň balyňyz: "+result?.score: ""}
                    </p>
                    <p>
                      {result?.count_of_questions ? "Sorag san: "+result?.count_of_questions: ""}
                    </p>
                </div>   
            )}
          </div>
          
          <div style={buttonContainerStyle}>
            <button
              onClick={()=> {
                  onConfirm()
                  onClose()
            }}
              style={confirmButtonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}