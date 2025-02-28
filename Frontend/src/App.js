import React from 'react';
import './App.css';
import Header from './components/Header';
import GridPanel from './components/GridPanel';

// const useStyles = makeStyles((theme) => ({
//   '@global': {
//     '*::-webkit-scrollbar': {
//       width: '0.4em',
//       height: '0.4em',
//     },
//     '*::-webkit-scrollbar-track': {
//       '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
//     },
//     '*::-webkit-scrollbar-thumb': {
//       backgroundColor: '#6D7183',
//       outline: '1px solid slategrey',
//     },
//   },
//   mainBackground: {
//     background: theme.palette.primary.main,
//     height: '100vh',
//     width: '100vw',
//     overflow: 'hidden',
//   },
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 140,
//     width: 100,
//   },
// }));
// const App = () => {
//   console.log('theme', theme);
//   const classes = useStyles();
//   return (
//     <div className={classes.mainBackground}>
//       <Router basename={`/${1805793}`}>
//         <Route exact path="/" component={CollectorDashboard} />
//       </Router>
//     </div>
//   );
// };
//

// const useStyles = makeStyles({
//   mainBackground: {
//     backgroundColor: "coral" 
//   }
// })

const App = () => {
  return (
    <div>
      <Header/>
      <GridPanel/>
    </div>
  )
}


export default App;
