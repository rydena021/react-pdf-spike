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
      console.log('response:', response.data.Location);

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
// import React, { Component } from 'react';
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


// class MyApp extends Component {
//   state = {
//     numPages: null,
//     pageNumber: 1,
//   }

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   }

//   render() {
//     const { pageNumber, numPages } = this.state;

//     return (
//       <div>
//         <Document
//           file={'https://master.tus.io/files/492699437a4a42a11201d77f210b54b4+XQIejXWE.1EiUblqTlmEGpY0NlfGzDncFNKK9T0wD7.1pCxofiQYaVpX3gFyvMZBsEBV_8Sqn47qIF1BKNrGiJkA42VW8Hqe8GbEFc17dSYtc65kkEe8doxXDiujv0nk'}
//           onLoadSuccess={this.onDocumentLoadSuccess}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>Page {pageNumber} of {numPages}</p>
//       </div>
//     );
//   }
// }

// export default MyApp
// // import React from 'react';
// // import axios from 'axios'
// // // This is one of our simplest components
// // // It doesn't have local state, so it can be a function component.
// // // It doesn't dispatch any redux actions or display any part of redux state
// // // or even care what the redux state is, so it doesn't need 'connect()'

// // class AboutPage extends React.Component {
// //   componentDidMount() {
// //     axios(`/api/upload/pdf`, {
// //       method: 'GET',
// //       responseType: 'blob' //Force to receive data in a Blob Format
// //     })
// //       .then(response => {
// //         //Create a Blob from the PDF Stream
// //         const file = new Blob(
// //           [response.data],
// //           { type: 'application/pdf' });
// //         //Build a URL from the file
// //         const fileURL = URL.createObjectURL(file);
// //         //Open the URL on new Window
// //         window.open(fileURL);
// //       })
// //       .catch(error => {
// //         console.log(error);
// //       });
// //   }
// //   render() {
// //     return(
// //       <div>
// //         <div>
// //           <p>
// //             This about page is for anyone to read!
// //           </p>
// //         </div>
// //       </div>
// //     )
// //   }
// // };

// // export default AboutPage;
