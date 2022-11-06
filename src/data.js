const algorithms = [
    {
        id:1,
        name:"SGEMM",
        expansion:"Single Precision General Matrix Multiplication",
        description: "The single-precision general matrix-multiplication (SGEMM) computes the following:",
        formula:"./assets/images/sgemm_formula.png",
        executions: [
            {
              id:1,
              framework:"Base",
              src:"./assets/images/sgemm/SGEMM_Base_Small.png"
            },
            {
                id:2,
                framework:"OpenMP",
                src:"./assets/images/sgemm/SGEMM_OpenMP_Small.png"
            },
            {
                id:3,
                framework:"OpenCL",
                src:"./assets/images/sgemm/SGEMM_OpenCL_128x160.png"
            },
            {
                id:4,
                framework:"CUDA",
                src:"./assets/images/sgemm/SGEMM_CUDA_Small.png"
            },
            {
                id:5,
                framework:"OpenACC",
                src:"./assets/images/sgemm/SGEMM_OpenACC_Small.png"
            }
        ]
    },
    {
        id:2,
        name:"FFT",
        expansion:"Fast Fourier Algorithm(FFT)",
        description: "In layman's terms, the Fourier Transform is a mathematical operation that changes the domain (x-axis) of a signal from time to frequency. The latter is particularly useful for decomposing a signal consisting of multiple pure frequencies.",
        formula:"./assets/images/fft_formula.png",
        executions: [
            {
              id:1,
              framework:"Base",
              src:"./assets/images/fft/FFT_base.png"
            },
            {
                id:2,
                framework:"OpenMP",
                src:"./assets/images/fft/FFT_OpenMp.png"
            },
            {
                id:3,
                framework:"OpenCL",
                src:""
            },
            {
                id:4,
                framework:"CUDA",
                src:"./assets/images/fft/FFT_Cuda.png"
            },
            {
                id:5,
                framework:"OpenACC",
                src:"./assets/images/fft/FFT_OpenACC.png"
            }
        ]
    },
    {
        id:3,
        name:"SAD",
        expansion:"Sum of Absolute Differences",
        description: "In digital image processing, the sum of absolute differences (SAD) is a measure of the similarity between image blocks. It is calculated by taking the absolute difference between each pixel in the original block and the corresponding pixel in the block being used for comparison.",
        formula:"./assets/images/sad_formula.png",
        executions: [
            {
              id:1,
              framework:"Base",
              src:"./assets/images/sad/SAD_Base_Large.png"
            },
            {
                id:2,
                framework:"OpenMP",
                src:"./assets/images/sad/SAD_OpenMP_Large.png"
            },
            {
                id:3,
                framework:"OpenCL",
                src:"./assets/images/sad/SAD_OpenCL_Large.png"
            },
            {
                id:4,
                framework:"CUDA",
                src:"./assets/images/sad/SAD_CUDA_Large.png"
            },
            {
                id:5,
                framework:"OpenACC",
                src:"./assets/images/sad/SAD_openacc_Large.png"
            }
        ]
    }
]

export function getalgorithms() {
    return algorithms;
}

// export function getProjectData(domain) {
//     return projects_data.find(
//         project => project.domain === domain
//     );
// }