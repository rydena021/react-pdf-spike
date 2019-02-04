import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      file: null
    };
  }

  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`/test-upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      // handle your response;
    }).catch(error => {
      // handle your error
    });
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files });
  }

  render() {
    return (
      <form onSubmit={this.submitFile}>
        <input label='upload file' type='file' onChange={this.handleFileUpload} />
        <button type='submit'>Send</button>
      </form>
    );
  }
}

export default FileUpload;

// /* eslint-disable */
// const React = require('react')
// const Uppy = require('@uppy/core')
// const Tus = require('@uppy/tus')
// const GoogleDrive = require('@uppy/google-drive')
// const { Dashboard, DashboardModal, DragDrop, ProgressBar } = require('@uppy/react')

// import './style.min.css';

// class Uploader extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       showInlineDashboard: false,
//       open: false
//     }

//     this.uppy = new Uppy({ id: 'uppy1', autoProceed: true, debug: true })
//       .use(Tus, { endpoint: 'https://master.tus.io/files/' })
//       .use(GoogleDrive, { serverUrl: 'https://companion.uppy.io' })

//     this.uppy2 = new Uppy({ id: 'uppy2', autoProceed: false, debug: true })
//       .use(Tus, { endpoint: 'https://master.tus.io/files/' })

//     this.handleModalClick = this.handleModalClick.bind(this)
//   }

//   componentWillUnmount() {
//     this.uppy.close()
//     this.uppy2.close()
//   }

//   handleModalClick() {
//     this.setState({
//       open: !this.state.open
//     })
//   }

//   render() {
//     const { showInlineDashboard } = this.state
//     return (
//       <div>
//         <h1>React Examples</h1>

//         <h2>Inline Dashboard</h2>
//         <label>
//           <input
//             type="checkbox"
//             checked={showInlineDashboard}
//             onChange={(event) => {
//               this.setState({
//                 showInlineDashboard: event.target.checked
//               })
//             }}
//           />
//           Show Dashboard
//         </label>
//         {showInlineDashboard && (
//           <Dashboard
//             uppy={this.uppy}
//             plugins={['GoogleDrive']}
//             metaFields={[
//               { id: 'name', name: 'Name', placeholder: 'File name' }
//             ]}
//           />
//         )}

//         <h2>Modal Dashboard</h2>
//         <div>
//           <button onClick={this.handleModalClick}>
//             {this.state.open ? 'Close dashboard' : 'Open dashboard'}
//           </button>
//           <DashboardModal
//             uppy={this.uppy2}
//             open={this.state.open}
//             target={document.body}
//             onRequestClose={() => this.setState({ open: false })}
//           />
//         </div>

//         <h2>Drag Drop Area</h2>
//         <DragDrop
//           uppy={this.uppy}
//           locale={{
//             strings: {
//               chooseFile: 'Boop a file',
//               orDragDrop: 'or yoink it here'
//             }
//           }}
//         />

//         <h2>Progress Bar</h2>
//         <ProgressBar
//           uppy={this.uppy}
//           hideAfterFinish={false}
//         />
//       </div>
//     )
//   }
// }

// export default Uploader
