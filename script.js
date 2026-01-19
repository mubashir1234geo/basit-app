document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    
    // The APK file path
    const apkPath = './apk/Mushtaq_store.apk';
    const fileName = 'Mushtaq_store.apk';

    downloadBtn.addEventListener('click', () => {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = apkPath;
        link.download = fileName;
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Optional: Feedback on button
        const originalText = downloadBtn.querySelector('.btn-text').textContent;
        downloadBtn.querySelector('.btn-text').textContent = 'Starting Download...';
        
        setTimeout(() => {
            downloadBtn.querySelector('.btn-text').textContent = originalText;
        }, 3000);
    });
});