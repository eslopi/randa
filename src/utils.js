// يمكن استخدام هذا الملف لتخزين الدوال المساعدة التي يمكن استخدامها في المشروع
export const formatDate = (date) => {
    return new Date(date).toLocaleString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};