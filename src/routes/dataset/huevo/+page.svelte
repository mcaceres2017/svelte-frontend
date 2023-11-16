<script lang=ts>
    import { FileDropzone } from '@skeletonlabs/skeleton';
    import Papa from 'papaparse';

    let selectedFile;
    let csvContent;
    let parsedData = [];
    let oidArray = [];

    const handleFileChange = async (event) => {
        const fileInput = event.target;
        if (fileInput.files.length > 0) {
            selectedFile = fileInput.files[0];

            // Read the content of the selected file
            try {
                csvContent = await readFileContent(selectedFile);
                Papa.parse(csvContent, {
                    header: true, // Assumes the first row is a header
                    dynamicTyping: true,
                    complete: (result) => {
                        parsedData = result.data;

                        // Extract values of "oid" property into oidArray
                        oidArray = parsedData.map((item) => item.oid).filter(Boolean);
                        oidArray = JSON.stringify(oidArray, null, 2);
                        console.log('OID Array:', oidArray);
                    },
                    error: (error) => {
                        console.error('Error parsing CSV:', error.message);
                    },
                });
            } catch (error) {
                console.error('Error reading file content:', error);
            }
        }
    };

    const readFileContent = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                resolve(event.target.result);
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsText(file);
        });
    };

    const downloadTxtFile = () => {
        const blob = new Blob([oidArray], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'oidArray.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
</script>

<FileDropzone name="files" accept=".csv" multiple="false" on:change={handleFileChange}>
    <svelte:fragment slot="lead">(icon)</svelte:fragment>
    <svelte:fragment slot="message">(message)</svelte:fragment>
    <svelte:fragment slot="meta">(meta)</svelte:fragment>
</FileDropzone>

{#if oidArray.length > 0}
    <div>
        <h2>OID Array:</h2>
        <pre>{oidArray}</pre>
        <button on:click={downloadTxtFile}>Download OID Array</button>
    </div>
{/if}
